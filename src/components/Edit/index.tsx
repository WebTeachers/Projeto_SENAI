import home from './home.module.scss'

export const Edit = () => (
  <div className={home.container}>
    <form>
      <label htmlFor="nome">Nome do Personagem</label>
      <select name="nome" id="nome">
        <option value="Personagem01">Personagem 01</option>
        <option value="Personagem02">Personagem 02</option>
        <option value="Personagem03">Personagem 03</option>
        <option value="Personagem04">Personagem 04</option>
      </select>

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
