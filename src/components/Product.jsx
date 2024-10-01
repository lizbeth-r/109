import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){
    function add(){
        console.log('adding to cart');
    }
function handleQuantity(){
    console.log('qt');
}
    return(
        <div className="product">
            <img src={props.data.image} alt=""></img>
            <h4>{props.data.title}</h4>
            <label>Price ${props.data.price}</label>
            <label>Total ${props.data.price}</label>

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