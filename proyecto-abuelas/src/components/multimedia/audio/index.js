import React from 'react';
import ReactPlayer from 'react-player/soundcloud'

export default function Audio(props) {

    const { data } = props

    return (
        <React.Fragment>
            <ReactPlayer
                config={{
                    soundcloud: {
                        options: {
                            show_artwork: true,
                            visual: false,
                            show_comments: false
                        }
                    }
                }}
                style={{
                    maxHeight:'166px',
                    width:'100%'
                }}
                url={data ? data.archivo : ''} />
            <p style={{textAlign:'justify'}}>{data ? data.descripcion : ''}</p>
        </React.Fragment>
    );
}