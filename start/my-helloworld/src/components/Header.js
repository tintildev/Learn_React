import React from 'react'; 
import '../css/Header.css';


function Header() {
    return (
        <div className="header">
            <header>
            
            <h3 className="heading-3">Hi, my name is</h3>
            <h1 className="heading-1 heading--main">MARTIN KLESTIL.</h1>
            <h1 className="heading-1 heading--main">I love to code.</h1>
            <h4 className="heading-4 heading--sub">I'm a software engineer based in Tulln, Austria. Here you can see my path to becoming a web developer.</h4>
            <button className="btn btn__btn--animated">My portfolio</button>   
            </header>
        </div>
    )
}
export default Header