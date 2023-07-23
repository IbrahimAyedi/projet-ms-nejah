import "./App.css";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const data = [
    {
      id: Math.random(),
      name: "Generic Montre tendance GT3 MAX - 3 bracelets (acier, cuir, silicone)",
      price: "150",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/5757/1.jpg?0886",
    },
    {
      id: Math.random(),
      name: "Support flexible 360° du cou",
      price: "23",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/4807/1.jpg?8967",
    },
    {
      id: Math.random(),
      name: "Garnier Ultra Doux Shampoing Huiles Avocat et Beurre de Karité - 200ml",
      price: "6",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/0245/1.jpg?1297",
    },
    {
      id: Math.random(),
      name: "CASA-NOVA Lot de 5 Oreillers en fibre creuse siliconée - 70X50 cm",
      price: "54",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/66/3431/1.jpg?0004",
    },
  ];
  const handleAlert = (x) => alert(`the price of ${x.name} is ${x.price}`);
  return (
    <div className="App">
      <ProductList items={data} hadleFunctionAlert={handleAlert} />
      <Footer  >
        https://media.istockphoto.com/id/1247480977/vector/three-wavy-business-banners-set-in-modern-style.jpg?s=612x612&w=0&k=20&c=RVlIK8j12qPto5Moe1fkQIFlnm9hpJWVmEtKd7ZYF1c=
      </Footer>
    </div>
  );
}

export default App;
