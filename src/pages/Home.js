import Header from "../components/home/Header";
import MainPage from "../components/home/MainPage";
import Nav from "../components/home/nav/Nav";

export default function Home() {
    return (
        <div className="Home">
            <Header></Header>
            <Nav></Nav>
            <MainPage></MainPage>
        </div>
    );
}