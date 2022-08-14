import { useState } from 'react';

const Comments = () => {
  const [comment, setComment] = useState('Write  your comment here.'); 
  
    return<>
    <h1>Click the button to see a comment that changes using state.</h1>
    <p>{comment}</p>
    <button onClick={() => setComment("bugga-dawg-day")}>Click to Change</button>
    </>
  }
  
  export default Comments;