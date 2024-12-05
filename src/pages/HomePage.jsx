import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TaskFormSection from "../components/TaskFormSection/TaskFormSection";

const HomePage = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-white flex-grow w-full justify-center items-center flex">
        <TaskFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
