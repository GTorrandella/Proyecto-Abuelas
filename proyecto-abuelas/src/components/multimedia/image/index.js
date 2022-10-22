import React from 'react';

export default function Image(props) {
    const { data } = props;

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