import { useState } from 'react';
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) =>{

        if ( categories.includes(newCategory))return;
        
        //console.log(newCategory)
        //categories.push(newCategory)

        setcategories([...categories,newCategory])
        //setcategories ( cat => [...cat,'valorant'])

    }

    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory
        //setcategories= { setcategories }/>
        onNewCategory={ (event) => onAddCategory(event) }
        
        /> 
        

        {/* listado de Gif */}
        

       
        {
            categories.map((category) => (

                <GifGrid 
                key={category} 
                category={category}/>

            ))
        }                  
        
    </>
  )
}



