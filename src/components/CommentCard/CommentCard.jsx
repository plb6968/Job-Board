
export default function CommentCard({user, comment}) {
  
  function handleEdit() {

  }

  function handleDelete() {

  }
  
  return (
      <tr>
        <td>{comment.userName}</td>
        <td>{comment.text}</td>
        {user._id === comment.user ?
          <>
            <td><button type="submit" onSubmit={handleEdit}>Edit</button></td>
            <td><button typee="submit" onSubmit={handleEdit}>Delete</button></td>
          </>  
          :
          <></>
        }
      </tr>   
  );
}