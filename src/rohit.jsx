


const Rohit = (props) => {
    return (
      <>
        <div className=" bg">
          <img className="img1" src={props.img} />
          <br />
          <a className="a" href={props.link}>
          Buy Now
          </a>
          <h1 className=" name"> {props.name}</h1>
          <p className="name1"> {props.price}</p>
        </div>
      
      </>
    );
  };
  export default Rohit