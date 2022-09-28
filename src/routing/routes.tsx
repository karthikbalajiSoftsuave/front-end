import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

export const RootRoutes = () => {
    const token = undefined;
    console.log("token", token);


    return (
        <>
            {token ? <PrivateRoutes /> : <PublicRoutes />}
        </>
    )
}
