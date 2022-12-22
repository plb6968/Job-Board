import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentCard from "../../components/CommentCard/CommentCard";
import UpdateCommentForm from "../../CommentUpdateForm/CommentUpdateForm";
import * as jobsAPI from "../../utilities/jobs-api";
import * as commentsAPI from "../../utilities/comments-api";

export default function JobDetailPage({ setJobs, jobs, user }) {
  
  const [curJob, setCurJob] = useState(null);
  let { jobId } = useParams();

  useEffect(function() {
      let job = jobs.find((j) => j._id === jobId);
      setCurJob(job);
  }, [jobs]);

  if (!curJob) return null;

  async function handleNewComment(newComment) {
    let updatedJob = await commentsAPI.addComment(newComment, jobId);
    const jobsCopy = [...jobs];
    const idx = jobsCopy.findIndex((j) => j._id === updatedJob._id);
    jobsCopy[idx] = updatedJob;
    setJobs(jobsCopy);
    setCurJob(updatedJob);
  }

  async function handleEditComment(editedComment) {
    console.log(editedComment);
    let updatedJob = await commentsAPI.updateComment(editedComment, jobId);
    console.log(updatedJob);
    setCurJob(updatedJob);
    //setAllComments(updatedJob.comments);
   }

  async function handleDeleteComment(comment) {
    console.log('handleDeleteComment called');
    let updatedJob = await commentsAPI.deleteComment(comment._id);
    console.log(updatedJob);
    setCurJob(updatedJob);
    //setAllComments(updatedJob.comments)
  }

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
      </div>
        <CommentForm handleNewComment={handleNewComment} />
      <div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {curJob.comments.map((comment, idx) => 
              <CommentCard 
                user={user} 
                key={idx} 
                comment={comment}  
                handleDeleteComment={handleDeleteComment} 
                handleEditComment={handleEditComment} 
                />
            )}
          </tbody>
        </table>  
      </div>
    </div>
 );
}