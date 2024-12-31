function Header () {
  return (
    <>
      <div className="relative text-center w-full h-96 overflow-hidden mb-10 ">
        <img src="./public/img/Header.jpg" className="w-full h-full object-cover brightness-[0.30]" alt="img"/>
        <div className="flex flex-col items-center w-full absolute top-0 left-0 text-center mt-20">
          <h2 className="text-4xl font-bold text-white text-center">
            ¡Pizzería Mamma Mia!
          </h2>
          <p className="mt-3 text-white font-medium">
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </p>
          <hr className="border-t-1 border-white w-4/5 my-4 opacity-50" />
        </div>
      </div>
     
    </>
  )
}

export default Header
