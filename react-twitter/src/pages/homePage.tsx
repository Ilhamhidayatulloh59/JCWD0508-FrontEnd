import { Footer } from "../components/home/footer";
import { Welcome } from "../components/home/welcome";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Welcome />
      <Footer />
    </div>
  );
}