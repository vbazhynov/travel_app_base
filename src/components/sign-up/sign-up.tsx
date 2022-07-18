import { Button } from "../common/button/button";
import { Link } from "react-router-dom";
import { AppRoute } from "../../enums/route-enum";
import "./style.css";

const SignUp = () => {
  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form">
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input name="full-name" type="text" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" required />
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
