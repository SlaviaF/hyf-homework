import React, {useState, useEffect, createContext} from 'react'
import SearchUser from './SearchUser'
import {FaSearch} from 'react-icons/fa'
const UserContext = createContext()


const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
   const fetchGithubApi = async(inputValue)=>{
    const API_URL = `https://api.github.com/search/users?q=${inputValue}+in:user`

        try{
            setLoading(true)
            const response = await fetch(API_URL)
            if(!response.ok){
                throw Error('No data could be fetched from the url')
            }

            const githubData = await response.json()
            const githubUsers = githubData.items
            setUsers(githubUsers)
            setLoading(false)
          }
        catch(error){
            setError(`Error fetching: ${error.message}`)
            setLoading(false)
        }
        
    }
 
    useEffect(()=>{
        fetchGithubApi(); 
    }, [])

    return (
        <>
        <div>
        <h1 className="header">Github User Searcher</h1>
        <div className ="input-container">
        <input type="text" 
        onInput={(e)=>fetchGithubApi(e.target.value)}
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
