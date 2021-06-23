import { useState, useEffect } from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs]=useState(null);

    const handleDelete = (blogid) =>{
        const temp=blogs.filter( (blog)=> blog.id!==blogid );
        setBlogs(temp);
    }

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                setBlogs(data);
            })
    }, []);

    return ( 
        <div className="home">
            {
                blogs && <BlogList blogs={blogs} title="All posts" handleDelete={handleDelete}/>
            }
        </div>
     );
}
 
export default Home;