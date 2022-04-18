import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer";
import CardsContainer from "../components/cardsContainer";
import DestinationsContainer from "../components/destinations";

const Home = () => {
    return (
        <>
            <section style={{ width: "100%", height: "100vh", backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/fond.jpg"}) ` }}>
                <NavBar />
            </section>

            {/* <section style={{ margin: "50px 20px", display: 'flex', justifyContent: "space-evenly" }}>
                <CardV destination={"Randonnée à l’assaut de Yemma Gouraya"} img={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/fc/74/caption.jpg?w=300&h=300&s=1"} />
                <CardV destination={"Randonnée à l’assaut de Yemma Gouraya Yemma Gouraya"} />
                <CardV destination={"Randonnée à l’assaut de  Yemma Gouraya Gouraya"} />
                <CardV destination={"Randonnée à l’assaut de Yemma Gouraya"} />
            </section> */}
            <CardsContainer />
            <DestinationsContainer />

            {/* <section style={{ margin: "50px 20px", display: 'flex', justifyContent: "space-evenly" }}>
                <Destination img={""} dest="Porto Rico" />
                <Destination img={""}
                    dest="Porto Rico" />
                <Destination img={""} dest="France Paris la ville tu connais" />
            </section> */}
            <Footer />

        </>
    )

};

export default Home; 