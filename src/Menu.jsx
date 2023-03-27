import {Link} from "react-router-dom"
import './navbar.css'
 const Menu=()=>
{
    return(
        <>
            
            <nav className="navbar">
                <div className="Div"><Link className="Div" to='/'>Art Gallery</Link></div>
                <div className="Div1">
                 <Link className="Link" to='/'>Home</Link>
                 <Link className="Link"to='About'>About</Link>
                <Link className="Link" to='Registration'>Registration</Link>
                <Link className="Link" to ="Login"> login</Link>
                </div>
            </nav>
        </>
    )
} 
export default Menu;