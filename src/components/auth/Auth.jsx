import React, { useState, useEffect } from "react"
import logo from "../../assets/logo.svg"
import "./auth.css"
const Auth = ( { toggleAuthModal } ) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            toggleAuthModal();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            };
    }, []);

    const [action, setAction] = useState('');

    const signUpLink = () => {
        setAction(' active');
    }

    const logInLink = () => {
        setAction('');
    }
    
    
    return (
        <div className='babyhelm__auth'>
            <div className={`babyhelm__auth_content${action}`}>
                <div className='babyhelm__auth_login'>
                    <div className='babyhelm__auth_header'>
                        <img src={logo} alt="logo"/>
                    </div>
                    <form action="">
                        <div className='babyhelm__inputs'>
                            <div className='babyhelm__input'>
                                <p>Email</p>
                                <input type="email"></input>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Password</p>
                                <input type="password"></input>
                            </div>
                            <div className="babyhelm__forgot">
                                <a href="/">Forgot password</a> 
                            </div>
                        </div>
                        
                        <div className="babyhelm__auth-button">
                            <button type='submit'>
                                Log In
                            </button>
                        </div>
                        <div className="babyhelm__auth_acc">
                            <p>Don't have an account? <a href="#" onClick={signUpLink}>Sign Up</a></p>
                        </div>
                    </form>
                </div>
                <div className='babyhelm__auth_signup'>
                    <div className='babyhelm__auth_header'>
                        <img src={logo} alt="logo"/>
                    </div>
                    <form action="">
                        <div className='babyhelm__inputs'>
                            <div className='babyhelm__input'>
                                <p>Name</p>
                                <input type="text"></input>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Surname</p>
                                <input type="text"></input>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Email</p>
                                <input type="email"></input>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Password</p>
                                <input type="password"></input>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Confirm password</p>
                                <input type="password"></input>
                            </div>
                        </div>
                        <div className="babyhelm__auth-button">
                            <button type='submit'>
                                Sign Up
                            </button>
                        </div>
                        <div className="babyhelm__auth_acc">
                            <p>Already have an account? <a href="#" onClick={logInLink}>Log In</a></p>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Auth;
