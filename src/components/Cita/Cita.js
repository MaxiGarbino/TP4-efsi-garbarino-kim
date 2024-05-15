import './Cita.css';
import Card from '../Card/Card';

const Cita = ({citas,setCitas}) => {
    
    return (
       <div class="one-half column">
       <h2>Administra tus citas </h2>
       <form>
        {citas.map(c =><> <Card Id = {c.Id} Mascota={c.Mascota} Dueño={c.Dueño} Fecha={c.Fecha} Hora={c.Hora} Sintomas={c.Sintomas} citas={citas} setCitas={setCitas}/> </>)}
       </form>
       </div>
    );
}

export default Cita;