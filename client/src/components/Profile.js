import React from 'react'

const Profile = ({users}) => {
 
   
  return (
    <div className="profile-box">
<h2 className="profileTitle">
welcome  <span>{users.name} {users.lastName} </span> in your profile
</h2>
<div className="info">


<h3> your age in years is : {users.age} years</h3>
<h3> your age in month is : {users.age *12} month</h3>
<h3> your age in day is : {users.age * 12 *30} day</h3>
<h3> your age in hours is : {users.age * (12*30*24)} hours</h3>
</div>

    </div>
  )
}

export default Profile