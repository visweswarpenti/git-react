import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import proptypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../Repos/Repos'
import GithubContext from '../Context/github/githubContext'


const User =({match}) =>
{
    const githubContext = useContext(GithubContext);
    const {getUser, loading, user, repos, getUserRepos} = githubContext;
    useEffect(() =>
    {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    },[])

        const {avatar_url, 
        bio,
        blog,
        company,
        created_at,
        email,
        events_url,
        followers,
        followers_url,
        following,
        following_url,
        gists_url,
        gravatar_id,
        hireable,
        html_url,
        id,
        location,
        login,
        name,
        node_id,
        organizations_url,
        public_gists,
        public_repos,
        received_events_url,
        repos_url,
        site_admin,
        starred_url,
        subscriptions_url,
        twitter_username,
        type,
        updated_at,
        url} = user;
        
        
        if(loading) return <Spinner></Spinner>
        
        return (
        <Fragment>
            <Link to='/' className='btn btn-light'>Back to Main</Link>
            Hireable: {' '}
            {hireable ? (<i className='fas fa-check text-success'>yes</i>) : 
            (<i className='fas fa-times-circle text-danger'>no</i>)
            }
            <div className='card grid-2'>
                <div className='all-center'>
                    <img src={avatar_url} 
                        className='round-img'
                        alt=''
                        style={{width:'150px'}}
                    />
                    <h1>{name}</h1>
                    <p>Location : {location}</p>
                </div>
                <div>
                    {
                        bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )
                    }
                    <a href={html_url} className='btn btn-dark my-1'>
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username : </strong> {login}
                                </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company : </strong> {company}
                                </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website : </strong> {blog}
                                </Fragment>}
                        </li>

                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                            <div className='badge badge-primary'>Followers: {followers}</div>
                            <div className='badge badge-success'>Following: {following}</div>
                            <div className='badge badge-light'>Public Repos: {public_repos}</div>
                            <div className='badge badge-dark'>Public Gits: {public_gists}</div>
            </div>

            <Repos repos={repos} />
        </Fragment>)

}

export default User