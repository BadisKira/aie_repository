import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AllHotelsAdminSite = ('admin/AllHotelsAdminSite', async (data = []) => {
    return axios.get('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/AllHotelsAdminSite')
        .then(res => { console.log("res", res); return res.data })
        .catch(err => err.response.data);
});

export const getAllAgenceslAdmin = ('admin/getAllAgenceslAdmin', async () => {
    return axios.get('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/AllHotelvilleAdminSite')
        .then(res => { console.log("resd", res); return res.data })
        .catch(err => err.response.data);
});

export const activationCompteHotel = ("admin/CompteHotel", async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/activationCompteHotel', { data })
        .then(res => { console.log("resd", res); return res.data })
        .catch(err => err.response.data);
})


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
        [getAllAgenceslAdmin.fulfilled]: (state, action) => {
            console.log("AllH => " + action.payload);
            state.agences = action.payload;
        },
        [activationCompteHotel.fulfilled]: (state, action) => {
            console.log("AllH => " + action.payload);
            state.hotels = action.payload;
        }

    }
    //
});
export default adminSlice.reducer