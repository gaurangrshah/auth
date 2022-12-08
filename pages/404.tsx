import React from 'react'
import Link from "next/link"
const NotFoundPage = () => {
  return (
    <div className='page'>
      <h1>404 Not Found</h1>
      <p>Page not found</p>
      <Link className="button" href="/">Back Home</Link>
    </div>
  )
}

export default NotFoundPage
