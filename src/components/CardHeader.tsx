import { User } from "../interfaces/User";

interface Props {
  user: User;
}

export default function CardHeader({ user }: Props) {
  return (
    <div className="user-data-header">
      <p className="user-name">{user.name}, better known as {user.username}</p>
    </div>
  );
}
