import React from 'react';
import './header.styles.css'
import AccountButtons from '../account/account-buttons.component.jsx';


const Header = () => {
    return (
        <header>
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <nav>
                <img className="logo-image" src="https://assets-global.website-files.com/5ea82b59de6676f0fdee7210/5ea837992a28ee2f7ac58168_Long%20Logo%20Red.svg"/>
                <div className="navbar">
                    <a href="https://www.myraindrop.co.uk/">Home</a>
                    <div class="dropdown">
                        <button class="dropbtn">About us 
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="https://www.myraindrop.co.uk/mission">Our Mission</a>
                            <a href="https://www.myraindrop.co.uk/contact">Contact us</a>
                        </div>
                    </div> 
                    <a href="https://www.myraindrop.co.uk/how-it-works">How it Works</a>
                    <a href="">Fees</a>
                    <a href="https://www.myraindrop.co.uk/funds">Funds</a>
                    <div class="dropdown">
                        <button class="dropbtn">Resources 
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="https://tool.myraindrop.co.uk/?__hstc=101146525.f6335f82283c8fb24399ff16f0e7d3b3.1628760058858.1629392068102.1629401494402.16&__hssc=101146525.7.1629401494402&__hsfp=1615285087&_ga=2.136094647.78878354.1629376630-1341400058.1628760058">Calculator</a>
                            <a href="https://www.myraindrop.co.uk/glossary">Glossary</a>
                            <a href="https://www.myraindrop.co.uk/blog">Blog</a>
                            <a href="https://www.myraindrop.co.uk/financial-wellbeing">Webinars</a>
                        </div>
                    </div> 
                </div>
                <AccountButtons/>
            </nav>
        </header>
  )
}

export default Header