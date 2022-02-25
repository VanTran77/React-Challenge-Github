import React from 'react'

function ShowUserInfo(props) {
  // console.log(props.userInfo);
  return (
    <div>
      { props.userInfo &&
        <div className="showUserInfo">
          <img className='img-user' src={props.userInfo.avatar_url} style={{width:"270px", marginBottom: "20px", borderRadius:"50%"}} alt="" />
          <ul className="list-group list-user-info" >
            <li className="list-group-item list-group-item-action"><strong>Fullname:</strong> {props.userInfo.name}</li>
            <li className="list-group-item list-group-item-action"><strong>Username:</strong> {props.userInfo.login}</li>
            <li className="list-group-item list-group-item-action"><strong>Location:</strong> {props.userInfo.location}</li>
            <li className="list-group-item list-group-item-action"><strong>Email Address:</strong> {props.userInfo.email}</li>
          </ul>
        </div>
        }
    </div>
  )
}

export default ShowUserInfo