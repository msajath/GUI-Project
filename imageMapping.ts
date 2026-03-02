/**
 * Maps product names to real product images
 * Using high-quality images from reliable sources
 */

export const getProductImage = (productTitle: string): string => {
  const imageMap: Record<string, string> = {
    // Electronics
    'iPhone 14 Pro': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
    'Samsung Galaxy S23': 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'iPad Air': 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Apple Watch Series 8': 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Nintendo Switch OLED': 'https://images.pexels.com/photos/3408617/pexels-photo-3408617.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Sony WH-1000XM4': 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    
    // Laptops
    'MacBook Pro': 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Dell XPS 13': 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'ASUS ROG Strix G15': 'https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/img/rcd-audio-1280.jpg',
    'HP Spectre x360': 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Lenovo ThinkPad X1 Carbon': 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Microsoft Surface Laptop 4': 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    
    // Fashion - Shoes
    'Nike Air Max 270': 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    "Levi's 501 Original Jeans": 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Adidas Ultraboost 22': 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'H&M Cotton T-Shirt': 'https://images.pexels.com/photos/3621461/pexels-photo-3621461.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    
    // Home & Kitchen
    'KitchenAid Stand Mixer': 'https://images.pexels.com/photos/3049318/pexels-photo-3049318.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Dyson V8 Absolute': 'https://images.pexels.com/photos/3995517/pexels-photo-3995517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Instant Pot Duo 7-in-1': 'https://images.pexels.com/photos/3407881/pexels-photo-3407881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Nespresso Coffee Machine': 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    
    // Beauty & Personal Care
    'Dyson Airwrap': 'https://images.pexels.com/photos/3873033/pexels-photo-3873033.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'iRobot Roomba': 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Philips Sonicare Toothbrush': 'https://images.pexels.com/photos/3944411/pexels-photo-3944411.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Anker PowerCore 20000': 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  }

  // Return mapped image or a generic product image if not found
  return imageMap[productTitle] || `https://images.pexels.com/photos/3738327/pexels-photo-3738327.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`
}
