import { readFileSync } from 'node:fs';

console.log(readFileSync('./README.md', 'utf-8'));

const productDatabase = [
  {
    id: 1,
    name: 'cushion',
    price: 1900,
    type: 'single',
    title: 'UPLV Cushion',
    priceString: '€19,00',
    description1: `A large cushion to spice up your comfort.`,
  },
  {
    id: 2,
    name: 'hoodie-logo',
    price: 3500,
    type: 'single',
    title: 'Logo Style Hoodie',
    priceString: '€35,00',
    description1: `A logo styled One-Size-Fits-All hoodie.`,
  },
  {
    id: 3,
    name: 'hoodie-college',
    price: 3500,
    type: 'single',
    title: 'College Style Hoodie',
    priceString: '€35,00',
    description1: `A college styled One-Size-Fits-All hoodie.`,
  },
  {
    id: 4,
    name: 'mug',
    price: 1200,
    type: 'single',
    title: 'Upleveled Coffee Mug',
    priceString: '€12,00',
    description1: `Guaranteed to keep your choice of coding fuel extremely fancy.`,
    description2: `Caution: Contents may be hot.`,
  },
  {
    id: 5,
    name: 'sub-karl',
    price: 12000,
    type: 'subscription',
    title: `Karl's Krash Kourse`,
    priceString: '€120,00',
    description1: `Need to get up to speed? Schedule up to four 1-hour 1-on-1 sessions a month with Karl Horky.`,
    description2: `This is a monthly subscription.`,
  },
  {
    id: 6,
    name: 'sub-jose',
    price: 12000,
    type: 'subscription',
    title: `José's Javascript Jam`,
    priceString: '€120,00',
    description1: `Want to learn JavaScript fast? Schedule up to four 1-hour 1-on-1 sessions a month with José Hower.`,
    description2: `This is a monthly subscription.`,
  },
  {
    id: 7,
    name: 'stickers',
    price: 800,
    type: 'single',
    title: 'Assorted Coding Stickers. 50pcs.',
    priceString: '€8,00',
    description1: `You aren't a "real developer" unless your laptop is more sticker than chassis. Assorted stickers from well known favorites, in this 50 piece sticker set.`,
  },
];

export default productDatabase;
