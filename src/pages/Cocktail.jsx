import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'


const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
    const { id } = params
    const { data } = await axios.get(`${singleCocktailUrl}${id}`)
    return { id, data }
}

const Cocktail = () => {
    const { id, data } = useLoaderData()
    if (!data) return <Navigate to='/' />
    const singleDrink = data.drinks[0]
    const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
    } = singleDrink;


    // const Ingredients =  Object.keys(singleDrink).filter(item => {
    //     if (item.includes('strIngredient') && singleDrink[item] !== null) {
    //         return singleDrink[item]
    //     }
    // })

    const validIngredients = Object.keys(singleDrink)
        .filter(key => key.startsWith('strIngredient') && singleDrink[key] != null)
        .map(key => singleDrink[key])
    return (
        <Wrapper>
            <header>
                <Link to='/' className='btn'>
                    back home
                </Link>
            </header>
            <div className='drink'>
                <img src={image} alt={name} className='img' />
                <div className='drink-info'>
                    <p>
                        <span className='drink-data'>name :</span>
                        {name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span>
                        {category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span>
                        {info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span>
                        {glass}
                    </p>
                    <p>
                        <span className='drink-data'>Ingredients :</span>
                        {/* {
                            Ingredients.map(item => {
                                return (
                                    singleDrink[item] + ', '
                                )
                            })
                        } */}

                        {
                            validIngredients.map((item, index) => {

                                return (
                                    <span key={index}>
                                        {item}
                                        {index < validIngredients.length ? ", " : ''}
                                    </span>
                                )
                            })
                        }
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Cocktail