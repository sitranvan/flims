import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './HeaderPage.module.scss'
import bg from '../../../../assets/images/footer-bg.jpg'

const cx = classNames.bind(styles)
function HeaderPage({ title }) {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${bg})` }}>
            <h2 className={cx('title')}>{title}</h2>
        </div>
    )
}

HeaderPage.propTypes = {
    title: PropTypes.string,
}

export default HeaderPage
