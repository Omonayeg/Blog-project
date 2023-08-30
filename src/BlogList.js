import { Link } from 'react-router-dom'

const BlogList = (props) /*({ blogs, title, handleDelete}) */ => {

  const blogs  = props.blogs
  // const title = props.title
  // const handleDelete = props.handleDelete

    return ( 
        <div className="blog-list">

          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>

              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written By: {blog.author}</p>
                {/* <button className="del-btn" onClick={()=> handleDelete(blog.id)}>delete blog</button> */}
              </Link>
            </div>
          ))}
        </div>
     );
}
 
export default BlogList;