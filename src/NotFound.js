import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>SORRY</h2>
            <p>This Page Doesn't Exists...</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
 
export default NotFound;