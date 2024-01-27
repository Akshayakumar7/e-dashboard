import axios from 'axios';
import React, { useState } from 'react'
import Loader from './Loader';

const AddProducts = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productCompany, setProductCompany] = useState("");
    const [error, setError] = useState(false)
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId)


    const onClickAddProduct = async () => {
        if (!productName || !productPrice || !productCategory || !productCompany) {
            setError(true);
            return false
        }
        try {
            const response = await axios.post("http://localhost:4000/add-product", {
                name: productName,
                price: productPrice,
                category: productCategory,
                userId: userId,
                company: productCompany
            });
            alert("Product added successfully")
            setProductName("");
            setProductCategory("");
            setProductCompany("");
            setProductPrice("")

            console.log("Product Added. Server Response:", response.data);
        } catch (error) {
            console.error("Error during adding product:", error);
        }
    };


    return (
        <div className='product'>
            <h1>AddProducts in project</h1>
            <input
                type='text'
                placeholder='Enter product name'
                className='inputbox'
                value={productName}
                onChange={(e) => { setProductName(e.target.value) }}
            />
            {
                error && !productName &&
                <span className='invalid-input'>
                    Enter valid product name
                </span>
            }
            <input
                type='text'
                placeholder='Enter product price'
                className='inputbox'
                value={productPrice}
                onChange={(e) => { setProductPrice(e.target.value) }}
            />
            {
                error && !productPrice &&
                <span className='invalid-input'>
                    Enter valid product price
                </span>
            }
            <input
                type='text'
                placeholder='Enter product category'
                className='inputbox'
                value={productCategory}
                onChange={(e) => { setProductCategory(e.target.value) }}
            />
            {
                error && !productCategory &&
                <span className='invalid-input'>
                    Enter valid product category
                </span>
            }
            <input
                type='text'
                placeholder='Enter product company'
                className='inputbox'
                value={productCompany}
                onChange={(e) => { setProductCompany(e.target.value) }}

            />
            {
                error && !productCompany &&
                <span className='invalid-input'>
                    Enter valid product company
                </span>
            }

            <button className='appButton' onClick={() => onClickAddProduct()}>
                Add Product
            </button>

        </div>
    )
}

export default AddProducts