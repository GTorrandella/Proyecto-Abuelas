import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {
    getMultimedia,
} from '../../connector';
import Base from '../../components/multimediaTemplate'
import Audio from '../../components/multimedia/audio'
import { multimediaStyle } from '../../styles/multimedia';

export default function AudioPage() {
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
            multimedia={<Audio data={data}/>}
            multimediaId={id}/>
        </React.Fragment>
    );
}