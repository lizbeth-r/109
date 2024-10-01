import "./Admin.css";

function Admin() {
    return (
        <div className="admin page">
            <h1>Store administration</h1>

            <div className="parent">
                <div className="products">

                    <div className="form">
                        <h3>Register a Product</h3>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Title:</label>
                            <input type="text" class="form-control" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Image:</label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Category:</label>
                            <input type="text" class="form-control" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Price:</label>
                            <input type="number" class="form-control" placeholder="" />
                        </div>
                        <div className="controls">
                            <button className="btn btn-outline-dark">Save Product</button>
                        </div>
                    </div>
                </div>
                <div className="coupons">
                    <div className="form">
                        <h3>Register a Coupon</h3>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Code</label>
                            <input type="text" class="form-control" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Discount</label>
                            <input type="text" class="form-control" placeholder="" />
                        </div>
                        <div className="controls">
                            <button className="btn btn-outline-dark">Save Coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Admin;
