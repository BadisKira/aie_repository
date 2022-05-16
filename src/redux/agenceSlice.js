import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const loginAgence = createAsyncThunk('agence/logAgence', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminagence/loginAgence', data)
        .then(res => res.data)
        .catch(err => err.response.data);
});

export const registerAgence = createAsyncThunk('agence/regAgence', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminagence/AdminAGinscrire', data)
        .then(res => res.data)
        .catch(err => err.response.data);
});




export const agenceSlice = createSlice({
    name: "agence",
    initialState: {
        id_ag: '',
        nomag: '',
        emailagence: '',
        numag: "",
        adresseag: "",
        adminag: '',
        mdp_adminag: '',
        jwtA: '',
    },
    reducers: {

    },
    extraReducers: {
        [loginAgence.fulfilled]: (state, action) => {
            console.log("ACTION PAYLOAD LOGIN ", action.payload);
            state.id_ag = action.payload.id_ag;
            state.jwtA = action.payload.jwtA;
            state.emailagence = action.payload.emailagence;
            Cookies.set('jwtA', action.payload.jwtA);
            Cookies.set('emailagence', action.payload.emailagence)

        },
        [registerAgence.fulfilled]: (state, action) => {
            console.log("ACTION PAYLOAD REGISTER ", action.payload);

        }
    }
});


export default agenceSlice.reducer; 