import './itemFormulario.css';

const ItemFormulario = (
    {
        texto = "default",
        placeHolder = "ingrese texto aqui",
        name="nombre",
        clase = "u-full-width",
        type = "type"
    }
    
    ) => {
    return (
        <>
            <label>{texto}</label>
            <input name={name} placeholder={placeHolder} className={clase} type={type}/>
        </>
    );
}

export default ItemFormulario;