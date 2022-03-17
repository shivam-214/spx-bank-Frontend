import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={props.path} className="Card">
      <div className="Card_Image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="Card_Body">
        <h1>{props.title}</h1>
        <p>{props.info}</p>
      </div>
    </Link>
  );
};

export default Card;
