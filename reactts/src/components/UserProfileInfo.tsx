import React, { useState } from "react";

interface UserProfileInfoProps {
  name: string;
  age: number;
  email: string;
}

const UserProfileInfo = () => {
  const [userProfileInfo, setUserProfileInfo] = useState<UserProfileInfoProps>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setUserProfileInfo((prevProfileInfo) => ({ ...prevProfileInfo, name }));
  };

  const updateAge = (age: number) => {
    setUserProfileInfo((prevProfileInfo) => ({ ...prevProfileInfo, age }));
  };

  const updateEmail = (email: string) => {
    setUserProfileInfo((prevProfileInfo) => ({ ...prevProfileInfo, email }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={userProfileInfo.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={userProfileInfo.age > 0 ? userProfileInfo.age : ""}
        onChange={(e) => updateAge(Number(e.target.value))}
      />
      <input
        type="email"
        placeholder="Email"
        value={userProfileInfo.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
      <h3>Profile Summary</h3>
      <p>Name: {userProfileInfo.name}</p>
      <p>Age: {userProfileInfo.age}</p> <p>Email: {userProfileInfo.email}</p>
    </div>
  );
};

export default UserProfileInfo;
