import React from "react";
import { Container } from "@/styles/global";
import { HeroStyle } from "./style";
import { POST_SHORT_URL } from "@/api";
import Message from "../Layouts/Message";

export default function S_Hero() {

  const [link, setLink] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");

  async function shortUrl() {
    setMessage("");

    const linkRequest = {
        'url_long': link,
        'cdn_prefix': 's.loovi.com.br',
    }

    try{
        const { url_POST, options } = POST_SHORT_URL(linkRequest)
        const response = await fetch(url_POST, options)
        const json = await response.json()
        console.log(json)
        setLink(json.url_short)
    } catch {
      alert('Ops! Parece que não foi inserido nenhuma URL para encurtar!')
      // .then(() => {
      //   setMessage('Ops! Parece que não foi inserido nenhuma URL para encurtar!')
      //   setType('alert')
      // })
    }
}

  function copyUrl() {
    navigator.clipboard.writeText(link)
      .then(() => {
        setMessage('Link copiado!');
        setType('success');
      })
  }

  return (
    <HeroStyle>
      <Container>
        {message && <Message type={type} msg={message} />}
        <div className="box">
          <div className="title">
            <h1>Encurtar Link Longo</h1>
            <p>Cole uma URL longa</p>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Coloque aqui a url para encurtar"
              className="input-url"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                console.log(link);
              }}>
              </input>
            <div className="bts">
              <button className="btn" onClick={shortUrl}>Gerar</button>
              <button className="btn" onClick={copyUrl}>Copiar</button>
            </div>
          </div>
        </div>
      </Container>
    </HeroStyle>
  );
}