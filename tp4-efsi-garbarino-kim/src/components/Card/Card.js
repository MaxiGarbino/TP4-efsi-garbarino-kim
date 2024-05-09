import './Card.css';
const Card = (
    {
        Id = Date.now(),
        Mascota = "Default mascota",
        Dueño = "Default dueño",
        Fecha = "2021-08-05",
        Hora= "08:20",
        Sintomas = "Le duele la pierna",
        citas,setCitas
    }
    
    ) => {
        const eliminarCita = (Id) => {
            console.log(citas);
            setCitas([
              citas.filter(c =>
                c.Id !== Id
              )
              ]);
            console.log(citas);
          }
    return (
        <>
            <div className='cita'>
                <p>Mascota: <span>{Mascota}</span></p>
                <p>Dueño: <span>{Dueño}</span></p>
                <p>Fecha: <span>{Fecha}</span></p>
                <p>Hora: <span>{Hora}</span></p>
                <p>Sintomas: <span>{Sintomas}</span></p>
                <button onClick={eliminarCita} class="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </>
    );
}

export default Card;