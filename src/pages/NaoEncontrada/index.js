import Banner from "components/Banner";
import Titulo from "components/Titulo";

function NaoEncontrada(){
    return (
        <>
           <Banner imagem="Home"/>
           <Titulo>
                <h1>Pagina não encontrada</h1>
                <p>ops parece que a página não existe </p>
           </Titulo>
           
        </>
        
    )
}

export default NaoEncontrada;