import React, { useState, useEffect } from "react"
import logo from "../../assets/logo.svg"
import mail from "../../assets/mail 1.png"
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
        setAction(' signup');
    }

    const submitLink = () => {
        setAction(' email');
    }

    const logInLink = () => {
        setAction('');
    }
    
    const [account, setAccount] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount((prevAccount) => ({
          ...prevAccount,
          [name]: value
        }));
      };
    
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
                                <input type="email" name="email" onChange={handleChange}/>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Password</p>
                                <input type="password" name="password" onChange={handleChange}/>
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
                                <input type="text" name="name" value={account.name} onChange={handleChange}/>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Surname</p>
                                <input type="text" name="surname" value={account.surname} onChange={handleChange}/>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Email</p>
                                <input type="email" name="email" value={account.email} onChange={handleChange}/>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Password</p>
                                <input type="password" name="password" value={account.password} onChange={handleChange}/>
                            </div>
                            <div className='babyhelm__input'>
                                <p>Confirm password</p>
                                <input type="password"/>
                            </div>
                        </div>
                        <div className="babyhelm__auth-button">
                            <button type='submit' onClick={submitLink}>
                                Sign Up
                            </button>
                        </div>
                        <div className="babyhelm__auth_acc">
                            <p>Already have an account? <a href="#" onClick={logInLink}>Log In</a></p>
                        </div>
                    </form>
                </div>

                <div className='babyhelm__auth_email-confirm'>
                    <div className='babyhelm__auth_header'>
                        <img src={logo} alt="logo"/>
                        <h1>Verify your email</h1>
                    </div>
                    <p>
                        {`We’ve sent an email to ${account.email} to verify your email address and activate your account.`}
                    </p>
                    <img src={mail} alt="mail"/>
                    <p><a href="#">Click here</a> if you did not receive an email</p>
                </div>
            </div>
            
        </div>
    )
}

export default Auth;