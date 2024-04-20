import Certificate from "./components/home/certificate";
import Blog from './components/home/blog'
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
      </div>
      <Blog />
      <Certificate />
    </>
  );
}