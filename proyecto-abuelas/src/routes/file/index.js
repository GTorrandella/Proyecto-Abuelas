import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {
    getMultimedia,
} from '../../connector';
import Base from '../../components/multimediaTemplate'
import File from '../../components/multimedia/file'

export default function FilePage() {
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
            <Base multimedia={<File data={data}/>}
            multimediaId={id}/>
        </React.Fragment>
    );
}