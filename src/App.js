import {
  Suspense,
  lazy,
  useEffect,
  useState,
  useCallback,
  createContext,
} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Home = lazy(() => import("./components/home/Home"));
const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));

export const WindowWidthContext = createContext();

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, []);

  const resizeEvent = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);

    return () => window.removeEventListener("resize", resizeEvent);
  }, [resizeEvent]);

  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="loading-container">
                <div className="loading-container__icon"></div>
              </div>
            }
          >
            <Header />
            <Switch>
              <WindowWidthContext.Provider value={windowWidth}>
                <Route path="/">
                  <Home />
                </Route>
              </WindowWidthContext.Provider>
            </Switch>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
