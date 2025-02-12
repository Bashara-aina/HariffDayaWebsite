import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Products from "@/pages/products";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import LandingPage from "@/pages/landing";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/home">
          <>
            <Navbar />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
          </>
        </Route>
        <Route path="/products">
          <>
            <Navbar />
            <main className="flex-grow">
              <Products />
            </main>
            <Footer />
          </>
        </Route>
        <Route path="/about">
          <>
            <Navbar />
            <main className="flex-grow">
              <About />
            </main>
            <Footer />
          </>
        </Route>
        <Route path="/contact">
          <>
            <Navbar />
            <main className="flex-grow">
              <Contact />
            </main>
            <Footer />
          </>
        </Route>
        <Route>
          <>
            <Navbar />
            <main className="flex-grow">
              <NotFound />
            </main>
            <Footer />
          </>
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;