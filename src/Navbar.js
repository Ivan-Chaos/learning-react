import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The bloguette</h1>
            <div className="links">
               <Link to="/">Le homé</Link>
               <Link to="/create" style={{
                   backgroundColor: '#ffe68c', 
                   borderRadius: '10px',
                   padding: '10px'
               }}>New baguette</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;