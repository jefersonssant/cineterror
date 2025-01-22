import s from "./main.module.scss"


export default function Main() {

  const filmes = [
    {
      nome: "A maldição do Titanic",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlgsHNzsC9sVTuH5xw5H_smfinzViO5c26A&s",
      textAlt: "Imagem de capa do filme A Maldição do Titanic"
    },
    {
      nome: "Anjos da Morte",
      imagem: "https://images-americanas.b2w.io/produtos/7513318608/imagens/dvd-anjos-da-morte-melhor-filme-de-terror-dos-ultimos-tempos/7513318608_1_large.jpg",
      textAlt: "Imagem de capa do filme Anjos da Morte"
    },
    {
      nome: "O Grito",
      imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      textAlt: "Imagem da capa do filme O Grito"
    },
    {
      nome: "Poster Maligno",
      imagem: "https://uauposters.com.br/media/catalog/product/3/4/343320211103-uau-posters-maligno-terror-filmes.jpg",
      textAlt: "Imagem da capa do filme Poster Maligno"
    },
    {
      nome: "Um Clássico Filme de Terror",
      imagem: "https://media.fstatic.com/YTk07kl6XCiCP_EsRwp07WWW41c=/322x478/smart/filters:format(webp)/media/movies/covers/2021/06/poster-2.jpg",
      textAlt: "Imagem da capa do filme Um Clássico Filme de Terror"
    },
    {
      nome: "O Exorcista",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_UvpukJleFiNdXfZ6Ldcf-FuQZglWcRa2dowY4elH46opUGYxhPhbY3dRr2Q6Uy_RMe1zZ1ByvWrRG41vxVx5Q1sLb-L9ohUL-LL_Eke02AjqbdnHFrGL9kvTTU31fNUdmzU1OyxvV0zF/s1600/20160809_211906j.jpg",
      textAlt: "Imagem da capa do filme O Exorcista"
    },
    {
      nome: "Sobrenatural A Porta Vermelha",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeonCKIJ8g9yfzwoHpPWPcp0cI1nwLzSRZQ&s",
      textAlt: "Imagem de capa do filme Sobrenatural A Porta Vermelha"
    },
    {
      nome: "Uma Noite de Terror",
      imagem: "https://marketplace.canva.com/EAFCkEUZDPI/1/0/1143w/canva-panfleto-de-halloween-cultura-pop-caveira-preto-e-branco-LEyi9FHh1Pc.jpg",
      textAlt: "Imagem da capa do Filme Uma Noite de Terror"
    },
    {
      nome: "O Boneco do Mal 2",
      imagem: "https://cinema10.com.br/upload/filmes/filmes_13855_filmes_13855_3776523.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg",
      textAlt: "Imagem da capa do filme O Boneco do Mal 2"
    },
    {
      nome: "O Nascimento do Mal",
      imagem: "https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Ffilmes%2Ffilmes_16670_o-nascimento-do-mal-poster-2.jpg",
      textAlt: "Imagem da capa do filme O Nascimento do Mal"
    },
    {
      nome: "Terrifier 2",
      imagem: "https://midias.imagemfilmes.com.br/capas/69f1d800-ff60-4687-9f0b-fd03faef87ee_m.jpg?2022-11-10T15:12:37.086932",
      textAlt: "Imagem da capa do filme Terrifier 2"
    },
    {
      nome: "Invocação do Mal",
      imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/210/166/21016629_2013062820083878.jpg",
      textAlt: "Imagem de capa do filme Invocação do Mal"
    },
    {
      nome: "O Chamado do Mal",
      imagem: "https://br.web.img3.acsta.net/pictures/18/09/25/19/45/2768758.jpg",
      textAlt: "Imagem de Capa do filme O Chamado do Mal"
    },
    {
      nome: "O Substituto",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-6lXY7r8utoW8_4RuGCbyGurvAAu2gTDouWi_IogQYfNiBGOVokmtdHF2CWoGUjSPeoYUgSqtB3bK4hQjwk1rRx8E1N2Am5kFJtrE8qTLfd0DtwyQStUQMLpuuS4HXr9wcHRxcBi8u8gE/s1600/fdsfsd.jpg",
      textAlt: "Imagem de capa do filme O Substituto"
    }
  ]

  return (
    <main className={s.containerMain}>
      <h1>Últimos Lançamentos</h1>
      <section>
        {
          filmes.map((filme, index) => (
            <article key = {index}>
              <img src={filme.imagem} alt={filme.textoAlt} />
              <h2>{filme.nome}</h2>
            </article>
          ))
        }
      </section>
    </main>
  )
}