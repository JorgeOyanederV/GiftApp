import React from 'react'

export const GifGridItem = ({ id, url, title }) => {
   return <img className='animate__animated animate__fadeInDownBig' src={url} alt={title} key={id} />
}
