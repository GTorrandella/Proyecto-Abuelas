import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {
    getMultimedia,
} from '../../connector';
import Base from '../../components/multimediaTemplate'
import File from '../../components/multimedia/file'
import { fileStyle } from '../../styles/multimedia';

export default function FilePage() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const className = fileStyle();
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMultimedia(id)
            setData(result);
        };
        fetchData();
    }, [id]);

    return (
        <React.Fragment>
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
            multimedia={<File data={data}/>}
            multimediaId={id}/>
        </React.Fragment>
    );
}