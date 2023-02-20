import Armor from './assets/armor.jpg';
import Backpack from './assets/backpack.jpg';
import Boots from './assets/boots.jpg';
import Bottles from './assets/bottles.jpg';
import FirstAid from './assets/first aid.jpg';
import GasMask from './assets/gas mask.jpg';
import Knifes from './assets/knifes.jpg';

export const products = [
  {
    id: '1',
    productName: 'Strong Armor',
    description: "Stay protected in any situation with our top-of-the-line body armor. Made from durable materials, this armor is designed to withstand even the toughest zombie attacks. Lightweight and comfortable, it's perfect for long-term wear and will give you peace of mind in any situation.",
    src: Armor,
    avaiable: Math.floor(Math.random() * 17),
    price: 338.98,
  },
  {
    id: '2',
    productName: 'Durable Backpack',
    description: "The perfect companion for any survival situation, our backpack is designed to withstand even the toughest conditions. Made from durable materials, this backpack is water-resistant and has multiple compartments to keep all your gear organized. With comfortable straps and a sturdy frame, it's perfect for long-term wear.",
    src: Backpack,
    avaiable: Math.floor(Math.random() * 17),
    price: 188.98,
  },
  {
    id: '3',
    productName: 'Splendid Boots',
    description: "Stay on your feet in any situation with our high-quality boots. Made from durable materials, these boots are designed to withstand harsh conditions and provide excellent traction. With a waterproof design and comfortable fit, they're perfect for long-term wear and will keep your feet dry and protected.",
    src: Boots,
    avaiable: Math.floor(Math.random() * 17),
    price: 128.98,
  },
  {
    id: '4',
    productName: 'Clean Bottles',
    description: "Stay hydrated in any situation with our durable water bottles. Made from BPA-free materials, these bottles are designed to withstand harsh conditions and are perfect for long-term use. With a leak-proof design and easy-to-carry handle, they're perfect for carrying on the go.",
    src: Bottles,
    avaiable: Math.floor(Math.random() * 17),
    price: 78.98,
  },
  {
    id: '5',
    productName: 'Survival FirstAid',
    description: "Be prepared for any emergency with our comprehensive first aid kit. This kit contains all the essentials you need to treat injuries, including bandages, antiseptics, and pain relievers. It's also compact and lightweight, making it easy to carry with you on the go.",
    src: FirstAid,
    avaiable: Math.floor(Math.random() * 17),
    price: 88.98,
  },
  {
    id: '6',
    productName: 'Reliable GasMask',
    description: "Protect yourself from airborne toxins with our top-of-the-line gas mask. Made from durable materials, this gas mask is designed to fit comfortably and provide excellent protection. With a replaceable filter, it's perfect for long-term use and will give you peace of mind in any situation.",
    src: GasMask,
    avaiable: Math.floor(Math.random() * 17),
    price: 158.98,
  },
  {
    id: '7',
    productName: 'Sharp Knifes',
    description: "Stay protected in any situation with our high-quality knives. Made from durable materials, these knives are designed to withstand even the toughest conditions. With a variety of designs and sizes, they're perfect for self-defense and survival situations.",
    src: Knifes,
    avaiable: Math.floor(Math.random() * 17),
    price: 248.98,
  },
];
