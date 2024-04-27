//export enum Language {
//  Spanish = "Español",
//  English = "English",
//  German = "Deutsch",
//  Italian = "Italiano",
//  French = "Français",
//}

export interface BookProps {
  id: number
  title: string
  description: string
  author: string
  image: string
  year: number
  pages: number
  language: string
}

const books: BookProps[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    description: "To Kill a Mockingbird is a 1962 American coming-of-age legal drama crime film directed by Robert Mulligan. The screenplay by Horton Foote is based on Harper Lee's 1960 Pulitzer Prize–winning novel of the same name. The film stars Gregory Peck as Atticus Finch and Mary Badham as Scout.",
    author: "Harper Lee",
    image: "https://64.media.tumblr.com/ebf8b80e0f455842ad1f5bed688e0760/tumblr_inline_p2g7754DaB1rt5yu5_1280.jpg",
    year: 1960,
    pages: 281,
    language: "English"
  },
  {
    id: 2,
    title: "Animali fantastici e dove trovarli",
    description: "Bestie fantastiche e dove trovarle (spesso indicato come semplicemente Bestie fantastiche) è un libro-guida del 2001 scritto dall'autrice britannica J. K. Rowling (con lo pseudonimo dell'autore fittizio Newt Scamander) sulle creature magiche dell'universo di Harry Potter.",
    author: "Newt Scamander",
    image: "https://www.lafeltrinelli.it/images/9788893811613_0_536_0_75.jpg",
    year: 2001,
    pages: 128,
    language: "Italiano"
  },
  {
    id: 3,
    title: "Il Grande Gatsby",
    description: "Il grande Gatsby è un romanzo del 1925 dello scrittore americano F. Scott Fitzgerald.Ambientato nell'Età del Jazz a Long Island, vicino a New York, il romanzo descrive le interazioni del narratore in prima persona Nick Carraway con il misterioso milionario Jay Gatsby e l'ossessione di Gatsby di ricongiungersi con la sua ex amante, Daisy Buchanan.",
    author: "F. Scott Fitzgerald",
    image: "https://www.deagostinilibri.it/uploads/2016/06/9791221201413.jpg",
    year: 1925,
    pages: 180,
    language: "Italiano"
  },
  {
    id: 4,
    title: "Brave New World",
    description: "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932.[2] Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy.",
    author: "Aldous Huxley",
    image: "https://prodimage.images-bn.com/pimages/9780060776091_p0_v1_s1200x630.jpg",
    year: 1932,
    pages: 288,
    language: "English"
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    description: "The Catcher in the Rye is a novel by American author J. D. Salinger that was partially published in serial form in 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique of superficiality in society.",
    author: "J.D. Salinger",
    image: "https://www.thoughtco.com/thmb/RMO0HbKRcnexZhX5Jj_Cg-Pur5A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CiTR_overview-e839cbdfec7443398b1520611287323d.jpg",
    year: 1951,
    pages: 234,
    language: "English"
  },
  {
    id: 6,
    title: "Al faro",
    description: "Al faro es una novela de 1927 escrita por Virginia Woolf. La novela se centra en la familia Ramsay y sus visitas a la isla de Skye, en Escocia, entre 1910 y 1920.",
    author: "Virginia Woolf",
    image: "https://m.media-amazon.com/images/I/41X0vyEW5MS.jpg",
    year: 1927,
    pages: 209,
    language: "Español"
  },
  {
    id: 7,
    title: "Moby Dick",
    author: "Herman Melville",
    description: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage.",
    image: "https://www.cidermillpress.com/cdn/shop/files/9781951511302.jpg?v=1692886308&width=1445",
    year: 1851,
    pages: 704,
    language: "English"
  },
  {
    id: 8,
    title: "Pride and Prejudice",
    description: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
    author: "Jane Austen",
    image: "https://cdn2.penguin.com.au/covers/400/9780241374887.jpg",
    year: 1813,
    pages: 279,
    language: "English"
  },
  {
    id: 9,
    title: "El Hobbit",
    description: "El Hobbit o ida y vuelta es una novela fantástica infantil del escritor inglés J. R. R. Tolkien. Fue publicada en 1937 con gran éxito de crítica, siendo nominada para la Medalla Carnegie y galardonada con un premio del New York Herald Tribune a la mejor ficción juvenil. El libro está reconocido como un clásico de la literatura infantil y es uno de los más vendidos de todos los tiempos, con más de 100 millones de ejemplares vendidos.",
    author: "J.R.R. Tolkien",
    image: "https://images.cdn3.buscalibre.com/fit-in/360x360/aa/e7/aae7c78b448cce18accecef9e7b5dc6d.jpg",
    year: 1937,
    pages: 310,
    language: "Español"
  },
  {
    id: 10,
    title: "Frankenstein",
    description: "Frankenstein; or, The Modern Prometheus is an 1818 novel written by English author Mary Shelley. Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. Shelley started writing the story when she was 18, and the first edition was published anonymously in London on 1 January 1818, when she was 20. Her name first appeared in the second edition, which was published in Paris in 1821.",
    author: "Mary Shelley",
    image: "https://i.pinimg.com/1200x/bc/9b/db/bc9bdb32b8a59f4aef4dcdda2e81c2a7.jpg",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 11,
    title: "Le seigneur des anneaux",
    description: "Le Seigneur des anneaux (The Lord of the Rings) est un roman en trois volumes de J. R. R. Tolkien paru en 1954 et 1955. L'histoire reprend certains personnages du Hobbit, bien que l'œuvre soit plus sombre et plus complexe que ce dernier livre. Elle se situe dans un monde imaginaire appelé la Terre du Milieu, qui est le cadre de la plupart des œuvres de Tolkien.",
    author: "Tolkien",
    image: "https://media.groupe.gallimard.fr/couvHD/J02275.jpg",
    year: 1818,
    pages: 280,
    language: "Français"
  },
  {
    id: 12,
    title: "Enoc book",
    description: "The Book of Enoch is an ancient Hebrew apocalyptic religious text, ascribed by tradition to the patriarch Enoch who was the father of Methuselah and the great-grandfather of Noah.",
    author: "Enoc",
    image: "https://prodimage.images-bn.com/pimages/9781948229579_p0_v1_s1200x630.jpg",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 13,
    title: "Temporada de la bruja",
    description: "Aaron has lived in Portland, OR for over 20 years, but spent his childhood in the desolate high desert of Northern California. He’s worn many hats over the years, going from film production to radio host, writing has always been his love. In addition to his young adult novels, Aaron has written stories for Dark Horse Comics, Image Comics, and Activision. When he’s not at his keyboard, he’s in the kitchen experimenting with traditional Mexican ingredients to rediscover lost dishes.",
    author: "Bruja",
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781549308161/season-of-the-bruja-vol-1-9781549308161_hr.jpg",
    year: 1818,
    pages: 280,
    language: "Español"
  },
  {
    id: 14,
    title: "The brothers Grimm",
    description: "The Brothers Grimm (die Brüder Grimm or die Gebrüder Grimm), Jacob (1785–1863) and Wilhelm (1786–1859), were German academics who together collected and published folklore.",
    author: "Grimm",
    image: "https://m.media-amazon.com/images/I/61v+KUMd4JL._SL500_.jpg",
    year: 1818,
    pages: 280,
    language: "Deutsch"
  },
  {
    id: 15,
    title: "William Shakespeare",
    description: "William Shakespeare (bapt.Tooltip baptised 26[a] April 1564 – 23 April 1616)[b] was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist.",
    author: "Shakespeare",
    image: "https://covers.storytel.com/jpg-640/9781666106480.faeee1d5-b65f-4b20-9ce7-bef4bb788ac3?optimize=high&quality=70",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 16,
    title: "Macbeth",
    description: "Macbeth ist eine Tragödie von William Shakespeare. Sie ist eines seiner kürzesten erhaltenen Werke und entstand vermutlich um 1606. Die Handlung spielt in Schottland; Hauptfigur ist der Heerführer Macbeth. Die Tragödie gehört zu den bekanntesten Werken Shakespeares und ist häufig Gegenstand von Aufführungen und Neuinterpretationen.",
    author: "Shakespeare",
    image: "https://images.thalia.media/07/-/6cabf2ee50664392a7b03963c1b6d450/macbeth-shakespeare-zweisprachig-englisch-deutsch-taschenbuch-william-shakespeare.jpeg",
    year: 1818,
    pages: 280,
    language: "Deutsch"
  },
  {
    id: 17,
    title: "La odisea de Homero",
    description: "La Odisea es un poema épico griego compuesto por 24 cantos, atribuido al poeta griego Homero. Se cree que fue compuesta en el siglo VIII a. C., en los asentamientos que Grecia tenía en Asia Menor, islas del mar Egeo y en la Magna Grecia. La Odisea es, junto a la Ilíada, una de las dos obras capitales de la antigua literatura griega.",
    author: "Homero",
    image: "https://www.isliada.org/static/images/2017/10/la-odisea-homero.jpg",
    year: 1818,
    pages: 280,
    language: "Español"
  },
  {
    id: 18,
    title: "Leonardo da Vinci",
    description: "Leonardo di ser Piero da Vinci[b] (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.",
    author: "Walter Isaacson",
    image: "https://covers.shakespeareandcompany.com/97813988/9781398824515.jpg",
    year: 1818,
    pages: 280,
    language: "Français"
  }
];

export default books;
