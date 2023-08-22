import Style from "./logorodope.module.css";
function Foto (props){
    return(
        <>
        <figure className={Style.figure}>
            <img className={Style.foto} src={props.foto} alt=""/>
        </figure>
        </>
    )
}
export default Foto;