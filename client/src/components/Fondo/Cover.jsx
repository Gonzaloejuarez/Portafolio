import covertVideo from '../img/3.mp4';
import './Cover.css';
import { Navbar } from '../Navbar';
import Contactame from '../home/ContactMe/Contactame';
import Footer from '../home/Footer/Footer';
export const Cover = () => {
    return(
        <div className='cover-intro'>
            <Navbar />
            <video className='video' src={covertVideo} autoPlay loop muted></video>
            <h1>
                Gonzalo E Juarez
            </h1>
            <h3>
                Desarrollador Full Stack y tecnico informatico
            </h3>
        </div>
    )
}

export default Cover