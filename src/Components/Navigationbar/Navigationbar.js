import './Navigationbar.css';
import Icon from '../../Assets/Images/icon.png';
import { useState, useEffect } from 'react';
import { debounce } from '../../Helpers/debounce.js';
import mobileNavIcon from '../../Assets/Images/hamburger_icon.png';
import icon from '../../Assets/Images/HeroImage.png';
const Navigationbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const [menuItems, setmenuItems] = useState({
    activeObject: null,
    objects: [
      { id: 1, navigate: '/', heading: 'Home' },
      { id: 2, navigate: '#about', heading: 'About' },
      { id: 3, navigate: '#portfolio', heading: 'Portfolio' },
      { id: 4, navigate: '#experince', heading: 'Experince' },
      { id: 5, navigate: '#contact', heading: 'Contact' },
    ],
  });

  const toggleActive = (index) => {
    setmenuItems({
      ...menuItems,
      activeObject: menuItems.objects[index],
    });
  };

  const toggleActiveStyles = (index) => {
    if (menuItems.objects[index] === menuItems.activeObject) {
      return 'active-nav';
    }
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
              <li key={index}>
                <a
                  key={index}
                  className={toggleActiveStyles(index)}
                  id={menuItem.id}
                  href={menuItem.navigate}
                  onClick={() => {
                    toggleActive(index);
                  }}
                >
                  {menuItem.heading}
                </a>{' '}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigationbar;
