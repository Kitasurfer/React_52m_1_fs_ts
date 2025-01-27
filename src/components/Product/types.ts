export interface ProductProps {
  name?: string;
  price: number;
  //description?: string; // Описание продукта
 // image?: string; // URL изображения продукта
 // inStock?: boolean; // Доступность продукта
  onAddToCart: () => void; // Обработчик для добавления в корзину
}