import Google from '../images/google.png';
import Facebook from '../images/facebook.png';
import GitHub from '../images/github.png';

export default function Login() {

    const google = () =>{
      window.open("https://localhost:5000/auth/google")
    }
    return (
        <div className='login'>
        <h1 className='loginTitle'>Choose a Login Method</h1>
            <div className='wrapper'>
                <div className='left'>
                    <div className='loginButton google'>
                        <img src={Google} alt='google' className='icon' />
                        Google
                    </div>
                    <div className='loginButton facebook'>
                        <img src={Facebook} alt='facebook' className='icon' />
                        Facebook
                    </div>
                    <div className='loginButton github'>
                        <img src={GitHub} alt='GitHub' className='icon' />
                        GitHub
                    </div>
                </div>
                <div className='center'>
                    <div className='line' />
                    <div className='or'>OR</div>
                </div>
                <div className='right'>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button className='submit'>Login</button>
                </div>
        </div>
        </div>
    )
}
