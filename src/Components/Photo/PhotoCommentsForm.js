import React, { useState } from 'react'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'


const PhotoComentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(id, { comment }, token)

    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }

  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id='coment'
        name='coment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoComentsForm