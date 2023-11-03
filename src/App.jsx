import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { About, Home, SignUp } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log(scrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    // <main>
    <>
      <Navbar scrollVal={scrollPosition} />
      {/* //   <Home />
    //   <About />
    //   <SignUp />
    // </main> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
