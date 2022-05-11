import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const signupClient = createAsyncThunk('client/signup', async (data) => {

    return axios.post('http://localhost:80/bookAndGo/api/Client/signup', data)
        .then((res) => {
            console.log("SIGN UP CLIENT", res.data);
            return res.data;
        }).catch(err => {
            return err.response.data;
        })


});

export const loginClient = createAsyncThunk('client/login', async (data) => {

    return axios.post('http://localhost:80/bookAndGo/api/Client/login', data)
        .then((res) => {
            console.log("login", res)
            return res;
        })
        .catch((err) => {
            console.log("error de login", err);
            return err.response.data;
        })


})

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        id: "",
        name: "",
        email: "",
        jwt: "",
        numTel: "",
        islogged: false,
        error: null,
    },
    reducers: {
        logoutClient: (state) => {
            state.name = "";
            state.email = "";
            state.jwt = "";
            state.islogged = false;
            Cookies.remove("jwt");

        }
    },
    extraReducers: {
        [signupClient.pending]: (state) => {
            state.islogged = false;

        },
        [signupClient.rejected]: (state, action) => {
            state.islogged = false;
            //state.error = action.payload.error;

        },
        [signupClient.fulfilled]: (state, action) => {
            if (typeof action.payload.error !== "undefined") {
                state.islogged = false;
                state.error = action.payload.error;
            } else {
                state.id = action.payload.id;
                state.name = action.payload.nom;
                state.email = action.payload.email;
                state.islogged = true;
                state.jwt = action.payload.jwt;
                Cookies.set('jwt', `Bearer ${action.payload.jwt}`);
            }


        },

        [loginClient.pending]: (state) => {
            state.islogged = false;

        },
        [loginClient.fulfilled]: (state, action) => {
            console.log("login full", action.payload)
            if (typeof action.payload.error !== "undefined") {
                console.log('REINER')
                state.islogged = false;
                state.error = action.payload.error;
            } else {
                console.log('eren yeager le sauveur de ELDIA');
                state.id = action.payload.id;
                state.jwt = action.payload.jwt;
                state.name = action.payload.nom;;
                state.email = action.payload.email;
                state.islogged = true;
                Cookies.set('jwt', `Bearer ${action.payload.jwt}`);

            }
        },
        [loginClient.rejected]: (state, action) => {
            state.islogged = false;
            state.error = action.payload.error;


        }

    }
});

export const { logoutClient } = clientSlice.actions;

export default clientSlice.reducer; 