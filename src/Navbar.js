const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="Create" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"
                }}>New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;