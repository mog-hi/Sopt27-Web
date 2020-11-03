import React from 'react';

function SearchResult({userState}) {
  const {state, user} = userState;

  const Card = ({user}) => {
    return (
      <div className="card">
        <div>
          <img className="avatar" src={user.data.avatar_url} alt={user.data.name} />
        </div>
        <div className="user-info">
          <h2>{user.data.name}</h2>
          <p>{user.data.bio}</p>
          <ul className="info">
            <li><strong>Followers</strong>{user.data.followers}</li>
            <li><strong>Following</strong>{user.data.following}</li>
            <li><strong>Repos</strong>{user.data.public_repos}</li>
          </ul>
          <div id="repos"></div>
        </div>
      </div>
    );
  }
  const Loading = () => {
    return <h3 style={{ color: "white" }}>Loading...</h3>;
  }
  const NoResult = () => {
    return <h3 style={{ color: "white" }}>Try again!</h3>;
  }
  if (state === "resolved") {
    return <Card user={user}/>
  } else if (state === "pending") {
    return <Loading/>
  } else {
    return <NoResult/>
  }
}
export default SearchResult;