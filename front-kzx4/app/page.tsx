import Header from "./components/Header";
import LatestRelease from "./components/LatestRelease";
import HeroBio from "./components/HeroBio";
import SocialGrid from "./components/SocialGrid";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <LatestRelease />
      <HeroBio />
      <SocialGrid />
      <Footer />
      
    </main>
  );
}