import { useState } from 'react';


export default function CommentCard({user, comment, handleEdit, handleDelete, handleEditComment}) {

  const [editedComment, setEditedComment] = useState({
    text: comment.text,
    id: comment._id
  })

  const [editPressed, setEditPressed] = useState(false);

  function handleChange(evt) {
    setEditedComment({...editedComment, [evt.target.name]: evt.target.value})
  }

  function handleEdit() {
    setEditPressed(true);
  }

  function handleCancelEdit() {
    setEditPressed(false);
  }

  return (
    <>
    {editPressed ? 
      <tr>
          <td><input type="text" name="text" value={editedComment.text} placeholder={comment.text} onChange={handleChange}></input></td>
              <>
                <td><button type="button" onClick={() => {handleEditComment(editedComment); setEditPressed(false)}}>Update</button></td>
                <td><button type="button" onClick={() => setEditPressed(false)}>Cancel</button></td>
              </>
      </tr> 
      :
      <tr>
        <td>{comment.userName}</td>
        <td>{comment.text}</td>
          {user._id === comment.user ?
            <>
              <td><button type="button" onClick={() => setEditPressed(true)}>Edit</button></td>
              <td><button type="button" onClick={handleDelete}>Delete</button></td>
            </>  
            :
            <></>
          }
        </tr> 
        } 
    </>
  );
}