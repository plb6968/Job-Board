// import { useState } from 'react';

// export default function CommentForm({handleEditComment, handleCancelEdit, allComments}) {
  
//   function handleChange(evt) {
//     setEditedComment({...editedComment, [evt.target.name]: evt.target.value});
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     handleEditComment(editedComment);
//     setEditedComment({text: ''});
//   }

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <label>Edit Comment</label>
//         <input type="text" value={editedComment.text} name="text" onChange={handleChange} />
//         <button type="submit">Edit Comment</button>
//         <button type="button" onClick={handleCancelEdit}>Cancel</button>
//       </form>
//     </div>
//   );
// }