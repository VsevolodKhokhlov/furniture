import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import CartDrawer from "../Components/CartDrawer/"
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/authSlice";

function RoutesWrapper() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(!authUser) return dispatch(updateUser(null));
            dispatch(updateUser({
                ...authUser?.providerData[0]
            }));
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            <Header />
                <Outlet />
            <Footer />
            <CartDrawer />
        </>
    )
}

export default RoutesWrapper