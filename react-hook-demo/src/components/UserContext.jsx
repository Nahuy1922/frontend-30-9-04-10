import { createContext, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const user = { name: "Huy", age: 22 };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function ShowUser() {
  const user = useContext(UserContext);
  return <p>User: {user.name}, Age: {user.age}</p>;
}
