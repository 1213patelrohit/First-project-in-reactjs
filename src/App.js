

import Home from './Home';
import Menu from './Menu';
import About from './About';
import { Routes,Route}from "react-router"
import Registration from './Registration';
import Login from './login';


const  App=()=>
 {
  return (
    <>
<Menu/>
<>
<Routes>
 <Route path='/' element = {< Home/>}/>
 <Route path='About' element = {< About/>}/>
 <Route path='Registration' element = {< Registration/>}/>
 <Route path = "login" element ={< Login/>}/>
 </Routes>
</>
</>
      );
}

export default App;
