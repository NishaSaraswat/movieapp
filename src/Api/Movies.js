const apiKey = '489a290aa19e07d8d696b5b084550f51';
const apiDomain = 'https://api.themoviedb.org/3/';

export const getPopularMovies = async(page=1)=>{
    try {
        const responce = await fetch(`${apiDomain}/trending/all/day?api_key=${apiKey}`)
        const data = await responce.json()
        return data
    } catch (error) {
        console.log(error)
        return false;
    }
}
export const getAMovie = async(id)=>{
    try {
        const responce = await fetch(`${apiDomain}movie/${id}?api_key=${apiKey}&language=en-US`)
        const data = await responce.json()
        
    } catch (error) {
        console.log(error)
        return false;
    }
}
export const searchMovie = async(query)=>{
    try {
        const responce = await fetch(`${apiDomain}/search/company?api_key=${apiKey}&query=${query}`)
        const data = await responce.json()
        
    } catch (error) {
        console.log(error)
        return false;
    }
}