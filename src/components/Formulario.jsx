import emailJs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

export function Formulario() {
    let navigate = useNavigate();

    function onChange(value) {
        console.log("Captcha value:", value);
      }

    const validarEmail = (email)=>{
        let response  = null
        if(email !== null || email !== undefined){
            response = true
        }else {
            response = false
        }
        return response
    }

    const sendEmail = (e) =>{
        e.preventDefault();
        const email = document.querySelector("#email").value
        const form = document.querySelector("#form")
        if(validarEmail(email.value)){
            emailJs.sendForm('service_qv3a4yn', 'template_qykhiao', e.target, '6b-zO4MoK9QoecD7Y')
            .then((response) => {
                console.log(response);
                if(response.status === 200){
                    navigate("/send")
                }else {
                    alert("Ha ocurrido un error, por favor vuelva a intentarlo en unos momentos.")
                }
            })
            .catch(error => console.log(error))
        }
        navigate("/send")
        form.reset()
    }

  return (
    <div className="container-form">
        <h4>Contactanos..</h4>
        <form id='form' onSubmit={sendEmail}>
            <div className="container-input">
                <label className="label-form">Nombre y Apelido</label>
                <input type="text" name="user_name" className="input-form" required/>
            </div>
            <div className="container-input">
                <label className="label-form">Email</label>
                <input type="email" id="email" name="user_email" className="input-form" required/>
            </div>
            <div className="container-input">
                <label className="label-form">Mensaje</label>
                <textarea cols="30" rows="10" name= "user_message" className="input-form" required></textarea>
            </div>
            <div className="captcha">
            <ReCAPTCHA
                sitekey="6LfzZ-4iAAAAAF71-kiS6F5A4oZ7V1R-Ks6Mp5uj"
                onChange={onChange}
            />,
            </div>
            <button type="submit" className="button-form">ENVIAR</button>
        </form>
    </div>
  )
}
