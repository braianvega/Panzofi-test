'use client';

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setUserAuthor } from "./user/userSlice";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

    useEffect(() => {
        const user=JSON.parse(localStorage.getItem('user-author')??'{}');
        store.dispatch(setUserAuthor(user));
    
    }, [])
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}