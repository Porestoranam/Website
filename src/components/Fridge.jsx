import React from 'react';
import styles from './Fridge.module.css'

import {Link} from 'react-router-dom';

function Fridge({items}) {
    return (
        <div className={styles.fridge_wrapper}>
            <div className={styles.header__logo}>
                <a href="/" className={styles.header_logo_link}>
                    Agbash Studio
                </a>
            </div>
            <nav className="menu__nav">
                <ul className={styles.header__list}>
                    {items && items.map((name) => (<li key = {name} className={styles.header__item}>
                                <a key = {name} href="#!" className={styles.header__link}>{name}</a>
                                </li>))}
                </ul>
            </nav>
            <nav className="sn__logos">
                <ul className={styles.sn__list}>
                    <li className={styles.logo_inst}>
                        <a href="!#" className="header__inst-link">
                            <img src="insta.png" alt="inst logo"/>
                        </a>
                    </li>

                    <li className={styles.logo_vk}>
                        <a href="!#" className="header__vk-link">
                            <img src="Vk.png" alt="vk logo"/>
                        </a>
                    </li>
                </ul>
            </nav>

            
        </div>
    )
}


export default Fridge;
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Art</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/Art.css">
</head>
<body>
    <div className="wrapper">
        <div className="fridge-wrapper">
            <div className="header__logo">
                <a href="/" className="header-logo-link">
                    Agbash Studio
                </a>
            </div>
            <nav className="menu__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#!" className="header__link">BIOGRAPHY</a>
                    </li>
 
                    <li className="header__item">
                        <a href="#!" className="header__link">CONTACTS</a>
                    </li>
 
                    <li className="header__item">
                        <a href="#!" className="header__link">ART</a>
                    </li>
 
                    <li className="header__item">
                        <a href="#!" className="header__link">LOVE STORY</a>
                    </li>
 
                    <li className="header__item">
                        <a href="#!" className="header__link">BLOG</a>
                    </li>
 
                    <li className="header__item">
                        <a href="#!" className="header__link">WEDDING</a>
                    </li>
                </ul>
            <nav className="sn__logos">
                <ul className="sn__list">
                    <li className="logo_inst">
                        <a href="!#" className="header__inst-link">
                            <img src="./img/insta.png" alt="Inst link" className="src">
                        </a>
                    </li>
                    <li className="logo_vk">
                        <a href="!#" className="header__vk-link">
                            <img src="./img/Vk.png" alt="Vk link" className="src">
                        </a>
                    </li>
                </ul>
                
            </nav>

        </div>
        <div className="content-wrapper">
            <div className="describtion-wrapper">
                <p className="content-describtion">
                    A little bit of describtion
                </p>    
            </div>
            <div className="photos-wrapper">
                <ul className="photo-list">
                    <img src="./img/101.png" className ="photo" alt="">
                    <img src="./img/104.png" className ="photo" alt="">
                </ul>
            
                <ul className="photo-list">
                    <img src="./img/102.png" className ="photo" alt="">
                    <img src="./img/105.png" className ="photo" alt="">
                </ul>
                    
                <ul className="photo-list">
                    <img src="./img/103.png" className ="photo" alt="">
                </ul>
            </div>
        </div>
    </div>
    
</body>
</html>*/
