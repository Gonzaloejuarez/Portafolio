import { SlideData } from "./Data";
import style from '../../../style/Projects.module.css';
export const Slide = () => {
 
return(
<div>
<div className={style.divCard}>
{
    SlideData.map((data) => (
            <div className={style.card}>
                <img src={data.img} alt="imagen"/>
                <h2>{data.name}</h2>
                <div className={style.texto}>
                <p>{data.info}</p>
                </div>
                <div className={style.preCard}>
                    <p className={style.btc}>{data.status}</p>
                    <a href={data.gitHub} className={style.btn}>{data.name}</a>
                </div>   
        </div>
    ))
}
</div>
</div>  
)
}

export default Slide