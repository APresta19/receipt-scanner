import '../css/Welcome.css';
import qrImage from '../images/frame.png';

function Welcome()
{
    return(
        <>
        <div className="welcome">
            <div id="welcome-left">
                <div id="logo">Logo</div>
                <div id="title">Receipt Scanner</div>
                <div id="learn-button"><button className="button-secondary-lg">Learn More</button></div>
            </div>
            <div id="welcome-right">
                <img src={qrImage} id="qr-image" alt="QR Image" />
            </div>
            
        </div>
        <div id="triangle"></div>
        </>
    );
}
export default Welcome;