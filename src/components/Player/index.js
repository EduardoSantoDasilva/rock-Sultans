import Banner from "components/Banner"
import Titulo from "components/Titulo";
import videos from 'json/db.json';
import { useParams } from "react-router-dom";
import styles from "./Player.module.css"
import NaoEncontrada from "pages/NaoEncontrada";

function Player(){

    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

    if(!video){
        return <NaoEncontrada/>
    }

    return(
        <>
            <Banner imagem="Player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section>
            <iframe className={styles.container}
                width="100%"
                
                src={video.link}
                title={video.titulo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
            </section>
            
        </>
    )
}

export default Player;