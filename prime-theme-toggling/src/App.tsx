import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeButton from './components/ThemeButton'
import { Card } from 'primereact/card'
import { useTheme } from './hooks/usetheme'
import { Button } from 'primereact/button'

function App() {
  useTheme()
  const [count, setCount] = useState(0)

  return (
    <Card>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <ThemeButton/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Card>
  )
}

export default App
