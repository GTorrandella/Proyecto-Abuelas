import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {
    getMultimedia,
} from '../../connector';
import Base from '../../components/multimediaTemplate'
import Image from '../../components/multimedia/image'
import { multimediaStyle } from '../../styles/multimedia';

export default function ImagePage() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const className = multimediaStyle();
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMultimedia(id)
            setData(result);
        };
        fetchData();
    }, [id]);

    return (
        <React.Fragment>
            {(data !== null) ? 
            <Base classes={{
                base: className.base,
                sideNav:{
                    base: className.sideNavbase,
                    text: className.sideNavtext,
                    list: className.sideNavList,
                    item:{
                        activated: className.sideNavItemActivated,
                        deactivated: className.sideNavItemDeactivated,
                    }
                }
            }}
            multimedia={<Image data={data}/>}
            multimediaId={id}/> : <></>}
        </React.Fragment>
    );
}