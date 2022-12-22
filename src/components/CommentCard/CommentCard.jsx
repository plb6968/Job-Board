import { useState } from 'react';


export default function CommentCard({user, comment, handleEditComment, handleDeleteComment}) {

  const [editedComment, setEditedComment] = useState({
    text: comment.text,
    id: comment._id
  })

  const [editPressed, setEditPressed] = useState(false);

  function handleChange(evt) {
    setEditedComment({...editedComment, [evt.target.name]: evt.target.value})
  }

  return (
    <>
    {editPressed ? 
      <tr>
          <td><input type="text" name="text" value={editedComment.text} placeholder={comment.text} onChange={handleChange}></input></td>
              <>
                <td><button type="button" onClick={() => [setEditPressed(false), handleEditComment(editedComment)]}>Update</button></td>
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
              <td><button type="button" onClick={() => handleDeleteComment(comment)}>Delete</button></td>
            </>  
            :
            <></>
          }
        </tr> 
        } 
    </>
  );
}