import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()


const handleSubmit = (e) => { 
    e.preventDefault();
    const blog = {title: title, body: body, author: author};
    setIsLoading(true)

    setTimeout(() =>{
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Success, blog added')
            setIsLoading(false)

            history.push('/');

        })

    }, 800)

   

    console.log(blog);

}


  return (
    <div className="create">


      <h2>Add New Blogs Here</h2>
      <form onSubmit={handleSubmit}>


        <label htmlFor="title">Blog Title</label>
        <input type="text"
         required
         value= { title }
         id="title" 
         namr="title"
         onChange={(e) => (setTitle(e.target.value))}
         />

        <label htmlFor="body">Blog Body</label>
        <textarea 
         required
         value= { body}
         id="body"
         name="body"
         onChange={(e) => (setBody(e.target.value))}
        ></textarea>

        <label htmlFor="author">Blog Author</label>
        <select
         id="author"
         value={ author }
         onChange={(e)=> setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Will">Will</option>
          <option value="Omonaye">Omonaye</option>
          <option value="Tag">Tag</option>
        </select>

        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled className="disabled-btn">Adding Blog.....</button>}

      </form>

    </div>
  );
};

export default Create;
