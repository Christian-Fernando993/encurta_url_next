import { useEffect, useState } from "react";
import { MessageAlert, AlertContent } from './style.js'
import styles from './styles.module.css';

function Message({type, msg}){
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        if(!msg){
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false)
        }, 1500);

        return () => clearTimeout(timer);
    }, [msg])

    return(
        <>
            {visible && (
                <MessageAlert>
                    <AlertContent className={`${styles[type]}`}>{msg}</AlertContent>
                </MessageAlert>
            )}
        </>
    )
}

export default Message;