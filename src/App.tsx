import BgHeading from "./components/BgHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[#f1d5b3] min-h-screen antialiased">
      <BgHeading />
      <main className="relative w-[972px] h-[636px] bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <SideBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
