import { Fragment, useEffect, useState } from 'react'
import apiConfig from '../../api/apiConfig'
import flimsApi, { movieType } from '../../api/flimsApi'
import CardHead from '../../components/CardHead/CardHead'
import CardPoster from '../../components/CardPoster/CardPoster'
import HeroSlide from './components/HeroSlide'
import { cardList } from '../../common'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [movieItems, setMovieItems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getMovies = async () => {
            const params = { api_key: apiConfig.apiKey, page: 1, language: 'en-US' }
            try {
                const response = await flimsApi.getMovieList(movieType.popular, params)
                // get 4 movies slide
                setMovieItems(response.results.slice(0, 4))
            } catch (error) {
                throw new Error(error)
            }
        }
        getMovies()
    }, [])

    const handleNavigate = (card) => {
        if (card.head.path === 'movie') {
            navigate({
                pathname: `/${card.head.path}`,
            })
        } else {
            navigate({
                pathname: `/${card.head.path}`,
            })
        }
    }

    return (
        <Fragment>
            <HeroSlide movieItems={movieItems} />
            {cardList.map((card, index) => (
                <Fragment key={index}>
                    <CardHead
                        onNavigate={() => handleNavigate(card)}
                        firstChild={card.head.firstChild}
                        title={card.head.title}
                        btnTitle={card.head.btnTitle}
                    />
                    <CardPoster categoryProps={card.poster.category} type={card.poster.type} />
                </Fragment>
            ))}
        </Fragment>
    )
}

export default Home
