import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import apiConfig from '../../../../api/apiConfig'
import flimsApi, { category } from '../../../../api/flimsApi'
import HeroItem from '../HeroItem'
import ModalTrailer from '../ModalTrailer'
import styles from './HeroSlide.module.scss'

const cx = classNames.bind(styles)
function HeroSlide({ movieItems }) {
    const [open, setOpen] = useState(false)
    const [trailer, setTrailer] = useState('')
    const handleModal = async (id) => {
        const params = { api_key: apiConfig.apiKey, language: 'en-US' }
        const video = await flimsApi.getVideos(category.movie, id, params)
        setTrailer(video.results.slice(0, 1))
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className={cx('hero-slide')}>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
            >
                {movieItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <HeroItem
                                onModal={() => handleModal(item.id)}
                                item={item}
                                className={cx({
                                    active: isActive,
                                })}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {trailer && <ModalTrailer open={open} onclose={handleClose} trailer={trailer} />}
        </div>
    )
}

HeroSlide.propTypes = {
    movieItems: PropTypes.array.isRequired,
}

export default HeroSlide
