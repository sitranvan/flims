import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import logo from '../../assets/images/logo.png'
import Container from '../../components/Container'
import { headerNav } from '../../common/data'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    const { pathname } = useLocation()
    const [shrink, setShrink] = useState(false)
    const active = headerNav.findIndex((x) => x.path === pathname)

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                setShrink(true)
            } else {
                setShrink(false)
            }
        }
        window.addEventListener('scroll', shrinkHeader)
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }
    }, [shrink])
    return (
        <header
            className={cx('header', {
                shrink: shrink,
            })}
        >
            <Container className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <img src={logo} alt='logo' />
                    <Link to='/'>tMovies</Link>
                </div>
                <ul className={cx('nav')}>
                    {headerNav.map((nav, index) => (
                        <li
                            className={cx('nav-item', {
                                active: index === active,
                            })}
                            key={nav.display}
                        >
                            <Link to={nav.path}>{nav.display}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </header>
    )
}

export default Header
