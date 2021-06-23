import { useState, useEffect } from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs]=useState([
        {title: 'Oh you say can you see', body: 'by the dawn of new light', author: 'gayboy', id: '1'},
        {title: 'MARTHA', body: 'WHY DID YOU SAY THAT NAME', author: 'batboy', id: '2'},
        {title: 'King Cringeson', body: 'Jojo is gay', author: 'straightboy', id: '3'}
    ]);

    const [name, setName]=useState("Maria");

    const handleDelete = (blogid) =>{
        const temp=blogs.filter( (blog)=> blog.id!==blogid );
        setBlogs(temp);
    }

    useEffect(()=>{
        console.log("Use effect engaged");
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All posts" handleDelete={handleDelete}/>
            <button onClick={() => setName("Jonathan")}> ENGAGE </button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;