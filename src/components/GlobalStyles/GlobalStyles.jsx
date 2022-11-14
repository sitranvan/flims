import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './GlobalStyles.module.scss'

const cx = classNames.bind(styles)
function GlobalStyles({ children }) {
    return <div className={cx('wrapper')}>{children}</div>
}

GlobalStyles.propTypes = {
    children: PropTypes.node,
}

export default GlobalStyles
