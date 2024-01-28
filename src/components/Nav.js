import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();

    // console.log("auth", JSON.parse(auth?.data))

    const logout = () => {
        localStorage.clear();
        navigate("/signup")
    }


    return (
        <div>
            {/* <ul className="nav-ul">

                {
                    auth ?
                        <li>
                            <Link onClick={logout} to={"/signup"}>
                                Logout
                            </Link>
                        </li> :
                        <>
                            <li>
                                <Link to="/signup">
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </>
                }
            </ul> */}
            <img
                alt='logo'
                className='logo'
                src='https://www.shutterstock.com/shutterstock/photos/2342133291/display_1500/stock-vector-ak-letter-logo-design-template-vector-letter-ak-logo-design-template-elements-modern-letter-ak-2342133291.jpg'
            />
            {
                auth ?
                    <ul className="nav-ul">
                        <li >
                            <Link to="/">Products</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Products</Link>
                        </li>
                        <li>
                            <Link to="/update">Update Products</Link>
                        </li>

                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link onClick={logout} to={"/signup"}>
                                Logout ({JSON.parse(auth)?.name}  {JSON.parse(auth)?.data?.name})
                            </Link>
                        </li>


                    </ul> :
                    <ul className="nav-ul nav-right">
                        <li>
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
            }
        </div>
    )
}

export default Nav