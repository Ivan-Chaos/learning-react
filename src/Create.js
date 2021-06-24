import { useState } from "react";

const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('gayboy');
    
    return ( 
        <div className="create">
            <h2>Add a new baguette</h2>
            <form>
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
                <button type="submit">Post!</button>
            
            </form>
        </div>
     );
}
 
export default Create;