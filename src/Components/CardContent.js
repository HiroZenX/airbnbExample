import {FaStar} from 'react-icons/fa';
export default function CardContent() {
  return (
    <div className="card-content">
        <img src="pic.jpg" alt="profile-pic" />
        <div className="card-info">
            <span><FaStar /></span>
            <span>30 Likes</span>
            <h3>Tadashi Hamada</h3>
            <p><strong>From 180$</strong>/person</p>
        </div>
    </div>
  )
}
