import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs]=useState([
        {title: 'Oh you say can you see', body: 'by the dawn of new light', author: 'gayboy', id: '1'},
        {title: 'MARTHA', body: 'WHY DID YOU SAY THAT NAME', author: 'batboy', id: '2'},
        {title: 'King Cringeson', body: 'Jojo is gay', author: 'straightboy', id: '3'}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;