import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MyNav from "./MyNav";
import MyHero from "./MyHero";
import MyFooter from "./MyFooter";

const HomePage = function () {
  return (
    <>
      <header>
        <MyNav />;
      </header>
      <main>
        <MyHero />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
};

export default HomePage;
