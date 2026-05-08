export interface MenuItem {
  id: number;
  nameGeo: string;
  nameEn: string;
  nameRu: string;
  nameTr: string;
  price: number;
  oldPrice?: number;
  volume?: string;
  abv?: number;
  description?: string;
  descriptionRu?: string;
  descriptionTr?: string;
  gradient: string;
  badge?: string;
  image?: string;
}

export interface MenuCategory {
  key: string;
  labelEn: string;
  labelGeo: string;
  labelRu: string;
  labelTr: string;
  emoji: string;
  woltUrl: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    key: "draft",
    labelEn: "Draft Beer",
    labelGeo: "ჩამოსასხმელი ლუდი",
    labelRu: "Разливное пиво",
    labelTr: "Fıçı Birası",
    emoji: "🍺",
    woltUrl: "https://wolt.com/en/geo/batumi/venue/beer-garrison/items/draft-beer--1",
    items: [
      {
        id: 1,
        nameGeo: "სტაროპრამენი",
        nameEn: "Staropramen",
        nameRu: "Старопрамен",
        nameTr: "Staropramen",
        price: 8.84,
        volume: "1L",
        abv: 5,
        gradient: "from-yellow-500 to-amber-700",
        description: "Prague's finest lager — crisp, golden, refreshingly smooth.",
        descriptionRu: "Лучший пражский лагер — лёгкий, золотистый и освежающий.",
        descriptionTr: "Prag'ın en iyi lageri — hafif, altın rengi ve ferahlatıcı.",
        image: "/beers/staropramen.png",
      },
      {
        id: 2,
        nameGeo: "ლოვენბრაუ",
        nameEn: "Löwenbräu",
        nameRu: "Лёвенброй",
        nameTr: "Löwenbräu",
        price: 9.78,
        volume: "1L",
        abv: 5,
        gradient: "from-blue-600 to-blue-900",
        description: "Iconic Bavarian lager with rich, malty character since 1383.",
        descriptionRu: "Легендарный баварский лагер с богатым солодовым характером с 1383 года.",
        descriptionTr: "1383'ten bu yana zengin, maltlı karakteriyle ikonik Bavyera lageri.",
        image: "/beers/lowenbrau.png",
      },
      {
        id: 3,
        nameGeo: "ტაატი",
        nameEn: "Taati",
        nameRu: "Таати",
        nameTr: "Taati",
        price: 11.48,
        volume: "1L",
        abv: 5,
        gradient: "from-amber-500 to-orange-800",
        description: "Georgian craft lager with a clean finish and local character.",
        descriptionRu: "Грузинский крафтовый лагер с чистым вкусом и местным характером.",
        descriptionTr: "Temiz bitiş ve yerel karakteriyle Gürcü craft lageri.",
        image: "/beers/taati.png",
      },
      {
        id: 4,
        nameGeo: "ეფესი",
        nameEn: "Efes",
        nameRu: "Эфес",
        nameTr: "Efes",
        price: 9.78,
        volume: "1L",
        abv: 5,
        gradient: "from-red-600 to-red-900",
        description: "Turkey's most popular pilsner — light, fresh, easy-drinking.",
        descriptionRu: "Самый популярный турецкий пилснер — лёгкий, свежий.",
        descriptionTr: "Türkiye'nin en popüler pilseni — hafif, taze ve içimi kolay.",
        image: "/beers/efes.png",
      },
      {
        id: 5,
        nameGeo: "ჰოეგარდენი",
        nameEn: "Hoegaarden",
        nameRu: "Хугарден",
        nameTr: "Hoegaarden",
        price: 19.25,
        volume: "1L",
        abv: 4,
        gradient: "from-yellow-200 to-amber-400",
        description: "Belgian wheat beer with notes of orange peel and coriander.",
        descriptionRu: "Бельгийское пшеничное пиво с нотками апельсиновой цедры и кориандра.",
        descriptionTr: "Portakal kabuğu ve kişniş notalarıyla Belçika buğday birası.",
        badge: "Premium",
        image: "/beers/hoegarden.png",
      },
      {
        id: 6,
        nameGeo: "კათხა",
        nameEn: "Katxa",
        nameRu: "Катха",
        nameTr: "Katxa",
        price: 6.72,
        volume: "1L",
        abv: 5,
        gradient: "from-orange-500 to-amber-700",
        description: "Light Georgian lager — crisp and perfect for warm Batumi evenings.",
        descriptionRu: "Лёгкий грузинский лагер — освежающий в тёплые батумские вечера.",
        descriptionTr: "Hafif Gürcü lageri — sıcak Batum akşamları için mükemmel.",
        image: "/beers/katxa.png",
      },
      {
        id: 7,
        nameGeo: "კასრი",
        nameEn: "Kasri",
        nameRu: "Касри",
        nameTr: "Kasri",
        price: 5.53,
        volume: "1L",
        abv: 4,
        gradient: "from-amber-400 to-yellow-600",
        description: "Affordable and refreshing — the everyday Georgian favourite.",
        descriptionRu: "Доступное и освежающее — повседневный грузинский фаворит.",
        descriptionTr: "Uygun fiyatlı ve ferahlatıcı — günlük Gürcü favorisi.",
        image: "/beers/kasri.png",
      },
    ],
  },
  {
    key: "snacks",
    labelEn: "Snacks",
    labelGeo: "სნექები",
    labelRu: "Снеки",
    labelTr: "Atıştırmalık",
    emoji: "🍟",
    woltUrl: "https://wolt.com/en/geo/batumi/venue/beer-garrison/items/snacks",
    items: [
      { id: 10, nameGeo: "მიწისთხილი მარილიანი", nameEn: "Salted Peanuts", nameRu: "Солёный арахис", nameTr: "Tuzlu Yer Fıstığı", price: 5.70, oldPrice: 6.70, volume: "120g", gradient: "from-yellow-600 to-amber-800", description: "Classic salted peanuts — perfect with a cold beer.", descriptionRu: "Классический солёный арахис — идеально к холодному пиву.", descriptionTr: "Klasik tuzlu yer fıstığı — soğuk birayla mükemmel." },
      { id: 11, nameGeo: "Pringles Paprika", nameEn: "Pringles Paprika", nameRu: "Принглс Паприка", nameTr: "Pringles Paprika", price: 9.78, oldPrice: 11.50, gradient: "from-red-500 to-red-800", description: "Crispy potato chips with smoky paprika flavour.", descriptionRu: "Хрустящие чипсы с копчёной паприкой.", descriptionTr: "Dumanlı paprika aromalı çıtır cips." },
      { id: 12, nameGeo: "Pringles Barbeque", nameEn: "Pringles Barbeque", nameRu: "Принглс Барбекю", nameTr: "Pringles Barbekü", price: 9.78, oldPrice: 11.50, gradient: "from-orange-600 to-red-800", description: "Bold BBQ flavoured Pringles — a crowd favourite.", descriptionRu: "Яркие чипсы со вкусом BBQ.", descriptionTr: "Cesur BBQ aromalı Pringles." },
      { id: 13, nameGeo: "არაქისი ბეკონის გემოთი", nameEn: "Peanuts Bacon Flavour BIG BOB", nameRu: "Арахис со вкусом бекона BIG BOB", nameTr: "Pastırma Aromalı Yer Fıstığı BIG BOB", price: 3.50, oldPrice: 5.00, volume: "50g", gradient: "from-amber-600 to-orange-900", description: "Roasted peanuts with smoky bacon seasoning.", descriptionRu: "Жареный арахис с дымным вкусом бекона.", descriptionTr: "Dumanlı pastırma baharatlı kavrulmuş yer fıstığı." },
      { id: 14, nameGeo: "გემო მიწისთხილი", nameEn: "GEMO Salted Peanuts", nameRu: "GEMO Солёный арахис", nameTr: "GEMO Tuzlu Yer Fıstığı", price: 5.53, oldPrice: 6.50, gradient: "from-yellow-500 to-amber-700", description: "Crunchy salted peanuts by Gemo.", descriptionRu: "Хрустящий солёный арахис от Gemo.", descriptionTr: "Gemo'dan çıtır tuzlu yer fıstığı." },
      { id: 15, nameGeo: "კრუტონები პომიდვრით", nameEn: "Three Crusts Croutons Tomato & Herb", nameRu: "Гренки с томатами и зеленью", nameTr: "Domates & Ot Kruton", price: 3.80, gradient: "from-orange-400 to-amber-600", description: "Light crispy croutons with tomato and herb seasoning.", descriptionRu: "Лёгкие хрустящие гренки с томатами и зеленью.", descriptionTr: "Domates ve ot baharatlı hafif çıtır kruton." },
    ],
  },
  {
    key: "bottled",
    labelEn: "Bottled Beer",
    labelGeo: "ბოთლის ლუდი",
    labelRu: "Бутылочное пиво",
    labelTr: "Şişe Birası",
    emoji: "🍾",
    woltUrl: "https://wolt.com/en/geo/batumi/venue/beer-garrison/items/bottled-beer",
    items: [],
  },
  {
    key: "vodka",
    labelEn: "Vodka",
    labelGeo: "არაყი",
    labelRu: "Водка",
    labelTr: "Votka",
    emoji: "🥃",
    woltUrl: "https://wolt.com/en/geo/batumi/venue/beer-garrison/items/vodka",
    items: [],
  },
  {
    key: "nonalcohol",
    labelEn: "Non-Alcoholic",
    labelGeo: "არაალკოჰოლური",
    labelRu: "Безалкогольное",
    labelTr: "Alkolsüz",
    emoji: "🥤",
    woltUrl: "https://wolt.com/en/geo/batumi/venue/beer-garrison/items/nonalcohol",
    items: [],
  },
];
