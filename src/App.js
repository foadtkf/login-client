

function App() {
  const HandleLogin=event=>{
    event.preventDefault()
const email = event.target.email.value
const password = event.target.password.value
console.log(email,password)
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
