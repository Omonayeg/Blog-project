import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div>
            <h2>Sorry</h2>
            <br />
            <p>This page cannot be found</p>
            <Link to="/">Go back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;