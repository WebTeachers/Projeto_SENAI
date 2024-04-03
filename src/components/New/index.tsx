import home from './home.module.scss'
export const New = () => (
  <div className={home.container}>
    <form>
      <label htmlFor="nome">Nome do Personagem</label>
      <input
        type="text"
        id="nome"
        name="nome"
        placeholder="Digite o nome do personagem ..."
      />

      <label htmlFor="conteudo">Descrição do Personagem</label>
      <textarea
        id="conteudo"
        name="conteudo"
        placeholder="Descrição e habilidades do personagem ..."
        className={home.textArea}
      ></textarea>

      <label htmlFor="foto">Foto do Personagem</label>
      <input type="file" id="foto" name="foto" />

      <input type="submit" value="Enviar" />
    </form>

  </div>
)
