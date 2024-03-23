import CategoryList from "./CategoryList";
import Featured from "./Featured";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CategoryList></CategoryList>
            <Featured></Featured>
        </div>
    );
};

export default Home;