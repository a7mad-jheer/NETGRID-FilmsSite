import {KEY , APIURL } from "@/app/constants"


const fetchFn = (url : string , cache : number) => fetch(url , {next : {revalidate : cache}}).then((res) => res.json());


export const searchMovies = async function (
    kindOfMovie : string,
    query ?: string,
    page =1 ,
    page_size = 20,
    cache : number = 0,
    filter?:{filterName : string , option: string }[]
){
    const data = await fetchFn(
        `${APIURL}${kindOfMovie}?search=${query}&page_size=${page_size}&page=${page}&${filter?.map((filter:any) => `${filter.filterName}=${filter.option}`).join("&")}&api_key=${KEY}`,
    cache
)
    const count = data.total_results;;
    return {data , count}
    
}




