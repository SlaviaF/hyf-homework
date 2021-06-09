import React, {useContext} from 'react'
import {UserContext} from './Users'

const SearchUser = () => {
    const userData = useContext(UserContext)
   const filterUsers = userData.users.map((user, index)=>{
                                                        return(
                                                                <div className="user-info" key={index}>
                                                                <h3>{user.login}</h3>
                                                                <img src={user.avatar_url} alt="user pic"/>
                                                                </div>
                                                                )
                                                         })            
                                                          
    return (
        <>
            {!filterUsers.length?<div className ="user-info center">No results found</div>:filterUsers}
        </>
    )
}

export default SearchUser;