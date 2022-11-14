import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Video.module.scss'

const cx = classNames.bind(styles)
function Video({ video }) {
    const refVideo = useRef(null)

    useEffect(() => {
        const height = (refVideo.current.offsetWidth * 9) / 16 + 'px'
        refVideo.current.setAttribute('height', height)
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2>{video.name}</h2>
            </div>

            <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                ref={refVideo}
                width='100%'
                title='video'
            ></iframe>
        </div>
    )
}

Video.propTypes = {
    video: PropTypes.object.isRequired,
}

export default Video
