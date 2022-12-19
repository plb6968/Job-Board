import { Link } from "react-router-dom";

export default function JobCard({job}) {
  return(
    <div>
      <Link to={`/jobs/${job._id}`}>
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
      </Link>
    </div>
  );
} 