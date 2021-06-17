import React, {useState, useEffect, createContext} from 'react'
import SearchUser from './SearchUser'
import {FaSearch} from 'react-icons/fa'
import useDebounce from './useDebounce'

const UserContext = createContext()

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const debounceValue = useDebounce(inputValue)
    
    const fetchGithubUsers = async()=>{
    const API_URL = `https://api.github.com/search/users?q=${debounceValue}+in:user`

            try{
                setLoading(true)
                const response = await fetch(API_URL)
                const githubData = await response.json()
                console.log(githubData)
                if(githubData.message){
                    throw Error(githubData.message)
                }
                else{
                    const githubUsers = githubData.items
                    setUsers(githubUsers)
                    setLoading(false)
                }
              }
            catch(error){
                setError(`Error fetching: ${error.message}`)
                setLoading(false)
        }
        }

 
    useEffect(()=>{
        if(debounceValue.length>0){
            fetchGithubUsers(); 
        }
       
    }, [debounceValue])

    return (
        <>
        <div>
        <h1 className="header">Github User Searcher</h1>
        <div className ="input-container">
        <input type="text" 
        onChange={(e)=>setInputValue(e.target.value)}
        value={inputValue}
        />
        <FaSearch className="search-icon"/>
        </div>
        </div>
        {loading && <h2>Loading ...</h2>}
        {error  && <h2>{error}</h2>}
        <div className="container">
        <UserContext.Provider value ={{users}}>
        <SearchUser/>
        </UserContext.Provider >
        </div>
        </>
    )
}

export default Users
export {UserContext}
