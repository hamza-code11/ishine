import React from 'react';
import ProductCard from './ProductCard';




const ProductGrid = () => {
  // iPhone Dummy Data for testing
  const products = [
    { 
      id: 1, 
      name: "iPhone 17", 
      image_url: "https://cubeonline.pk/cdn/shop/files/iPhone_17_Black_2-up_Print__USEN-2-min_1_-min-min_cff59c02-bfcc-4778-8b29-d9dd0f41e6d7_1024x1024.png?v=1759500095" 
    },
    { 
      id: 2, 
      name: "iPhone 16", 
      image_url: "https://kliksel.lv/cdn/shop/files/AppleiPhone17Pro_4.png?v=1771074399&width=1000" 
    },
    { 
      id: 3, 
      name: "iPhone 15", 
      image_url: "https://dmau.imgix.net/media/catalog/product/i/p/iphone_17_white_pdp_image_position_1__anz_1_f6uvlbqbioxs0bj0.jpg" 
    },
    { 
      id: 4, 
      name: "iPhone 14", 
      image_url: "https://telefonika.com/cdn/shop/files/iPhone17Blue.jpg?v=1769523309" 
    },
    { 
      id: 5, 
      name: "iPhone 13", 
      image_url: "https://cdn.mafrservices.com/sys-master-root/h19/he9/51652390813726/721296_main.jpg?im=Resize=376" 
    },
    { 
      id: 6, 
      name: "iPhone 12", 
      image_url: "https://generationspace.co.ke/wp-content/uploads/2025/12/3-56.webp" 
    },
  ];

  return (
    <div className="p-8">
  {/* Row mein 3 cards fix karne ke liye lg:grid-cols-3 use kiya hai */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((item) => (
      <ProductCard key={item.id} product={item} />
    ))}
  </div>
</div>
  );
};

export default ProductGrid;