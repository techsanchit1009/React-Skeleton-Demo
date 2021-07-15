import React, { useEffect, useState } from 'react';
import SkeletonUserProfile from '../skeletons/SkeletonUserProfile';

const User = () => {
  const [ profile, setProfile ] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await resp.json();
        setProfile(data);
      } catch(err) {
        console.log(err);
      }
    }, 5000);
  }, []);

  return (
    <div className="user">
      <h2>User Details</h2>

      { profile && (
        <div className="profile">
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <SkeletonUserProfile theme="light"/>}
    </div>
  );
}

export default User;