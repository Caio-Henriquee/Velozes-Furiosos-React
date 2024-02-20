import style from  "./styles.module.css"
export default function Image(props){
    return(
        <div className={style.container}>
             <img src={props.imagem} alt="" />      
        </div>
    )
}