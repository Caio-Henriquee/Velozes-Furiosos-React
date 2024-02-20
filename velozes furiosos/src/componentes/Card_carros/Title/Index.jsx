import style from  "./style.module.css";

export default function Title(props){
    return(
        <div className={style.container}>
            {props.children}
        </div>
    )
}