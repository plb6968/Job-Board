import { useState } from 'react';

export default function CommentForm({handleNewComment}) {
  const [comment, setComment] = useState({
    text: ''
  })

  function handleChange(evt) {
    setComment({...comment, [evt.target.name]: evt.target.value});
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleNewComment(comment);
    setComment({text: ''});
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Comment</label>
        <input type="text" value={comment.text} name="text" onChange={handleChange} required/>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}