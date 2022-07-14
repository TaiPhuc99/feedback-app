import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import Header from "./components/Header";
import { userRoute } from "./components/routes/userRoute";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <Routes>
          {userRoute.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.element}
              />
            );
          })}
        </Routes>

        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
