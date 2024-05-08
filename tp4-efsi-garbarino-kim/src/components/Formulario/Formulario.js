import './formulario.css';
import ItemFormulario from '../ItemFormulario/ItemFormulario';
const Formulario = (citas, setCitas) => {
    const agregarCita = (e) =>{
        setCitas([
            ...citas,
            {

                Mascota: e.target.Mascota.value,
                Dueño:e.target.Dueño.value,
                Fecha: e.target.Fecha.value,
                Hora: e.target.Hora.value,
                Sintomas: e.target.Sintomas.value
            }
        ])
    }
    
    
    return (
        <div class="one-half column">
        <h2>Crear mi cita </h2>
       <form onSubmit={agregarCita}>
        <ItemFormulario texto='Nombre Mascota' name="Mascota" placeHolder='Nombre Mascota' type='text' ></ItemFormulario>
        <ItemFormulario texto='Nombre Dueño' name="dueño"  placeHolder='Nombre dueño de la mascota' type='text' ></ItemFormulario>
        <ItemFormulario texto='Fecha' name="Fecha"  type='date'></ItemFormulario>
        <ItemFormulario texto='Hora' name="Hora" type='time' ></ItemFormulario>
        <label>Sintomas</label>
        <textarea class='u-full-width' name='Sintomas'></textarea>
        <input type='submit' value='Agregar Cita' class='u-full-width button-primary'></input>
       </form>
       </div>
    );
}

export default Formulario;