const artistas = [
  {
    nome: "Matuê",
    imagem: "/matue.jpg",
    link: "https://open.spotify.com/intl-pt/artist/5nP8x4uEFjAAmDzwOEc9b8?si=FrzFsEuUTFmjtXuaXlGsxg",
  },
  {
    nome: "Brandão",
    imagem: "/brandao.jpg",
    link: "https://open.spotify.com/intl-pt/artist/2KwQkyJzT9r6Hh56jtfuse?si=3zyCv7CzS-Ooi1a9USMj2g",
  },
  {
    nome: "Teto",
    imagem: "/teto.jpg",
    link: "https://open.spotify.com/intl-pt/artist/68YeXpLt3jB7JHQS5ZjMGo?si=Ya4laH55R2e0cnHEje2jbw",
  },
  {
    nome: "Wiu",
    imagem: "/wiu.jpg",
    link: "https://open.spotify.com/intl-pt/artist/3MrDVzg7ZXaYMyQmbDInr7?si=ikxe5mKLRVySh1AkuWw-Jw",
  },
  {
    nome: "Alee",
    imagem: "/alee.jpg",
    link: "https://open.spotify.com/intl-pt/artist/6rk6Izp6o42fUdE0jRqAP4?si=0R84QOWYQUqczN7yZqoIIQ",
  },
  {
    nome: "Leviano",
    imagem: "/leviano.jpg",
    link: "https://open.spotify.com/intl-pt/artist/0xEdwBYYjxw6wk179Tq2sJ?si=NzXobaxSRBy2cAM6DjtUcg",
  },
];

export default function Painel() {
  return (
    <div className="painel">
      <h1 className="tituloRainbow">
        Os melhores do trap atualmente
      </h1>

      <div className="gridArtistas">
        {artistas.map((artista, index) => (
          <a
            key={index}
            href={artista.link}
            target="_blank"
            className="cardArtista"
          >
            <img src={artista.imagem} alt={artista.nome} />

            <h2>{artista.nome}</h2>

            <button>Ouvir no Spotify</button>
          </a>
        ))}
      </div>
    </div>
  );
}