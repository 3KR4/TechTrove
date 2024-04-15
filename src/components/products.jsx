// @ts-ignore
import img1 from '../img/xpg.png'
// @ts-ignore
import img2 from '../img/logi headphone.png'
// @ts-ignore
import img3 from '../img/ps4 controlar.png'

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
    img: '.../img/xpg.png',
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
    img: img2,
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
    img: img3,
  },
  { 
    id: 1004, 
    value: "Consoles",
    type: "Joysticks",
    name: "xbox controlar",
    review: "40",
    price: "50.00",
    price2: "54.00",
    state: "out of stock",
    img: img3,
  },
  { 
    id: 1005, 
    value: "Consoles",
    type: "Joysticks",
    name: "xbox controlar",
    review: "40",
    price: "50.00",
    price2: "54.00",
    state: "out of stock",
    img: img3,
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
        id: "keyboard",
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Mouse",
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "HeadPhone", 
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Speakers", 
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "MousePad", 
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
    ],
  },
  {
    id: "Electronics",
    list: [
      { 
        id: "Smartphones",
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Laptops",
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Tablets", 
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Cameras", 
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Smartwatches", 
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
    ],
  },
  {
    id: "Monitor",
    list: [
      { 
        id: "Television",
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Gaming Monitor",
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
    ],
  },
  {
    id: "Other",
    list: [
      { 
        id: "Chair",
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
      { 
        id: "Console",
        // @ts-ignore 
        img: require('../img/Categories/power.png'), 
      },
    ],
  },
]

