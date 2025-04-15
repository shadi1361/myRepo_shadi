import { Navigate, Route, Routes } from "react-router-dom";
import Store from "./pages/store/Store";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/product/ProductPage";
import Cart from "./pages/cart/Cart";
import { useShoppingCartContext } from "./context/ShoppingCartContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./pages/login/Login";

function App() {
    const{isLogin} = useShoppingCartContext();

  return (

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/productPage/:id" element={<ProductPage />} />

          <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Layout>

  );
}

export default App;
