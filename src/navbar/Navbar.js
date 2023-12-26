import '../static/css/navbar/navbar.scss';
import {Fragment} from "react";

const navbarButton = {
    'Home' : {
        'href' : '/',
        'text' : 'Home',
    },
    'AboutMe' : {
        'href' : '/aboutMe',
        'text' : 'About me',
    },
    'Contact' : {
        'href' : '/contactMe',
        'text' : 'Contact',
    },
}

export default function Navbar() {
    return (<>
        <div className="navbar" backgroundColor='rgba(52, 52, 52, 0.8)'>
            <button className="raise" href={navbarButton.Home.href}>
                <span> {navbarButton.Home.text} </span>
            </button>
            <button className="raise" href={navbarButton.AboutMe.href}>
                <span> {navbarButton.AboutMe.text} </span>
            </button>
            <button className="raise" href={navbarButton.Contact.href}>
                <span> {navbarButton.Contact.text} </span>
            </button>
        </div>
        </>
    );
}


