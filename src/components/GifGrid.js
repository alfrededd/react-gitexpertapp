import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

  
    const {data:image,loading}=useFetchGifs(category);
    
 
  return (
      <>
        <h3 className="animate__animated animate__bounce animate__fadeIn">{ category }</h3>

        {loading && <p className="animate__animated animate__bounce animate__flash">Loading</p>}

        <div className="card-grid animate__animated animate__bounce animate__fadeIn">
            
                {
                    image.map( img =>(
                        <GifGridItem 
                        key={img.id} 
                        {...img}
                        
                        />
                ))
                }
        
              </div>
    </>
  )
}
