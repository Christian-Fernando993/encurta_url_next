/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript} from 'next/document'
import { getCssText } from '@/styles'

// import teste from '../../public/favicon.png'

export default function MainStyle() {
    return(
        <Html lang='pt-br'>
            <Head>
                <style id='stiches' dangerouslySetInnerHTML={{__html: getCssText()}}></style>
                <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            </Head>
            <body>
                <Main />
                <NextScript/>
            </body>
        </Html>
    )
}
