import { useState } from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs]=useState([
        {title: 'Oh you say can you see', body: 'by the dawn of new light', author: 'gayboy', id: '1'},
        {title: 'MARTHA', body: 'WHY DID YOU SAY THAT NAME', author: 'batboy', id: '2'},
        {title: 'King Cringeson', body: 'Jojo is gay', author: 'straightboy', id: '3'}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All posts"/>
        </div>
     );
}
 
export default Home;