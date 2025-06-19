import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Loader from "./Loader";



export default function Applayout() {
    const navigation = useNavigation()
    console.log(navigation);

    if (navigation.state == "loading") return <Loader />
    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>);
}