// save all data Apps practical

const allAppData = [
  {
    id: 1,
    img: "./src/images/apps-practical/app-practical-1.webp",
    title: "فیلیمو - تماشای فیلم و سریال",
    type: "سرگرمی",
    categories: "applications",
    appVolume: 20,
  },
  {
    id: 2,
    img: "./src/images/apps-practical/app-practical-2.webp",
    title: "ترب | بهترین قیمت بازار ",
    type: "خرید",
    categories: "applications",
    appVolume: 21,
  },
  {
    id: 3,
    img: "./src/images/apps-practical/app-practical-3.webp",
    title: "آپ کارت به کارت،خلافی خودرو،چک صیادی",
    type: "امور مالی",
    categories: "applications",
    appVolume: 22,
  },
  {
    id: 4,
    img: "./src/images/apps-practical/app-practical-4.webp",
    title: "اسنپ |Snapp سامانه هوشمند حمل و نقل",
    type: "رفت و آمد",
    categories: "applications",
    appVolume: 23,
  },
  {
    id: 5,
    img: "./src/images/apps-practical/app-practical-5.webp",
    title: "دیوار",
    type: "خرید",
    categories: "applications",
    appVolume: 24,
  },
  {
    id: 6,
    img: "./src/images/apps-practical/app-practical-6.webp",
    title: "اسنپ فود | سفارش غذا",
    type: "آشپزی و رستوران",
    categories: "applications",
    appVolume: 25,
  },
  {
    id: 7,
    img: "./src/images/apps-practical/app-practical-7.webp",
    title: "تپسی - درخواست آنلاین خودرو و پیک",
    type: "رفت و آمد",
    categories: "applications",
    appVolume: 26,
  },
  {
    id: 8,
    img: "./src/images/apps-practical/app-practical-8.webp",
    title: "فیلم‌نت - تماشای فیلم و سریال",
    type: "سرگرمی",
    categories: "applications",
    appVolume: 27,
  },
  {
    id: 9,
    img: "./src/images/apps-practical/app-practical-9.webp",
    title: "بلد — نقشه‌ و ‌مسیریاب",
    type: "رفت و آمد",
    categories: "applications",
    appVolume: 28,
  },
  {
    id: 10,
    img: "./src/images/apps-practical/app-practical-10.webp",
    title: "علی‌بابا | خرید بلیط، هتل و تور",
    type: "سفر",
    categories: "applications",
    appVolume: 29,
  },
  {
    id: 11,
    img: "./src/images/apps-practical/app-practical-11.webp",
    title: "آیتول (خلافی خودرو، بیمه، عوارض)",
    type: "امور مالی",
    categories: "applications",
    appVolume: 30,
  },
  {
    id: 12,
    img: "./src/images/apps-practical/app-practical-12.webp",
    title: "دیجی‌کالا | فروشگاه خرید آنلاین",
    type: "خرید",
    categories: "applications",
    appVolume: 19,
  },
  {
    id: 13,
    img: "./src/images/apps-practical/app-practical-13.webp",
    title: "پیندو | خرید و فروش بدون واسطه کالا",
    type: "خرید",
    categories: "applications",
    appVolume: 18,
  },
  {
    id: 14,
    img: "./src/images/apps-practical/app-practical-14.webp",
    title: "طاقچه | دانلود کتاب صوتی و الکترونیک",
    type: "کتاب و مطبوعات",
    categories: "applications",
    appVolume: 17,
  },
  {
    id: 15,
    img: "./src/images/apps-practical/app-practical-15.webp",
    title: "نشان | نقشه و مسیریاب ",
    type: "رفت و آمد",
    categories: "applications",
    appVolume: 20,
  },
  {
    id: 16,
    img: "./src/images/apps-practical/app-practical-16.webp",
    title: "سپهر360 | خرید بلیط هواپیما",
    type: "سفر",
    categories: "applications",
    appVolume: 29,
  },

  {
    id: 17,
    img: "./src/images/apps-bank/app-bank-1.webp",
    title: "همراه بانک ملت",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 11,
  },
  {
    id: 18,
    img: "./src/images/apps-bank/app-bank-2.webp",
    title: "همراه بام ملی",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 12,
  },
  {
    id: 19,
    img: "./src/images/apps-bank/app-bank-3.webp",
    title: "همراه بانک قرض الحنه مهر ایران",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 13,
  },
  {
    id: 20,
    img: "./src/images/apps-bank/app-bank-4.webp",
    title: "همراه بانک سپه",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 14,
  },
  {
    id: 21,
    img: "./src/images/apps-bank/app-bank-5.webp",
    title: "همراه بانک صادرات ایران",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 15,
  },
  {
    id: 22,
    img: "./src/images/apps-bank/app-bank-6.webp",
    title: "بلوبانک - بانک ولی دوست‌داشتنی",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 16,
  },
  {
    id: 23,
    img: "./src/images/apps-bank/app-bank-7.webp",
    title: "همراه بانک تجارت",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 17,
  },
  {
    id: 24,
    img: "./src/images/apps-bank/app-bank-8.webp",
    title: "همراه بانک کشاورزی",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 18,
  },
  {
    id: 25,
    img: "./src/images/apps-bank/app-bank-9.webp",
    title: "همراه بانک قرض الحسنه رسالت",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 19,
  },
  {
    id: 26,
    img: "./src/images/apps-bank/app-bank-10.webp",
    title: "ویپاد | تَرابانک پاسارگاد",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 22,
  },
  {
    id: 27,
    img: "./src/images/apps-bank/app-bank-11.webp",
    title: "موبایل بانک رفاه",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 21,
  },
  {
    id: 28,
    img: "./src/images/apps-bank/app-bank-12.webp",
    title: "همراه شهر پلاس",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 25,
  },
  {
    id: 29,
    img: "./src/images/apps-bank/app-bank-13.webp",
    title: "همراه بانک پست بانک",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 9,
  },
  {
    id: 30,
    img: "./src/images/apps-bank/app-bank-14.webp",
    title: "همراه بانک پاسارگاد (موبایل بانک)",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 10,
  },
  {
    id: 31,
    img: "./src/images/apps-bank/app-bank-15.webp",
    title: "فراز (همراه بانک ایران زمین)",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 11,
  },
  {
    id: 32,
    img: "./src/images/apps-bank/app-bank-16.webp",
    title: "پارسیان من (همراه بانک پارسیان)",
    type: "امور مالی",
    categories: "bankApps",
    appVolume: 12,
  },

  {
    id: 33,
    img: "./src/images/apps-entertainment/app-entertainment-1.webp",
    title: "آپارات",
    type: "سرگرمی",
    categories: "entertainmentApps",
    appVolume: 32,
  },
  {
    id: 34,
    img: "./src/images/apps-entertainment/app-entertainment-2.webp",
    title: "تلوبیون: پخش زنده و آرشیو تلویزیون",
    type: "سرگرمی",
    categories: "entertainmentApps",
    appVolume: 31,
  },
  {
    id: 35,
    img: "./src/images/apps-entertainment/app-entertainment-3.webp",
    title: "دیجیتون (کارتون و انیمیشن و موزیک)",
    type: "کودک",
    categories: "entertainmentApps",
    appVolume: 33,
  },
  {
    id: 36,
    img: "./src/images/apps-entertainment/app-entertainment-4.webp",
    title: "ارگ حرفه ای",
    type: "موسیقی",
    categories: "entertainmentApps",
    appVolume: 32,
  },
  {
    id: 37,
    img: "./src/images/apps-entertainment/app-entertainment-5.webp",
    title: "Paint By Number - Free Coloring Book & Puzzle Game",
    type: "تفتنی",
    categories: "entertainmentApps",
    appVolume: 34,
  },
  {
    id: 38,
    img: "./src/images/apps-entertainment/app-entertainment-6.webp",
    title: "Spotify - اسپاتیفای",
    type: "موسیقی",
    categories: "entertainmentApps",
    appVolume: 35,
  },
  {
    id: 39,
    img: "./src/images/apps-entertainment/app-entertainment-7.webp",
    title: "SoundCloud – پخش موسیقی ساند کلود",
    type: "موسیقی",
    categories: "entertainmentApps",
    appVolume: 36,
  },
  {
    id: 40,
    img: "./src/images/apps-entertainment/app-entertainment-8.webp",
    title: "Podcast Player App - Castbox",
    type: "موسیقی",
    categories: "entertainmentApps",
    appVolume: 21,
  },
  {
    id: 41,
    img: "./src/images/apps-entertainment/app-entertainment-9.webp",
    title: "Netflix - نتفلیکس",
    type: "سرگرمی",
    categories: "entertainmentApps",
    appVolume: 22,
  },
  {
    id: 42,
    img: "./src/images/apps-entertainment/app-entertainment-10.webp",
    title: "Beautycam- Selfie Editor",
    type: "عکاسی و ویدیو",
    categories: "entertainmentApps",
    appVolume: 23,
  },
  {
    id: 43,
    img: "./src/images/apps-entertainment/app-entertainment-11.webp",
    title: "ایران صدا - نسخه کامل",
    type: "موسیقی",
    categories: "entertainmentApps",
    appVolume: 24,
  },
  {
    id: 44,
    img: "./src/images/apps-entertainment/app-entertainment-12.webp",
    title: "ToonApp – تبدیل عکس به تصویر کارتونی",
    type: "عکاسی و ویدیو",
    categories: "entertainmentApps",
    appVolume: 25,
  },
  {
    id: 45,
    img: "./src/images/apps-entertainment/app-entertainment-13.webp",
    title: "Reddit – خبرخوان و تالار گفتگو ردیت",
    type: "شبکه های اجتماعی",
    categories: "entertainmentApps",
    appVolume: 23,
  },
  {
    id: 46,
    img: "./src/images/apps-entertainment/app-entertainment-14.webp",
    title: "Omlet Arcade – ضبط ویدیو از بازی",
    type: "عکاسی و ویدیو",
    categories: "entertainmentApps",
    appVolume: 27,
  },
  {
    id: 47,
    img: "./src/images/apps-entertainment/app-entertainment-15.webp",
    title: "Amazon Prime Video",
    type: "سرگرمی",
    categories: "entertainmentApps",
    appVolume: 28,
  },
  {
    id: 48,
    img: "./src/images/apps-entertainment/app-entertainment-16.webp",
    title: "Lark Player – پخش موسیقی",
    type: "موسیقی",
    categories: "entertainmentApps",
    appVolume: 29,
  },

  {
    id: 49,
    img: "./src/images/apps-social/app-social-1.webp",
    title: "imo-International Calls & Chat",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 19,
  },
  {
    id: 50,
    img: "./src/images/apps-social/app-social-2.webp",
    title: "Instagram Lite – اینستاگرام لایت",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 20,
  },
  {
    id: 51,
    img: "./src/images/apps-social/app-social-3.webp",
    title: "Skype",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 18,
  },
  {
    id: 52,
    img: "./src/images/apps-social/app-social-4.webp",
    title: "BeReal - بی ریل",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 17,
  },
  {
    id: 53,
    img: "./src/images/apps-social/app-social-5.webp",
    title: "نزدیکا - دایره دوستان جدید تو",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 18,
  },
  {
    id: 54,
    img: "./src/images/apps-social/app-social-6.webp",
    title: "باهم - دوستای جدید پیدا کن",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 16,
  },
  {
    id: 55,
    img: "./src/images/apps-social/app-social-7.webp",
    title: "پیام رسان ایتا",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 21,
  },
  {
    id: 56,
    img: "./src/images/apps-social/app-social-8.webp",
    title: "Plato - Games & Group Chats – چت گروهی و بازی پلاتو (افلاطون)",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 22,
  },
  {
    id: 57,
    img: "./src/images/apps-social/app-social-9.webp",
    title: "پاتوق - شبکه اجتماعی بازی و سرگرمی",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 23,
  },
  {
    id: 58,
    img: "./src/images/apps-social/app-social-10.webp",
    title: "ویسگون - شبکه اجتماعی فیلم و عکس",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 24,
  },
  {
    id: 59,
    img: "./src/images/apps-social/app-social-11.webp",
    title: "هورسا",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 25,
  },
  {
    id: 60,
    img: "./src/images/apps-social/app-social-12.webp",
    title: "بالونت – پیام ‌رسانی حرفه‌ای",
    type: "شبکه های اجتماعی",
    categories: "socialApps",
    appVolume: 26,
  },

  {
    id: 61,
    img: "./src/images/apps-musician/app-musician-1.webp",
    title: "Piano Kids - Music & Songs – پیانو برای کودکان",
    type: "کودک",
    categories: "musicianApps",
    appVolume: 14,
  },
  {
    id: 62,
    img: "./src/images/apps-musician/app-musician-2.webp",
    title: "ارگ 2023",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 13,
  },
  {
    id: 63,
    img: "./src/images/apps-musician/app-musician-3.webp",
    title: "ارگ حرفه ای",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 21,
  },
  {
    id: 64,
    img: "./src/images/apps-musician/app-musician-4.webp",
    title: "Real Piano",
    type: "تفتنی",
    categories: "musicianApps",
    appVolume: 14,
  },
  {
    id: 65,
    img: "./src/images/apps-musician/app-musician-5.webp",
    title: "ارگ ایرانی + ساخت موسیقی",
    type: "تفتنی",
    categories: "musicianApps",
    appVolume: 15,
  },
  {
    id: 66,
    img: "./src/images/apps-musician/app-musician-6.webp",
    title: "Real Guitar - Music Band Game",
    type: "تفتنی",
    categories: "musicianApps",
    appVolume: 16,
  },
  {
    id: 67,
    img: "./src/images/apps-musician/app-musician-7.webp",
    title: "Perfect Piano - پرفکت پیانو",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 17,
  },
  {
    id: 68,
    img: "./src/images/apps-musician/app-musician-8.webp",
    title: "Real Darbuka",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 18,
  },
  {
    id: 69,
    img: "./src/images/apps-musician/app-musician-9.webp",
    title: "Hang Drum Simulator",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 19,
  },
  {
    id: 70,
    img: "./src/images/apps-musician/app-musician-10.webp",
    title: "سنتور آموزشی",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 20,
  },
  {
    id: 71,
    img: "./src/images/apps-musician/app-musician-11.webp",
    title: "Piano - Music Keyboard & Tiles",
    type: "تفتنی",
    categories: "musicianApps",
    appVolume: 22,
  },
  {
    id: 72,
    img: "./src/images/apps-musician/app-musician-12.webp",
    title: "Real Drum: electronic drums",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 23,
  },
  {
    id: 73,
    img: "./src/images/apps-musician/app-musician-13.webp",
    title: "Kalimba Real",
    type: "شبیه سازی",
    categories: "musicianApps",
    appVolume: 24,
  },
  {
    id: 74,
    img: "./src/images/apps-musician/app-musician-14.webp",
    title: "X Drum - 3D & AR",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 25,
  },
  {
    id: 75,
    img: "./src/images/apps-musician/app-musician-15.webp",
    title: "Real Percussion: cumbia kit",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 26,
  },
  {
    id: 76,
    img: "./src/images/apps-musician/app-musician-16.webp",
    title: "Keylimba – کیلیمبا",
    type: "موسیقی",
    categories: "musicianApps",
    appVolume: 27,
  },

  {
    id: 77,
    img: "./src/images/apps-payment/app-payment-1.webp",
    title: "همراه من (اپلیکیشن رسمی همراه اول)",
    type: "ابزار ها",
    categories: "paymentApps",
    appVolume: 11,
  },
  {
    id: 78,
    img: "./src/images/apps-payment/app-payment-2.webp",
    title: "آپ کارت به کارت،خلافی خودرو،چک صیادی",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 10,
  },
  {
    id: 79,
    img: "./src/images/apps-payment/app-payment-3.webp",
    title: "هف هشتاد (#780*)",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 12,
  },
  {
    id: 80,
    img: "./src/images/apps-payment/app-payment-4.webp",
    title: "آی کاپ",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 13,
  },
  {
    id: 81,
    img: "./src/images/apps-payment/app-payment-5.webp",
    title: "رایتل من",
    type: "ابزار ها",
    categories: "paymentApps",
    appVolume: 14,
  },
  {
    id: 82,
    img: "./src/images/apps-payment/app-payment-6.webp",
    title: "تاپ (پرداخت عوارضی،کارت به کارت)",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 15,
  },
  {
    id: 83,
    img: "./src/images/apps-payment/app-payment-7.webp",
    title: "سکه - کارت به کارت بانک ملت، شارژ",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 16,
  },
  {
    id: 84,
    img: "./src/images/apps-payment/app-payment-8.webp",
    title: "ستاره یک - قبض، بلیت، شارژ و بسته",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 17,
  },
  {
    id: 85,
    img: "./src/images/apps-payment/app-payment-9.webp",
    title: "ایوا - خدمات پرداخت بانک ملی ایران",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 18,
  },
  {
    id: 86,
    img: "./src/images/apps-payment/app-payment-10.webp",
    title: "724 - اپلیکیشن پرداخت موبایلی",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 20,
  },
  {
    id: 87,
    img: "./src/images/apps-payment/app-payment-11.webp",
    title: "اوانو | کارت به کارت، شارژ، قبض",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 19,
  },
  {
    id: 88,
    img: "./src/images/apps-payment/app-payment-12.webp",
    title: "دیجی پی - اپلیکیشن پرداخت دیجی کالا",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 22,
  },
  {
    id: 89,
    img: "./src/images/apps-payment/app-payment-13.webp",
    title: "ساد24 | چک صیاد، وام فوری",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 21,
  },
  {
    id: 90,
    img: "./src/images/apps-payment/app-payment-14.webp",
    title: "قبضینو - قبض، خلافی خودرو و عوارض",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 23,
  },
  {
    id: 91,
    img: "./src/images/apps-payment/app-payment-15.webp",
    title: "پِی‌پاد(خلافی،کارت به کارت،شارژ)",
    type: "امور مالی",
    categories: "paymentApps",
    appVolume: 24,
  },

  {
    id: 92,
    img: "./src/images/apps-antivirus/app-antivirus-1.webp",
    title: "Virus Cleaner - Antivirus, Cleaner & Booster",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 25,
  },
  {
    id: 93,
    img: "./src/images/apps-antivirus/app-antivirus-2.webp",
    title: "آنتی ویروس قوی💪 و هوشمند",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 15,
  },
  {
    id: 94,
    img: "./src/images/apps-antivirus/app-antivirus-3.webp",
    title: "Kaspersky Security",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 25,
  },
  {
    id: 95,
    img: "./src/images/apps-antivirus/app-antivirus-4.webp",
    title: "360 Security - Antivirus, Booster, Phone Cleaner",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 27,
  },
  {
    id: 96,
    img: "./src/images/apps-antivirus/app-antivirus-5.webp",
    title: "Clean Master - Antivirus, Applock & Cleaner",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 17,
  },
  {
    id: 97,
    img: "./src/images/apps-antivirus/app-antivirus-6.webp",
    title: "ویروس کش قوی گوشی | موبو Security",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 18,
  },
  {
    id: 98,
    img: "./src/images/apps-antivirus/app-antivirus-7.webp",
    title: "آنتی ویروس دکتر وب - نسخه رایگان",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 19,
  },
  {
    id: 99,
    img: "./src/images/apps-antivirus/app-antivirus-8.webp",
    title: "Avast Antivirus & Security",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 23,
  },
  {
    id: 100,
    img: "./src/images/apps-antivirus/app-antivirus-9.webp",
    title: "Norton360 Antivirus & Security",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 32,
  },
  {
    id: 101,
    img: "./src/images/apps-antivirus/app-antivirus-10.webp",
    title: "بیت‌بان | ویروس کش، قفل برنامه و عکس",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 33,
  },
  {
    id: 102,
    img: "./src/images/apps-antivirus/app-antivirus-11.webp",
    title: "بیت‌بان | ویروس کش، قفل برنامه و عکس",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 35,
  },
  {
    id: 103,
    img: "./src/images/apps-antivirus/app-antivirus-12.webp",
    title: "dfndr security: antivirus",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 37,
  },
  {
    id: 104,
    img: "./src/images/apps-antivirus/app-antivirus-13.webp",
    title: "AVG AntiVirus & Security",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 17,
  },
  {
    id: 105,
    img: "./src/images/apps-antivirus/app-antivirus-14.webp",
    title: "One Booster – پاک کننده و آنتی ویروس وان بوستر",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 24,
  },
  {
    id: 106,
    img: "./src/images/apps-antivirus/app-antivirus-15.webp",
    title: "One Security - آنتی ویروس و بهینه ساز گوشی وان سکیوریتی",
    type: "ابزار ها",
    categories: "antivirusApps",
    appVolume: 20,
  },

  {
    id: 107,
    img: "./src/images/apps-editors/app-editors-1.webp",
    title: "پادباکس پلاس",
    type: "سرگرمی",
    categories: "EditorsApps",
    appVolume: 15,
  },
  {
    id: 108,
    img: "./src/images/apps-editors/app-editors-2.webp",
    title: "فراز (همراه بانک ایران زمین)  ",
    type: "امور مالی",
    categories: "EditorsApps",
    appVolume: 16,
  },
  {
    id: 109,
    img: "./src/images/apps-editors/app-editors-3.webp",
    title: "حسابدار اپ | مشاوره مالیات آنلاین",
    type: "امور مالی",
    categories: "EditorsApps",
    appVolume: 17,
  },
  {
    id: 110,
    img: "./src/images/apps-editors/app-editors-4.webp",
    title: "زبانیموز | اموزش زبان با فیلم",
    type: "آموزش",
    categories: "EditorsApps",
    appVolume: 18,
  },
  {
    id: 111,
    img: "./src/images/apps-editors/app-editors-5.webp",
    title: "واید خدمات بانکی،خلافی،قبوض",
    type: "امور مالی",
    categories: "EditorsApps",
    appVolume: 14,
  },
  {
    id: 112,
    img: "./src/images/apps-editors/app-editors-6.webp",
    title: "English Phrasal Verbs",
    type: "آموزش",
    categories: "EditorsApps",
    appVolume: 13,
  },
  {
    id: 113,
    img: "./src/images/apps-editors/app-editors-7.webp",
    title: "کارتون های کودکانه ویدزی",
    type: "کودک",
    categories: "EditorsApps",
    appVolume: 12,
  },
  {
    id: 114,
    img: "./src/images/apps-editors/app-editors-8.webp",
    title: "دکتردکتر | نوبت دکتر و مشاوره پزشکی",
    type: "پزشکی",
    categories: "EditorsApps",
    appVolume: 11,
  },
  {
    id: 115,
    img: "./src/images/apps-editors/app-editors-9.webp",
    title: "تاکسی یوز | سفرهای شهری و بین‌شهری",
    type: "رفت و آمد",
    categories: "EditorsApps",
    appVolume: 40,
  },
  {
    id: 116,
    img: "./src/images/apps-editors/app-editors-10.webp",
    title: "Sky Tonight - Star Gazer Guide",
    type: "کتاب و مطبوعات",
    categories: "EditorsApps",
    appVolume: 9,
  },
  {
    id: 117,
    img: "./src/images/apps-editors/app-editors-11.webp",
    title: "آموزش زبان انگلیسی یوز",
    type: "آموزش",
    categories: "EditorsApps",
    appVolume: 25,
  },
  {
    id: 118,
    img: "./src/images/apps-editors/app-editors-12.webp",
    title: "«دید» میلیون‌ها ایده تصویری جذاب",
    type: "سبک زندگی",
    categories: "EditorsApps",
    appVolume: 9,
  },
  {
    id: 119,
    img: "./src/images/apps-editors/app-editors-13.webp",
    title: "آموزش زبان انگلیسی - دایموند",
    type: "آموزش",
    categories: "EditorsApps",
    appVolume: 21,
  },
  {
    id: 120,
    img: "./src/images/apps-editors/app-editors-14.webp",
    title: "مامانا | بارداری هفته به هفته",
    type: "پزشکی",
    categories: "EditorsApps",
    appVolume: 12,
  },
  {
    id: 121,
    img: "./src/images/apps-editors/app-editors-15.webp",
    title: "هپی تون | انیمیشن های انگلیسی",
    type: "کودک",
    categories: "EditorsApps",
    appVolume: 21,
  },

  {
    id: 122,
    img: "./src/images/update-editors-app/update-editors-1.webp",
    title: "لایتنر زبان جیب (فلش کارت)",
    type: "آموزش",
    categories: "EditorsUpdateApps",
    appVolume: 12,
  },
  {
    id: 123,
    img: "./src/images/update-editors-app/update-editors-2.webp",
    title: "ویپاد | تَرابانک پاسارگاد",
    type: "امور مالی",
    categories: "EditorsUpdateApps",
    appVolume: 24,
  },
  {
    id: 124,
    img: "./src/images/update-editors-app/update-editors-3.webp",
    title: "همراه تریدر نوبیتکس",
    type: "امور مالی",
    categories: "EditorsUpdateApps",
    appVolume: 5,
  },
  {
    id: 125,
    img: "./src/images/update-editors-app/update-editors-4.webp",
    title: "ویسگون - شبکه اجتماعی فیلم و عکس",
    type: "شبکه های اجتماعی",
    categories: "EditorsUpdateApps",
    appVolume: 6,
  },
  {
    id: 126,
    img: "./src/images/update-editors-app/update-editors-5.webp",
    title: "Digital Wellbeing – سلامت دیجیتال",
    type: "ابزار ها",
    categories: "EditorsUpdateApps",
    appVolume: 7,
  },
  {
    id: 127,
    img: "./src/images/update-editors-app/update-editors-6.webp",
    title: "آیدی پی(عوارض،کارت به کارت،شارژمترو)",
    type: "امور مالی",
    categories: "EditorsUpdateApps",
    appVolume: 8,
  },
  {
    id: 128,
    img: "./src/images/update-editors-app/update-editors-7.webp",
    title: "آیتول (خلافی خودرو، بیمه، عوارض)",
    type: "امور مالی",
    categories: "EditorsUpdateApps",
    appVolume: 9,
  },
  {
    id: 129,
    img: "./src/images/update-editors-app/update-editors-8.webp",
    title: "دیجی‌کالا | فروشگاه خرید آنلاین",
    type: "خرید",
    categories: "EditorsUpdateApps",
    appVolume: 10,
  },
  {
    id: 130,
    img: "./src/images/update-editors-app/update-editors-9.webp",
    title: "فام(اپلیکیشن بانکی آنلاین)",
    type: "امور مالی",
    categories: "EditorsUpdateApps",
    appVolume: 11,
  },
  {
    id: 131,
    img: "./src/images/update-editors-app/update-editors-10.webp",
    title: "آچاره | خدمات و تعمیرات در منزل",
    type: "سبک زندگی",
    categories: "EditorsUpdateApps",
    appVolume: 12,
  },
  {
    id: 132,
    img: "./src/images/update-editors-app/update-editors-11.webp",
    title: "اسنپ |Snapp سامانه هوشمند حمل و نقل",
    type: "رفت و آمد",
    categories: "EditorsUpdateApps",
    appVolume: 13,
  },
  {
    id: 133,
    img: "./src/images/update-editors-app/update-editors-12.webp",
    title: "فیلم‌نت - تماشای فیلم و سریال",
    type: "سرگرمی",
    categories: "EditorsUpdateApps",
    appVolume: 14,
  },
  {
    id: 134,
    img: "./src/images/update-editors-app/update-editors-13.webp",
    title: "همراه بانک ملت",
    type: "امور مالی",
    categories: "EditorsUpdateApps",
    appVolume: 15,
  },
  {
    id: 135,
    img: "./src/images/update-editors-app/update-editors-14.webp",
    title: "SHAREit - شیر ایت",
    type: "ابزار ها",
    categories: "EditorsUpdateApps",
    appVolume: 16,
  },
  {
    id: 136,
    img: "./src/images/update-editors-app/update-editors-15.webp",
    title: "ارگ حرفه ای",
    type: "موسیقی",
    categories: "EditorsUpdateApps",
    appVolume: 17,
  },
  {
    id: 137,
    img: "./src/images/update-editors-app/update-editors-16.webp",
    title: "همیارزبان - آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "EditorsUpdateApps",
    appVolume: 18,
  },

  {
    id: 138,
    img: "./src/images/apps-english/app-english-1.webp",
    title: "لِرنیت | آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 22,
  },
  {
    id: 139,
    img: "./src/images/apps-english/app-english-2.webp",
    title: "Duolingo – آموزش زبان دولینگو",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 12,
  },
  {
    id: 140,
    img: "./src/images/apps-english/app-english-3.webp",
    title: "زبان بیاموز",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 13,
  },
  {
    id: 141,
    img: "./src/images/apps-english/app-english-4.webp",
    title: "زبانشناس: آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 14,
  },
  {
    id: 142,
    img: "./src/images/apps-english/app-english-5.webp",
    title: "همیارزبان - آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 15,
  },
  {
    id: 143,
    img: "./src/images/apps-english/app-english-6.webp",
    title: "دهکده زبان | آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 16,
  },
  {
    id: 144,
    img: "./src/images/apps-english/app-english-7.webp",
    title: "HelloTalk – گفتگو و آموزش زبان هلو تاک",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 17,
  },
  {
    id: 145,
    img: "./src/images/apps-english/app-english-8.webp",
    title: "Learn English free – آموزش رایگان زبان انگلیسی",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 18,
  },
  {
    id: 146,
    img: "./src/images/apps-english/app-english-9.webp",
    title: "Drops - آموزش زبان",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 19,
  },
  {
    id: 147,
    img: "./src/images/apps-english/app-english-10.webp",
    title: "Busuu – یادگیری زبان",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 20,
  },
  {
    id: 148,
    img: "./src/images/apps-english/app-english-11.webp",
    title: "آموزش زبان انگلیسی اطلس",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 31,
  },
  {
    id: 149,
    img: "./src/images/apps-english/app-english-12.webp",
    title: "بلبل | آموزش زبان",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 32,
  },
  {
    id: 150,
    img: "./src/images/apps-english/app-english-13.webp",
    title: "English Conversation Practice - تمرین مکالمات انگلیسی",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 33,
  },
  {
    id: 151,
    img: "./src/images/apps-english/app-english-14.webp",
    title: "زبانیاد | آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 34,
  },
  {
    id: 152,
    img: "./src/images/apps-english/app-english-15.webp",
    title: "لینگوگیم - بازی آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 35,
  },
  {
    id: 153,
    img: "./src/images/apps-english/app-english-16.webp",
    title: "بامبو | شهر زبان | انگلیسی و آلمانی ",
    type: "آموزش",
    categories: "languageApps",
    appVolume: 36,
  },
  {
    id: 156,
    img: "./src/images/apps-photo-editing/app-photo-editing-1.webp",
    title: "Beautycam- Selfie Editor",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 37,
  },
  {
    id: 157,
    img: "./src/images/apps-photo-editing/app-photo-editing-2.webp",
    title: "Lumii – ویرایش تصویر",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 38,
  },
  {
    id: 158,
    img: "./src/images/apps-photo-editing/app-photo-editing-3.webp",
    title: "Adobe Lightroom – ویرایش تصویر",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 39,
  },
  {
    id: 159,
    img: "./src/images/apps-photo-editing/app-photo-editing-4.webp",
    title: "Snapseed – ویرایشگر عکس اسنپ سید",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 34,
  },
  {
    id: 160,
    img: "./src/images/apps-photo-editing/app-photo-editing-5.webp",
    title: "Picsart Lite: Photo Editor",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 40,
  },
  {
    id: 161,
    img: "./src/images/apps-photo-editing/app-photo-editing-6.webp",
    title: "StoryArt – طراحی استوری اینستاگرام",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 41,
  },
  {
    id: 162,
    img: "./src/images/apps-photo-editing/app-photo-editing-7.webp",
    title: "Collage Maker | Photo Editor",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 42,
  },
  {
    id: 163,
    img: "./src/images/apps-photo-editing/app-photo-editing-8.webp",
    title: "Pixlr – Photo Editor",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 43,
  },
  {
    id: 164,
    img: "./src/images/apps-photo-editing/app-photo-editing-9.webp",
    title: "MakeupPlus - Virtual Makeup",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 44,
  },
  {
    id: 165,
    img: "./src/images/apps-photo-editing/app-photo-editing-10.webp",
    title: "Gradient",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 45,
  },
  {
    id: 166,
    img: "./src/images/apps-photo-editing/app-photo-editing-11.webp",
    title: "Photo Editor",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 46,
  },
  {
    id: 167,
    img: "./src/images/apps-photo-editing/app-photo-editing-12.webp",
    title: "Photo Editor",
    type: "عکاسی و ویدیو",
    categories: "photoEditingApps",
    appVolume: 47,
  },
  {
    id: 168,
    img: "./src/images/apps-low-volume/app-low-volume-1.webp",
    title: "ZArchiver",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 3,
  },
  {
    id: 169,
    img: "./src/images/apps-low-volume/app-low-volume-2.webp",
    title: "تقویم اذان گو بادصبا",
    type: "مذهبی",
    categories: "lowAppsVolume",
    appVolume: 9,
  },
  {
    id: 170,
    img: "./src/images/apps-low-volume/app-low-volume-3.webp",
    title: "دیوار",
    type: "خرید",
    categories: "lowAppsVolume",
    appVolume: 4,
  },
  {
    id: 171,
    img: "./src/images/apps-low-volume/app-low-volume-4.webp",
    title: "تیکاسا - برنامه‌ریزی و مدیریت‌ کارها",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 5,
  },
  {
    id: 172,
    img: "./src/images/apps-low-volume/app-low-volume-5.webp",
    title: "Tripadvisor: Plan & Book Trips",
    type: "سفر",
    categories: "lowAppsVolume",
    appVolume: 6,
  },
  {
    id: 173,
    img: "./src/images/apps-low-volume/app-low-volume-6.webp",
    title: "Recover Deleted Photos by Dumpster",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 7,
  },
  {
    id: 174,
    img: "./src/images/apps-low-volume/app-low-volume-7.webp",
    title: "Barcode Scanner",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 8,
  },
  {
    id: 175,
    img: "./src/images/apps-low-volume/app-low-volume-8.webp",
    title: "همیارزبان - آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "lowAppsVolume",
    appVolume: 9,
  },
  {
    id: 176,
    img: "./src/images/apps-low-volume/app-low-volume-9.webp",
    title: "Vault - Hide Pics, App Lock",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 10,
  },
  {
    id: 177,
    img: "./src/images/apps-low-volume/app-low-volume-10.webp",
    title: "imo-International Calls & Chat",
    type: "شبکه های اجتماعی",
    categories: "lowAppsVolume",
    appVolume: 11,
  },
  {
    id: 178,
    img: "./src/images/apps-low-volume/app-low-volume-11.webp",
    title: "Clean Master - Antivirus, Applock & Cleaner",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 12,
  },
  {
    id: 179,
    img: "./src/images/apps-low-volume/app-low-volume-12.webp",
    title: "Google Go - جستجوی ساده و سریع",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 13,
  },
  {
    id: 180,
    img: "./src/images/apps-low-volume/app-low-volume-13.webp",
    title: "AZ Screen Recorder ‏ - ضبط ویدیو از صفحه گوشی",
    type: "عکاسی و ویدیو",
    categories: "lowAppsVolume",
    appVolume: 14,
  },
  {
    id: 181,
    img: "./src/images/apps-low-volume/app-low-volume-14.webp",
    title: "پیگیری مرسولات پستی",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 15,
  },
  {
    id: 182,
    img: "./src/images/apps-low-volume/app-low-volume-15.webp",
    title: "Google Keep - Notes and Lists",
    type: "ابزار ها",
    categories: "lowAppsVolume",
    appVolume: 16,
  },
  {
    id: 183,
    img: "./src/images/apps-low-volume/app-low-volume-16.webp",
    title: "پاکسیت: خرید گیفت کارت بازی و برنامه",
    type: "خرید",
    categories: "lowAppsVolume",
    appVolume: 17,
  },
  {
    id: 184,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-1.webp",
    title: "سیگما - مدیریت اینترنت WiFi/4G/3G",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 18,
  },
  {
    id: 185,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-2.webp",
    title: "Live Transcribe - تبدیل گفتار به متن",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 19,
  },
  {
    id: 186,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-3.webp",
    title: "Adobe Acrobat Reader: Edit PDF",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 20,
  },
  {
    id: 187,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-4.webp",
    title: "AppLock",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 21,
  },
  {
    id: 188,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-5.webp",
    title: "AVG Cleaner – Storage Cleaner",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 22,
  },
  {
    id: 189,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-6.webp",
    title: "Cache Cleaner-DU Speed Booster (booster & cleaner)",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 23,
  },
  {
    id: 190,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-7.webp",
    title: "Greenify",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 24,
  },
  {
    id: 191,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-8.webp",
    title: "زی‌تایپ | تایپ صوتی دیپ‌ماین",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 25,
  },
  {
    id: 192,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-9.webp",
    title: "آنتی ویروس دکتر وب - نسخه رایگان",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 26,
  },
  {
    id: 193,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-10.webp",
    title: "Clean Master - Antivirus, Applock & Cleaner",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 27,
  },
  {
    id: 194,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-11.webp",
    title: "جعبه ابزار ",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 28,
  },
  {
    id: 195,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-12.webp",
    title: "Antivirus - آنتی ویروس،‌ قفل برنامه و خنک کننده‌ی گوشی",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 29,
  },
  {
    id: 196,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-13.webp",
    title: "Google Keep - Notes and Lists",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 30,
  },
  {
    id: 197,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-14.webp",
    title: "Super Backup & Restore",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 31,
  },
  {
    id: 198,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-15.webp",
    title: "چفتک ( قفل برنامه - گالری مخفی)",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 32,
  },
  {
    id: 199,
    img: "./src/images/apps-mobile-tools/app-mobile-tools-16.webp",
    title: "CamScanner - PDF Scanner App",
    type: "ابزار ها",
    categories: "toolsApps",
    appVolume: 33,
  },

  {
    id: 200,
    img: "./src/images/apps-hottest-others/app-hottest-others-1.webp",
    title: "همراه بام ملی ",
    type: "امور مالی",
    categories: "hottestApps",
    appVolume: 34,
  },
  {
    id: 201,
    img: "./src/images/apps-hottest-others/app-hottest-others-2.webp",
    title: "نشان | نقشه و مسیریاب",
    type: "رفت و آمد",
    categories: "hottestApps",
    appVolume: 35,
  },
  {
    id: 202,
    img: "./src/images/apps-hottest-others/app-hottest-others-3.webp",
    title: "اپلیکیشن شاد",
    type: "آموزش",
    categories: "hottestApps",
    appVolume: 36,
  },
  {
    id: 203,
    img: "./src/images/apps-hottest-others/app-hottest-others-4.webp",
    title: "روبیکا X",
    type: "شبکه های اجتماعی",
    categories: "hottestApps",
    appVolume: 37,
  },
  {
    id: 204,
    img: "./src/images/apps-hottest-others/app-hottest-others-5.webp",
    title: "ایتا Eitaa کلینر ",
    type: "شبکه های اجتماعی",
    categories: "hottestApps",
    appVolume: 38,
  },
  {
    id: 205,
    img: "./src/images/apps-hottest-others/app-hottest-others-6.webp",
    title: "مفاتیح الجنان صوتی باب النعیم ",
    type: "مذهبی",
    categories: "hottestApps",
    appVolume: 39,
  },
  {
    id: 206,
    img: "./src/images/apps-hottest-others/app-hottest-others-7.webp",
    title: "دانلود وضعیت واتساپ",
    type: "شبکه های اجتماعی",
    categories: "hottestApps",
    appVolume: 40,
  },
  {
    id: 207,
    img: "./src/images/apps-hottest-others/app-hottest-others-8.webp",
    title: "او ام پی فینکس (ompfinex)",
    type: "امور مالی",
    categories: "hottestApps",
    appVolume: 41,
  },
  {
    id: 208,
    img: "./src/images/apps-hottest-others/app-hottest-others-9.webp",
    title: "Files by Google",
    type: "ابزار ها",
    categories: "hottestApps",
    appVolume: 42,
  },
  {
    id: 209,
    img: "./src/images/apps-hottest-others/app-hottest-others-10.webp",
    title: "مستربلیط | خرید بلیط سفر، رزرو هتل",
    type: "سفر",
    categories: "hottestApps",
    appVolume: 43,
  },
  {
    id: 210,
    img: "./src/images/apps-hottest-others/app-hottest-others-11.webp",
    title: "آموزش کامل برنامه شاد ",
    type: "آموزش",
    categories: "hottestApps",
    appVolume: 44,
  },
  {
    id: 211,
    img: "./src/images/apps-hottest-others/app-hottest-others-12.webp",
    title: "آنفالویاب هوشمند همه‌کاره + دانلودر",
    type: "شبکه های اجتماعی",
    categories: "hottestApps",
    appVolume: 45,
  },
  {
    id: 212,
    img: "./src/images/apps-hottest-others/app-hottest-others-13.webp",
    title: "ایتا Eitaa کلینر",
    type: "ابزار ها",
    categories: "hottestApps",
    appVolume: 46,
  },
  {
    id: 213,
    img: "./src/images/apps-best-seller/app-best-seller-1.webp",
    title: "دیوار",
    type: "خرید",
    categories: "bestSellerApps",
    appVolume: 9,
  },
  {
    id: 214,
    img: "./src/images/apps-best-seller/app-best-seller-2.webp",
    title: "فیلیمو - تماشای فیلم و سریال",
    type: "سرگرمی",
    categories: "bestSellerApps",
    appVolume: 10,
  },
  {
    id: 215,
    img: "./src/images/apps-best-seller/app-best-seller-3.webp",
    title: "فیلم‌نت - تماشای فیلم و سریال",
    type: "سرگرمی",
    categories: "bestSellerApps",
    appVolume: 11,
  },
  {
    id: 216,
    img: "./src/images/apps-best-seller/app-best-seller-4.webp",
    title: "نماوا - تماشای آنلاین فیلم و سریال",
    type: "سرگرمی",
    categories: "bestSellerApps",
    appVolume: 12,
  },
  {
    id: 217,
    img: "./src/images/apps-best-seller/app-best-seller-5.webp",
    title: "طاقچه | دانلود کتاب صوتی و الکترونیک",
    type: "کتاب و مطبوعات",
    categories: "bestSellerApps",
    appVolume: 13,
  },
  {
    id: 218,
    img: "./src/images/apps-best-seller/app-best-seller-6.webp",
    title: "شیپور: خرید و فروش خودرو، ملک و ...",
    type: "خرید",
    categories: "bestSellerApps",
    appVolume: 14,
  },
  {
    id: 219,
    img: "./src/images/apps-best-seller/app-best-seller-7.webp",
    title: "باهم - دوستای جدید پیدا کن",
    type: "شبکه های اجتماعی",
    categories: "bestSellerApps",
    appVolume: 15,
  },
  {
    id: 220,
    img: "./src/images/apps-best-seller/app-best-seller-8.webp",
    title: "عضو بگیر کانال روبیکا",
    type: "شبکه های اجتماعی",
    categories: "bestSellerApps",
    appVolume: 16,
  },
  {
    id: 221,
    img: "./src/images/apps-best-seller/app-best-seller-9.webp",
    title: "کرفس - سلامتی، رژیم و تناسب اندام",
    type: "تناسب اندام",
    categories: "bestSellerApps",
    appVolume: 17,
  },
  {
    id: 222,
    img: "./src/images/apps-best-seller/app-best-seller-10.webp",
    title: "راننده آسان‌بار-اعلام بار لحظه‌‌ای",
    type: "رفت و آمد",
    categories: "bestSellerApps",
    appVolume: 18,
  },
  {
    id: 223,
    img: "./src/images/apps-best-seller/app-best-seller-11.webp",
    title: "فیدیبو |دانلود کتاب الکترونیک و صوتی",
    type: "کتاب و مطبوعات",
    categories: "bestSellerApps",
    appVolume: 15,
  },
  {
    id: 224,
    img: "./src/images/apps-best-seller/app-best-seller-12.webp",
    title: "فالوور بگیر روبیکا و روبینو",
    type: "شبکه های اجتماعی",
    categories: "bestSellerApps",
    appVolume: 25,
  },
  {
    id: 225,
    img: "./src/images/apps-best-seller/app-best-seller-13.webp",
    title: "زبانشناس: آموزش زبان انگلیسی",
    type: "آموزش",
    categories: "bestSellerApps",
    appVolume: 24,
  },
  {
    id: 226,
    img: "./src/images/apps-best-seller/app-best-seller-14.webp",
    title: "گهواره: بارداری و کودک",
    type: "پزشکی",
    categories: "bestSellerApps",
    appVolume: 23,
  },
  {
    id: 227,
    img: "./src/images/apps-best-seller/app-best-seller-15.webp",
    title: "لایک بگیر اینستاگرام",
    type: "شبکه های اجتماعی",
    categories: "bestSellerApps",
    appVolume: 22,
  },
  {
    id: 228,
    img: "./src/images/apps-best-seller/app-best-seller-16.webp",
    title: "گپ‌فیلم - دانلود و تماشای نامحدود",
    type: "سرگرمی",
    categories: "bestSellerApps",
    appVolume: 21,
  },
];


