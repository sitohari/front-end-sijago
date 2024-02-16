import CategoryComponent from "../components/CategoryComponent"
import { TitleComponent } from "../components/TitleComponent";

const HomePage = () => {
  return (
    

    
    <div className="trend-category max-w-6xl mx-auto mb-16 flex flex-col">
      <TitleComponent />
      <div className="grid grid-cols-4  gap-10">
        <CategoryComponent 
              imageUrl="./images/icon-figma.svg"
              title="Figma"
        />
      </div>  
    </div>
  )
}

export default HomePage