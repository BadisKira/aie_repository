import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupClient = createAsyncThunk('client/signup', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/signup.php', data)
        .then((res) => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
});

export const loginClient = createAsyncThunk('client/login', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/login.php', data)
        .then((res) => {
            console.log("login res", res);
        })
        .then((err) => {
            console.log(err);
        })
})

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        name: "",
        email: "", status: ""
    },
    extraReducers: {
        [signupClient.pending]: (state) => {
            state.status = "Loading"

        },
        [signupClient.fulfilled]: (state) => {
            state.name = "Jean luc";
            state.email = "jean luc";
            state.status = 'Success';

        },
        [signupClient.rejected]: (state) => {
            state.status = "Failed"

        },
        [loginClient.pending]: (state) => {
            state.status = "Loading"

        },
        [loginClient.fulfilled]: (state) => {
            state.name = "Jean luc";
            state.email = "jean luc";
            state.status = 'Success';

        },
        [loginClient.rejected]: (state) => {
            state.status = "Failed"

        }

    }
});

// export const { } = clientSlice.actions;

export default clientSlice.reducer; 