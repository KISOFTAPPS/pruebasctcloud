import HomeSeccion1 from "./sections/HomeSeccion1";
import HomeSeccion2 from "./sections/HomeSeccion2";
import HomeSeccion3 from "./sections/HomeSeccion3";
import HomeSeccion4 from "./sections/HomeSeccion4";
import HomeSeccion5 from "./sections/HomeSeccion5";

import Fade from "react-reveal/Fade";

const Home = () => {
    return (
        <>


            <section id="login" />
            <Fade>
                <HomeSeccion1 />
            </Fade>

            <section id="ct_cloud" />
            <Fade bottom>
                <HomeSeccion2 />
            </Fade>

            <section id="plan" />
            <Fade bottom>
                <HomeSeccion3 />
            </Fade>

            <section id="porquenosotros" />
            <Fade bottom>
                <HomeSeccion4 />
            </Fade>

            <section id="contacto" />
            <Fade bottom>
                <HomeSeccion5 />
            </Fade>
        </>
    );
};

export default Home;
