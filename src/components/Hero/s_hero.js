import React from "react";
import { Container } from "@/styles/global";
import { HeroStyle } from "./style";
import { POST_SHORT_URL } from "@/api";
import { useMessageAlert } from "@/helper/alert";

export default function S_Hero() {

  const [link, setLink] = React.useState("");
  // const { active, setActive, content, setContent, typeAlert, setTypeAlert } = useMessageAlert()

  async function shortUrl() {

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
    }

}

// function alertSuccess() {
//   setActive(true)
//   setTypeAlert('success')
//   setContent('Url Copiada')
// }

// function alertErro(){
//   setActive(true)
//   setTypeAlert('erro')
//   setContent('Teste 2')
// }

// function alertWarning() {
//   setActive(true)
//   setTypeAlert('warning')
//   setContent('Teste 3')
// }

// function alertInfo() {
//   setActive(true)
//   setTypeAlert('info')
//   setContent('Teste 4')
// }






  function copyUrl() {
    navigator.clipboard.writeText(link)
        .then(() => {
            // alertSuccess()
        })
  }


  return (
    <HeroStyle>

      {/* <MessageAlert active={active} content={content} typeAlert={typeAlert} /> */}

      <Container>
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
              }}
            ></input>
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
