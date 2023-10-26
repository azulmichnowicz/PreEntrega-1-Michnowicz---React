import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import logo from "/public/img/c.png";

export const NavBar = () => {
  return (
    <nav className={`d-flex justify-content-between align-items-center p-4 ${styles.navBar}`}>
      <div className="d-flex align-items-center">
        <img src={logo} alt="Logo" className={`${styles.logo}`} />
        <div className="d-flex justify-content-between align-items-center">
          <button className={`${styles.navButton}`}>
            MAKEUP <i className="fas fa-chevron-down" style={{ marginLeft: '5px' }}></i>
          </button>
          <button className={`${styles.navButton}`}>
            SKINCARE <i className="fas fa-chevron-down" style={{ marginLeft: '5px' }}></i>
          </button>
          <button className={`${styles.navButton}`}>
            SALE <i className="fas fa-chevron-down" style={{ marginLeft: '5px' }}></i>
          </button>
        </div>
      </div>
      <div className={`d-flex align-items-center ${styles.cartContainer}`}>
        <CartWidget />
        <p className={`${styles.cartNumber} mx-2`}>1</p>
      </div>
    </nav>
  );
};