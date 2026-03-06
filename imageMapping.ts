/**
 * Maps product names to real product images
 * Using high-quality images from reliable sources
 */

export const getProductImage = (productTitle: string): string => {
  const imageMap: Record<string, string> = {
    // Electronics
    'iPhone 14 Pro': 'https://phonesdata.com/files/models/Apple-iPhone-14-Pro-Max-656.jpg',
    'Samsung Galaxy S23': 'https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s23-256gb-preto-5g-8gb-ram-61-cam-tripla-selfie-12mp/magazineluiza/232854100/e9fd12e9a66f2797bce34c5169369937.jpg',
    'iPad Air': 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Apple Watch Series 8': 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Nintendo Switch OLED': 'https://tse4.mm.bing.net/th/id/OIP.i9rjH3NlMKhhXZEsj99wwwHaEK?pid=Api&h=220&P=0',
    'Sony WH-1000XM4': 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    
    // Laptops
    'MacBook Pro': 'https://mobidevices.com/images/2023/11/MacBook-Pro-2019.jpeg',
    'Dell XPS 13': 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'ASUS ROG Strix G15': 'https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/img/rcd-audio-1280.jpg',
    'HP Spectre x360': 'https://jp.ext.hp.com/content/dam/jp-ext-hp-com/jp/ja/ec/notebooks/personal/spectre_x360_14_ea0000/images/move3_full.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Lenovo ThinkPad X1 Carbon': 'https://sm.pcmag.com/t/pcmag_uk/review/l/lenovo-thi/lenovo-thinkpad-x1-carbon-gen-12_p1y2.1200.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Microsoft Surface Laptop 4': 'https://d2e6ccujb3mkqf.cloudfront.net/d95aa494-f24f-4e5d-a144-556859d7f3ac-1_22fb7609-659a-4683-b09f-8588563a246a.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    
    // Fashion - Shoes
    'Nike Air Max 270': 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/614c674d-70ea-46d8-bad1-645aa6776e4b/AIR+MAX+270+DIAMONDBACKS.png?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    "Levi's 501 Original Jeans": 'https://i5.walmartimages.com/asr/0f6d62eb-0028-4cd1-ad6a-a22689458b9f.8f46d71761adc55fe1d064263f62c7a0.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Adidas Ultraboost 22': 'https://tse1.mm.bing.net/th/id/OIP.WZzEKSZIwMEe6O1KSgPLzwHaFN?pid=Api&h=220&P=0?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'H&M Cotton T-Shirt': 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2025/FEBRUARY/17/OlFnRzI7_bd8590a344fc4124a37c452f002cab3e.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    
    // Home & Kitchen
    'KitchenAid Stand Mixer': 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3d903ac6-d942-4ff7-825c-6b225578d08f.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Dyson V8 Absolute': 'https://tse2.mm.bing.net/th/id/OIP.FkAtIajT_GebJrZ7iSrW3wHaHa?pid=Api&h=220&P=0?&cropPathE=desktop&fit=stretch,1&fmt=pjpeg&wid=1920?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Instant Pot Duo 7-in-1': 'https://m.media-amazon.com/images/I/71xI1OKz2ZL._AC_SL1500_.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Nespresso Coffee Machine': 'https://tse2.mm.bing.net/th/id/OIP.QHGVdoKnxTodbno4Zf0phgHaHa?pid=Api&h=220&P=0?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    
    // Beauty & Personal Care
    'Dyson Airwrap': 'https://tse3.mm.bing.net/th/id/OIP.KYZd9yQqFnmfJ--vMpDKogHaEK?pid=Api&h=220&P=0?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'iRobot Roomba': 'https://tse2.mm.bing.net/th/id/OIP.kQuKq7a4swu-HuGxCwWsiQHaHa?pid=Api&h=220&P=0?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Philips Sonicare Toothbrush': 'https://tse3.mm.bing.net/th/id/OIP.mjMn4KN-3mmtKV2E5UyHIgHaHa?pid=Api&h=220&P=0?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'Anker PowerCore 20000': 'https://tse1.mm.bing.net/th/id/OIP.hpmmFbXj6NX2_--OpVUj1AHaFP?pid=Api&h=220&P=0?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  }

  // Return mapped image or a generic product image if not found
  return imageMap[productTitle] || `https://images.pexels.com/photos/3738327/pexels-photo-3738327.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`
}
