import React from "react";
import "./LoginForm.css";
import Form from "react-bootstrap/Form";
const LoginForm = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("token receieved");
          console.log(data.token);
        } else {
          alert(data.error);
        }
      });
  };
  return (
    <div className="d-flex">
      <Form
        className="w-100 p-5  mt-md-5"
        onSubmit={handleLogin}
      >
        <h2 className="text-center">
          <strong>Welcome Back</strong>
        </h2>
        <p className="text-center subtitle">
          <sub style={{color:'#023047'}}>Sub-title text goes here</sub>
        </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email address *"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password *"
          />
        </Form.Group>
        
        <input className="form-control text-white" type="submit" value="Login" style={{fontWeight: 'bold',backgroundColor:'#023047'}} />
        <div className="d-flex justify-content-between">
        <div>
        <sub><input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label htmlFor="vehicle3" style={{color:'#023047'}}> Remember password</label></sub>
  </div>
  <sub><p  className="text-end mt-3 mt-md-2"><a href=".." style={{textDecoration:'none',color:'#023047'}} > Forgot password?</a></p ></sub>
  </div>
      </Form>
      <img className="d-none d-md-block d-lg-block " src="https://cdn.dribbble.com/users/6024852/screenshots/15534392/media/aba2b04e24a7993ef3bfd5a3a048b6c4.jpg?compress=1&resize=768x576&vertical=top" alt="" />
    </div>
  );
};

export default LoginForm;
