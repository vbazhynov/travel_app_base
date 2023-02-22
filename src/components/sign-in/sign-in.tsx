import { Button } from '../common/button/button';
import { Link } from 'react-router-dom';
import './style.css';
import { AppRoute } from '../../enums/routes/route-enum';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SignIn = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };

  const passwordHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 3 || password.length > 20) {
      toast.error('password must be 3 to 20 symbols', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    } else {
      navigate(AppRoute.ROOT);
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
        Already have an account?
        <Link to={AppRoute.SIGN_UP} className="sign-in-form__link">
          Sign Up
        </Link>
      </span>
    </main>
  );
};
export { SignIn };
