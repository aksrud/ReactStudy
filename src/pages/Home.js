import Header from "../components/home/Header";
import MainPageBasic from "../components/home/MainPageBasic";
import Nav from "../components/home/nav/Nav";

export default function Home() {
    return (
        <div className="Home">
            <Header></Header>
            <Nav></Nav>
            <MainPageBasic></MainPageBasic>
        </div>
    );
}