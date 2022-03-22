//promesa que retorna los gif
export const getGifs =async(category)=>{
    
        
    //haciendo peticiones http
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=151acr9VjCgqWfQhQvmbLtI1uqobqSGE`;

    const resp = await fetch( url );

    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}