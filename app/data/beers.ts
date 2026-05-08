export interface Beer {
  id: number;
  nameGeo: string;
  nameEn: string;
  price: number;
  volume: string;
  abv: number;
  gradient: string;
  description: string;
}

export const beers: Beer[] = [
  { id: 1, nameGeo: "სტაროპრამენი", nameEn: "Staropramen", price: 8.84, volume: "1L", abv: 5, gradient: "from-yellow-500 to-amber-700", description: "Prague's finest lager — crisp, golden, refreshingly smooth." },
  { id: 2, nameGeo: "ლოვენბრაუ", nameEn: "Löwenbräu", price: 9.78, volume: "1L", abv: 5, gradient: "from-blue-600 to-blue-900", description: "Iconic Bavarian lager with a rich, malty character since 1383." },
  { id: 3, nameGeo: "ტაატი", nameEn: "Taati", price: 11.48, volume: "1L", abv: 5, gradient: "from-amber-500 to-orange-800", description: "Georgian craft lager with a clean finish and local character." },
  { id: 4, nameGeo: "ეფესი", nameEn: "Efes", price: 9.78, volume: "1L", abv: 5, gradient: "from-red-600 to-red-900", description: "Turkey's most popular pilsner — light, fresh, and easy-drinking." },
  { id: 5, nameGeo: "ჰოეგარდენი", nameEn: "Hoegaarden", price: 19.25, volume: "1L", abv: 4, gradient: "from-yellow-200 to-amber-400", description: "Belgian wheat beer with notes of orange peel and coriander." },
  { id: 6, nameGeo: "კათხა", nameEn: "Katxa", price: 6.72, volume: "1L", abv: 5, gradient: "from-orange-500 to-amber-700", description: "Light Georgian lager — crisp and perfect for warm Batumi evenings." },
  { id: 7, nameGeo: "კასრი", nameEn: "Kasri", price: 5.53, volume: "1L", abv: 4, gradient: "from-amber-400 to-yellow-600", description: "Affordable and refreshing — the everyday Georgian favourite." },
];
