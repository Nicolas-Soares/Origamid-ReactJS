import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <>
      {produtos.map(produto => (
        <ProductItem key={produto.nome} name={produto.nome} properties={produto.propriedades}/>
      ))}
    </>
  );
};

export default Products;
