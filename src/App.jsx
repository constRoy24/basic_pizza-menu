import "./assets/index.css";

const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  // const [datas, setDatas] = useState("");

  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

const Header = () => {
  return (
    <>
      <h1 className="header">Fast React Pizza Co.</h1>
    </>
  );
};

const Menu = () => {
  const pizzaList = pizzaData;
  const numPizza = pizzaList.length;
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        {numPizza > 0 ? (
          <>
            <p>
              Authenthic Italian Cuisine. 6 creative dishes to choose from. all
              from our stone oven, all organic , all delicous
            </p>

            <ul className="pizzas">
              {pizzaList.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.id} />
              ))}
            </ul>
          </>
        ) : (
          <p>NO DATA</p>
        )}
      </main>
    </>
  );
};

const Pizza = ({ pizzaObj }) => {
  const { name, ingredients, photoName, price, soldOut } = pizzaObj;
  return (
    <>
      <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
        <img src={photoName} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{soldOut ? "SOLD OUT" : price}</span>
        </div>
      </li>
    </>
  );
};
{
  /* <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
<img src={pizzaObj.photoName} alt={pizzaObj.name} />
<div>
  <h3>{pizzaObj.name}</h3>
  <p>{pizzaObj.ingredients}</p>


  <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
</div>
</li> */
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // const Opengreet = "We're currently open"
  // const CloseGreet = "Sorry We're close"

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorr We're close");

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>
              We're open until {closeHour}:00. Come visit us or order online
            </p>
            <button className="btn ">Order</button>
          </div>
        ) : (
          <p>
            We're Happy to Welcome you Between {openHour}:00 and {closeHour}:00{" "}
          </p>
        )}
      </footer>
    </>
  );
};

export default App;
