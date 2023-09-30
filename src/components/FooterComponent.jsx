import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer =()=>{
    return(
     <div className="footer">
      <ul><li><FontAwesomeIcon icon={faFacebookF} size="lg" /></li>
      <li><FontAwesomeIcon icon={faXTwitter} size="lg" style={{color: "#000000",}} /></li>
      <li><FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#000000",}} /></li>
      </ul>
     </div>



    )
}
export default Footer;