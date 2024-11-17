import { QrReader } from 'react-qr-reader'
import { useState } from 'react';

function QRReader(props)
{
    const [data, setData] = useState(null);

    const readData = (result, error) =>
    {
        if(!!result) //double equals converts result to a boolean
        {
            const userData = JSON.parse(result.text);
            console.log("User data: " + userData);
            console.log(result.text);
            setData(result.text); //sets the data to result if result.text is null
        }
        else if(error && error.name !== "NotFoundError" && error.name !== "e2")
        {
            console.error("Error: " + error);
        }
    }

    return(
        <div>
            <h1>QR Reading</h1>
            <QrReader onResult={readData}/>
            {data ? (<a href={data}>{data}</a>) : (<h4>No data</h4>)}
        </div>
    );
}
export default QRReader;