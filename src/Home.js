import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// STOPPED AT LESSON #29{START FROM 30} NETNINJA 

const Home = () => {

//     const [data, setData] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState("")
    
//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://localhost:8000/blogs')
//             .then((res) => { 
//                 if (!res.ok) {
//                     throw Error ('Could not fetch blogs......')
//                 }
//                 return res.json()
//              })
//               .then((data) => {
//                   console.log(data);
//                   setData(data);
//                   setIsLoading(false);
//                   setError('')
//               })
//               .catch((err) => {
//                 setError(err.message);
//                 setIsLoading(false);
//             })
//         }, 1000)
//         }, []);
// }

   const { data, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">

            {
            isLoading ? 
            <div>Loading.....</div> :
            <div>
            {/* yipeee!, Blogs successfully loaded.  */}
            </div>
            }

            <br/>

            {error && <div>{error}</div>}


            <BlogList blogs={data} title= ""/>

        </div>
    );
}
 
export default Home;

   // const [name, setName] = useState("William")

    // const handleCick = (e) => {

    //     setName("Omonaye")

    //     alert('Hey, Great Job!',e);
    // }

    // const handleCickAgain = (name) => {
    //     alert('Hey, My name is ' + name);

       
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)

    //     setBlogs(newBlogs);
    // }

    // <br />
    //         <p> { name} </p>
    //         <br />
    //         <button className="btnClick" onClick={handleCick}>Click me</button> 

    //         <button className="btnClick" onClick={() => {
    //             handleCickAgain("John Doe");
    //         }}>Click me Again</button>

    

    