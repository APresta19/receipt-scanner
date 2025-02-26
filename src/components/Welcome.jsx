import '../css/Welcome.css';
import qrImage from '../images/ReceiptImg.png';

function Welcome()
{
    return(
        <>
        <div className="welcome">
            <div id="welcome-left">
                <div id="logo">Logo</div>
                <div id="title">Receipt Tracker</div>
                <div id="learn-button"><button className="button-secondary-lg">Learn More</button></div>
            </div>
            <div id="welcome-right">
                <img src={qrImage} id="qr-image" alt="QR Image" width="500" height="300"/>
            </div>
            
        </div>
        <div id="triangle"></div>
        </>
    );
}
export default Welcome;