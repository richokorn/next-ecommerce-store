import { readFileSync } from 'fs';

console.log(readFileSync('./README.md', 'utf-8'));

const productDatabase = [
  {
    id: 1,
    name: 'cushion',
    currency: '€',
    price: '1900',
    type: 'single',
    title: 'UPLV Cushion',
    description: `A fancy cushion to spice up your experience.`,
  },
  {
    id: 2,
    name: 'hoodie1',
    currency: '€',
    price: '3500',
    type: 'single',
    title: 'Logo Style Hoodie',
    description: `A logo styled One-Size-Fits-All hoodie.`,
  },
  {
    id: 3,
    name: 'hoodie2',
    currency: '€',
    price: '3500',
    type: 'single',
    title: 'College Style Hoodie',
    description: `A college styled One-Size-Fits-All hoodie.`,
  },
  {
    id: 4,
    name: 'karl',
    currency: '€',
    price: '12000',
    type: 'subscription',
    title: `Karl's Koding Krash Kourse`,
    description: `Need to get up to speed? Schedule up to four 1-hour 1-on-1 sessions a month with Karl Horky. This is a monthly subscription.`,
  },
  {
    id: 5,
    name: 'jose',
    currency: '€',
    price: '12000',
    type: 'subscription',
    title: `Private Tutor - José's Javascript Jam`,
    description: `Want to learn JavaScript fast? Schedule up to four 1-hour 1-on-1 sessions a month with José Hower. This is a monthly subscription.`,
  },
  {
    id: 6,
    name: 'mug',
    currency: '€',
    price: '1200',
    type: 'single',
    title: 'Upleveled Coffee Mug',
    description: `Guaranteed to keep your choice of coding fuel extremely fancy.`,
  },
  {
    id: 7,
    name: 'stickers',
    currency: '€',
    price: '800',
    type: 'single',
    title: 'Assorted Coding Stickers. 50pcs.',
    description: `You aren't a "real developer" unless your laptop is more sticker than chassis. Stickers from all your favorites, from AJAX to ZUSE, in this assorted 50 piece sticker set.`,
  },
];

export default productDatabase;
