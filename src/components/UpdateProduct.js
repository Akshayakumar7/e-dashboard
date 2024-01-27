import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productCompany, setProductCompany] = useState("");
    const [error, setError] = useState(false);
    const params = useParams();
    const navigate = useNavigate();


    const getProductDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/product/${params?.id}`);
            console.log(response.data);
            setProductName(response?.data?.name ?? '');
            setProductPrice(response?.data?.price ?? '');
            setProductCategory(response?.data?.category ?? '');
            setProductCompany(response?.data?.company ?? '');

        } catch (error) {
            console.error('Error fetching product:', error);
        } finally {
            // setLoading(false);
        }


    }



    const updateProduct = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/update/${params?.id}`, {
                name: productName,
                price: productPrice,
                category: productCategory,
                company: productCompany,
            });
            alert("Product updated successfully");
            navigate("/")
            console.log(response.data);

        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };



    useEffect(() => {
        getProductDetails()
    }, [])




    return (
        <div className='product'>
            <h1>Update Product</h1>
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

            <button className='appButton' onClick={() => updateProduct()}>
                Update Product
            </button>

        </div>
    )
}

export default UpdateProduct;