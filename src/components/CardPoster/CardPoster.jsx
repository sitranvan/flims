import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import apiConfig from '../../api/apiConfig'
import flimsApi, { category } from '../../api/flimsApi'
import CardItem from '../CardItem'
import styles from './CardPoster.module.scss'

const cx = classNames.bind(styles)
function CardPoster({ categoryProps, type, id }) {
    const [listCard, setListCard] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null
            const params = { api_key: apiConfig.apiKey, language: 'en-US' }
            switch (categoryProps) {
                case category.movie:
                    try {
                        response = await flimsApi.getMovieList(type, params)
                    } catch (error) {
                        throw new Error(error)
                    }

                    break
                case category.tv:
                    try {
                        response = await flimsApi.getTVList(type, params)
                    } catch (error) {
                        throw new Error(error)
                    }
                    break
                default:
                    throw new Error('Not found')
            }

            setListCard(response.results)
        }
        getList()
    }, [categoryProps, type, id])
    return (
        <div className={cx('wrapper')}>
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {listCard.map((item) => (
                    <SwiperSlide key={item.id} className={cx('swiper-slide')}>
                        <CardItem item={item} categoryProps={categoryProps} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

CardPoster.propTypes = {
    categoryProps: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
}

export default CardPoster
