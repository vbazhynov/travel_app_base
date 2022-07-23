import { Button } from '../common/button/button';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/enums/app/app-route.enum';
import './style.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../common/hooks/hooks';
import { profileActionCreator } from '../../store/actions';
import { toast } from 'react-toastify';
import { REACT_APP_BASE_PATH } from '../../common/enums/api/api-base-path';
import { StorageKey } from '../../common/enums/enums';

type signUpType = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

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

  const handleRegister = (registerPayload: signUpType) => {
    dispatch(profileActionCreator.signUp(registerPayload));
  };

  const hasToken = Boolean(localStorage.getItem(StorageKey.TOKEN));

  useEffect(() => {
    if (hasToken) {
      navigate(AppRoute.MAIN);
    }
  }, [navigate, hasToken]);

  const passwordHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
    console.log(REACT_APP_BASE_PATH);
  };

  const fullNameHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(target.value);
  };

  const emailHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 3 || password.length > 20) {
      notifyPasswordError();
      console.error('password must be 3 to 20 symbols');
      return;
    } else {
      const payload: signUpType = {
        fullName: fullName,
        email: email,
        password: password,
      };
      handleRegister(payload);
    }
  };

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form
        className="sign-up-form"
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input
            onChange={fullNameHandler}
            value={fullName}
            name="full-name"
            type="text"
            required
          />
        </label>
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
          Sign Up
        </Button>
      </form>
      <span>
        Already have an account?
        <Link to={AppRoute.SIGN_IN} className="sign-up-form__link">
          Sign In
        </Link>
      </span>
    </main>
  );
};
export { SignUp };
