import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import  useFetch from './useFetch'
import { useHistory } from 'react-router-dom'

const BlogDetails = () => {


    const {id} = useParams()

    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id)

    const history = useHistory()

    const handleDelete =  () => {
       fetch('http://localhost:8000/blogs/' + id, {
          method: 'DELETE',
        }).then(() => {
          history.push('/')
        })

      }


    return (
      <div className="blog-details">
        {isLoading && <div>Loading....</div>}
        {error && <div>{error}</div>}
        <article>
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <h4>Written By: {blog.author}</h4>
          <br />
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
        <br />
        <Link to="/">Home</Link>
      </div>
    );
}
 
export default BlogDetails;