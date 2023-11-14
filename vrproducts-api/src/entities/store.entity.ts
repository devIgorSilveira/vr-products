import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import ProductStore from "./productStore.entity";

@Entity("stores")
class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 60 })
  description: string;

  @OneToMany(() => ProductStore, (productStore) => productStore.store)
  productsStore: ProductStore[];
}

export default Store;
