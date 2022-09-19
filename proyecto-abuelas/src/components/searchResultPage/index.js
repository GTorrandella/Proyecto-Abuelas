import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar
} from '@material-ui/core';
import { search } from '../../connector';
import { searchBaseStyle } from '../../styles/search';

export default function SearchResultPage() {

  const searchPageStyle = searchBaseStyle();
  const location = useLocation();
  const url = location.search;
  const params = new URLSearchParams(url);
  const query = params.get('query');
  const [data, setData] = useState(null);

  useEffect(() => {
    if(query !== null && query !== '') {
      const fetchData = async () => {
        const result = await search(query)
        console.log(result)
        setData(result);
      };
      fetchData();
    }
  }, [query]);
  
  return (
    <React.Fragment>
      <Container maxWidth='md' className={searchPageStyle.root}>
        {(data !== null) ? (
        <ImageList style={{margin: '5px'}}>
          {(data.actividad.map((actividad) => (
          <ImageListItem key={actividad.id}>
            <img
              src={``}
              srcSet={``}
              alt={actividad.nombre}
              loading="lazy"
            />
            <ImageListItemBar
              title={actividad.nombre}
              position='bottom'
            />
          </ImageListItem>)))}
        </ImageList>) : 
        (<div>BUSQUEDA VACIA</div>)}
      </Container>
    </React.Fragment>
  );
}



