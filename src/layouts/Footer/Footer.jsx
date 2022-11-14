import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import bg from '../../assets/images/footer-bg.jpg'
import logo from '../../assets/images/logo.png'
import styles from './Footer.module.scss'
import { renderMenuFooter } from '../../common/render'

const cx = classNames.bind(styles)
function Footer() {
    return (
        <footer className={cx('footer')} style={{ backgroundImage: `url(${bg})` }}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <div className={cx('logo-img')}>
                        <img src={logo} alt='logo' />
                        <Link to='/'>tMovies</Link>
                    </div>
                </div>
                <div className={cx('menu')}>
                    <div className={cx('list')}>{renderMenuFooter(0)}</div>
                    <div className={cx('list')}>{renderMenuFooter(1)}</div>
                    <div className={cx('list')}>{renderMenuFooter(2)}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
