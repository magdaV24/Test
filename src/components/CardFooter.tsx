import { User } from "../interfaces/User";

interface Props {
  user: User;
  handleClose: () => void;
}

export default function CardFooter({ user, handleClose }: Props) {
  return (
    <div className="card-footer">
      <div className="user-info">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>
          Website: <a href={user.website}>{user.website}</a>
        </p>
      </div>
      <button className="user-data-button" onClick={handleClose}>
        CLOSE
      </button>
    </div>
  );
}
