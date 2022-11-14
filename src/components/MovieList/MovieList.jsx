import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import apiConfig from '../../api/apiConfig'
import flimsApi, { category, movieType, tvType } from '../../api/flimsApi'
import Button from '../Button'
import CardItem from '../CardItem'
import Container from '../Container'
import Search from '../Search'
import styles from './MovieList.module.scss'

const cx = classNames.bind(styles)
function MovieList({ categoryProps }) {
    const { keyword } = useParams()
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        const getList = async () => {
            let response = null

            const params = { api_key: apiConfig.apiKey, language: 'en-US' }
            if (keyword === undefined) {
                switch (categoryProps) {
                    case category.movie:
                        response = await flimsApi.getMovieList(movieType.upcoming, params)
                        break
                    case category.tv:
                        response = await flimsApi.getTVList(tvType.popular, params)
                        break
                    default:
                        throw new Error('Not Found')
                }
            } else {
                console.log('search')

                const params = {
                    api_key: apiConfig.apiKey,
                    language: 'en-US',
                    query: keyword,
                }
                response = await flimsApi.search(categoryProps, params)
            }
            setItems(response.results)
            setTotalPage(response.total_pages)
        }
        getList()
    }, [categoryProps, keyword])

    const handleLoadMore = async () => {
        let response = null
        if (keyword === undefined) {
            const params = {
                api_key: apiConfig.apiKey,
                language: 'en-US',
                page: page + 1,
            }
            switch (categoryProps) {
                case category.movie:
                    response = await flimsApi.getMovieList(movieType.upcoming, params)
                    break
                case category.tv:
                    response = await flimsApi.getTVList(tvType.popular, params)
                    break
                default:
                    throw new Error('Not Found')
            }
        } else {
            const params = {
                api_key: apiConfig.apiKey,
                language: 'en-US',
                page: page + 1,
                query: keyword,
            }
            response = await flimsApi.search(categoryProps, params)
        }
        setItems([...items, ...response.results])
        setPage(page + 1)
    }

    return (
        <Container>
            <Search categoryProps={categoryProps} />
            <div className={cx('wrapper')}>
                {items.map((item) => (
                    <CardItem key={item.id} item={item} categoryProps={categoryProps} />
                ))}
            </div>
            {page < totalPage && (
                <div className={cx('load-more')}>
                    <Button outline small onClick={handleLoadMore}>
                        Load more
                    </Button>
                </div>
            )}
        </Container>
    )
}

MovieList.propTypes = {
    categoryProps: PropTypes.string.isRequired,
}

export default MovieList
