import React, { createContext } from "react";

export const ManagerContext = createContext({
    data: {},
    setData: () => {},
    user: '',
    setUser: () => {},
    img: '',
    setImg: () => {},
})