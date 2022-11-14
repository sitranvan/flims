import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ className, onClick, children, primary, outline, small }) {
    const classes = cx('btn', {
        [className]: className,
        primary,
        outline,
        small,
    })
    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    classNames: PropTypes.string,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    small: PropTypes.bool,
}

export default Button
