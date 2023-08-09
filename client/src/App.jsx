// import  from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b vorder-b-[#e6ebf4]">
          <Link to="/">
            <img src={logo} className="w-28 object-contain" alt="logo" />
          </Link>
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100ch-73px)] md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
