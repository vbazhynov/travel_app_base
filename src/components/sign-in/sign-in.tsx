import { Button } from '../common/button/button';
import { Link } from 'react-router-dom';
import './style.css';
import { AppRoute } from '../../common/enums/app/app-route.enum';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { profileActionCreator } from '../../store/actions';
import { StorageKey } from '../../common/enums/enums';

type signInType = {
  email: string;
  password: string;
};

const SignIn = () => {
  const hasToken = Boolean(localStorage.getItem(StorageKey.TOKEN));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const status = useAppSelector(state => state.user.status);
  const notifyPasswordError = () =>
    toast.error('Password must be 3 to 20 symbols', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyLoginFailed = () =>
    toast.error(
      'User not found, please check your login and password or Sign Up',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );

  useEffect(() => {
    if (status === 'succeeded' && hasToken) {
      navigate(AppRoute.MAIN);
    }
    if (status === 'failed') {
      notifyLoginFailed();
    }
  }, [navigate, status, hasToken]);

  const handleLogin = (loginPayload: signInType) => {
    dispatch(profileActionCreator.signIn(loginPayload));
  };

  const emailHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };

  const passwordHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 3 || password.length > 20) {
      notifyPasswordError();
      return;
    } else {
      const payload: signInType = {
        email: email,
        password: password,
      };
      handleLogin(payload);
    }
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form
        onSubmit={submitHandler}
        className="sign-in-form"
        autoComplete="off"
      >
        <h2 className="sign-in-form__title">Sign In</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input
            onChange={emailHandler}
            value={email}
            name="email"
            type="email"
            required
          />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input
            onChange={passwordHandler}
            value={password}
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </label>
        <Button className="button" type="submit">
          Sign In
        </Button>
      </form>
      <span>
        Still don`t have account?
        <Link to={AppRoute.SIGN_UP} className="sign-in-form__link">
          Sign Up
        </Link>
      </span>
      {status === 'pending' && <div className="loader"></div>}
    </main>
  );
};
export { SignIn };
