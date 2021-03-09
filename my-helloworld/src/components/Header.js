import React from 'react'; 
import '../css/Header.css';


function Header() {
    return (
        <div class="header">
            <header>
            
            <h3 class="heading-3">Hi, my name is</h3>
            <h1 class="heading-1 heading--main">MARTIN KLESTIL.</h1>
            <h1 class="heading-1 heading--main">I love to code.</h1>
            <h4 class="heading-4 heading--sub">I'm a software engineer based in Tulln, Austria. Here you can see my path to becoming a web developer.</h4>
            <button class="btn btn__btn--animated">My portfolio</button>   
            </header>
        </div>
    )
}
export default Header