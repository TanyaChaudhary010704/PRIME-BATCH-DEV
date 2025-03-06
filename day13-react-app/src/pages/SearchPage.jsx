import "./SearchPage.css";
import Card from "../Components/Card.jsx";

const cards = [
  {
    title: "Invitation",
    text: "You are invited!",
  },
  {
    title: "Invitation",
    text: "You are invited!",
  },
];

const SearchPage = () => {
  return (
    <div className="search-page">
      <header>Logo</header>
      <main>
        <h2>Search Here!</h2>
        <div>
          {cards.map((card) => {
            return (
              <Card title={card.title} text={card.text}/>
            );
          })}
        </div>
      </main>
      <footer>&copy; Copyright @ Logo</footer>
    </div>
  );
};
export default SearchPage;
