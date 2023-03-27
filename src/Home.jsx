 import './home.css'
import Rohit from './rohit';
import Arry from './cards';
const Home = () => {
  return (
    
    <>
      <h1 className="h1">
        Welcome to Our Website Home page
        <br />
      </h1>
  
      {Arry.map((item)=>{
      return(
        <>
          <Rohit 
          img = { item.img}

          name={item.name}
            link={item.link}
            price={item.price}
          />
        </>
        
      )
    })}
      
    </>
  );
};
export default Home;
export{Rohit}

