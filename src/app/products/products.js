"use client"
import { useEffect, useState } from "react";
import Product from "./product";
import Form from "./form";
import DeletedForm from "./DeletedForm";

const Products = () => {

    // products array
    let [products, setProducts] = useState([])

    // api fetch
    const fetchProducts = async () => {
        const data = await fetch("http://localhost:3000/api/products");
        const res = await data.json();

        setProducts(res.products)
    }

    // call fetch function
    useEffect(() => {
        fetchProducts()
    }, [])


    // make new product 
    let [newProduct, setNewProduct] = useState({})

    // post product to api
    const submithandler = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: { "Content-Type": "application/json" }
        })

        fetchProducts()
    }

    // compelete new product
    const changeHandler = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }


    // deleted product
    const [deleted,setDeleted] =useState({})

    // delete method
    const deletehandler = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api/products", {
            method: "DELETE",
            body: JSON.stringify(deleted),
            headers: { "Content-Type": "application/json" }
        })


        fetchProducts()
    }

    // compelte deleted product
    const deleteChangeHandler = (e) => {
        setDeleted({
            ...deleted,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="p-5 bg-[#c6b4d8] flex flex-col items-center">

            {/* title */}
            <div>
                <h2 className="text-3xl text-black">products : </h2>
            </div>

            {/* product */}
            <div className="flex items-center flex-wrap gap-4 w-full px-4 mt-10">
                {products.map((e, i) => {
                    return (
                        <Product product={e} key={i} />
                    )
                })}
            </div>

            {/* form */}
            <div className="w-full mt-10">

                {/* title */}
                <h2 className="text-3xl text-black">add new product: </h2>

                {/* form  */}
                <Form submit={submithandler} change={changeHandler} />
            </div>

            {/* delete */}
            <div className="w-full mt-10">

                {/* title */}
                <h2 className="text-3xl text-black">Delete product: </h2>

                {/* form  */}
                <DeletedForm deleteHandler={deletehandler} deleteChangeHandler={deleteChangeHandler} />
            </div>
        </div>
    );
}

export default Products;