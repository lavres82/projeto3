class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    legendary: boolean;
    firstAppearance: string;
    abilities: string[];
    stats: { base_stat: number; stat: string }[];
  }
  
  class Filme {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  class Pais {
    name: { common: string; official: string };
    independent: boolean;
    unMember: boolean;
    capital: string;
    region: string;
    subregion: string;
    languages: string[];
    latlng: number[];
    borders: string[];
    area: number;
    population: number;
    timezones: string[];
    flags: { png: string; svg: string };
  }

  //Essas classes têm os mesmos campos que os objetos JSON correspondentes.
  //Podemos instanciar essas classes e atribuir valores aos campos para criar
  // objetos que correspondam aos objetos JSON.

  //OBS: Para instanciar essas classes e atribuir valores aos campos:
  //1.Importe as classes para o seu arquivo TypeScript.
  //2.Crie uma nova instância da classe usando a palavra-chave "new".
  //3.Atribua valores aos campos da instância usando a notação de ponto.
  //um exemplo para a classe Pokemon:

const pokemon = new Pokemon();
pokemon.id = 132;
pokemon.name = "Ditto";
pokemon.base_experience = 101;
pokemon.height = 3;
pokemon.weight = 40;
pokemon.legendary = false;
pokemon.firstAppearance = "1996-06-01";
pokemon.abilities = ["limber", "imposter"];
pokemon.stats = [
  { base_stat: 48, stat: "hp" },
  { base_stat: 48, stat: "attack" },
  { base_stat: 48, stat: "defense" }
];
//===========================================================

//Exemplo para a classe Filme:

const filme = new Filme();
filme.adult = false;
filme.backdrop_path = "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg";
filme.id = 447365;
filme.original_language = "en";
filme.original_title = "Guardians of the Galaxy Vol. 3";
filme.overview = "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.";
filme.popularity = 4145.055;
filme.poster_path = "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg";
filme.release_date = "2023-05-03";
filme.title = "Guardians of the Galaxy Vol. 3";
filme.video = false;
filme.vote_average = 8.1;
filme.vote_count = 3154;

//Exemplo para a classe País:

const pais = new Pais();
pais.name = { common: "Brazil", official: "Federative Republic of Brazil" };
pais.independent = true;
pais.unMember = true;
pais.capital = "Brasília";
pais.region = "Americas";
pais.subregion = "South America";
pais.languages = ["Portuguese"];
pais.latlng = [-10, -55];
pais.borders = ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"];
pais.area = 8515767;
pais.population = 212559409;
pais.timezones = ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"];
pais.flags = { png: "https://flagcdn.com/w320/br.png", svg: "https://flagcdn.com/br.svg" };




  