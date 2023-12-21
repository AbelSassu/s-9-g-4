import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHeros";
import BookList1 from "./components/BookList1";
import MyFooter from "./components/MyFooters";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MyNavbar />
            </header>
            <main>
                <MyHero />
                <BookList1 />
            </main>

            <footer className="d-flex bg-secondary justify-content-center mt-5 p-3">
                <MyFooter />
            </footer>
        </div>
    );
}

export default App;
