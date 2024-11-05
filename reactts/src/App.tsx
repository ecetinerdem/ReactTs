import React from "react";
import Counter from "./components/Counter";
import UserProfileInfo from "./components/UserProfileInfo";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FocusInput from "./components/FocusInput";

const App = () => {
  /*
  const user: Info = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    lastLogin: new Date(),
  };
  */

  return (
    <div>
      {/*<Button
        label="Click"
        onClick={() => console.log("clicked")}
        disabled={false}
      />
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
      <Counter />
      <UserProfileInfo />
      <Todo />
      <Form />*/}
      <FocusInput />
    </div>
  );
};

export default App;
