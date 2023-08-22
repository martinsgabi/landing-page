import Style from "./corpo.module.css";
import Img from "./imgdobloco2.png";
import Foto from './imgBloco2';

function Corpo (props){
    return(
        <div className={Style.Flex}>
            <div className={Style.Caixa1}>
                <div className={Style.bloco1}>
                    <p>O quanto de tempo você perde olhando para o guarda-roupa e pensa: Qual roupa eu uso hoje? ou Será que esse look está legal? Se você se identifica com essas situações, então você precisa conhecer a Vizualize!
                    Seja para o dia-a-dia, para uma ocasião especial ou até mesmo para a entrevista de emprego dos sonhos, a Vizualize pode ser a chave para desbloquear todo o potencial que existe em você!
                    Através do processo de Consultoria, vou te guiar a descobrir quais são as suas melhores cores, estampas e as modelagens que mais valorizam o seu corpo e Estilo Pessoal, além de receber o conhecimento estratégico necessário para montar looks incríveis sem precisar gastar rios de dinheiro</p>
                    <br/>
                    <p>Imagem é Comunicação!</p>
                </div>
            </div>
            <div className={Style.Caixa2}>
                <div className={Style.bloco2}>
                
                    <p>Benefícios da Consultoria de Imagem e Estilo:</p>
                    <br/>
                    Ajuda a descobrir seus estilos predominantes
                    <br/>
                    Valoriza seus pontos fortes
                    <br/>
                    Mais entendimento na hora de comprar roupas e itens do vestuário
                    <br/>
                    Seu guarda-roupa estará muito mais otimizado
                    <br/>
                    Menos tempo perdido na hora de compor looks
                    <br/>
                    Muito mais possibilidades de looks
                    <br/>
                    Mais autoconfiança para se vestir
                </div>
            </div>
        </div>       
    )
}
export default Corpo;