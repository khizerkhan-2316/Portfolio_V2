import './Navigationbar.css';
import Icon from '../../Assets/Images/icon.png';
import { useState, useEffect } from 'react';
import { debounce } from '../../Helpers/debounce.js';
import mobileNavIcon from '../../Assets/Images/hamburger_icon.png';
import { HashLink as Link } from 'react-router-hash-link';

const Navigationbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const menuItems = {
    objects: [
      { id: 1, navigate: '/#about', heading: 'About' },
      { id: 2, navigate: '/#portfolio', heading: 'Portfolio' },
      { id: 3, navigate: '/#skills', heading: 'Skills' },
      { id: 4, navigate: '/#experince', heading: 'Experince' },
      { id: 5, navigate: '/#contact', heading: 'Contact' },
    ],
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const clickHandler = () => {
    setMobileMenuActive(false);
  };

  return (
    <nav
      style={{
        top:
          visible && !mobileMenuActive
            ? '0'
            : !visible && !mobileMenuActive
            ? '-100px'
            : !visible && mobileMenuActive
            ? '0'
            : '0',
      }}
      className={visible && prevScrollPos > 0 ? 'nav-colored' : ''}
    >
      <div className="nav-items-container">
        <a href="/">
          <img src={Icon} alt="icon" />
        </a>
        <img
          onClick={() => {
            mobileMenuActive
              ? setMobileMenuActive(false)
              : setMobileMenuActive(true);
          }}
          className="mobile-icon"
          src={mobileNavIcon}
          alt="hamburger-icon"
        />
        <ul className={mobileMenuActive ? 'show' : 'hide'}>
          {menuItems.objects.map((menuItem, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  clickHandler();
                }}
              >
                <Link to={menuItem.navigate} key={menuItem.index}>
                  {menuItem.heading}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigationbar;
