import Category from '../pages/Category'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

// public routes no login required
export const publicRoutes = [
    { id: 1, path: '/', component: Home },
    { id: 2, path: '/:category/search/:keyword', component: Category },
    { id: 3, path: '/:category', component: Category },
    { id: 4, path: '/:category/:id', component: Detail },
]
