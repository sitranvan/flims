import { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { useParams } from 'react-router-dom'
import apiConfig from '../../../../api/apiConfig'
import flimsApi from '../../../../api/flimsApi'
import styles from './CastList.module.scss'

const cx = classNames.bind(styles)
function CastList({ id }) {
    const { category } = useParams()
    const [casts, setCarts] = useState([])
    useEffect(() => {
        const params = { api_key: apiConfig.apiKey, language: 'en-US' }
        const getCredits = async () => {
            if (id) {
                const response = await flimsApi.credits(category, id, params)
                setCarts(response.cast.slice(0, 5))
            }
        }
        getCredits()
    }, [category, id])
    return (
        <Fragment>
            <h2>Casts</h2>
            <div className={cx('wrapper')}>
                {casts.map((cast) => (
                    <div key={cast.id} className={cx('list')}>
                        <div
                            className={cx('img')}
                            style={{ backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})` }}
                        ></div>
                        <p className={cx('name')}>{cast.name}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

CastList.propTypes = {
    id: PropTypes.string.isRequired,
}

export default CastList
