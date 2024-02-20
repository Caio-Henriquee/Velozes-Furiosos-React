import style from  "./style.module.css"
export default function Movie(props){
    return(
        <div className={style.container}>
            <h2>{props.children}</h2>
        </div>
    )
}