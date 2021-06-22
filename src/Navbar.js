const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The bloguette</h1>
            <div className="links">
               <a href="/">Le homé</a>
               <a href="/create" style={{
                   backgroundColor: '#ffe68c', 
                   borderRadius: '10px',
                   padding: '10px'
               }}>New baguette</a>
            </div>
        </nav>
     );
}
 
export default Navbar;