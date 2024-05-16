import './formulario.css';
import ItemFormulario from '../ItemFormulario/ItemFormulario';
const Formulario = ({citas, setCitas}) => {
    const agregarCita = (e) =>{
        e.preventDefault();
        console.log(e.target.Mascota.value.length)
        console.log(e.target.Fecha.value.length)
        console.log(e.target.Hora.value.length)
        if(e.target.Mascota.value.length !== 0 && e.target.Dueño.value.length !== 0 && e.target.Sintomas.value.length !== 0 && e.target.Fecha.value.length !== 0 && e.target.Hora.value.length !== 0)
        {
            if(window.confirm("¿Esta seguro de agregar esta cita?")){
            
                setCitas([
                ...citas,
                {
                    Id: Date.now(),
                    Mascota: e.target.Mascota.value,
                    Dueño:e.target.Dueño.value,
                    Fecha: e.target.Fecha.value,
                    Hora: e.target.Hora.value,
                    Sintomas: e.target.Sintomas.value
                }
            ])}
        }
        else
        {
            alert('Los datos estan mal')
        }
       
    }
    
    
    return (
        <div class="one-half column">
        <h2>Crear mi cita </h2>
        <form onSubmit={agregarCita}>
        <ItemFormulario texto='Nombre Mascota' name="Mascota" placeHolder='Nombre Mascota' type='text' ></ItemFormulario>
        <ItemFormulario texto='Nombre Dueño' name="Dueño"  placeHolder='Nombre dueño de la mascota' type='text' ></ItemFormulario>
        <ItemFormulario texto='Fecha' name="Fecha"  type='date'></ItemFormulario>
        <ItemFormulario texto='Hora' name="Hora" type='time' ></ItemFormulario>
        <label>Sintomas</label>
        <input type='text' class='u-full-width' id='textarea' name='Sintomas'></input>
        <input type='submit' value='Agregar Cita' class='u-full-width button-primary'></input>
       </form>
       </div>
    );
}

export default Formulario;