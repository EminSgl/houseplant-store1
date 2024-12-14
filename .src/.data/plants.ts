import { Plant } from '../types';
import { PLANT_CATEGORIES } from './categories';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
    category: PLANT_CATEGORIES.LARGE,
    description: 'Known for its stunning split leaves and easy care requirements.'
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 29.99,
    image: 'https://th.bing.com/th/id/OIP.L-xB_Q07j-sEG-fh-w3cWAHaIw?rs=1&pid=ImgDetMain',
    category: PLANT_CATEGORIES.AIR_PURIFYING,
    description: 'Perfect for beginners and excellent at purifying indoor air.'
  },
  {
    id: '3',
    name: 'Peace Lily',
    price: 34.99,
    image: 'https://th.bing.com/th/id/R.3e0c5c69b61a8697f45417a43a6ceea9?rik=uKjlmGQrA5l%2fGw&pid=ImgRaw&r=0',
    category: PLANT_CATEGORIES.AIR_PURIFYING,
    description: 'Elegant white flowers and glossy leaves.'
  },
  {
    id: '4',
    name: 'Fiddle Leaf Fig',
    price: 59.99,
    image: 'https://th.bing.com/th/id/OIP.e1_sv1VoZR6O_yIFj2-kngHaJQ?rs=1&pid=ImgDetMain',
    category: PLANT_CATEGORIES.LARGE,
    description: 'Dramatic and architectural with large, violin-shaped leaves.'
  },
  {
    id: '5',
    name: 'String of Pearls',
    price: 24.99,
    image: 'https://abeautifulmess.com/wp-content/uploads/2023/06/Stringofpearls-1-500x500.jpg',
    category: PLANT_CATEGORIES.HANGING,
    description: 'Delicate trailing succulent with pearl-like leaves.'
  },
  {
    id: '6',
    name: 'Pothos',
    price: 19.99,
    image: 'https://www.mydomaine.com/thmb/U8zjh2ANe7uOpBDMRnoflD39s2A=/1080x1080/filters:no_upscale():max_bytes(150000):strip_icc()/161029802_3716793755065012_4977917557294983733_n-f8187fefbb01424d9ac094e6c929b9fe.jpg',
    category: PLANT_CATEGORIES.HANGING,
    description: 'Fast-growing vine with heart-shaped leaves.'
  },
  {
    id: '7',
    name: 'Bird of Paradise',
    price: 89.99,
    image: 'https://images.immediate.co.uk/production/volatile/sites/10/2021/04/2048x1365-Strelitzia-reginae-GettyImages-1270647929-4f76714.jpg',
    category: PLANT_CATEGORIES.LARGE,
    description: 'Majestic tropical plant with large, banana-like leaves.'
  },
  {
    id: '8',
    name: 'ZZ Plant',
    price: 32.99,
    image: 'https://www.chicago-plants.com/cdn/shop/articles/IMG_6907.jpg?v=1619105324',
    category: PLANT_CATEGORIES.AIR_PURIFYING,
    description: 'Low-maintenance plant with glossy, dark green leaves.'
  },
  {
    id: '9',
    name: 'Spider Plant',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&q=80&w=800',
    category: PLANT_CATEGORIES.HANGING,
    description: 'Classic hanging plant with arching leaves and baby plantlets.'
  },
  {
    id: '10',
    name: 'Rubber Plant',
    price: 49.99,
    image: 'https://th.bing.com/th/id/OIP.ds7zD8o50reyTZDktd_t7QHaLH?rs=1&pid=ImgDetMain',
    category: PLANT_CATEGORIES.LARGE,
    description: 'Bold plant with thick, glossy leaves in deep green.'
  },
  {
    id: '11',
    name: 'Chinese Evergreen',
    price: 27.99,
    image: 'https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1531805831/vendor/6301/catalog/product/2/0/20180626093851_file_5b32b26bdea26.jpeg',
    category: PLANT_CATEGORIES.AIR_PURIFYING,
    description: 'Beautiful variegated leaves and excellent air-cleaning abilities.'
  },
  {
    id: '12',
    name: 'English Ivy',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&q=80&w=800',
    category: PLANT_CATEGORIES.HANGING,
    description: 'Classic trailing vine with elegant, pointed leaves.'
  }
];