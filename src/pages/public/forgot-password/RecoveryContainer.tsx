import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
function RecoveryContainer() {
  const [account, setAccount] = useState<string>('')
  return (
     <Outlet 
     context={{ account, setAccount }}
     />
  )
}

export default RecoveryContainer