import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import apiConfig from '../../../../api/apiConfig'
import Container from '../../../../components/Container'
import CastList from '../CastList/CastList'
import Similar from '../Similar'
import VideoList from '../VideoList'
import styles from './Info.module.scss'

const cx = classNames.bind(styles)
function Info({ item }) {
    return (
        <Fragment>
            {item && (
                <Fragment>
                    <div
                        className={cx('banner')}
                        style={{
                            backgroundImage: `url(${apiConfig.orginalImage(item.backdrop_path || item.poster_path)})`,
                        }}
                    ></div>
                    <Container>
                        <div className={cx('content')}>
                            <div className={cx('poster')}>
                                <div
                                    className={cx('poster-img')}
                                    style={{
                                        backgroundImage: `url(${apiConfig.orginalImage(
                                            item.poster_path || item.backdrop_path,
                                        )})`,
                                    }}
                                ></div>
                            </div>
                            <div className={cx('info')}>
                                <h2 className={cx('title')}>{item.title || item.name}</h2>
                                <div className={cx('genres')}>
                                    {item.genres &&
                                        item.genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
                                </div>
                                <p className={cx('overview')}>{item.overview}</p>
                                <div className={cx('cast')}>
                                    <CastList id={item.id} />
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className={cx('content-video')}>
                            <VideoList id={item.id} />
                        </div>
                        <div className={cx('similar')}>
                            <Similar id={item.id} />
                        </div>
                    </Container>
                </Fragment>
            )}
        </Fragment>
    )
}

Info.propTypes = {
    item: PropTypes.PropTypes.object.isRequired,
}

export default Info
