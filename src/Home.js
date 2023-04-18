import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {name:'book one', author:'Mario', id:1},
        {name:'book two', author:'Luigi', id:2},
        {name:'book three', author:'Mario', id:3},
    ])

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log('UseEffect ran');
        console.log(name);
    }, [name]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('Luigi')}>Change Name</button>
        </div>
    );
}
 
export default Home;
