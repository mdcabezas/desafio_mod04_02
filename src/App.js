import { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";

function App() {
  const [form, setForm] = useState({ inputName: "", inputPassword: "" })
  const [message, setMessage] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    if (form.inputName === "ADL" && form.inputPassword === "252525") {
      setMessage({ msg: "Sesión iniciada correctamente", type: "success" })
      setForm({ inputName: "", inputPassword: "" })
    } else {
      setMessage({ msg: "Los datos son incorrectos", type: "danger" })
      setForm({ inputName: "", inputPassword: "" })
    }
  }

  const onChange = (e) => {
    if(message !== {}) {setMessage({})}
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  return (
    <>
      <div className="container w-25 text-center">
        <h1>Acceso</h1>
        {message ? <Message type={message.type} message={message.msg} /> : null}
        <form className="mt-3" onSubmit={onSubmit}>
          <div className="row-auto my-3 form-floating">
            <input type="text" onChange={onChange} value={form.inputName} className="form-control" id="inputName" />
            <label htmlFor="name" className="form-label">Nombre</label>
          </div>
          <div className="row-auto my-3 form-floating">
            <input type="password" onChange={onChange} value={form.inputPassword} className="form-control" id="inputPassword" />
            <label htmlFor="password" className="form-label">Contraseña</label>
          </div>
          <div className="row-auto">
            {(form.inputName !== "" && form.inputPassword !== "") ? <Button text="Inicio sesión" /> : null}
          </div>
        </form>
      </div>
    </>

  );
}

export default App;
