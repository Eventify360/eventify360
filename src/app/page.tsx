import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </main>
  );
}