import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

function App() {
  const name = "Feisbrut";
  const nav = [
    { link: "/", label: "Home" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
  ];

  return (
    <div>
      <Header name={name} links={nav} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
