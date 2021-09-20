import React from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Homepage from "./Components/Homepage";

function App() {
  let Page = Homepage;
  let pageTitle = "Home";
  const { pathname } = window.location;

  if (pathname === "/produtos") {
    Page = Products;
    pageTitle = "Produtos";
  }

  return (
    <>
      <Header title={pageTitle} />
      <Page />
    </>
  );
}

export default App;
