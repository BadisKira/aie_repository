import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// je px faire l'initial state comme un ptn de tableau d'hotel non ? je pense que je ferai ca oui 
import { hotelFakeData } from "../components/hotels&agences/dataFake";
//
import axios from "axios";
import Cookies from "js-cookie";

const equipement = ["Wifi gratuit", "Sauna", "Plage", "Restaurant", "Parking gratuit"];

export const getAllHotels = createAsyncThunk('hotel/getHotel', async () => {

    return axios.get('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/AllHotels')
        .then((res) => {
            return res.data;
        }).catch(err => {
            return err.response.data;
        })


});

export const loginManagerHotel = createAsyncThunk('hotel/login', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/loginAdminH', data)
        .then((res) => res.data)
        .catch((err) => err)
})


export const getAllHotelsVille = createAsyncThunk('hotel/getHotelVille', async (ville) => {

    return axios.get(`http://localhost:80/bookAndGo/api/ADMIN/adminhotel/AllHotelville/${ville}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        })


});

export const getAllHotelsNote = createAsyncThunk('hotel/getHotelNote', async () => {
    return axios.get(`http://localhost:80/bookAndGo/api/ADMIN/adminhotel/allHotelnote`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        })
});

export const getAllHotelsVilleNote = createAsyncThunk('hotel/getHotelNote', async (ville) => {
    return axios.get(`http://localhost:80/bookAndGo/api/ADMIN/adminhotel/allHotelnote/${ville}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        })
});;

export const getOneHotel = createAsyncThunk('hotel/getOne', async (idh) => {

    return axios.get(`http://localhost:80/bookAndGo/api/ADMIN/adminhotel/getOneHotel/${idh}`)
        .then(res => res.data)
        .catch(err => err.response.data)

})



export const getHotelInfoAdmin = createAsyncThunk('hotel/getHotelInfoAdmin', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/getHotelInfoAdmin', data)
        .then((res) => res.data)
        .catch(err => err.response.data);
})


export const editerInfoHotel = createAsyncThunk('hotel/editerHotelInfoAdminh', async (data) => {
    return axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/updateInfoHotel', data)
        .then((res) => res.data)
        .catch(err => err.response.data);
})




export const hotelSlice = createSlice({
    name: "hotel",
    initialState: {
        initHotels: [],
        hotels: [],
        hotelAdmin: {},
        etat: "",
        message: "",
    },
    reducers: {
        // filtrerNote: (state, action) => {
        //     console.log(state.hotels);
        //     if (action.payload.note > 0) {
        //         state.hotels = state.initHotels.filter(hotel => {
        //             return hotel.note == action.payload;
        //         });

        //     } else {
        //         state.hotels = state.initHotels;
        //     }

        // },

        // filtrerEquipement: (state, action) => {
        //     console.log("EQUIPEMENT +++>", state.hotels);

        //     if (action.payload.length > 0 || (state.hotels.length >= action.payload.length)) {
        //         state.hotels = state.hotels.filter(hotel => {
        //             return includeArray(hotel.equipementh, action.payload);
        //         })
        //     }

        // },
        filterHotels: (state, action) => {
            let tempH = state.initHotels;
            if (action.payload.note > 0) {
                tempH = state.initHotels.filter(hotel => {
                    return hotel.note == action.payload.note;
                });

            } else {
                state.hotels = state.initHotels;
            }
            //  || (state.hotels.length >= action.payload.length) ?
            console.log(action.payload.eqs);
            if (action.payload.eqs.length > 0) {
                tempH = tempH.filter(hotel => {

                    return includeArray(hotel.equipementh, action.payload.eqs);
                })
            }
            console.log('APREq ====> ', tempH);
            state.hotels = tempH;
        }
    },
    extraReducers: {
        [getAllHotels.fulfilled]: (state, action) => {
            console.log(action.payload.hotels);
            state.initHotels = action.payload.hotels;
            state.hotels = action.payload.hotels;
            state.etat = "fulfilled";
        },
        [getAllHotels.pending]: (state) => {
            state.etat = "pending";
        },

        [loginManagerHotel.fulfilled]: (state, action) => {
            if (action.payload.error) {
                console.log("Message erreur ==>  ", action.payload);
                state.etat = 'rejected';
                state.message = action.payload.error;
            } else {
                state.hotelAdmin = action.payload;
                state.message = action.payload.message;
                Cookies.set('jwth', action.payload.jwtH)
            }

        },

        [loginManagerHotel.pending]: (state) => {
            state.etat = "pending";
        },
        [loginManagerHotel.rejected]: (state) => {
            state.etat = "rejected";
        },







        [getHotelInfoAdmin.fulfilled]: (state, action) => {
            state.etat = "fulfilled";
            state.hotelAdmin = action.payload;
            // Cookies.set('jwth', action.payload.jwtH);

        },
        [getHotelInfoAdmin.pending]: (state) => {
            state.etat = "pending";
        },

        [editerInfoHotel.fulfilled]: (state, action) => {
            state.message = action.payload;
        },




        [getAllHotelsVille.fulfilled]: (state, action) => {
            state.initHotels = action.payload.hotels;
            state.hotels = action.payload.hotels;
            state.etat = "fulfilled";
        },
        [getAllHotelsVille.pending]: (state) => {
            state.etat = "pending";
        },
        [getAllHotelsVilleNote.pending]: (state) => {
            state.etat = "pending";
        },
        [getAllHotelsVilleNote.fulfilled]: (state, action) => {
            state.initHotels = action.payload.hotels;
            state.hotels = action.payload.hotels;
            state.etat = "fulfilled";
        },



        [getAllHotelsNote.pending]: (state) => {
            state.etat = "pending";
        },
        [getAllHotelsNote.fulfilled]: (state, action) => {
            state.initHotels = action.payload.hotels;
            state.hotels = action.payload.hotels;
            state.etat = "fulfilled";
        },




        [getOneHotel.fulfilled]: (state, action) => {
            console.log('getOneHotel', action.payload);
            state.hotels = [action.payload];
            state.etat = "fulfilled";
        },
        [getOneHotel.pending]: (state) => {
            state.etat = "pending";
        },
        [getOneHotel.rejected]: (state) => {
            state.etat = "pending";
        }
    }
});


export const includeArray = (array_container = [], array_content = []) => {
    // si tout les element du content sont dans le container alors
    //retounerr true sinon false

    array_container = array_container.map((r) => r.nom_eq);
    console.log(array_container, "now")
    console.log(array_content);
    let inc = true; let i = 0;
    while (inc && i < array_content.length) {
        inc = array_container.includes(array_content[i]);
        i++;
    };

    console.log(inc);
    return inc;
}



export const { filtrerNote, filterHotels, filtrerEquipement } = hotelSlice.actions;


export default hotelSlice.reducer; 