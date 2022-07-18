import { Image } from "../../../image/image";
import img_heart from "./img/heart.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        from{" "}
        <a className="footer__link" href="https://binary-studio.com">
          binary studio
        </a>{" "}
        with
        <Image className="footer__icon" src={img_heart} alt="heart icon" />
      </span>
    </footer>
  );
};

export { Footer };
