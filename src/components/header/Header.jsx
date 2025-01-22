import s from "./header.module.scss"


export default function Header() {
  return(
    <header className={s.containerHeader}>
      <section>
        <h1>CineTerror</h1>
        <nav>
          <a href="#">Login</a>
          <a href="#">Cadastre-se</a>
        </nav>
      </section>
      <section>
        <h2>
          Explore os melhores filmes de terror com a nossa assinatura por apenas R$ 9,90. Venha viver o medo com a gente!
        </h2>
      </section>
    </header>
  )
}