// Categories App 
const categoriesItemData = [
  {
    id: 1,
    title: "سرگرمی",
    icon: 
      `<svg
        width="18.000000pt"
        height="18.000000pt"
        viewBox="0 0 18.000000 18.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
          fill="#2a2a2a"
          stroke="none"
        >
          <path
            d="M14 156 c-3 -7 -4 -42 -2 -77 l3 -64 75 0 75 0 3 34 c4 39 -10 60
            -30 43 -18 -14 -52 10 -37 25 7 7 7 17 -3 32 -15 24 -75 30 -84 7z m73 -16
            c15 -23 5 -32 -39 -35 -23 -2 -28 1 -28 19 0 13 3 26 7 29 13 14 49 6 60 -13z
            m-11 -86 c0 -32 -2 -35 -25 -32 -32 4 -42 45 -16 64 26 19 41 7 41 -32z m82
            -3 c-4 -32 -45 -42 -64 -16 -19 26 -7 41 32 41 32 0 35 -2 32 -25z"
          />
        </g>
      </svg>`,
    
  },
  {
    id: 2,
    title: "سرگرمی",
    icon: 
      `<svg
        width="18.000000pt"
        height="18.000000pt"
        viewBox="0 0 18.000000 18.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
          fill="#2a2a2a"
          stroke="none"
        >
          <path
            d="M47 135 c-20 -14 -38 -32 -38 -40 -1 -8 -2 -21 -3 -27 -1 -7 6 -13
      14 -13 8 0 26 -8 40 -18 13 -9 32 -17 41 -17 16 0 49 30 49 45 0 5 7 16 16 26
      14 16 13 19 -23 43 -46 32 -50 32 -96 1z m84 -2 c36 -22 36 -27 0 -52 -36 -26
      -36 -26 -73 1 l-31 21 29 24 c35 28 38 28 75 6z m-15 -74 c30 13 32 -4 3 -20
      -24 -12 -69 2 -69 21 0 7 7 7 21 -1 16 -8 28 -8 45 0z"
          />
        </g>
      </svg>`,
    
  },
  {
    id: 3,
    title: "خرید",
    icon:
      `<svg
        width="18.000000pt"
        height="18.000000pt"
        viewBox="0 0 18.000000 18.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
          fill="#2a2a2a"
          stroke="none"
        >
          <path
            d="M21 160 c10 -6 22 -32 29 -60 l12 -50 48 0 c45 0 48 1 54 31 11 58
              10 59 -53 59 -40 0 -63 5 -71 15 -7 8 -18 15 -24 15 -6 0 -4 -5 5 -10z m139
              -42 c-1 -44 -13 -58 -50 -58 -39 0 -50 11 -50 51 0 16 7 19 50 19 33 0 50 -4
              50 -12z"
          />
          <path
            d="M80 95 c0 -8 4 -15 10 -15 5 0 7 7 4 15 -4 8 -8 15 -10 15 -2 0 -4
              -7 -4 -15z"
          />
          <path d="M121 94 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
          <path d="M70 24 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z" />
          <path
            d="M130 30 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
              -10 -4 -10 -10z"
          />
        </g>
      </svg>`,
    
  },
  {
    id: 4,
    title: "شبکه های اجتماعی",
    icon: 
     ` <svg
        width="18.000000pt"
        height="18.000000pt"
        viewBox="0 0 18.000000 18.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
          fill="#2a2a2a"
          stroke="none"
        >
          <path
            d="M50 156 c0 -8 -9 -20 -20 -26 -16 -8 -20 -21 -20 -60 0 -50 13 -71
      33 -51 6 6 23 11 38 11 15 0 31 5 34 10 5 8 11 7 21 -1 24 -20 35 3 32 67 l-3
      59 -57 3 c-47 2 -58 0 -58 -12z m108 -58 c2 -36 -1 -58 -8 -58 -5 0 -10 5 -10
      10 0 6 -18 10 -40 10 l-40 0 0 51 0 50 48 -3 47 -3 3 -57z m-106 -10 c2 -25 9
      -34 28 -39 24 -7 24 -7 -6 -8 -16 -1 -35 -6 -42 -13 -9 -9 -12 -2 -12 33 0 25
      3 49 7 52 14 14 22 6 25 -25z"
          />
          <path
            d="M75 130 c-4 -7 1 -21 12 -32 19 -18 21 -18 37 -3 9 10 15 22 13 29
      -5 15 -53 20 -62 6z m48 -7 c4 -3 2 -12 -4 -20 -9 -10 -15 -10 -25 -2 -8 6
      -11 15 -8 20 6 11 28 12 37 2z"
          />
        </g>
      </svg>
    `,
  },
  {
    id: 5,
    title: "عکاسی و ویدیو",
    icon: 
      `<svg
        width="18.000000pt"
        height="18.000000pt"
        viewBox="0 0 18.000000 18.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
          fill="#2a2a2a"
          stroke="none"
        >
          <path
            d="M33 147 c-4 -7 -8 -14 -9 -17 0 -3 -4 -12 -8 -22 -4 -9 -6 -31 -4
              -50 3 -33 3 -33 61 -36 35 -2 57 1 57 8 0 5 9 10 21 10 16 0 20 5 17 28 -2 15
              -9 27 -17 27 -14 0 -25 15 -35 47 -5 19 -72 23 -83 5z m32 -6 c7 -12 -12 -24
              -25 -16 -11 7 -4 25 10 25 5 0 11 -4 15 -9z m43 -9 c2 -7 -3 -12 -12 -12 -9 0
              -16 7 -16 16 0 17 22 14 28 -4z m15 -34 c2 -7 3 -24 2 -38 -1 -23 -6 -25 -53
              -28 l-52 -3 0 34 c0 18 3 37 7 40 12 12 91 8 96 -5z m37 -33 c0 -8 -4 -15 -10
              -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z"
          />
          <path
            d="M35 90 c-11 -18 10 -32 41 -28 40 4 38 32 -3 36 -17 2 -34 -2 -38 -8z
              m65 -10 c0 -5 -11 -10 -25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4
              25 -10z"
          />
          <path d="M58 43 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z" />
        </g>
      </svg>`,
    
  },
  {
    id: 6,
    title: "امور مالی",
    icon: 
      `<svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="18.000000pt"
        height="18.000000pt"
        viewBox="0 0 18.000000 18.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
          fill="#2a2a2a"
          stroke="none"
        >
          <path
            d="M38 147 c-23 -19 -28 -31 -28 -68 0 -25 5 -50 12 -57 7 -7 35 -12 64
           -12 44 0 54 4 68 25 12 19 14 30 6 44 -5 11 -10 29 -10 40 0 12 -7 21 -15 21
           -8 0 -15 7 -15 15 0 23 -51 18 -82 -8z m46 -2 c-4 -8 -1 -15 4 -15 6 0 13 8
           15 18 4 13 5 11 6 -5 1 -17 -5 -23 -19 -23 -13 0 -20 7 -20 20 0 11 4 20 10
           20 5 0 7 -7 4 -15z m53 -37 c-1 -13 -8 -29 -17 -36 -13 -11 -13 -13 3 -26 27
           -21 21 -26 -38 -26 -48 0 -55 3 -60 22 -11 51 -2 63 54 66 29 2 49 7 46 13 -4
           5 -2 9 4 9 5 0 9 -10 8 -22z m15 -50 c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19
           0 21 -3 12 -12z"
          />
        </g>
      </svg>
    `,
  },
];

export  {allAppData,categoriesItemData};
