import { Button } from '../common/button/button';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/routes/route-enum';
import './style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const emailHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
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
          <input name="full-name" type="text" required />
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
