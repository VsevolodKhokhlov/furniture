import {
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RoutesWrapper from "./RoutesWrapper";
import SingleProduct from "./SingleProduct";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<RoutesWrapper />}>
                <Route index element={<HomePage />} />
                <Route path="products/:id" element={<SingleProduct />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem", textAlign: "center" }}>
                            <p>404 Page not found</p>
                        </main>
                    }
                />
                <Route path="login" element={<LoginPage />} />
            </Route>
        </Routes>
    )
}

export default Pages