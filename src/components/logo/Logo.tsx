import React from 'react'
import {LogoImg} from "./components"

type LogoProps = {
    width: number,
    height:number
}

function Logo({width, height}: LogoProps) {
  return (
    <LogoImg height={height} width={width} src='/images/logo/logoblk.png'/>
  )
}

export default Logo