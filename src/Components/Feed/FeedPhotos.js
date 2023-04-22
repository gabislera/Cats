import React, { useEffect } from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ setInfinite, page, user, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 3
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
        </ul>
      </div>
    )
  else return null
}

export default FeedPhotos