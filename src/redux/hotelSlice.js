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

export const getAllHotelsVille = createAsyncThunk('hotel/getHotelVille', async () => {
    return axios.get('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/AllHotels')
        .then((res) => res.data)
        .catch((err) => err)
})



export const hotelSlice = createSlice({
    name: "hotel",
    initialState: {
        initHotels: hotelFakeData,
        hotels: hotelFakeData
    }
    // [{
    //     idh: '',
    //     nomh: "",
    //     adresseh: "",
    //desch:''
    //     emailh: "",
    //     adminh: "",
    //     passwordh: '',
    //     note: '',
    //     equipementh:[] , 
    //      imgh:[],
    // }]
    ,
    reducers: {
        filtrerNote: (state, action) => {
            console.log("filtrer note ", action.payload);
            if (action.payload > 0) {
                state.hotels = state.initHotels.filter(hotel => {
                    return hotel.note === action.payload;
                });

            } else {
                state.hotels = state.initHotels;
            }

            console.log("apres filter note ", state.hotels);
        },

        filtrerEquipement: (state, action) => {
            console.log("ACTION PAYLOAD ++>", action.payload);
            if (action.payload.length > 0 || (state.hotels.length >= action.payload.length)) {
                state.hotels = state.hotels.filter(hotel => {
                    return includeArray(hotel.equipementh, action.payload);
                })
            }
            console.log("sttttttttttttate )))> =", state.hotels);

        }
    },
    extraReducers: {
        [getAllHotels.fulfilled]: (state, action) => {
            state.hotels = action.payload.hotels;

        },
        [getAllHotels.rejected]: (state, action) => {

        },
        [getAllHotels.pending]: (state, action) => {

        }


    }
});


const includeArray = (array_container = [], array_content = []) => {
    // si tout les element du content sont dans le container alors
    //retounerr true sinon false
    let inc = true; let i = 0;
    console.log(array_container);
    console.log(array_content);
    while (inc && i < array_content.length) {
        inc = array_container.includes(array_content[i]);
        console.log("inc ==> ", inc);
        i++;
    };

    return inc;
}



export const { filtrerNote, filtrerEquipement } = hotelSlice.actions;


export default hotelSlice.reducer; 