import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { BiPlay } from 'react-icons/bi'
import apiConfig from '../../api/apiConfig'
import { category } from '../../api/flimsApi'
import Button from '../Button'
import styles from './CardItem.module.scss'

const cx = classNames.bind(styles)
function CardItem({ item, categoryProps }) {
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    const link = `/${category[categoryProps]}/${item.id}`
    return (
        <Link to={link}>
            <div
                className={cx('wrapper')}
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            >
                <Button primary className={cx('btn-arrow')}>
                    <BiPlay />
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    )
}

CardItem.propTypes = {
    item: PropTypes.object.isRequired,
    categoryProps: PropTypes.string,
}

export default CardItem
