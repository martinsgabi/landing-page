import Style from "./menu.module.css";
import Img from "./logotipo-vizualize.png";
import Foto from './foto';

function Menu (props) {
    return(
        <section className={Style.principal}>
            <section className={Style.logo}>
                <Foto foto={Img}></Foto>
            </section>
            <nav className={Style.teste}>  
                <ul>
                    <li>
                        <a href="#"> Como funciona</a>
                    </li>
                    <li>
                        <a href="#"> Um pouco mais sobre nós</a>
                    </li>
                    <li>
                        <a href="#"> Se inscreva agora</a>
                    </li>
                </ul>           
            </nav>
        </section>
    );
}
export default Menu;