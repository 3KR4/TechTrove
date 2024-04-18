export const allProducts = [
  { 
    id: 1001, 
    value: "Accessories",
    type: "Mouse",
    name: "XPG INFAREX M10",
    review: "68",
    price: "18.00",
    price2: "20.00",
    state: "in stock",
    // @ts-ignore 
    img: require('../img/xpg.png'), 
  },
  { 
    id: 1002,
    value: "Accessories",
    type: "Headphones",
    name: "Logitech G PRO X",
    review: "50",
    price: "180.00",
    price2: "200.00",
    state: "out of stock",
    // @ts-ignore 
    img: require('../img/logi headphone.png'), 
  },
  { 
    id: 1003, 
    value: "Consoles",
    type: "Joysticks",
    name: "xbox controlar",
    review: "40",
    price: "50.00",
    price2: "54.00",
    state: "in stock",
    // @ts-ignore 
    img: require('../img/ps4 controlar.png'), 
  },
]




export const type = [
  {
    id: "Hardware",
    list: [
      { 
        id: "GraphicCard",
        // @ts-ignore
        img: require('../img/Categories/gpu.png'), 
      },
      { 
        id: "MotherBoard",
        // @ts-ignore
        img: require('../img/Categories/mother.png'), 
      },
      { 
        id: "Procesor", 
        // @ts-ignore 
        img: require('../img/Categories/cpu.png'), 
      },
      { 
        id: "Memory",
        // @ts-ignore 
        img: require('../img/Categories/ram.png'), 
      },
      { 
        id: "Storage", 
        // @ts-ignore 
        img: require('../img/Categories/storage.png'), 
      },
      { 
        id: "Liquid Cooling", 
        // @ts-ignore 
        img: require('../img/Categories/liquid cooling.png'), 
      },
      { 
        id: "Power Supply", 
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Desktop Case",
        // @ts-ignore 
        img: require('../img/Categories/case.png'), 
      },
    ],
  },
  {
    id: "Accessories",
    list: [
      { 
        id: "Mouse",
        // @ts-ignore 
        img: require('../img/Categories/mouse.png'), 
      },
      { 
        id: "keyboard",
        // @ts-ignore 
        img: require('../img/Categories/keyboard.png'), 
      },
      { 
        id: "HeadPhone", 
        // @ts-ignore 
        img: require('../img/Categories/headphone.png'), 
      },
      { 
        id: "Speakers", 
        // @ts-ignore 
        img: require('../img/Categories/speakers.png'), 
      },
      { 
        id: "MousePad", 
        // @ts-ignore 
        img: require('../img/Categories/mousebad.png'), 
      },
    ],
  },
  {
    id: "Electronics",
    list: [
      { 
        id: "Smartwatches", 
        // @ts-ignore 
        img: require('../img/Categories/smartwatch.png'), 
      },
      { 
        id: "Smartphones",
        // @ts-ignore 
        img: require('../img/Categories/iphone 15.png'), 
      },
      { 
        id: "Laptops",
        // @ts-ignore 
        img: require('../img/Categories/notebock.png'), 
      },
      { 
        id: "Tablets", 
        // @ts-ignore 
        img: require('../img/Categories/tablet.png'), 
      },
      { 
        id: "Cameras", 
        // @ts-ignore 
        img: require('../img/Categories/camera.png'), 
      },
      { 
        id: "Webcams", 
        // @ts-ignore 
        img: require('../img/Categories/webcam.png'), 
      },
      { 
        id: "microphones", 
        // @ts-ignore 
        img: require('../img/Categories/microphone.png'), 
      },
    ],
  },
  {
    id: "Monitor",
    list: [
      { 
        id: "Gaming Monitor",
        // @ts-ignore 
        img: require('../img/Categories/monitor.png'), 
      },
      { 
        id: "Television",
        // @ts-ignore 
        img: require('../img/Categories/tv-samsung.png'), 
      },
    ],
  },
  {
    id: "Console",
    list: [
      { 
        id: "Console",
        // @ts-ignore 
        img: require('../img/Categories/console.png'), 
      },
      { 
        id: "Xbox",
        // @ts-ignore 
        img: require('../img/Categories/xbox.png'), 
      },
      { 
        id: "Nitendo",
        // @ts-ignore 
        img: require('../img/Categories/nitendo.png'), 
      },
      { 
        id: "Game Bad",
        // @ts-ignore 
        img: require('../img/Categories/gamebad.png'), 
      },
    ],
  },
  {
    id: "Other",
    list: [
      { 
        id: "Chair",
        // @ts-ignore 
        img: require('../img/Categories/chair.png'), 
      },
      { 
        id: "Holder",
        // @ts-ignore 
        img: require('../img/Categories/holder.png'), 
      },
      { 
        id: "Fans",
        // @ts-ignore 
        img: require('../img/Categories/fans.png'), 
      },
      { 
        id: "Cables",
        // @ts-ignore 
        img: require('../img/Categories/cables.png'), 
      },
      { 
        id: "Gaming Desk",
        // @ts-ignore 
        img: require('../img/Categories/gamingdesk.png'), 
      },
      { 
        id: "Led Strip",
        // @ts-ignore 
        img: require('../img/Categories/ledstrip.png'), 
      },
      { 
        id: "Thermal Paste",
        // @ts-ignore 
        img: require('../img/Categories/thermalpaste.png'), 
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