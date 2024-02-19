function CategoryComponent(props) {
   return(
    <div className="card max-w-full bg-secondary rounded-lg hover:border-2 hover:border-gray">
        <div className="card-body py-6 px-5">
            <a href="#" className="flex flex-row gap-x-6 ">
                <img src={props.imageUrl} alt="category" />
                <strong className="font-medium text-xl flex items-center">{props.title}</strong>
            </a>
        </div>
    </div>
   )
}

export default CategoryComponent