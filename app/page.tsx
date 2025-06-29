import HomePage from "./pages";
import About from "./pages/about";
import Posts from "./pages/posts";
import Footer from "./pages/footer"
import Header from "./components/Header";
import { signIn } from "@/auth"

export default function Home() {
  return (
    <div className=" min-h-screen  flex flex-col justify-between">
      {/* Header */}
      <div>
        <Header />
      </div>
      {/* Main Content */}
      <div>
        <HomePage />
      </div>



  <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>

      
      <Posts />
      <Footer />

    </div>
  );
}
