import React from 'react';

export default function Activity(props) {
    const { data } = props;

    return (
        <React.Fragment>
            <p style={{textAlign:'justify'}}>{data ? data.nombre : ''}</p>
        </React.Fragment>
    );
}