import React, { createContext } from 'react';

const UserContext = createContext({
  userName: '',
  email: '',
  changeUserName: () => { },
});

export default UserContext;
