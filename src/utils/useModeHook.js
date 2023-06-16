import { useState } from 'preact/hooks'

export default function useMode() {
    const [mode, setMode] = useState(false)

    const handleMode = () => {
        setMode(!mode)
    }

    return [mode, handleMode]
}