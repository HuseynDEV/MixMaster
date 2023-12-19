import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList';
const cocktailSearchUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


export const loader = async ({ request }) => {
    console.log(request, 'request')
    const url = new URL(request.url)

    const searchTerm = url.searchParams.get('search') || ''
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
    return { drinks: response.data.drinks, searchTerm }
}
const Landing = () => {
    const { drinks, searchTerm } = useLoaderData()
    return (
        <>
            <SearchForm searchParams={searchTerm} />
            <CocktailList drinks={drinks} />
        </>
    )
}

export default Landing