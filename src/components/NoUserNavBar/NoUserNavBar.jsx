import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar() {

  return (
    <nav>
      <Link to="/jobs">Jobs</Link>
    </nav>
  );
}