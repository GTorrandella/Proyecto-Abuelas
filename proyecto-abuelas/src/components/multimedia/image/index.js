import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getMultimedia } from '../../../connector';

export default function Image(props) {
    const { id } = useParams();
    const [data, setData] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMultimedia(id)
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <img src={data ? data.archivo : ''}
                style={{
                    width: '100%',
                    paddingTop: '10px'
                }}
                alt=''/>
            <p style={{textAlign:'justify'}}>{data ? data.descripcion : ''}</p>
        </React.Fragment>
    );
}