import FileManger from "../components/fileManger";
import HomeContextProvider from '../context/homeContext';

const Home = () => {
  

  return (
    <div className="bg-background w-full h-[100vh] px-5 flex flex-col justify-start items-center gap-3">
      <h1 className="py-top-10 w-full text-center text-foreground font-semibold text-4xl select-none">
        MFacture
      </h1>
      <p className="w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis
        similique suscipit a atque magni repellendus accusantium, ipsa nemo
        fugiat, iure velit ducimus nihil fuga!
      </p>
      <HomeContextProvider>
        <FileManger />
      </HomeContextProvider>
    </div>
  );
};

export default Home;
