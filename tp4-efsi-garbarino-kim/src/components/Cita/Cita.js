import './Cita.css';
import Card from '../Card/Card';

const Cita = (citas,setCitas) => {
    
    
    console.log(citas.citas);
    return (
       <div class="one-half column">
       <h2>Administra tus citas </h2>
       <form>
        {citas.citas.map(c =><> <Card Mascota={c.Mascota} Dueño={c.Dueño} Fecha={c.Fecha} Hora={c.Hora} Sintomas={c.Sintomas}/> </>)}
       </form>
       </div>
    );
}

export default Cita;