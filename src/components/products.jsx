export const Products = [
  {
    id: 1,
    type: "mouse",
    category: "accessories",
    name: "XPG INFAREX M10",
    price: 26.00,
    sale: 16,
    reviews: 4,
    stock: 5,
    stars: 4.5,
    brand: 'xpg',
    Images: [require('../img/xpg.png'), require('../img/xpg2.png'), require('../img/xpg3.png'), require('../img/xpg4.png'), require('../img/xpg5.png')],
    details:"ASUS TUF Gaming VG289Q1A 28” Monitor, 4K UHD (3840 x 2160), IPS, Adaptive-Sync/ FreeSync, Eye Care, DisplayPort HDMI, DCI-P3 HDR 10, Shadow Boost, Black.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    specifications: {
      'Product Dimensions':'5.04 x 3.07 x 1.57 inches',
      'Item Weight':'3.49 ounces',
      'ASIN':'B0B5BDSPFD',
      'Item model number':'ALPHAWL-BKCWW',
      'Batteries':'1 Lithium Polymer batteries required. (included)',
      'Best Sellers Rank':'#165,627 in Video Games asdasd asdasd (See Top 100 in Video Games)#5,903 in PC Gaming Mice',
      'Date First Available':'June 28, 2022',
      'Manufacturer':'ADATA',
    },
    testimonies: [
      {
        id: 1,
        name: 'Mahmoud Elshazly',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: 5,
      },
      {
        id: 2,
        name: 'Ahmed Hani',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: 4.5,
      },
      {
        id: 3,
        name: 'Ahmed Shalapy',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: 4,
      },
      {
        id: 4,
        name: 'Chalipha Mo3tasem',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: 3.5,
      },
    ]
  },
  {
    id: 2,
    type: "motherboard",
    category: "hardware",
    name: "Asus Rog Strix Z790",
    price: 390.00,
    sale: 0,
    reviews: 54,
    stars: 3.5,
    stock: 0,
    brand: 'Asus',
    Images: [require('../img/asus motherboard.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 3,
    type: "headphone",
    category: "accessories",
    name: "Logitech G PRO X",
    price: 200.00,
    sale: 15,
    reviews: 12,
    stars: 5.0,
    stock: 13,
    brand: 'Logitech',
    Images: [require('../img/logi headphone.png'), require('../img/logi headphone.png'), require('../img/logi headphone.png'), require('../img/logi headphone.png'), require('../img/logi headphone.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 4,
    type: "monitor",
    category: "monitor",
    name: "Msi G244F24 170HZ",
    price: 1240.00,
    sale: 8,
    reviews: 25,
    stars: 3.5,
    stock: 0,
    brand: 'Msi',
    Images: [require('../img/msi monitor.png'), require('../img/msi monitor.png'), require('../img/msi monitor.png'), require('../img/msi monitor.png'), require('../img/msi monitor.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 5,
    type: "m.2",
    category: "hardware",
    name: "AORUS NVMe Gen4",
    price: 100.00,
    sale: 3,
    reviews: 75,
    stars: 4.9,
    stock: 22,
    brand: 'AORUS',
    Images: [require('../img/aorus nvme.png'), require('../img/aorus nvme.png'), require('../img/aorus nvme.png'), require('../img/aorus nvme.png'), require('../img/aorus nvme.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 6,
    type: "chair",
    category: "other",
    name: "Cougar Outrider S",
    price: 20.00,
    sale: 9,
    reviews: 105,
    stars: 4.5,
    stock: 3,
    brand: 'Cougar',
    Images: [require('../img/couger chair.png'), require('../img/couger chair.png'), require('../img/couger chair.png'), require('../img/couger chair.png'), require('../img/couger chair.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 7,
    type: "joystick",
    category: "accessories",
    name: "ps4 controlar",
    price: 30.00,
    sale: 12,
    reviews: 230,
    stars: 5.0,
    stock: 76,
    brand: 'sony',
    Images: [require('../img/ps4 controlar.png'), require('../img/ps4 controlar.png'), require('../img/ps4 controlar.png'), require('../img/ps4 controlar.png'), require('../img/ps4 controlar.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 8,
    type: "watch",
    category: "other",
    name: "M75 Sport Watch",
    price: 380.00,
    sale: 7,
    reviews: 12,
    stars: 5.0,
    stock: 34,
    brand: '',
    Images: [require('../img/watsh.png'), require('../img/watsh.png'), require('../img/watsh.png'), require('../img/watsh.png'), require('../img/watsh.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 9,
    type: "graphic card",
    category: "hardware",
    name: "Aorus 4060ti",
    price: 350.00,
    sale: 15,
    reviews: 46,
    stars: 4.3,
    stock: 9,
    brand: 'Aorus',
    Images: [require('../img/rtx 4060ti.png'), require('../img/rtx 4060ti.png'), require('../img/rtx 4060ti.png'), require('../img/rtx 4060ti.png'), require('../img/rtx 4060ti.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 10,
    type: "console",
    category: "other",
    name: "ps4 pro",
    price: 290.00,
    sale: 18,
    reviews: 309,
    stars: 5.0,
    stock: 12,
    brand: 'sony',
    Images: [require('../img/Ps4.png'), require('../img/Ps4.png'), require('../img/Ps4.png'), require('../img/Ps4.png'), require('../img/Ps4.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
  },
  {
    id: 11,
    type: "meat eater",
    category: "monster",
    name: "ahmed gamer yt",
    price: 999999.00,
    sale: 0,
    reviews: 4,
    stock: 1,
    stars: 5.0,
    brand: 'goul',
    Images: [require('../img/farg (1).jpg'), require('../img/farg (2).jpg')],
    details:"ASUS TUF Gaming VG289Q1A 28” Monitor, 4K UHD (3840 x 2160), IPS, Adaptive-Sync/ FreeSync, Eye Care, DisplayPort HDMI, DCI-P3 HDR 10, Shadow Boost, Black.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    specifications: {
      'المهنة':'ui ux',
      'السرعة':'3.5 km / second',
      'الجنس':'goul',
      'المهارة':'miss every goal',
      'height':'4.8 meters',
    },
    testimonies: [
      {
        id: 1,
        name: 'Mahmoud Elshazly',
        details: 'ياجدعان محدش يشتريه , انا بعد ماجبته وهوا بيصبحني بعلقة وينيمني بعلقة',
        stars: 5,
      },
      {
        id: 2,
        name: 'Ahmed Hani',
        details: '...',
        stars: 2.5,
      },
      {
        id: 3,
        name: 'Ahmed Shalapy',
        details: 'ياجدعان الواد دا بووت , وبجب كيلات اكتر منه',
        stars: 2,
      },
      {
        id: 4,
        name: 'Chalipha Mo3tasem',
        details: 'انا محامي لو حد حب يرفع عليه اي اضية انا موجود',
        stars: 1,
      },
    ]
  },
];

export const bundles = [
  {
    id: 1,
    view: true,
    category: "bundle",
    type: "Gaming PC",
    price: "2500.00",
    sale: 20,
    reviews: "78",
    stock: 3,
    stars: 4.5,
    Images: [require('../img/bundle.png')],
    details:"Intel I5 14400F - RTX 4070 12GB - PRO-H510M-B-ARKTEK - 16GB DDR4 2666 mhz - C800A 256GB-XIGMATEK - CASE HERO II AIR Z 4 Fan-POWER II - Z750 500W PSU",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "Warranty: 2 Year Limited",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
    ],
  },
  {
    id: 2,
    view: true,
    category: "bundle",
    type: "Gaming PC",
    price: "2500.00",
    sale: 20,
    reviews: "78",
    stock: 3,
    stars: 4.5,
    Images: [require('../img/bundle.png')],
    details:"Intel I5 14400F - RTX 4070 12GB - PRO-H510M-B-ARKTEK - 16GB DDR4 2666 mhz - C800A 256GB-XIGMATEK - CASE HERO II AIR Z 4 Fan-POWER II - Z750 500W PSU",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "Warranty: 2 Year Limited",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
    ],
  },
  {
    id: 2,
    view: true,
    category: "bundle",
    type: "Gaming PC",
    price: "2500.00",
    sale: 20,
    reviews: "78",
    stock: 3,
    stars: 4.5,
    Images: [require('../img/bundle.png')],
    details:"Intel I5 14400F - RTX 4070 12GB - PRO-H510M-B-ARKTEK - 16GB DDR4 2666 mhz - C800A 256GB-XIGMATEK - CASE HERO II AIR Z 4 Fan-POWER II - Z750 500W PSU",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "Warranty: 2 Year Limited",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
    ],
  },
  {
    id: 2,
    view: true,
    category: "Bundle",
    type: "Gaming PC",
    price: "2500.00",
    sale: 20,
    reviews: "78",
    stock: 3,
    stars: 4.5,
    Images: [require('../img/bundle.png')],
    details:"Intel I5 14400F - RTX 4070 12GB - PRO-H510M-B-ARKTEK - 16GB DDR4 2666 mhz - C800A 256GB-XIGMATEK - CASE HERO II AIR Z 4 Fan-POWER II - Z750 500W PSU",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "Warranty: 2 Year Limited",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
    ],
  },
]


export const types = [
  {
    id: "hardware",
    list: [
      { 
        id: "graphic card",
        // @ts-ignore
        img: require('../img/Categories/gpu.png'),
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "motherboard",
        // @ts-ignore
        img: require('../img/Categories/mother.png'),
        specific: {
          gen: ['ddr3','ddr4','ddr5'],
          mhz: ['2666 mhz', '3200 mhz', '3600 mhz', '4200 mhz', '5600 mhz']
        }
      },
      { 
        id: "procesor", 
        // @ts-ignore 
        img: require('../img/Categories/cpu.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "memory",
        // @ts-ignore 
        img: require('../img/Categories/ram.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "storage", 
        // @ts-ignore 
        img: require('../img/Categories/storage.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "liquid cooling", 
        // @ts-ignore 
        img: require('../img/Categories/liquid cooling.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "power supply", 
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "desktop case",
        // @ts-ignore 
        img: require('../img/Categories/case.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
    ],
  },
  {
    id: "accessories",
    list: [
      { 
        id: "mouse",
        // @ts-ignore 
        img: require('../img/Categories/mouse.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "keyboard",
        // @ts-ignore 
        img: require('../img/Categories/keyboard.png'), 
          specific: {
            series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
            memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
          }
      },
      { 
        id: "headphone", 
        // @ts-ignore 
        img: require('../img/Categories/headphone.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "speakers", 
        // @ts-ignore 
        img: require('../img/Categories/speakers.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "mousepad", 
        // @ts-ignore 
        img: require('../img/Categories/mousebad.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
    ],
  },
  {
    id: "electronics",
    list: [
      { 
        id: "Smartwatches", 
        // @ts-ignore 
        img: require('../img/Categories/smartwatch.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "smartphones",
        // @ts-ignore 
        img: require('../img/Categories/iphone 15.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "laptops",
        // @ts-ignore 
        img: require('../img/Categories/notebock.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "tablets", 
        // @ts-ignore 
        img: require('../img/Categories/tablet.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "cameras", 
        // @ts-ignore 
        img: require('../img/Categories/camera.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "webcams", 
        // @ts-ignore 
        img: require('../img/Categories/webcam.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "microphones", 
        // @ts-ignore 
        img: require('../img/Categories/microphone.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
    ],
  },
  {
    id: "monitor",
    list: [
      { 
        id: "gaming monitor",
        // @ts-ignore 
        img: require('../img/Categories/monitor.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "television",
        // @ts-ignore 
        img: require('../img/Categories/tv-samsung.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
    ],
  },
  {
    id: "console",
    list: [
      { 
        id: "console",
        // @ts-ignore 
        img: require('../img/Categories/console.png'),
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "xbox",
        // @ts-ignore 
        img: require('../img/Categories/xbox.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "nitendo",
        // @ts-ignore 
        img: require('../img/Categories/nitendo.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "game bad",
        // @ts-ignore 
        img: require('../img/Categories/gamebad.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
    ],
  },
  {
    id: "other",
    list: [
      { 
        id: "chair",
        // @ts-ignore 
        img: require('../img/Categories/chair.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "holder",
        // @ts-ignore 
        img: require('../img/Categories/holder.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "fans",
        // @ts-ignore 
        img: require('../img/Categories/fans.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "cables",
        // @ts-ignore 
        img: require('../img/Categories/cables.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "gaming desk",
        // @ts-ignore 
        img: require('../img/Categories/gamingdesk.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "led strip",
        // @ts-ignore 
        img: require('../img/Categories/ledstrip.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
      { 
        id: "thermal paste",
        // @ts-ignore 
        img: require('../img/Categories/thermalpaste.png'), 
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb'],
        }
      },
    ],
  },
]

export const brands = [
  {
    id: "nvidia",
    // @ts-ignore 
    img:  require('../img/brands/nvidia.png'),
  },
  {
    id: "amd",
    // @ts-ignore 
    img:  require('../img/brands/amd.png'),
  },
  {
    id: "asrock",
    // @ts-ignore 
    img:  require('../img/brands/asrock.png'),
  },
  {
    id: "benq",
    // @ts-ignore 
    img:  require('../img/brands/benq.png'),
  },
  {
    id: "cougar",
    // @ts-ignore 
    img:  require('../img/brands/cougar.png'),
  },
  {
    id: "dell",
    // @ts-ignore 
    img:  require('../img/brands/dell.png'),
  },
  {
    id: "gskill",
    // @ts-ignore 
    img:  require('../img/brands/gskill.png'),
  },
  {
    id: "corsair",
    // @ts-ignore 
    img:  require('../img/brands/corsair.png'),
  },
  {
    id: "gigabyte",
    // @ts-ignore 
    img:  require('../img/brands/gigabyte.png'),
  },
  {
    id: "aoc",
    // @ts-ignore 
    img:  require('../img/brands/aoc.png'),
  },
  {
    id: "hp",
    // @ts-ignore 
    img:  require('../img/brands/hp.webp'),
  },
  {
    id: "hyperx",
    // @ts-ignore 
    img:  require('../img/brands/hyperx.png'),
  },
  {
    id: "inte",
    // @ts-ignore 
    img:  require('../img/brands/intel.png'),
  },
  {
    id: "kingstone",
    // @ts-ignore 
    img:  require('../img/brands/kingstone.png'),
  },
  {
    id: "lenovo",
    // @ts-ignore 
    img:  require('../img/brands/lenovo.png'),
  },
  {
    id: "lg",
    // @ts-ignore 
    img:  require('../img/brands/lg.png'),
  },
  {
    id: "logitech",
    // @ts-ignore 
    img:  require('../img/brands/logitech.png'),
  },
  {
    id: "asus",
    // @ts-ignore 
    img:  require('../img/brands/asus.png'),
  },
  {
    id: "msi",
    // @ts-ignore 
    img:  require('../img/brands/msi.png'),
  },
  {
    id: "nzxt",
    // @ts-ignore 
    img:  require('../img/brands/nzxt.png'),
  },
  {
    id: "acer",
    // @ts-ignore 
    img:  require('../img/brands/acer.png'),
  },
  {
    id: "redragon",
    // @ts-ignore 
    img:  require('../img/brands/redragon.png'),
  },
  {
    id: "razer",
    // @ts-ignore 
    img:  require('../img/brands/razer.png'),
  },
  {
    id: "samsung",
    // @ts-ignore 
    img:  require('../img/brands/samsung.png'),
  },
  {
    id: "seagate",
    // @ts-ignore 
    img:  require('../img/brands/seagate.png'),
  },
  {
    id: "stealseries",
    // @ts-ignore 
    img:  require('../img/brands/stealseries.png'),
  },
  {
    id: "toshipa",
    // @ts-ignore 
    img:  require('../img/brands/toshipa.png'),
  },
  {
    id: "xpg",
    // @ts-ignore 
    img:  require('../img/brands/xpg.png'),
  },
  {
    id: "zotac",
    // @ts-ignore 
    img:  require('../img/brands/zotac.png'),
  },
]