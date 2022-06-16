import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div style={{fontFamily:'inter'}}>
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
