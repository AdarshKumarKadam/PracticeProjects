import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/productService";

const EditProduct = () => {
   

    const [product, setProduct] = useState({
        id:"",
        productName: "",
        description: "",
        price: "",
        status: ""
    })

    const navigate = useNavigate();


    const { id } = useParams();
    console.log(id);

    const [msg, setMsg] = useState("");

    useEffect(()=>{
        productService.getProductById(id)
        .then((res) =>{
            setProduct(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value })
    }

    const productUpdate = (e) => {
        e.preventDefault();
        //console.log(product);
        productService.editProduct(product)
            .then((res) => {
               navigate("/");
            })
            .catch((error) => { console.log(error); })
    };


    return (
        <>
            <div className="container mt-3" >
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Edit Product
                            </div>
                            {msg &&
                                <p className="fs-4 text-centre text-centre text-success">{msg}</p>}

                            <div className="card-body">
                                <form action="" onSubmit={(e) => productUpdate(e)}>
                                    <div className="mb-3">
                                        <label > Enter Product Name </label>
                                        <input type="text" name="productName" className="form-control" value={product.productName} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="mb-3">
                                        <label > Enter Description </label>
                                        <input type="text" name="description" className="form-control" value={product.description} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="mb-3">
                                        <label > Enter Price </label>
                                        <input type="text" name="price" className="form-control" value={product.price} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="mb-3">
                                        <label > Enter Status </label>
                                        <input type="text" name="status" className="form-control" value={product.status} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <button className="btn btn-primary col-md-12">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default EditProduct