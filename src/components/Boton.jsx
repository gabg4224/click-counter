
import "../StyleSheet/Boton.css";
function Boton({name,isBotonClick,clickController}){
  return(
<button
className={ isBotonClick ? 'boton-add': 'boton-reset' }
onClick ={clickController}
>



{name}
</button>

  );
}
export default Boton