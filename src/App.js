import { useReducer, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import NewPost from "./pages/NewPost";
// import Messages from "./pages/Messages";
// import Friends from "./pages/Friends";
// import Login from "./pages/Login";

import Loading from "./Loading";

// import Home from "./pages/Home";

const Home = lazy(()=>import("./pages/Home"));
const NewPost = lazy(()=>import("./pages/NewPost"));
const Messages= lazy(()=>import("./pages/Messages"));
const Friends = lazy(()=>import("./pages/Friends"));
const Login = lazy(()=>import("./pages/Login"));

const INIT_STATE = {
  name: "Feisbrut",
  nav: [
    { link: "/", label: "Home" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
    { link: "/login", label: "Login" }
  ],
  friendsPreview: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change-name":
      return { ...state, name: "Feisbell" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} links={state.nav} />

      <button onClick={() => dispatch({ type: "change-name" })}>
        Cambia nome
      </button>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>} />

        <Route
          path="/new-post"
          element={
            <Suspense fallback={<Loading/>}> 
          <NewPost />
            </Suspense>} />

        <Route
          path="/messages"
          element={
            <Suspense fallback={<Loading />}>
              <Messages />
            </Suspense>
          } />

        <Route
          path="/friends" 
          element={
            <Suspense fallback={<Loading/>}>
          <Friends />
          </Suspense>
          } />

        <Route
          path="/login" 
          element={
            <Suspense fallback={<Loading/>}>
          <Login />
          </Suspense>
          } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
