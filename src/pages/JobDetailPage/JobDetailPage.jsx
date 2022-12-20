import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm"
import * as jobsAPI from "../../utilities/jobs-api";
import * as commentsAPI from "../../utilities/comments-api";

export default function JobDetailPage() {
  
  const [curJob, setCurJob] = useState(null);

  const [allComments, setAllComments] = useState([]);

  let { jobId } = useParams();

  useEffect(function() {
    async function getJob(jobId) {
      let job = await jobsAPI.getById(jobId);
      setCurJob(job);
      console.log(job);
    }
    getJob(jobId);
  }, [jobId]);

  async function handleNewComment(newComment) {
    let updatedComments = await commentsAPI.addComment(newComment);
    setAllComments(updatedComments);
  }

  if (!curJob) return null;

  return (
    <div>
      <div>
        <h1>{curJob.title}</h1>
        <h3>Company: {curJob.company}</h3>
      </div>
      <div>
        <h4>Location:</h4>
        <p>{curJob.location}</p>
      </div>
      <div>
        <h4>Description:</h4>
        <p>{curJob.description}</p>
      </div>
      <div>
        <h4>Responcibilities:</h4>
        <p>{curJob.responcibilities}</p>
      </div>
      <div>
        <h4>Skills:</h4>
        <p>{curJob.skills}</p>
      </div>
      <div>
        <h4>Benifets:</h4>
        <p>{curJob.benifets}</p>
      </div>
      <div>
        <CommentForm handleNewComment={handleNewComment} />
      </div>
    </div>
 );
}