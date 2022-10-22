import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {
    getActivity,
} from '../../connector';
import Base from '../../components/multimediaTemplate';
import Activity from '../../components/multimedia/activity';
import { activityStyle } from '../../styles/multimedia';

export default function ActivityPage() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const className = activityStyle();
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getActivity(id)
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
            multimedia={<Activity data={data}/>}
            activityId={id}/> : <></>}
        </React.Fragment>
    );
}