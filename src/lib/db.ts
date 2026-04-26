// Mock database service for development
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock_count: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Minimalist Watch',
    description: 'A sleek, tech-trendy timepiece with a high-contrast display.',
    price: 129.00,
    image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800',
    category: 'Accessories',
    stock_count: 50
  },
  {
    id: '2',
    name: 'Ergonomic Wireless Mouse',
    description: 'Smooth design with large buttons for easy handling.',
    price: 45.00,
    image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800',
    category: 'Computing',
    stock_count: 100
  },
  {
    id: '3',
    name: 'Noise-Cancelling Headphones',
    description: 'Premium audio quality with simple, intuitive controls.',
    price: 199.00,
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800',
    category: 'Audio',
    stock_count: 30
  },
  {
    id: '4',
    name: 'Backlit Large-Key Keyboard',
    description: 'High-contrast keys with adjustable brightness for better visibility.',
    price: 89.00,
    image_url: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800',
    category: 'Computing',
    stock_count: 25
  }
];

export async function getProducts() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProducts;
}
