import { CardKelasComponent } from "../components/CardKelasComponent";
import CategoryComponent from "../components/CategoryComponent"
import { TitleComponent } from "../components/TitleComponent";

const HomePage = () => {
  return (
    <>
    <section className="hero max-w-6xl mx-auto mt-10 mb-14">
      <div className="flex flex-row flex-wrap justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold text-6xl text-dark leading-loose">Your Dream  Career<br/>Start With Us</h1>
          <p className="text-base text-gray">SiJago menyediakan kelas Web Development dan UI/UX Design</p>
          <a a="#kelas" className="bg-main text-white w-52 rounded-md text-center py-2 mt-10 cursor-pointer" >Get Started</a>
        </div>
        <div className="thumbnail-ilustrasi">
          <img src="./images/ilustrasi1.svg" alt="ilustrasi" />
        </div>
      </div>
    </section>

    <section className="trend-category max-w-6xl mx-auto mb-16 flex flex-col">
      <TitleComponent text="Trand Categories"/>
      <div className="grid grid-cols-4  gap-10">
        <CategoryComponent 
              imageUrl="./images/icon-figma.svg"
              title="Figma"
        />
        <CategoryComponent 
              imageUrl="./images/icon-figma.svg"
              title="Figma"
        />
        <CategoryComponent 
              imageUrl="./images/icon-figma.svg"
              title="Figma"
        />
        <CategoryComponent 
              imageUrl="./images/icon-figma.svg"
              title="Figma"
        />
      </div>  
    </section>

    <section className="kelas-component max-w-6xl mx-auto">
      <TitleComponent text="New Kelas"/>
      <CardKelasComponent />
    </section>
    </>
  )
}

export default HomePage