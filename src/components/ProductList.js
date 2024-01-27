import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/products'); // Update with your actual API URL
            setProducts(response.data ?? []);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts()
    }, []);


    const onClickDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:4000/delete/${productId}`).then((res) => {
                alert("Product deleted successfully");
                fetchProducts();
            })

        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }

    const onChangeSearchText = async (event) => {
        let searchKey = event.target.value;
        if (searchKey) {
            const response = await axios.get(`http://localhost:4000/search/${searchKey}`); // Update with your actual API URL
            if (response) {
                setProducts(response.data ?? []);
            }
        } else {
            fetchProducts()
        }

    }
    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <input
                type=''
                className='search-product-box'
                placeholder='Search Product'
                onChange={onChangeSearchText}
            />
            <ul>
                <li>Sl. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {products?.length > 0 ? (
                products.map((item, index) => (
                    <ul>
                        <li>{index + 1}</li>
                        <li>{item?.name ?? ""}</li>
                        <li>{item?.price}</li>
                        <li>{item?.category}</li>
                        <li>{item?.company}</li>
                        <li>
                            <button onClick={() => onClickDelete(item?._id)} className='delete-button'>
                                Delete
                            </button>
                            <Link to={"/update/" + item._id}>
                                Update
                            </Link>
                        </li>
                    </ul>
                ))
            ) : (
                <p>No products found</p>
            )}

        </div>
    )
}

export default ProductList