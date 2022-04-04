import React, { createContext, useReducer, useContext } from "react";
import { todoReducer } from "./Reducers";

const TodoContext = createContext();

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        tasks: [],
    });
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default Context;

export const TodoState = () => {
    return useContext(TodoContext);
};
