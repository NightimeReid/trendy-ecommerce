-- Products table
CREATE TABLE products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  category TEXT,
  stock_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Contact Messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Sample Data Seed
INSERT INTO products (name, description, price, image_url, category, stock_count)
VALUES 
('Classic Minimalist Watch', 'A sleek, tech-trendy timepiece with a high-contrast display.', 129.00, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800', 'Accessories', 50),
('Ergonomic Wireless Mouse', 'Smooth design with large buttons for easy handling.', 45.00, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800', 'Computing', 100),
('Noise-Cancelling Headphones', 'Premium audio quality with simple, intuitive controls.', 199.00, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800', 'Audio', 30),
('Backlit Large-Key Keyboard', 'High-contrast keys with adjustable brightness for better visibility.', 89.00, 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800', 'Computing', 25);
