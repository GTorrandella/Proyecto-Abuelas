import React from 'react';

export default function File(props) {
    const { data } = props;

    return (
        <React.Fragment>
            <object data={data ? data.archivo : ''}
                    style={{
                        width:"100%", 
                        height:"80vh"
                    }}>
                <p><a href={data ? data.archivo : ''}></a></p>
            </object>
            <p style={{textAlign:'justify'}}>{data ? data.descripcion : ''}</p>
        </React.Fragment>
    );
}