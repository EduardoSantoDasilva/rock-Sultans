import Banner from "components/Banner"
import Titulo from "components/Titulo";
import videos from 'json/db.json';
import { useParams } from "react-router-dom";
import styles from "./Player.module.css"
import NaoEncontrada from "pages/NaoEncontrada";
import Card from "components/Card";
import Safe from "react-safe";

function Player(){

    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

    if(!video){
        return <NaoEncontrada/>
    }

    const VideosRecomendados = videos.filter((video)=>video.id !== Number(parametros.id))
      .sort((a,b)=> b.id - a.id).slice(0,4);

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
        
            <h2 className={styles.tituloOutrosVideos}>Outros videos que você pode gostar:</h2>
            <ul className={styles.VideosRecomendados}>
                {VideosRecomendados.map((video)=>(
                    <li key={video.id} className={styles.liCard}>
                        <Card {...video}/>
                    </li>
                ))}
            </ul>
            
            <div id="disqus_thread"></div>
            <Safe.script>
                {
                    (function() { // DON'T EDIT BELOW THIS LINE
                        var d = document, s = d.createElement('script');
                        s.src = 'https://https-rock-sultans-vercel-app.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                    })()
                }
            </Safe.script>
            
        </>
    )
}

export default Player;