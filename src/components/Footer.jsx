import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "../css/Footer.module.css";

function Footer(){
    return(
        <footer>
            <p>Todos os direitos reservados - 2024</p>
            <div className={styles.logos}>
                <FaFacebook className={styles.item}/>
                <FaLinkedin className={styles.item}/>
            </div>
        </footer>
    )
}
export default Footer;