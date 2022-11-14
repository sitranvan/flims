import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Container.module.scss'

const cx = classNames.bind(styles)

function Container({ children, className }) {
    const classes = cx('container', {
        [className]: className,
    })
    return <div className={classes}>{children}</div>
}

Container.propTypes = {
    children: PropTypes.node,
    classNames: PropTypes.string,
}

export default Container
