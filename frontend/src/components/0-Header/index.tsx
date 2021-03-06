/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import './header.css';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom';
import loginImg from '../../assets/user_login.png';
import logoImg from '../../assets/logo.png';
import cartImg from '../../assets/shopping_cart.png';

type HeaderProps = {
  cart: any,
}

const Header: FC<HeaderProps> = ({ cart }) => (
  <>
    <header className="header">
      <nav className="header-login">
        <div className="header-login__info">
          <p className="header-login__info-number">923 213 508</p>
          <p className="header-login__info-email">eduperfer@hotmail.com</p>
        </div>
        <Link to="/login" className="header-login__login">
          <img src={loginImg} alt="login" />
        </Link>
      </nav>
      <div className="header-nav">
        <Link to="/">
          <img src={logoImg} alt="logo de La Cantábrica" className="header-nav__logo" />
        </Link>
        <Link to="/" className="header-nav__start">Inicio</Link>
        <Link to="/recetas" className="header-nav__recipes">Recetas</Link>
        <Link to="/contacto" className="header-nav__contact">Contacto</Link>
        <Link to="/carrito">
          <div className="header-nav__cart">
            <img src={cartImg} className="header-nav__cart-img" alt="cart" />
            <p className="header-nav__cart-length">
              {cart.length}
            </p>
          </div>
        </Link>
      </div>
    </header>
  </>
);

function mapStateToProps({ cart }: any) {
  return { cart };
}

export default connect(mapStateToProps)(Header);
