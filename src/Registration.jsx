import "./registration.css";

const Registration = () => {
  return (
    <>
      <div className=" back">
        <center className="center">
          <h3> Registration</h3>
          <br />
          <h6>first name:</h6>
          <input type="text" placeholder="Enter your fname" />
          <br />
          <br />
          <h6>last name:</h6>
          <input type="text" placeholder="Enter your lname" />
          <br />
          <br />
         <h6> Birth Date</h6>
          <input type="date" />
          <br />
          <br />
        <h6>  Email:</h6>
          <input type="email" placeholder="Enter your email" />
          <br />
          <br />
          <h6>password:</h6>
          <input type="password" placeholder="Enter your password" />
          <br />
          <br />
          <input type="submit" name="submit" />
        </center>
      </div>
    </>
  );
};
export default Registration;
