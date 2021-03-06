import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import CartCanvas from "./components/CartCanvas";
import OrderForm from "./components/OderForm";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useEffect, useState} from "react";
import Orders from "./components/admin/Orders";


const  App = () => {
    const [productsFromFetch, setProductsFromFetch] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [showCanvas, setShowCanvas] = useState(false);

    useEffect(() => {
        fetch('/api/products', {
            method: 'GET',
            headers: {
                type: 'application/json'
            }
        }).then((res) => res.json())
            .then(data => {
                    setProductsFromFetch(data);
                }
            );
    }, []);

    const handleCanvas = () => {
        setShowCanvas(!showCanvas);
    }

    let routesArr = [];
    for (let i = 0; i < productsFromFetch.length; i++) {
        routesArr.push(
            <Route key={i} path={"/" + productsFromFetch[i].product}>
                <Product cartItems={cartItems} setCartItems={setCartItems} product={productsFromFetch[i].product}
                         description={productsFromFetch[i].description} image={productsFromFetch[i].image}/>
            </Route>
        );
    }


    return (
        <div>
            <Router forceRefresh={false}>
                <NavBar cartItems={cartItems} handleCanvas={handleCanvas} showCanvas={showCanvas}/>
                <CartCanvas cartItems={cartItems} setCartItems={setCartItems} handleCanvas={handleCanvas} showCanvas={showCanvas}/>
                <Switch>
                    <Route exact path="/">
                        <ProductCard handleCanvas={handleCanvas} cartItems={cartItems} setCartItems={setCartItems}
                                     productsFromFetch={productsFromFetch}/>
                    </Route>
                    <Route path="/cart">
                        <Cart cartItems={cartItems}/>
                    </Route>
                    <Route path="/order">
                        <OrderForm cartItems={cartItems} handleCanvas={handleCanvas}/>
                    </Route>
                    <Route path="/admin/orders">
                            <Orders/>
                    </Route>
                    {routesArr}
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
