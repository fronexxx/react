import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "./models/IUser.ts";

type UsersSliceType = {
    users: IUser[]
}

const initialState: UsersSliceType = {users:[]};
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        },

    }
});

export const userSliceActions = {
    ...userSlice.actions,
}

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        // postSlice: null
    },
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
