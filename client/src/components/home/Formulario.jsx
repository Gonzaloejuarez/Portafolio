import React, {useState,useRef} from "react";
import emailjs from '@emailjs/browser';

export const Formulario = () => {
    const[done, setDone] = useState(false)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h2j1kx6', 'template_tt3zs6k', form.current, 'AN5g3dfhOLRYLcv6A')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

return(
    <div>
            <div>
                <h1>
                    Contactame
                </h1>
                <form action="" ref={form} onSubmit={sendEmail}>
                    <label htmlFor="" style={{color:"#fff"}}>Nombre</label>
                    <input type="text" name="to_name" placeholder="Ingresa tu nombre" />
                    <label htmlFor="" style={{color:"#fff"}}>Email</label>
                    <input type="email" name="from_name" placeholder="tuEmail@gmail.com"/>
                    <label>Mensaje</label>
                    <textarea type="text" name="message" placeholder="Ingresa el mensaje" />
                    <input type="submit" value="Send" className="button"/>
                    <span>{done && "Gracias por contactarte conmigo"}</span>
                </form>
            </div>
    </div>
)
}


export default Formulario