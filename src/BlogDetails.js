import { div } from "prelude-ls";
import { useParams } from "react-router-dom";
import useFetch from './useFetch'

const BlogDetails = () => {
    const { id } = useParams();
    const { data: post, isPending, error}=useFetch("http://localhost:8000/blogs/"+id); 

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div> Error: {error} </div>}
            { post &&(
                <article>
                    <h2> Post id - {post.id} </h2>
                    <h3>Posted by: {post.author}</h3>
                    <p> {post.body} </p>
                </article>)
            }
        </div>
     );
}
 
export default BlogDetails;