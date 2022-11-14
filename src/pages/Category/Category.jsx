import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import { category as cate } from '../../api/flimsApi'
import MovieList from '../../components/MovieList/MovieList'
import HeaderPage from '../Home/components/HeaderPage'
import styles from './Category.module.scss'

const cx = classNames.bind(styles)
function Category() {
    const { category } = useParams()
    console.log(category)
    return (
        <Fragment>
            <HeaderPage title={category === cate.movie ? 'Movies' : 'TV Series'} />
            <div className={cx('wrapper')}>
                <MovieList categoryProps={category} />
            </div>
        </Fragment>
    )
}

export default Category
