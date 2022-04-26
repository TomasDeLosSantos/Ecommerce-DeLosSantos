import { render } from "@testing-library/react";
import React, {Component} from "react";
import "../styles/nav.css"
export class NavBar extends Component{
    render(){
        return(
            <header>
                <nav>
                    <h2 className="nav__logo">ECOMMERCE</h2>
                    <ul className="nav__menu">
                        <li><a href="#" className="nav__link">TODOS</a></li>
                        <li><a href="#" className="nav__link">PC</a></li>
                        <li><a href="#" className="nav__link">PS4</a></li>
                        <li><a href="#" className="nav__link">XBOX</a></li>
                    </ul>

                    {/* <ul className="nav__menu">
                        <li><a href="#" className="nav__link">Link</a></li>
                        <li><a href="#" className="nav__link">Link</a></li>
                        <li><a href="#" className="nav__link">Link</a></li>
                        <li><a href="#" className="nav__link">Link</a></li>
                    </ul> */}
                    <a href="#" className="nav__carrito">CARRITO</a>
                </nav>
            </header>
        );
    }
}
