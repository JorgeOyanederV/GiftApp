import React, { useState } from 'react';
import PropTypes from 'prop-types'
export const AddCategory = ({ setCategories }) => {

   const [inputValue, setinputValue] = useState('Hola Mundo');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue) {
         setCategories(cats => [inputValue, ...cats]);
      }
      setinputValue('');
   }

   return (
      <form onSubmit={handleSubmit} className='w-100'>
         <input
            type='text'
            value={inputValue}
            onChange={e => setinputValue(e.target.value)} />
      </form>
   )
}
AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired,

};