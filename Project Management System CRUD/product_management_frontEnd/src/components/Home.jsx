import React, { useEffect, useState } from "react";
import productService from "../service/productService";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const [productList, setProductList] = useState([]);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
       init();
    }, []);

    const init=()=>{
        productService.getAllProducts().then((res) => {
            console.log(res.data);
            setProductList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const deleteProduct = (id) => {
        productService.deleteProduct(id)
            .then((res) => {
                setMsg("Deleted Successfully!!!!!!!")
                init();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-centre">
                                Available Products
                                {msg && <p className="fs-4 text-centre text-centre text-success">{msg}</p>}
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            productList.map((p, num) => (
                                                <tr key={num + 1}>
                                                    <td>{num + 1}</td>
                                                    <td>{p.productName}</td>
                                                    <td>{p.description}</td>
                                                    <td>{p.price}</td>
                                                    <td>{p.status}</td>
                                                    <td>
                                                    <button onClick={() => navigate(`/editProduct/${p.id}`)} className="btn btn-sm btn-primary">Edit</button>
                                                        <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home