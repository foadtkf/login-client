

function App() {
  const HandleLogin=event=>{
    event.preventDefault()
const email = event.target.email.value
const password = event.target.password.value
console.log(email,password)
const data={email:{email},
password:{password}}
const url = `http://localhost:5000/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  return (
    <form onSubmit={HandleLogin}>
    <input type="email" name="email" placeholder="Enter email"/>
    <input type="password" name="password" placeholder="Enter password" />
    <input type="submit" value="Login" />
    </form>
  );
}

export default App;
