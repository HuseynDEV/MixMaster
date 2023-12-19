import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/not-found.svg';

const Error = () => {
    const error = useRouteError()

    if (error.status == 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt='not found' />
                    <h3>Ohh!</h3>
                    <p>We can't seem to find page you are looking for</p>
                    <Link to='/'>back home</Link>
                </div>
            </Wrapper>
        )
    }
}

export default Error