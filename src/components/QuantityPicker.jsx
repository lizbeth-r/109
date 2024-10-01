import { useState } from "react";
import "./QuantityPicker.css"


function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);

    function handleIncrease(){
        let value = quantity + 1;
        setQuantity(value)
        props.onChange();
    }

    function handleDecrease(){
        if (quantity == 1) return;

        let value = quantity - 1;
        setQuantity(value);
        props.onChange();
    }

    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-outline-success" disabled={quantity == 1} onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-success" onClick={handleIncrease}>+</button>
        </div>
    );

}

export default QuantityPicker;