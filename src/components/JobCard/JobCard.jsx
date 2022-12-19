import { Link } from "react-router-dom";

export default function JobCard({job}) {
  return(
    <div>
      <h1>JobCard</h1>
      <Link>
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
      </Link>
    </div>
  );
} 