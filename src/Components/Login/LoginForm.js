import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../../Hooks/UseForm'

const LoginForm = () => {
  const username = UseForm()
  const password = UseForm()
  console.log(username.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      let response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify()
      })
      let json = await response.json()
      return console.log(json)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm