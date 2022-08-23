import { SlideData } from "./Data";
import style from '../../../style/Projects.module.css'
export const Slide = () => {
 
return(
<div>
<div style={{display:"flex"}}>
{
    SlideData.map((data, index) => (
        <div className={style.divGrid}>
            <div className={style.card}>
                <img src={data.img} alt="imagen" style={{width:"30px", height:"30px"}}/>
                <p>{data.name}</p>
                <p>{data.info}</p>
                <div>
                    <p>{data.status}</p>
                    <p>{data.gitHub}</p>
                </div>
            </div>
        </div>
    ))
}
</div>
</div>   
)
}

export default Slide