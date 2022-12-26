import {FaStar} from 'react-icons/fa';
export default function CardContent(props) {
  return (
    <div className="card-content">
        <img src={props.img} alt="profile-pic" />
        <div className="card-info">
            <span><FaStar /></span>
            <span>{props.likes} Likes</span>
            <h3>{props.name}</h3>
            <p><strong>From {props.price}$</strong>/person</p>
        </div>
    </div>
  )
}
