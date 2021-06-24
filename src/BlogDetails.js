import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'

const BlogDetails = () => {
    const { id } = useParams();
    const { data: post, isPending, error}=useFetch("http://localhost:8000/blogs/"+id); 
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+post.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div> Error: {error} </div>}
            { post &&(
                <article>
                    <h2> Post id - {post.id} </h2>
                    <h3>Posted by: {post.author}</h3>
                    <p> {post.body} </p>
                    <button onClick={handleDelete}>Delete!</button>
                </article>)
            }
        </div>
     );
}
 
export default BlogDetails;