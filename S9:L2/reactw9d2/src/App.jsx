import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav titleShop="Mark's Bookshop" />
      <Welcome content="Welcome to our vast collection of books" header="Browse our books!" />
      <AllTheBooks />
      <MyFooter address="2686 Golf Course Drive, Manassas, VA 22110" phoneNumber="+1 703-369-3791" pIva="USA38723312" title="&#169; Mark's Bookshop" />
    </>
  );
}

export default App;
