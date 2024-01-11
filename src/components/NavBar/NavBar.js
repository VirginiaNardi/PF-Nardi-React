import { Link, NavLink } from "react-router-dom"
import CardWidget from "../CardWidget/CardWidget"
import LogoImg from "./img/logo.png"

import "./NavBar.css"

const NavBar = () => {
    return (
        <section className="hero is-warning is-medium">
            <div className="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div className="navbar-brand">
                            <Link to='/' className="navbar-item">
                            <img className="logo" src={LogoImg} alt="Logo"/>
                            </Link>
                            <span classNameName="navbar-burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <NavLink to={`category/especias`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option Categorias'} >Especias</NavLink>
                                <NavLink to={`category/hiervas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option Categorias'} >Hiervas</NavLink>
                                <NavLink to={`category/deshidratados`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option Categorias'} >Deshidratados</NavLink>
                            </div>
                        </div>
                    </div>
                    <CardWidget/>
                </nav>
            </div>
            
        </section> 
    )
}

export default NavBar

