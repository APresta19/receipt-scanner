import { QrReader } from 'react-qr-reader'
import { useState } from 'react';

function QRReader()
{
    const [data, setData] = useState("No data");

    const readData = (result, error) =>
    {
        if(result)
        {
            setData(data);
        }
        else
        {
            console.error(error);
        }
    }

    return(
        <div>
            <h1>QR Reading</h1>
            <QrReader onResult={readData}/>
        </div>
    );
}
export default QRReader;