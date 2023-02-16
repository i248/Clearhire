import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Accees from "./Component/Accees";
import Employee from "./Component/Employee";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeAssesment from "./Component/EmployeeAssesment";
import NewEmployee from "./Component/NewEmployee";
import OfferletterSent from "./Component/OfferletterSent";
import YourSkill from "./Component/YourSkill";
import CircleprogressBar from "./Component/CircleprogressBar";
import OfferLetter from "./Component/OfferLetter";
import YourProfile from "./Component/YourProfile";
import Footer from "./Component/Footer";
import ColleagueSearch from "./Component/ColleagueSearch";
import Header from "./Component/Header";
import Home from "./Component/Home";
import WelcomePage from "./Component/WelcomePage";
import WelcomeLoginPage from "./Component/WelcomeLoginPage";
import EmployeeeSignup from "./Component/EmployeeeSignup";
import SignupDone from "./Component/SignupDone";
import EmployerSignup from "./Component/EmployerSignup";
import EmployeeSearch from "./Component/EmployeeSearch";
import Header2 from "./Component/Header2";
import SentApprovals from "./Component/SentApprovals";
import CircleBar from "./Component/CircleBar";
import Header3 from "./Component/Header3";
import EmployeeDetails from "./Component/EmployeeDetails";
import Header4 from "./Component/Header4";
import Header5 from "./Component/Header5";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/dfd"
            element={
              <>
                <Employee />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {/* <Home /> */}
            

                {/* <WelcomeLoginPage /> */}
                {/* <EmployerSignup />  */}
                {/* <SignupDone /> */}
                {/* <EmployeeeSignup /> */}
                {/* wdddddd */}
                {/* <EmployeeSearch/> */}
                {/* <SentApprovals/> */}
                {/* <Accees /> */}
                {/* <NewEmployee /> */}
                <EmployeeAssesment />
        
                {/* <OfferletterSent /> */}
                {/* <YourSkill /> */}
                {/* <OfferLetter /> */}
                {/* <YourProfile /> */}
                {/* <CircleBar/> */}
                {/* <ColleagueSearch />  */}
                {/* <EmployeeDetails/> */}
   
              </>
            }
          />
          <Route
            path="employeeassesment"
            element={
              <>
                <EmployeeAssesment />
              </>
            }
          />
          <Route
            path="newemployeee"
            element={
              <>
                <NewEmployee />
              </>
            }
          />
          <Route
            path="offerlettersent"
            element={
              <>
                <OfferletterSent />
              </>
            }
          />
          <Route
            path="yourskill"
            element={
              <>
                <YourSkill />
              </>
            }
          />
          <Route
            path="circleprogressbar"
            element={
              <>
                <CircleprogressBar />
              </>
            }
          />
          <Route
            path="offerletter"
            element={
              <>
                <OfferLetter />
              </>
            }
          />
          <Route
            path="yourprofile"
            element={
              <>
                <YourProfile />
              </>
            }
          />
          <Route
            path="footer"
            element={
              <>
                <Footer />
              </>
            }
          />
          <Route
            path="colleaguesearch"
            element={
              <>
                <ColleagueSearch />
              </>
            }
          />
          <Route
            path="header"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="welcomepage"
            element={
              <>
                <WelcomePage />
              </>
            }
          />
          <Route
            path="welcomeloginPage"
            element={
              <>
                <WelcomeLoginPage />
              </>
            }
          />
          <Route
            path="employeeesignup"
            element={
              <>
                <EmployeeeSignup />
              </>
            }
          />
          <Route
            path="signupdone"
            element={
              <>
                <SignupDone />
              </>
            }
          />
           <Route
            path="employersignup"
            element={
              <>
                <EmployerSignup />
              </>
            }
          />
           <Route
            path="employeesearch"
            element={
              <>
                <EmployeeSearch />
              </>
            }
          />
           <Route
            path="header2"
            element={
              <>
                <Header2/>
              </>
            }
          />
           <Route
            path="sentapprovals"
            element={
              <>
                <SentApprovals/>
              </>
            }
          />
           <Route
            path="header3"
            element={
              <>
                <Header3/>
              </>
            }
          />
            <Route
            path="employeedetails"
            element={
              <>
                <EmployeeDetails/>
              </>
            }
          />
            <Route
            path="header4"
            element={
              <>
                <Header4/>
              </>
            }
          />
           <Route
            path="header5"
            element={
              <>
                <Header5/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
