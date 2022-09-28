/* eslint-disable react/display-name */
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./styles.scss";

const Layout = (WrappedComponent: any) => {
    return (props: any) => {
        return <div className="layout"><Header /><WrappedComponent {...props} /> <Footer /></div>;
    }
};

export default Layout;