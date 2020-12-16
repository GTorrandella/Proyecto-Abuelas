import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getMultimedia } from '../../../connector';
import ReactPlayer from 'react-player/youtube'

export default function Video() {
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
            <ReactPlayer
                style={{
                    maxWidth: '100%',
                    paddingTop: '10px'
                }}
                url={data ? data.archivo : ''} />
            <p style={{textAlign:'justify'}}>{data ? data.descripcion : ''}</p>
        </React.Fragment>
    );
}