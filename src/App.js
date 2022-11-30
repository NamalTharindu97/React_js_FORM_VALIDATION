import "./App.css";
import FormInput from "./components/FormInput";
import { useRef } from "react";

function App() {
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput refer={usernameRef} placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full name" />
        <FormInput placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
