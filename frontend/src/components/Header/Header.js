import React from 'react'
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Hook/useCart';

export default function Header() {

    const user = {
        name: 'Jhon', 
    }



    const {cart} = useCart();

    const logout = () => {}

    return (
        <header className={classes.header}>
          <div className={classes.container}>
            <Link to="/" className={classes.logo}>
              Magnolia Rastaurant
            </Link>
            
            <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profil</Link>
                  <Link to="/orders">Siparişler</Link>
                  <a onClick={logout}>Çıkış Yap</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Giriş Yap</Link>
            )}

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

          </div>
        </header>
      );
  
}

