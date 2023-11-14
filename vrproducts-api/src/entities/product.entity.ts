import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import ProductStore from "./productStore.entity";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 60 })
  description: string;

  @Column({ type: "numeric", precision: 16, scale: 3, nullable: true })
  price: number;

  @Column({ type: "bytea", nullable: true })
  image: string;

  @OneToMany(() => ProductStore, (productStore) => productStore.product)
  productsStore: ProductStore[];
}

export default Product;
