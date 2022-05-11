import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const agenceSlice = createSlice({
    name: "agence",
    initialState: [{
        id_ag: '',
        nomag: '',
        emailagence: '',
        numag: "",
        adresseag: "",
        adminag: '',
        mdp_adminag: ''
    }],
    reducers: {

    }
});


export default agenceSlice.reducer; 