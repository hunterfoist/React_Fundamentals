import { Row } from "reactstrap";

const Footer = () => {
    let d = new Date();
    let y = d.getFullYear();
    
    return(
        
        <>
        <footer>
        <Row>
        <p>Copyright EFA {y}</p>
        </Row>
        </footer>
        </>
    )
}



export default Footer;