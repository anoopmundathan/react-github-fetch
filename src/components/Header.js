import React from 'react';

export const Header = (props) => {
    
    const image = props.user.avatar_url;
    const name = props.user.name;
    const followers = props.user.followers;
    const following = props.user.following;
    const repositories = props.user.public_repos;

    return(
        <div className='head-container'>

          <div className='profile-container'>
            <div className='profile-image'>
              <img className='image' src={image}></img>
            </div>
            <div className='profile-name'>
              <h3>{name}</h3>
            </div>
          </div>

          <div className='count-container'>
            <div className='followers'>
              <p>followers</p>
              <p>{followers}</p>
            </div>
            <div className='following'>
              <p>following</p>
              <p>{following}</p>
            </div>
            <div className='repositories'>
              <p>Repositories</p>
              <p>{repositories}</p>
            </div>
          </div>
        </div>
    );
}