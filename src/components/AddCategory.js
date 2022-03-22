import React,{ useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
 
    const [inputValue,setInputValue]=useState('');
    
    const handleInputChange = (e)=>{
        
        setInputValue(e.target.value)//lo que se escribe en el text
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //validacion que el input no tenga campos vacios
        if(inputValue.trim().length>2){
            setCategories(ctg=>[inputValue,...ctg]);
            setInputValue('');
        }
        
    }

return (
    
    <form onSubmit={handleSubmit}>
        <h1>{ inputValue }</h1>
        <input type="text" 
            value={inputValue} 
            onChange={ handleInputChange } 
        />
    </form>
    
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}