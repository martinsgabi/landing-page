import Style from "./rodape.module.css";
import Logo from "./logotipo-vizualize.png"
import Foto from './foto';

function Rodape (props){
    return(
        <section className={Style.Rodape}>
            <div className={Style.cx1}>
                <li>Telefone: 14 994578814</li>
                <li>Endereço Rua Dom Pedro II_Bairro Palmeras</li>
                <li>Email: Vizualize_ConcultoriaDeModa@gmail.com</li>
            </div>
            <div className={Style.cx2}>
                <li>Insta: @Vizualize_</li>
                <li>tiktok: Vizualize_</li>
            </div>
            <div className={Style.cx3}>
            <section className={Style.logo}>
                <Foto foto={Logo}></Foto>
            </section>
            </div>
        </section>
    )
}
export default Rodape;