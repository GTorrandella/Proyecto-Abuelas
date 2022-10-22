import React from 'react';
import ReactPlayer from 'react-player/youtube'

export default function Video(props) {
    const { data } = props;

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