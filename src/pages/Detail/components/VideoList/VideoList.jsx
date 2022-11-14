import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import apiConfig from '../../../../api/apiConfig'
import flimsApi from '../../../../api/flimsApi'
import Video from '../Video/Video'

function VideoList({ id }) {
    const { category } = useParams()
    const [videoList, setVideoList] = useState([])
    useEffect(() => {
        const params = { api_key: apiConfig.apiKey, language: 'en-US' }
        const getCredits = async () => {
            if (id) {
                const response = await flimsApi.getVideos(category, id, params)
                setVideoList(response.results.slice(0, 5))
            }
        }
        getCredits()
    }, [category, id])
    return (
        <div>
            {videoList.map((video) => (
                <Video key={video.id} video={video} />
            ))}
        </div>
    )
}

VideoList.propTypes = {
    id:PropTypes.string
}

export default VideoList
