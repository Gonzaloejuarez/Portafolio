import React, {useState,useRef} from "react";
import emailjs from '@emailjs/browser';
import styles from '../../style/ContactMe.module.css'
import { RedesSociales } from "../Footer/RedesSociales";
export const Contactame = () => {
    const[done, setDone] = useState(false)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h2j1kx6', 'template_tt3zs6k', form.current, 'AN5g3dfhOLRYLcv6A')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

return(
    <section id="contactame" className={styles.sectionForm}>
            <div className={styles.divFormulario}>
            </div>
                <h1 className={styles.divH}>
                    Contactame
                </h1>
                <form action="" ref={form} onSubmit={sendEmail} className={styles.formulario}>
                    <label htmlFor="" style={{color:"#fff"}}>Nombre</label>
                    <input type="text" name="from_name" placeholder="Ingresa tu nombre" />
                    <label htmlFor="" style={{color:"#fff"}}>Email</label>
                    <input type="email" name="from_name" placeholder="tuEmail@gmail.com"/>
                    <label>Mensaje</label>
                    <textarea type="text" name="message" placeholder="Ingresa el mensaje" />
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <button type="submit" value="Send" className={styles.button}><div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg></div>
                    </div><span>Enviar</span>
                    </button>
                    </div>
                    {/* <span>{done && "Gracias por contactarte conmigo"}</span> */}
                </form>
                {/* <div className={styles.redesSociales}>
                <RedesSociales />
                </div> */}
    </section>
)
}


export default Contactame