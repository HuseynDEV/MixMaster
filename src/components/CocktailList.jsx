import React from 'react'
import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

const CocktailList = ({ drinks }) => {
    if (!drinks) {
        return (
            <h2 style={{ textAlign: "center" }}>No matching cocktails found...</h2>
        )
    }
    const formattedDrinks = drinks.map(item => {
        const { idDrink, strDrink, strDrinkThumb, strAlcholic, strGlass } = item
        return {
            id: idDrink,
            name: strDrink,
            image: strDrink,
            info: strAlcholic,
            glass: strGlass
        }
    })
    return (
        <Wrapper>
            {formattedDrinks.map(item => {
                return <CocktailCard key={item.id} {...item} />
            })}
        </Wrapper>
    )
}

export default CocktailList