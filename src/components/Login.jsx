import React from 'react'
import { doLogout,doSocialLogin } from '@/app/actions'

const Login = () => {
  return (
    <form action={doSocialLogin}>
      <button className='bg-blue-500 text-white p-1 rounded-md m-1 text-lg' type='submit' name='action' value="google">Sign In with google</button>
      <button className='bg-yellow-500 text-black p-1 rounded-md m-1 text-lg' type='submit' name='action' value="github">Sign In with github</button>
    </form>
  )
}

export default Login
