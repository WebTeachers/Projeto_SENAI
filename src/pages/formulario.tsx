import React from 'react'
import './frm.css'
import frm from './frm.module.scss'

function App() {
  return (
    <div className={frm.container}>
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.." />

        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className={frm.textArea} ></textarea>

        <label htmlFor="anexo">Anexo</label>
        <input type="file" id="anexo" name="anexo" />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
