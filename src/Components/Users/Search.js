import React, {useState, useContext} from 'react'
import GithubContext from '../Context/github/githubContext'
import AlertContext from '../Context/alert/alertContext'

const Search = () =>
{
   const githubContext = useContext(GithubContext);
   const alertContext = useContext(AlertContext);
   const [text, setText] = useState('');
     
   const onchange = (e) =>
    {
        setText(e.target.value);
    }

    const onSubmit = e =>
    {
        e.preventDefault(); 

        if(text === '')
        {
            alertContext.setAlert('Please enter something','light')
        }
        else
        {
            githubContext.searchUsers(text);
            setText('');
        }

    }
    return(
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type='text' name='text' placeholder='Search users' value={text} onChange={onchange}></input>
                
                <input type='submit' value='Search' ></input>
                {
                    githubContext.users.length > 0 &&
                    <input type='button' value='Clear' className='btn btn-block' onClick={githubContext.clearUsers}></input>
                }
            </form>            
        </div>
    )
}

export default Search