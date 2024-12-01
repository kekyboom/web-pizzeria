function Header () {
  return (
    <>
      <div className="relative text-center w-screen h-64 overflow-hidden ">
        <img src="./public/img/Header.jpg" className="brightness-50" alt="img"/>
        <div className="flex flex-col items-center w-full absolute top-0 left-0 text-center mt-10">
          <h2 className="text-4xl font-bold text-white text-center">
            ¡Pizzería Mamma Mia!
          </h2>
          <p className="mt-3  text-white font-medium">
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </p>
          <hr className="border-t-1 border-white w-4/5 my-4 opacity-50" />
        </div>
      </div>
      <div className="text-center mb-10">

      </div>
    </>
  )
}

export default Header
