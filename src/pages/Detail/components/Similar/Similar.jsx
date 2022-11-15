import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import CardHead from '../../../../components/CardHead'
import styles from './Similar.module.scss'
import flimsApi from '../../../../api/flimsApi'
import apiConfig from '../../../../api/apiConfig'
import CardItem from '../../../../components/CardItem'
import { Swiper, SwiperSlide } from 'swiper/react'
const cx = classNames.bind(styles)
function Similar({ id }) {
    const { category } = useParams()
    const [similar, setSimilar] = useState([])
    useEffect(() => {
        const getSimilar = async () => {
            if (id) {
                const params = { api_key: apiConfig.apiKey, language: 'en-US' }
                const response = await flimsApi.similar(category, id, params)
                setSimilar(response.results)
            }
        }
        getSimilar()
    }, [id, category])
    return (
        <div className={cx('wrapper')}>
            <CardHead title='Similar' firstChild />
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {similar.map((item) => (
                    <SwiperSlide key={item.id} className={cx('swiper-slide')}>
                        <CardItem item={item} categoryProps={category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

Similar.propTypes = {
    id: PropTypes.string,
}

export default Similar
