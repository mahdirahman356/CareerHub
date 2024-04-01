import { Helmet } from "react-helmet-async";
import CategoryList from "./CategoryList";
import Featured from "./Featured";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                CareerHub
                </title>
            </Helmet>
            <Hero></Hero>
            <CategoryList></CategoryList>
            <Featured></Featured>
        </div>
    );
};

export default Home;