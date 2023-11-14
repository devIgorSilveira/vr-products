import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Product from "./product.entity";
import Store from "./store.entity";

@Entity("productstore")
class ProductStore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric", precision: 13, scale: 3 })
  salePrice: number;

  @ManyToOne(() => Product, (product) => product.productsStore)
  product: Product;

  @ManyToOne(() => Store, (store) => store.productsStore)
  store: Store;
}

export default ProductStore;
