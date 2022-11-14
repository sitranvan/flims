import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import apiConfig from '../../../../api/apiConfig'
import Button from '../../../../components/Button/Button'
import Container from '../../../../components/Container'
import styles from './HeroItem.module.scss'

const cx = classNames.bind(styles)

function HeroItem({ item, className, onModal }) {
    const navigate = useNavigate()

    const classes = cx('wrapper', {
        [className]: className,
    })
    const background = apiConfig.orginalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)
    return (
        <div className={classes} style={{ backgroundImage: `url(${background})` }}>
            <Container>
                <div className={cx('content')}>
                    <div className={cx('info')}>
                        <h2 className={cx('title')}>{item.title}</h2>
                        <div className={cx('overview')}>{item.overview}</div>
                        <div className={cx('actions')}>
                            <Button primary onClick={() => navigate(`/movie/${item.id}`)}>
                                Watch now
                            </Button>
                            <Button outline onClick={onModal}>
                                Watch trailer
                            </Button>
                        </div>
                    </div>
                    <div className={cx('poster')}>
                        <img src={apiConfig.w500Image(item.poster_path)} alt='poster' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

HeroItem.propTypes = {
    item: PropTypes.object.isRequired,
    classNames: PropTypes.string,
    onModal: PropTypes.func,
}

export default HeroItem
