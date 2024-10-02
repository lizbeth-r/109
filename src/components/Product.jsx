import { useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    function add() {
        console.log('adding to cart');
    }

    function handleQuantity(qty) {
        setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product">
            <img src={props.data.image} alt=""></img>

            <h4>{props.data.title}</h4>
            <div className="price">
                <label>Price ${props.data.price.toFixed(2)}</label>
            </div>
            <div className="total">
                <label>Total ${getTotal()}</label>
            </div>

            <div className="controls">

                <QuantityPicker onChange={handleQuantity}></QuantityPicker>
                <button className="btn btn-custom" onClick={add}>
                    Add
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>

        </div>
    );
}

export default Product;