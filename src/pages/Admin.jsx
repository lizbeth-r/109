import {useState} from 'react';
import "./Admin.css";

function Admin() {

    const [coupon, setCoupon] = useState({
        code:"",
        discount:""
    });

    const[product, setProduct] = useState({
        title:"",
        price:"",
        image:"",
        category:""
    });

    function handleProduct(e){
        const text = e.target.value;
        const name = e.target.name;

        const copy = {...product};
        copy [name] = text;
        setProduct(copy);
    }

    function saveProduct(){
        console.log(coupon)
    }

    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;

        const copy = {...coupon};
        copy [name] = text;
        setCoupon(copy);
    }

    function saveCoupon(){
        console.log(coupon)
    }

    return (
        <div className="admin page">
            <h1>Store administration</h1>

            <div className="parent">
                <div className="products">

                    <div className="form">
                        <h3>Register a Product</h3>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Title:</label>
                            <input type="text" class="form-control" placeholder="" onBlur={handleProduct} name='title'/>
                        </div>
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Image:</label>
                            <input class="form-control" type="file" id="formFile" onBlur={handleProduct} name='image'/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Category:</label>
                            <input type="text" class="form-control" placeholder="" onBlur={handleProduct} name='category'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Price:</label>
                            <input type="number" class="form-control" placeholder="" onBlur={handleProduct} name='price'/>
                        </div>
                        <div className="controls">
                            <button className="btn btn-outline-dark" onClick={saveProduct}>Save Product</button>
                        </div>
                    </div>
                </div>
                <div className="coupons">
                    <div className="form">
                        <h3>Register a Coupon</h3>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Code</label>
                            <input type="text" class="form-control" placeholder="" onBlur={handleCoupon} name="code"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Discount</label>
                            <input type="text" class="form-control" placeholder="" onBlur={handleCoupon} name="discount"/>
                        </div>
                        <div className="controls">
                            <button className="btn btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Admin;
