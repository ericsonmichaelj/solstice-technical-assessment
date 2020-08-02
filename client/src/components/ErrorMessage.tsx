import React from 'react'


type AppProps = { message?: string | null }; 
export default function ErrorMessage({ message }: AppProps) {
  return (
    <span style={{color:'red'}} data-testid="errorMessage">
       { message ? message : 'We are sorry something went wrong' }
    </span>
  )
}
