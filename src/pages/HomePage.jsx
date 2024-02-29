import { useState } from "react";

import { CardKelasComponent } from "../components/CardKelasComponent";
import CategoryComponent from "../components/CategoryComponent"
import { TitleComponent } from "../components/TitleComponent";

// data
import { data } from "../data/data.js"

const HomePage = () => {

  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

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

    <section className="kelas-component max-w-6xl mx-auto ">
      <TitleComponent text="New Kelas"/>
      <CardKelasComponent />
    </section>

    <section className="faq max-w-6xl mx-auto mt-16 mb-36">
      <h2 className="text-5xl font-bold text-center leading-loose">Frequently Asked Questions</h2>
      <div className="flex flex-row gap-x-16 flex-wrap justify-center">
        <div className="img"><img src="./images/ilustration-faq.svg" alt="Faq" /></div>
        <div className="list-faq w-[600px] mt-10">
          {data.map((item,i) => (
            <div className="item bg-zinc mb-5 px-4 py-5 rounded-xl " key={item.id}> 
              <div className="title flex flex-row justify-between" onClick={() => toggle(i)} role="button">
                <p className=" text-dark font-semibold text-base">{item.question}</p>
                <span className="text-xl font-bold text-dark">{selected === i ?  '-' : '+' }</span>
              </div>
              <div className={selected === i ?  'content show h-auto max-h-full transition-all  duration-200 ease-in-out mt-4' : 'content hidden h-0 transition-all  duration-200 ease-in-out' }>
                <span className=" text-gray font-medium text-base">{item.answer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}


export default HomePage