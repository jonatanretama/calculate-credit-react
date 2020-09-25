import React, {useState} from 'react';
import { calculateTotal } from "../helpers";

function Form(props) {    
    const {mount, setMount, timePay, setTimePay, setTotal, setLoading} = props;

    const readMount = (event) => {
        //console.log(event.target.value)
        setMount( parseInt( event.target.value));
    }

    // Definir state
    const [error, setError] = useState(false);

    // Click Submit button
    const calculateLoan = event => {
        event.preventDefault();

        // Validar
        if (mount === 0 || timePay === '') {
            setError(true)
        } else{
            // Eliminar error previo
            setError(false)
        }

        // Habilitar Spinner
        setLoading(true);
        
        setTimeout( () => {
            // Realiar cotizacion
            const total = calculateTotal(mount, timePay);
    
            // Guardar total despues de calcular
            setTotal(total);

            // Deshabilitar spinner
            setLoading(false);

        }, 3000);
    }

    return (
        <div>
            <form onSubmit = {calculateLoan}>
                {/* {mount}
                {timePay} */}
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange = { readMount }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange = {event => setTimePay( parseInt(event.target.value))}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="u-full-width" 
                  />
              </div>
          </div>
  </form>

        {(error) ? <p className = "error">
            Todos los campos son obligatorios
        </p> : null}
        

        </div>
    )
}

export default Form
