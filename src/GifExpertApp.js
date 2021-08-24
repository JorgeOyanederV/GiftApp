import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = props => {

   const [categories, setCategories] = useState(['One Punch']);

   return (
      <>
         <h2>GiftExpertApp</h2>
         <hr />
         <AddCategory setCategories={setCategories} />
         <ol>
            {categories.map(category => <
               GifGrid key={category}
               category={category}
            />)}
         </ol>

      </>
   )
}

export default GifExpertApp