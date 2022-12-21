import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentCard from "../../components/CommentCard/CommentCard";
import * as jobsAPI from "../../utilities/jobs-api";
import * as commentsAPI from "../../utilities/comments-api";

export default function JobDetailPage({ setJobs, jobs, user }) {
  
  const [curJob, setCurJob] = useState(null);

  const [allComments, setAllComments] = useState([]);

  let { jobId } = useParams();

  useEffect(function() {
    async function getJob() {
      let job = jobs.find(function(j) {
        if(j._id === jobId) return j;
      });
      setCurJob(job);
      setAllComments(job.comments);
    }
    getJob();
  }, []);

  async function handleNewComment(newComment) {
    let updatedJobs = await commentsAPI.addComment(newComment, jobId);
    setJobs(updatedJobs);
    let job = updatedJobs.find(function(j) {
      if(j._id === jobId) return j;
    });
    console.log(job);
    setCurJob(job);
    setAllComments(job.comments);
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
      <div>
        <table>
          <thead>
            <th>User</th>
            <th>Comment</th>
          </thead>
          <tbody>
            {allComments.map((comment, idx) =>
              <CommentCard user={user} key={idx} comment={comment} />
            )}
          </tbody>
        </table>  
      </div>
    </div>
 );
}