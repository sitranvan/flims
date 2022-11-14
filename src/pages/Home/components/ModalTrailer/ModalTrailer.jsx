import { useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { RiCloseLine } from 'react-icons/ri'
import styles from './ModalTrailer.module.scss'
const cx = classNames.bind(styles)
function ModalTrailer({ onclose, open, trailer }) {
    const videoRef = useRef(null)
    const handleClose = () => {
        videoRef.current.src = ''
        onclose()
    }
    return (
        <div
            className={cx('wrapper', {
                active: open,
            })}
        >
            <div className={cx('content')}>
                <div className={cx('close')} onClick={handleClose}>
                    <RiCloseLine />
                </div>
                <div className={cx('video')}>
                    {trailer[0].key ? (
                        <iframe
                            ref={videoRef}
                            src={`https://www.youtube.com/embed/${trailer[0].key}`}
                            width='100%'
                            title='video'
                            key={trailer[0].id}
                        ></iframe>
                    ) : (
                        'No Trailer'
                    )}
                </div>
            </div>
        </div>
    )
}

ModalTrailer.propTypes = {
    onclose: PropTypes.func.isRequired,
    open: PropTypes.bool,
    trailer: PropTypes.object.isRequired,
}

export default ModalTrailer
