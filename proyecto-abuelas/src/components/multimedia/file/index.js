import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getMultimedia } from '../../../connector';

export default function File(props) {
    const { id } = useParams();
    const [data, setData] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMultimedia(id)
            setData(result);
        };
        fetchData();
    }, [id]);

    return (
        <React.Fragment>
            <object data={data ? data.archivo : ''} width="100%" height="100%">
                <p><a href={data ? data.archivo : ''}></a></p>
            </object>
            <p style={{textAlign:'justify'}}>{data ? data.descripcion : ''}</p>
        </React.Fragment>
    );
}