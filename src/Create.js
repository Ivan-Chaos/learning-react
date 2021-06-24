import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('gayboy');

    const [isPending, setIsPending]= useState(false);
    
    const history = useHistory();


    const handleSumbit = (event) =>{
        event.preventDefault();
        const post ={title, body, author};
        
        //post request 

        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(post)
        }).then(() =>{
            console.log("new post uploaded");
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })

        
    }
    
    return ( 
        <div className="create">
            <h2>Add a new baguette</h2>
            <form onSubmit = {handleSumbit} >
                <label>Post title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label>Post body</label>
                <textarea
                    required
                    value={body}
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>

                <label>Post author</label>
                <select
                    value = {author}
                    onChange = { (e) => setAuthor(e.target.value)}
                >
                    <option value="gayboy">Gayboy</option>
                    <option value="straightboy">Straightboy</option>
                </select>
                {!isPending && <button type="submit">Post!</button>}
                { isPending && <button disabled type="submit">Posting...</button>}
            
            </form>
        </div>
     );
}
 
export default Create;