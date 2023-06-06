import { useState, useEffect } from 'react'
const useTypeWriter = () => {
    const [text, setText] = useState('');

    const typeWriter = (textArray) => {
        const newTextArray = []
        const text = textArray.split("")
        let length = text.length
        for(let i = 0; i < length; i++){
            setTimeout(() => {
                newTextArray.push(text[i])
                setText(newTextArray.join(""))
            }, i * 100)
        }

    }




    return {
        text,
        typeWriter
    }
}

export { useTypeWriter }