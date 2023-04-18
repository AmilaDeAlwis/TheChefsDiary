import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {name:'book one', author:'Mario', id:1},
        {name:'book two', author:'Luigi', id:2},
        {name:'book three', author:'Mario', id:3},
    ])

    return (  
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.name}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;
