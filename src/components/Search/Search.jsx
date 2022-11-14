import { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import { category } from '../../api/flimsApi'
import Button from '../Button'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)
function Search({ categoryProps }) {
    const [keyword, setKeyWord] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (keyword.trim().length > 0) {
            navigate({
                pathname: `/${category[categoryProps]}/search/${keyword}`,
            })
        }
    }
    return (
        <div className={cx('wrapper')}>
            <form className={cx('search')} onSubmit={handleSubmit}>
                <input
                    className={cx('search-input')}
                    type='text'
                    placeholder='Enter keyword'
                    value={keyword}
                    onChange={(e) => setKeyWord(e.target.value)}
                />
                <div className={cx('btn-search')}>
                    <Button primary small>
                        Search
                    </Button>
                </div>
            </form>
        </div>
    )
}

Search.propTypes = {
    categoryProps: PropTypes.string.isRequired,
}

export default Search
