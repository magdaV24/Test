import { User } from "../interfaces/User";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CompanyCard from "./CompanyCard";
import Map from "./Map";

interface Props {
  user: User;
  handleClose: () => void;
}

export default function UserCard({ user, handleClose }: Props) {
  return (
    <div className="user-data-wrapper">
      <Map address={user.address} />
      <CardHeader user={user} />
      <CompanyCard company={user.company} />
      <CardFooter user={user} handleClose={handleClose} />
    </div>
  );
}
