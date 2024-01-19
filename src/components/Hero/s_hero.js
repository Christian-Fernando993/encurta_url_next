import React from 'react'
import { Container } from "@/styles/global"
import { HeroStyle } from './style'
import { POST_SHORT_URL } from '@/api'

export default function S_Hero() {

    const { input, setInput } = React.useState('')

    React.useEffect(() => {
        fetch(url_POST)
        .then((resp) => resp.json())
        .then((json) => {
            console.log(json)
        })
    })

    return (
        <HeroStyle>
            <Container>
                <div className='box'>
                    <div className='title'>
                        <h1>Encurtar Link Longo</h1>
                        <p>Cole uma URL longa</p>
                    </div>
                    <div className='input'>
                        <input type='text' className='input-url' placeholder="Coloque aqui a url para encurtar"></input>
                        <div className='bts'>
                            <button className='btn'>Gerar</button>
                            <button className='btn'>Copiar</button>
                        </div>
                    </div>
                </div>
            </Container>
        </HeroStyle>
    )
}