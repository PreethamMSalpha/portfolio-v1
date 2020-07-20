import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// import { connect } from "react-redux";

import "./App.css";

import Homepage from "./homepage.component";
import Projects from "./components/projects/projects.component";
import Knowledge from "./components/skills-knowledge/skills-knowledge.components";
import Contact from "./components/contact/contact.component";
import Navbar from "./components/nav-bar/navbar.component";
import Footer from "./components/footer/footer.component";

// import { setSidebar } from "./redux/theme/theme.actions";

const DemoPage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/projects">projects</Link>
      <button onClick={() => props.history.push("/projects")}>projects</button>
      <h1>Demo Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/demo" component={DemoPage} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Knowledge} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;

// const mapStateToDispatch = (dispatch) => ({
//   setSidebar: (sidebar) => dispatch(setSidebar(sidebar)),
// });

// export default connect(null, mapStateToDispatch)(App);

// import React, { useState } from "react";
// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "./theme";
// import { GlobalStyles } from "./global";

// // The function that toggles between themes
// function App() {
//   const [theme, setTheme] = useState("light");
//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//   // Return the layout based on the current theme
//   return (
//     <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
//       <GlobalStyles />
//       <button onClick={toggleTheme}>Toggle theme</button>
//       <h1>It's a light theme!</h1>
//       <footer></footer>
//     </ThemeProvider>
//   );
// }

// export default App;
