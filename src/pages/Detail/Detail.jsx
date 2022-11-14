import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import flimsApi from '../../api/flimsApi'
import Info from './components/Info'
function Detail() {
    const { category, id } = useParams()
    const [item, setItem] = useState({})
    useEffect(() => {
        const getDetail = async () => {
            const params = { api_key: apiConfig.apiKey, language: 'en-US' }

            const response = await flimsApi.detail(category, id, params)
            setItem(response)
            window.scrollTo(0, 0)
        }
        getDetail()
    }, [category, id])
    return <Info item={item} />
}

export default Detail
