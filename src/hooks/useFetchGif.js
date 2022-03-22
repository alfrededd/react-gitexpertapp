import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGif';


export const useFetchGifs = (category) =>{
    const [state, setState] = useState({
        data:[],
        loading: true
    }); 

     useEffect( ()=>{ 
        getGifs(category)
            .then(imgs =>{
                
                    console.log(imgs);
                    setState({
                        data: imgs,
                        loading: false
                    })

                
            }) //retornando una promesa
    },[]);

    
    
    return state; // {data:[],loading: true };
}
