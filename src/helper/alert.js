import React from 'react';
import { AlertStyle, AlertContent } from './style';

export function Alert() {
  return (
    <AlertStyle>
        <AlertContent className={`${type}`}>{content}</AlertContent>
    </AlertStyle>
  )
}

export default function useMessageAlert() {
    const [active, setActive] = React.useState(false)
    const [content, setContent] = React.useState('')
    const [typeAlert, setTypeAlert] = React.useState('')


    React.useEffect(() => {
        let time;

        if(!active) {
            time = setTimeout(() => {
                setActive(false)
            }, 3000)
        }

        return () => {
            clearTimeout(time)
        }
    }, [active])

    return {
        active, setActive, content, setContent, typeAlert, setTypeAlert,
    }
}