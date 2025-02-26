import  QrReader  from 'react-qr-scanner'
import { useState } from 'react';

function QRReader(props)
{
    const [data, setData] = useState(null);

    const readData = (result) =>
    {
        if(!!result) //double equals converts result to a boolean
        {
            try
            {
                const userData = JSON.parse(result.text);
                console.log("User data: " + userData);
                console.log(result.text);
                setData(userData); //sets the data to result if result.text is null
            } catch(error) {
                console.warn(error);
                setData(result.text);
            }
        }
    }

    return(
        <div>
            <h1>QR Reading</h1>
            <QrReader delay={300}
                style={{ width: '100%' }}
                onError={(error) => console.error("Error: ", error)}
                onScan={readData} />
            {data ? (<a href={data}>{data}</a>) : (<h4>No data</h4>)}
        </div>
    );
}
export default QRReader;