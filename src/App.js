import React, {useState}  from 'react';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import Message from "./components/Message";
import Result from "./components/Result";
import Spinner from "./components/Spinner"

function App() {
  // contador prueba
  const [mount, setMount] = useState(0);
  const [timePay, setTimePay] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  let component;

  if (loading) {
    component = <Spinner />
  } else if (total === 0) {
    component = <Message />
  } else{
    component = <Result
                  total = {total}
                  timePay = {timePay}
                  mount = {mount} 
                  />
  }

  return (
    <div className="App">
      <Header  />

      <div className = "container">
        <Form mount = {mount} setMount = { setMount }
        timePay = {timePay} setTimePay = {setTimePay}
        setTotal = {setTotal}
        setLoading = {setLoading}
        />

      <div className = "mensajes">
        {component}
      </div>

      </div>

    </div>
  );
}

export default App;
