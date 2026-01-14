import Navbar from "@/components/navbar";
import { } from "@/lib/card-data";
import Footer from "@/components/footer";
import Root from "@/components/main/root";
// import { furniture } from "@/lib/furniture";

export default function Home()  {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Navbar />
          <Root />
        <Footer />
      </main>
    </div>
  );
}
