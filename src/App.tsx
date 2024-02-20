import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div>
        <Routes>
          
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

// if the HelloWorld component would have been implemented in
// HelloWorld/index.tsx, the import statement would have been the
// same. This simplifies deciding implementing components as single
// file or a folder. If the extension is ommitted from the import
// statement, then first it will attempt to import a file called
// HelloWorld.tsx. If it fails it will then attempt to import
// index.tsx in a folder called HelloWorld, e.g., HelloWorld/tsx.
// Since the HelloWorld component is trivial, we decided to use
// a single file, e.g., HelloWorld.tsx

export default App;
