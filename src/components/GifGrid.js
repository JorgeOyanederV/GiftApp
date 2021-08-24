import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

   const { data: images, loading } = useFetchGifs(category);

   return (
      <div className="flex">
         <h3>{category}</h3>
         {loading && <p> Loading</p>}
         <div className='flex'>
            {
               images.map(image => <GifGridItem key={image.id} {...image} />)
            }
         </div>
      </div>
   )
}
