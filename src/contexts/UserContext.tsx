// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ name: 'User10' }); // default user, replace with dynamic data as needed

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
