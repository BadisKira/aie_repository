import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AllHotelsAdminSite = createAsyncThunk('admin/AllHotels', async () => {
    return axios.get('http://localhost:80/bookAndGo/api/ADMIN/adminsite/AllHotelsAdminSite')
        .then(res => res.data)
        .catch(err => err.response.data);
});

export const getAllAgenceslAdmin = createAsyncThunk('admin/Allagence', async () => {
    return axios.get('http://localhost:80/bookAndGo/api/ADMIN/adminsite/AllAgenceAdminSite')
        .then(res => res.data)
        .catch(err => err.response.data);
});

export const activationCompteHotel = createAsyncThunk("admin/CompteHotel", async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminsite/activationCompteHotel', { data })
        .then(res => { console.log("resd", res); return res.data })
        .catch(err => err.response.data)
}
);

export const activationCompteAgence = createAsyncThunk("admin/compteAgence", async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminsite/activationCompteAgence', data)
        .then(res => { console.log("resd", res); return res.data })
        .catch(err => err.response.data)
}
);
export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        nomA: "",
        emailA: "",
        hotels: [],
        agences: [],
    },
    reducers: {

    },
    extraReducers: {
        [AllHotelsAdminSite.fulfilled]: (state, action) => {
            console.log("AllH => " + action.payload);
            state.hotels = action.payload;
        },
        [activationCompteHotel.fulfilled]: (state, action) => {
            console.log("AllH ACTIVE COMPTE => " + action.payload);
            state.hotels = action.payload;
        },

        [getAllAgenceslAdmin.fulfilled]: (state, action) => {
            console.log("AllAGENCE=> " + action.payload);
            state.agences = action.payload;
        },
        [activationCompteAgence.fulfilled]: (state, action) => {
            console.log("AllH ACTIVE COMPTE => " + action.payload);
            //state.hotels = action.payload;
        }

    }
    //
});
export default adminSlice.reducer