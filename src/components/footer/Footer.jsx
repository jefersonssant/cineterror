import s from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={s.footerContainer}>
      <h1>Dúvidas? Ligue para 0800 888 0909</h1>
      <ul>
        <li><a href="#">Perguntas Frequentes</a></li>
        <li><a href="#">Relações com investidores</a></li>
        <li><a href="#">Formas de assistir</a></li>
        <li><a href="#">Informações corporativas</a></li>
        <li><a href="#">Só no CineTerror</a></li>
        <li><a href="#">Central de ajuda</a></li>
        <li><a href="#">Carreiras</a></li>
        <li><a href="#">Termos de uso</a></li>
        <li><a href="#">Entre em contato</a></li>
        <li><a href="#">Conta</a></li>
        <li><a href="#">Resgatar cartão pré-pago</a></li>
        <li><a href="#">Privacidade</a></li>
        <li><a href="#">Teste de Velocidade</a></li>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Comprar cartão pré-pago</a></li>
        <li><a href="#">Preferências de cookies</a></li>
        <li><a href="#">Avisos legais</a></li>
      </ul>
      <div>
        <p>CineTerror Brasil</p>
        <p>Site criado por Jeferson Santos como desafio opcional do Vai Na Web</p>
      </div>
    </footer>
  )
}