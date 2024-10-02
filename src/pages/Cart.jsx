import { useContext } from "react";
import "./Cart.css";
import DataContext from "../state/DataContext";

function Cart() {
    const { cart } = useContext(DataContext);

    return (
        <div className="cart page">
            <h1>If your basket complete?</h1>
            <h4>Let's proceed to payment of your <b>{cart.length}</b> items.</h4>

            <div className="parent">
                <div className="list">
                    <div className="cat">
                        <h5>Product</h5>

                        <label>Price</label>
                        <label>Qty</label>
                        <label>Total</label>
                        <spam className="empty"></spam>
                    </div>
                    {cart.map(prod =>
                        <div className="prod-cart">
                            <img src={prod.image} alt="" />
                            <h5>{prod.title}</h5>
                            <label>${prod.price}</label>
                            <label>#{prod.quantity}</label>
                            <label>${prod.price * prod.quantity}</label>
                            <button className="btn btn-sm btn-trash"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    )}
                </div>
                <div className="side">
                    <h4>Total</h4>

                    <button className="btn btn-primary">Proceed to payment</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;