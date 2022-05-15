import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const signupClient = createAsyncThunk('client/signup', async (data) => {

    return axios.post('http://localhost:80/bookAndGo/api/Client/signup', data)
        .then((res) => {
            console.log("singup cleitn ==> ", res.data);
            return res.data;
        }).catch(err => {
            return err.response.data;
        })


});

export const loginClient = createAsyncThunk('client/login', async (data) => {

    return axios.post('http://localhost:80/bookAndGo/api/Client/login', data)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        })


});


export const updateClient = createAsyncThunk('client/update', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/Client/editerInfoClient', data)
        .then(res => res.data)
        .catch(err => err.response.data);
})

export const getFavoris = createAsyncThunk('client/favoris', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/Client/getFavoris', data)
        .then((res) => res.data)
        .catch(err => err);
})


export const getReservations = createAsyncThunk('client/reservations', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/Client/getReservations', data)
        .then((res) => res.data)
        .catch(err => err);
});


export const addFav = createAsyncThunk('client/favoriss', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/Client/addFavs', data)
        .then((res) => {
            console.log("qstrbh");
            return res.data;
        })
        .catch(err => err);
});
//deleteFav

export const deleteFav = createAsyncThunk('client/Delfavoris', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/Client/deleteFav', data)
        .then((res) => {
            console.log("qstrbh");
            return res.data;
        })
        .catch(err => err);
});



export const clientSlice = createSlice({
    name: "client",
    initialState: {
        idclient: "",
        prenom: "",
        nom: "",
        email: "",
        jwt: "",
        numTel: "",
        islogged: false,
        error: null,
        favs: [],
        reservations: []
    },
    reducers: {
        logoutClient: (state) => {
            alert('deconnecion');

            state.nom = "";
            state.prenom = "";
            state.email = "";
            state.jwt = "";
            state.phone = null;
            state.idclient = null;
            state.islogged = false;
            Cookies.remove("jwt");
            Cookies.remove('email');
            Cookies.remove('idclient');

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
                state.idclient = action.payload.id;
                state.jwt = action.payload.jwt;
                state.nom = action.payload.nom;
                state.prenom = action.payload.prenom;
                state.email = action.payload.email;
                state.phone = action.payload.phone;
                state.islogged = true;
                Cookies.set('jwt', action.payload.jwt);
                Cookies.set('email', action.payload.email);
                Cookies.set('idclient', action.payload.id);


            }


        },

        [loginClient.pending]: (state) => {
            state.islogged = false;

        },
        [loginClient.fulfilled]: (state, action) => {
            if (typeof action.payload.error !== "undefined") {
                state.islogged = false;
                state.error = action.payload.error;
            } else {
                state.idclient = action.payload.id;
                state.jwt = action.payload.jwt;
                state.nom = action.payload.nom;;
                state.prenom = action.payload.prenom;
                state.phone = action.payload.phone;
                state.email = action.payload.email;
                state.islogged = true;
                Cookies.set('jwt', action.payload.jwt);
                Cookies.set('email', action.payload.email);
                Cookies.set('idclient', action.payload.id);

            }
        },
        [loginClient.rejected]: (state, action) => {
            state.islogged = false;
            state.error = action.payload.error;


        },


        [updateClient.fulfilled]: (state, action) => {
            console.log('Update fullfilled')
            Cookies.remove('jwt');
            Cookies.remove('email');
        },

        [getReservations.fulfilled]: (state, action) => {
            console.log('Reservations', action.payload);
            state.reservations = action.payload;
        },
        [getFavoris.fulfilled]: (state, action) => {
            console.log('FAVORITE', action.payload);
            state.favs = action.payload;
        },

        [addFav.fulfilled]: (state, action) => {
            console.log("add  favoris");;
        },
        [addFav.rejected]: (state, action) => {
            console.log("rejected favs", action);;
        },
        [addFav.pending]: (state, action) => {
            console.log("pending  favoris" + action);;
        },
        //
        [deleteFav.fulfilled]: (state, action) => {
            console.log("pending  favoris" + action);;
        },
    }
});

export const { logoutClient } = clientSlice.actions;

export default clientSlice.reducer; 