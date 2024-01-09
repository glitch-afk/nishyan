import Sidebar from "./components/Sidebar";
import Header from "#components/Header";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="xl:pl-[224px] w-full">
        <Header />
      </main>
    </>
  );
};

export default App;
