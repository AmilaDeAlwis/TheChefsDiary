import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {name:'book one', author:'Mario', id:1},
        {name:'book two', author:'Luigi', id:2},
        {name:'book three', author:'Mario', id:3},
    ])

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
}
 
export default Home;
