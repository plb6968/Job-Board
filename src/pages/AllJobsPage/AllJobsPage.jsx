import JobCard from "../../components/JobCard/JobCard";

export default function AllJobsPage(props) {
  
  return (
    <>
      <div>
        <h1>All Jobs</h1>    
      </div>
      <div>
        {props.jobs.map((job, idx) => {
          return <JobCard key={idx} job={job} />;
        })}
      </div>
    </>
  );
}