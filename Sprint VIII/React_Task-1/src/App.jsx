import React from "react";
import MountLogger from "./Components/MountLogger";
import TimerComponent from "./Components/TimeComponent";
import DataFetcher from "./Components/DataFetcher";
import DocumentTitleToggle from "./Components/DocumentTitleToggle";
import WindowResizeListener from "./Components/WindowResizeListener";
import { UserProvider } from "./contexts/UseContext.js";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";

import UserProfile from "./Components/UserProfile";
import UserGreeting from "./Components/UserGreeting";
import ThemeToggle from "./Components/ThemeToggle";
import ThemedComponent from "./Components/ThemedComponent";
import LoginForm from "./Components/LoginForm";
import ProtectedContent from "./Components/ProtectedContent";
import LanguageSelector from "./Components/LanguageSelector";
import TranslatedText from "./Components/TranslatedText";
import CartDisplay from "./Components/CartDisplay";
import AddToCart from "./Components/AddToCart";
// import "./App.css";

function App() {
  // const [num1, setnum1] = useState(100);
  // const [num2, setnum2] = useState(1000);

  // const [theme, setTheme] = useState("Light");

  // const toggleTheme = () =>{
  //   setTheme((curr)=>{curr === "Light" ? "Dark" : "Light"});
  // }

  // useEffect(
  //   () =>{
  //     // console.log("Component mounted");
  //     setnum1(200);
  //     console.log("UseEffect Running");

  //     return ()=>{
  //       setnum1(null);
  //       console.log("Memory Cleaned");
  //     };
  //   },[num1, num2]
  // );

  // console.log("Num 1:", num1);

  return (
    <>
      <section className="view1">
        <h1>useEffect – Side Effects</h1>
        <MountLogger />
        <TimerComponent />
        <DataFetcher />
        <WindowResizeListener />
        <DocumentTitleToggle />
      </section>

      <section className="view2">
        <h1 >useContext – Send Props Manually</h1>
        <UserProvider>
          <ThemeProvider>
            <AuthProvider>
              <LanguageProvider>
                <CartProvider>
                  <div
                    style={{
                      maxWidth: "1200px",
                      margin: "0 auto",
                      padding: "20px",
                    }}
                  >

                    <section className="cards-container">
                      <h2>Task 1: User Context</h2>
                      <UserGreeting />
                      <UserProfile />
                    </section>
                    <hr /> <hr /> <hr />
                    <section className="cards-container">
                      <h2>Task 2: Theme Context</h2>
                      <ThemeToggle />
                      <ThemedComponent />
                    </section>
                    <hr /> <hr /> <hr />

                    <section className="cards-container">
                      <h2>Task 3: Auth Context</h2>
                      <LoginForm />
                      <ProtectedContent />
                    </section>
                    <hr /> <hr /> <hr />

                    <section className="cards-container">
                      <h2>Task 4: Language Context</h2>
                      <LanguageSelector />
                      <TranslatedText />
                    </section>
                    <hr /> <hr /> <hr />

                    <section className="cards-container">
                      <h2>Task 5: Cart Context</h2>
                      <AddToCart />
                      <CartDisplay />
                    </section>
                    <hr /> <hr /> <hr />
                  </div>
                </CartProvider>
              </LanguageProvider>
            </AuthProvider>
          </ThemeProvider>
        </UserProvider>
      </section>

      {/* <h1>Hello Welcome to the Second Level in React Sprint {num1}</h1>
    <p>This is a simple React application to demonstrate the structure and components.</p> */}
      {/* <SideEffect /> */}
      {/* <button onClick = {()=> {console.log("Clicked"); setnum1((curr)=> curr +1)}}>Click ME</button>
    <br /><br />
    {num2}
    <br />
    <button onClick = {()=> {console.log("Clicked"); setnum2((curr)=> curr +1)}}>Click ME</button> */}
      {/* <Container/>

    <button onClick={toggleTheme}>Toggle Theme</button> */}
    </>
  );
}

export default App;
