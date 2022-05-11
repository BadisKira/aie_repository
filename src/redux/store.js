import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice";
import hotelReducer from "./hotelSlice";
import agenceReducer from "./agenceSlice";
export default configureStore({
    reducer: {
        client: clientReducer,
        hotel: hotelReducer,
        agence: agenceReducer
    }
})