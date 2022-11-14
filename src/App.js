import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'swiper/swiper.min.css'
import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header'
import { publicRoutes } from './routes'
function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                {publicRoutes.map((route) => {
                    const Page = route.component
                    return <Route key={route.id} path={route.path} element={<Page />} />
                })}
            </Routes>
            <Footer />
        </Fragment>
    )
}
export default App
