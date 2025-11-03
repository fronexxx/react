import type {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

type UsersSliceType = {
    users: IUser[];
    user: IUser | null;
}

const initialState: UsersSliceType = {users: [], user: null};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {

        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json());

            return thunkAPI.fulfillWithValue(users);
            // throw new Error();
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error');
        }

    }
);

const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI) => {

        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then((response) => response.json());

            return thunkAPI.fulfillWithValue(user);
            // throw new Error();
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error');
        }

    }
);

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            });
    }
});

export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
}
