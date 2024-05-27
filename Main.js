import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

const Details = {
  FirstName: "Vishnu",
  LastName: "Dagumati",
  Email: "vishnu@gmail.com",
};

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={Details}>{children}</UserContext.Provider>
  );
};

const Main = () => {
  return (
    <div>
      <h2>I am Main Child</h2>
      <MainChild />
    </div>
  );
};

const MainChild = () => {
  return (
    <div>
      <h2>I am Main Child</h2>
      <MainSubChild />
    </div>
  );
};

const MainSubChild = () => {
  const userdetails = useContext(UserContext);
  const { FirstName, LastName, Email } = userdetails;
  return (
    <div>
      <h2>Mainsubchild</h2>
      <h2>{FirstName}</h2>
      <h2>{LastName}</h2>
      <h2>{Email}</h2>
      <Child />
    </div>
  );
};

const Child = () => {
  const { FirstName, LastName, Email } = useContext(UserContext);
  return (
    <div>
      <h2>{FirstName}</h2>
      <h2>{LastName}</h2>
      <h2>{Email}</h2>
    </div>
  );
};

const App = () => (
  <UserContextProvider>
    <Main />
  </UserContextProvider>
);

export default App;
