import { useState } from 'preact/hooks'
import fontList from "./fontList.json"

export default function useFont () {
    const [fontFamily, setFontFamily] = useState(fontList[0]['font-family'])

    const handleFontFamily = (font) => {
        setFontFamily(font)
    }

    return [fontFamily, handleFontFamily]
}