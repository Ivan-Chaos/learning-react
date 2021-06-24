import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page cannot be found</p>
            <Link to="/">Yankee go home</Link>
        </div>
     );
}
 
export default NotFound;