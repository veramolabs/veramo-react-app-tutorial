import React, { useEffect, useState } from 'react'
import './App.css'

import { agent } from './veramo/setup'

function App() {
  const [didDoc, setDidDoc] = useState<any>()

  const resolve = async () => {
    const doc = await agent.resolveDid({
      didUrl: 'did:ethr:goerli:0x6acf3bb1ef0ee84559de2bc2bd9d91532062a730',
    })

    setDidDoc(doc)
  }

  useEffect(() => {
    resolve()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <pre id="result">{didDoc && JSON.stringify(didDoc, null, 2)}</pre>
      </header>
    </div>
  )
}

export default App