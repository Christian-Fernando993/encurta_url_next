import React from 'react'
import Head from 'next/head' 

export default function TituloeMetaTags() {

    const title = 'Encurtador de URL'
    const imagem = '../../../public/next.svg'
    const imagem2 = '../../pages/favicon.png'

    function colocarfavicon(favImg){
        let headTitle = document.querySelector('head')
        let colocarFavicon = document.createElement('link')
        colocarFavicon.setAttribute('rel', 'short')
        colocarFavicon.setAttribute('href',favImg);
        headTitle.appendChild(colocarFavicon);
    }

    return(
        <Head>
            <title>{title}</title>
            <link rel='icon' src={imagem} />
        </Head>
    )
}