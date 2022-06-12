import React from 'react'
import { Link ,useNavigate} from "react-router-dom";
export default function Navbar() {
    const auth =localStorage.getItem('user');
    const navigate= useNavigate();
    const logout =() =>{
        localStorage.clear();
        navigate('/signup');

    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/"><span className='logo-text'>Cake-Shop</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link "  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cake">Cake's</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/order">Order</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            
                          
                           {
                                auth ? <Link onClick={logout} className="nav-link" to="/signup">Logout</Link>
                                : <>
                                <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                                </>
                            }
                         
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}
