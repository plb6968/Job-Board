import JobForm from '../../components/JobForm/JobForm';
import * as jobsAPI from '../../utilities/jobs-api'

export default function NewJobPage() {
  
  async function handleNewJob(jobData) {
    await jobsAPI.add(jobData);
    console.log(jobData);
  }
  
  return (
    <div>
      <h1>Add a New Job Posting</h1>
      <JobForm />
    </div>
  );
}