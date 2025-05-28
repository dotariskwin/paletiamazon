import { Product, Testimonial } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Palet Frigidere Premium',
    description: 'Palet cu frigidere și combine frigorifice returnate din Germania. Majoritatea sunt modele premium Samsung și LG, în stare foarte bună, necesită doar curățare și verificare.',
    palletSize: '120x100x180cm',
    itemCount: 4,
    condition: 'Returnate în stare bună, majoritatea funcționale',
    image: 'https://cdn.prod.website-files.com/60af32ce0a63dc4f22cc85a1/66c875518b8a803449145971_655de7128ab13c1d42edfcfc_What%2520Are%2520Amazon%2520Return%2520Pallets.webp',
    category: 'Frigidere',
    categoryId: 'frigidere',
    featured: true
  },
  {
    id: 2,
    name: 'Palet Mașini de Spălat Mixte',
    description: 'Palet cu mașini de spălat returnate din Austria. Conține modele Bosch, Siemens și Beko. Majoritatea necesită verificare tehnică minimă.',
    palletSize: '120x100x160cm',
    itemCount: 6,
    condition: 'Returnate cu ambalaj original, verificare necesară',
    image: 'https://img001.prntscr.com/file/img001/ECF03EaNRyqrOy_WKTHGkg.jpg',
    category: 'Mașini de Spălat',
    categoryId: 'masini-de-spalat',
    featured: true
  },
  {
    id: 3,
    name: 'Palet Aragazuri și Plite',
    description: 'Palet mixt cu aragazuri și plite returnate din Italia. Include modele Electrolux și Zanussi. Majoritatea în stare bună, necesită doar curățare.',
    palletSize: '120x100x140cm',
    itemCount: 5,
    condition: 'Returnate în stare bună, verificare recomandată',
    image: 'https://img001.prntscr.com/file/img001/UMXTOW_0SxagZK1rg-a58w.jpg',
    category: 'Aragazuri',
    categoryId: 'aragazuri',
    featured: false
  },
  {
    id: 4,
    name: 'Palet Uscătoare Premium',
    description: 'Palet cu uscătoare de rufe returnate din Elveția. Modele Miele și Bosch cu pompă de căldură. Stare tehnică foarte bună.',
    palletSize: '120x100x160cm',
    itemCount: 4,
    condition: 'Returnate în ambalaj original, majoritatea funcționale',
    image: 'https://images.pexels.com/photos/4050445/pexels-photo-4050445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Uscătoare',
    categoryId: 'uscatoare',
    featured: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alexandru Popescu',
    location: 'București',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    comment: 'Am achiziționat un palet de frigidere și am fost impresionat de calitatea produselor. Majoritatea erau în stare foarte bună și am reușit să le recondiționăm rapid pentru revânzare.',
    rating: 5
  },
  {
    id: 2,
    name: 'Maria Ionescu',
    location: 'Cluj-Napoca',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    comment: 'Colaborarea cu PaletShop este excelentă. Paletele de mașini de spălat sunt întotdeauna conform descrierii, iar suportul oferit este profesionist.',
    rating: 4
  },
  {
    id: 3,
    name: 'Mihai Dumitrescu',
    location: 'Timișoara',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    comment: 'Servicii de încredere și produse de calitate. Am comandat mai multe paleți și de fiecare dată am primit exact ce s-a promis. Recomand cu încredere!',
    rating: 5
  }
];