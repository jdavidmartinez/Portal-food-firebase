import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();
    };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Direccion</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Telefono</label>
        <input type="text" id="phone" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">Ciudad</label>
        <input type="text" id="city" />
      </div>
      <button type="text" onClick={props.onCancel}>Cancelar</button>
      <button>Confirmar</button>
    </form>
  );
};

export default Checkout;
