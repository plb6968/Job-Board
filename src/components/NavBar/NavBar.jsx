import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link className="nav" to="/">Jobio</Link>
      &nbsp;&nbsp;&nbsp;
      <Link className="nav" to="/jobs">Jobs</Link>
      &nbsp;&nbsp;&nbsp;
      <Link className="nav" to="/jobs/new">Add Job</Link>
      &nbsp;&nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;&nbsp;<Link className="nav" to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}