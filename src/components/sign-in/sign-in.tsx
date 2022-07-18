import { Button } from "../common/button/button";
import { Link } from "react-router-dom";
import "./style.css";
import { AppRoute } from "../../enums/route-enum";

const SignIn = () => {
  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form">
        <h2 className="sign-in-form__title">Sign In</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" required />
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
