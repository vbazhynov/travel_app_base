import { Link } from 'react-router-dom';
import './style.css';
import { Image } from '../../../image/image';
import img_briefcase from './img/briefcase.svg';
import img_user from './img/user.svg';
import { Button } from '../../../button/button';
import { AppRoute } from '../../../../../enums/routes/route-enum';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const headerNav = document.querySelector('.header__nav');
  useEffect(() => {
    if (location.pathname === '/sign-up' || location.pathname === '/sign-in') {
      headerNav?.classList.add('hidden');
    } else {
      headerNav?.classList.remove('hidden');
    }
  });

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Travel App
        </Link>
        <nav className="header__nav">
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <Link to="/bookings" className="nav-header__inner">
                <span className="visually-hidden">Bookings</span>
                <Image src={img_briefcase} alt="icon" />
              </Link>
            </li>
            <li className="nav-header__item" title="Profile">
              <div className="nav-header__inner profile-nav">
                <span className="visually-hidden">Profile</span>
                <Image src={img_user} alt="profile icon" />
                <ul className="profile-nav__list">
                  <li className="profile-nav__item profile-nav__username">
                    John Doe
                  </li>
                  <li className="profile-nav__item">
                    <Button
                      className="profile-nav__sign-out button"
                      onClick={() => navigate(AppRoute.SIGN_IN)}
                    >
                      Sign Out
                    </Button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
