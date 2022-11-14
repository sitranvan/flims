import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './CardHead.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)
function CardHead({ title, btnTitle, firstChild, onNavigate }) {
    return (
        <div
            className={cx('wrapper', {
                'first-child': firstChild,
            })}
        >
            <h2 className={cx('title')}>{title}</h2>
            {btnTitle && (
                <Button outline small onClick={onNavigate}>
                    {btnTitle}
                </Button>
            )}
        </div>
    )
}

CardHead.propTypes = {
    title: PropTypes.string,
    btnTitle: PropTypes.string,
    firstChild: PropTypes.bool,
    onNavigate: PropTypes.func,
}

export default CardHead
