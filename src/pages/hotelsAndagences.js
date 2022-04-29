import NavBar from "../components/navbar";
import BanniereT2 from "../components/banniereType2";
import SectionHotels from "../components/hotels&agences/hotels";
import SectionVoyages from "../components/hotels&agences/voyages";

const HotelAndAgences = () => {
    return (
        <>
            <NavBar />
            <BanniereT2 title='Hotels/Agences' />
            <SectionHotels />
            <SectionVoyages />

        </>
    );

}

export default HotelAndAgences; 