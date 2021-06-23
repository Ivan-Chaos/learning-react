import { useState } from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs]=useState([
        {title: 'Oh you say can you see', body: 'by the dawn of new light', author: 'gayboy', id: '1'},
        {title: 'MARTHA', body: 'WHY DID YOU SAY THAT NAME', author: 'batboy', id: '2'},
        {title: 'King Cringeson', body: 'Jojo is gay', author: 'straightboy', id: '3'}
    ]);

    const handleDelete = (blogid) =>{
        const temp=blogs.filter( (blog)=> blog.id!==blogid );
        setBlogs(temp);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All posts" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter( (blog)=> blog.author==="batboy")} title="Batboys posts" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;