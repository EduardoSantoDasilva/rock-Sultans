import styles from "./Banner.module.css"

function Banner({imagem}){
    return(
        <>
            <div className={styles.capa}
                style={{ backgroundImage: `url('/imagens/Banner ${imagem}.jpg')` }}>
            </div>
        </>
       
        
    )
}

export default Banner;