import { useState } from 'preact/hooks'

export default function useColor () {
    const [color, setColor] = useState('#ffffff')

    const handleColor = (colorInput) => {
        setColor(colorInput)
    }

    return [color, handleColor]
}