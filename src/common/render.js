import { Link } from 'react-router-dom'
import { footerMenuList } from './data'

export const renderMenuFooter = (index) => {
    return footerMenuList[index].map((item) => (
        <Link key={item.title} to='/'>
            {item.title}
        </Link>
    ))
}
