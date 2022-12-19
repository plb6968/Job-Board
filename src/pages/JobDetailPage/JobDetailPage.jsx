import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as JobsAPI from "../../utilities/jobs-api";

export default function JobDetailPage({jobs}) {
  
  let jobId = useParams();
  console.log(jobId);
  
  async function getJob(jobId) {
    let job = await JobsAPI.getById(jobId.id);
  }
  


  getJob(jobId)
  
  return (
  <div>
  </div>
 );
}