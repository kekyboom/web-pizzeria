import CardPizza from "./components/CardPizza"
import Header from "./components/Header"
import { formatCurr } from "../utils/formatCurr"
function Home() {
  return (
    <div>
        <Header/>
        <div className="h-screen flex justify-center ">
          <div className="flex flex-row gap-10">
              <CardPizza 
              imageSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzTRtOTe2ERznTJiQ5gfk4Lyq9gzadhceC-que3uLWiwuH3Zg1"
              title="Pizza Napolitana"
              description="mozzarella, tomates, jamón, orégano"
              price= {formatCurr(5950)}
              />
              <CardPizza
              imageSrc="https://tb-static.uber.com/prod/image-proc/processed_images/d73f0f762aef70d48cfd1cf147f87228/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
              title="Pizza Española"
              description="mozzarella, chorizo, pimiento, cebolla"
              price= {formatCurr(6950)}
              />
              <CardPizza
              imageSrc="https://todoenvases.cl/wp-content/uploads/2021/08/pizza-1239077_1920-300x200.jpg"
              title="Pizza Pepperoni"
              description="mozzarella, pepperoni, oregano"
              price= {formatCurr(6950)}
              />
          </div>
        </div>
    </div>
  )
}

export default Home
