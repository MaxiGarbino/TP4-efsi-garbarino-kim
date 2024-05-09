import './Card.css';
const Card = (
    {
        Mascota = "Default mascota",
        Dueño = "Default dueño",
        Fecha = "2021-08-05",
        Hora= "08:20",
        Sintomas = "Le duele la pierna",/*
        citas = citas,
        setCitas = setCitas
        */
    }
    
    ) => {
        /*
        const buscarCita = (element) => element == {Mascota,Dueño,Fecha,Hora,Sintomas};

        const eliminarCita = (e) => {
            let index = citas.findIndex(buscarCita);
            setCitas([
                citas.splice(index, 1);
            ])
        }
        */

    return (
        <>
            <div className='cita'>
                <p>Mascota: <span>{Mascota}</span></p>
                <p>Dueño: <span>{Dueño}</span></p>
                <p>Fecha: <span>{Fecha}</span></p>
                <p>Hora: <span>{Hora}</span></p>
                <p>Sintomas: <span>{Sintomas}</span></p>
                <button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </>
    );
}

export default Card;