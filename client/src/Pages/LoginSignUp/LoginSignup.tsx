import './LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='your namse' />
                    <input type="email" placeholder='email address' />
                    <input type="password" placeholder='password' />
                </div>
                <button>Continue</button>
            <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>by continuing, i agree to the terms of use and privacy policy.</p>
            </div>
            </div>
           
        </div>
    )
}

export default LoginSignup