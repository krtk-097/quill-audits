import "./App.css";
import LandingPage from "./Pages/Home/Home";
import AuditStories from "./Pages/CaseStudies/AuditStories";
import Services from "./Pages/Services/Services";
import SubscriptionPage from "./Pages/Subscription/SubscriptionPage";
import Footer from "./Pages/Footer/Footer";
function App() {
  return (
    <div className="App ">
      <div className="space-y-5">
        <LandingPage />
        <AuditStories />
        <Services />
        <SubscriptionPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
