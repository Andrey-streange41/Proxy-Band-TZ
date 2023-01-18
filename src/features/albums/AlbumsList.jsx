import React from 'react';
import { useSelector } from 'react-redux';
import {selectAlbums, selectLoading} from './albumsSlice';
import Album from '../../components/Album'
import Spinner from 'react-bootstrap/esm/Spinner';

const AlbumsList = () => {
  const albums = useSelector(selectAlbums)
  const loading = useSelector(selectLoading);

  if (loading === "loading") return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
  

  return (
    <ul className='flex flex-wrap gap-2 justify-center items-center'>
        {
          albums.map(el=>(
            <Album key={Math.random().toString(7)} album={el}/>
          ))
        }
    </ul>
  )
}

export default AlbumsList