import HomePage from "./pages";
import About from "./pages/about";
import Posts from "./pages/posts";
import Footer from "./pages/footer"
import Header from "./components/Header";

export default function Home() {
  return (
    <div className=" min-h-screen  flex flex-col justify-around">
      {/* Header */}
      <section className="">
    <Header />
      </section>


<HomePage />
<About />
<Posts />
<Footer />

    </div>
  );
}
