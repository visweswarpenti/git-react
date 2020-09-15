import React, {useContext} from 'react'
import UserItem from './UserItem'
import PropertyTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import GithubContext from '../Context/github/githubContext'

const Users = () =>
{
    const githubContext = useContext(GithubContext);
    const {loading, users} = githubContext;

    if(loading)
    {
       return (
           <Spinner></Spinner>
       )
    }
    else
    {
        return(
        <div style={userStyle}>
            {users.map(user=>(
              <div key={user.id}>  
                  <UserItem key={user.id} user={user} />
              </div>
            ))}
        </div>
        )
    }
}

Users.PropertyTypes = {
    users : PropertyTypes.array.isRequired,
    loading : PropertyTypes.string.isRequired
}

const userStyle ={
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default Users