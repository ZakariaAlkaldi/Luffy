import "./App.css";
import Header from "./components/header";

function App() {
  const pirates = [
    "luffy",
    "zoro",
    "nami",
    "usopp",
    "sanji",
    "chopper",
    "robin",
    "franky",
    "brook",
    "jinbe",
  ];

  return (
    <>
      <Header />
      <section
        className="h-[85vh] mb-5 bg-[url(/imgs/bg5.jpg)] bg-contain rounded-2xl flex justify-center items-center relative"
        id="home"
      >
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.5] "></div>
        <h2 className="text-[200px] text-white font-bold uppercase absolute top-12.5">
          one peice
        </h2>
        <img
          src="imgs/luffy-bg.png"
          className="w-125 absolute bottom-30 hover:rotate-45 duration-500"
          alt="Luffy"
        />
      </section>
      <section id="about" className="w-full h-fit mb-5 flex flex-col gap-2">
        <h2 className="w-fit mx-auto my-5 text-white text-[30px] font-bold uppercase">
          who is luffy
        </h2>
        <div className="flex justify-between items-center bg-[#6f6f6f26] p-5 rounded-2xl">
          <p className="w-[65%] text-white text-[18px]">
            Monkey D. Luffy is the main protagonist of One Piece, a globally
            popular manga and anime series created by Eiichiro Oda. He is a
            carefree yet determined pirate whose dream is to find the legendary
            treasure known as the “One Piece” and become the Pirate King. After
            accidentally eating the Gum-Gum Fruit, a mystical Devil Fruit, Luffy
            gained the ability to stretch his body like rubber, which he
            creatively uses in combat. Despite his playful and sometimes goofy
            personality, he has an unshakable will, an unyielding sense of
            justice, and deep loyalty to his friends, whom he considers his
            family. Luffy’s adventurous spirit, resilience, and unwavering
            belief in freedom make him one of the most inspiring and beloved
            characters in anime and manga history.
          </p>
          <div className="w-72.5 rounded-2xl overflow-hidden">
            <img src="imgs/luffy-about.jpg" className="w-full" alt="Luffy" />
          </div>
        </div>
      </section>
      <section
        className="mb-5 bg-[url(/imgs/ship.png)] bg-size-[80px]  bg-repeat-space"
        id="crew"
      >
        <h2 className="w-fit mx-auto my-10 text-white text-[30px] font-bold bg-black rounded-2xl uppercase">
          Crew members
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {pirates.map((pirate) => (
            <img
              src={`${import.meta.env.BASE_URL}imgs/${pirate}.jpg`}
              className="w-75 h-100 rounded-2xl hover:scale-108 duration-300"
              alt=""
            />
          ))}
        </div>
      </section>
      <footer className="flex justify-center items-center gap-2 bg-[#6f6f6f26] m-5 rounded-2xl">
        <p className="text-white text-[18px] font-bold capitalize">
          made with &#10084; by Luffy
        </p>
        <img
          src={`${import.meta.env.BASE_URL}imgs/footer.png`}
          className="w-25 -mb-2"
          alt="footer photo"
        />
      </footer>
    </>
  );
}

export default App;
