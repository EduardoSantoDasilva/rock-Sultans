import Banner from "components/Banner";
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritoContext } from "contextos/Favoritos";

function Favoritos(){
    const {favorito} = useFavoritoContext();
    return(
       <>
        <Banner imagem="Favoritos"/>
        <Titulo>
            <h1>Musicas Favoritas</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav)=>{
               return <Card {...fav} key={fav.id}/>
            })}
        </section>
       
       </>
    )
}

export default Favoritos;