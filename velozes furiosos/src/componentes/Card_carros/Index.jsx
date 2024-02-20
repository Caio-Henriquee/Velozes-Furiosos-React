import Title from "../Card_carros/Title/Index"
import Movie from "../Card_carros/Movie/Index" 
import style from  "./style.module.css"



export default function Card(props){
    return(
        <div className={style.container}>
            <img src={props.imagem} alt="imagem"/>
            <Movie>
                <div>{props.filme}</div>
            </Movie>
            <Title>
                <div>{props.titulo}</div>
            </Title> 
        </div>
    )           
}       