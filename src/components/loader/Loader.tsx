import React from 'react'
import { LoaderBackdrop, Spinner } from './components'

function Loader() {
  return (
    <LoaderBackdrop>
        <Spinner className="fa-solid fa-paw" />
    </LoaderBackdrop>
  )
}

export default Loader