import Card from "./components/card/Card"
import Forma from "./components/forma/Forma"

const App = () => {
  return (
    <div className="max-w-[1400px] border-4 border-green-700 rounded-xl my-10 m-auto p-5">
      <Forma/>
      <Card/>
    </div>
  )
}

export default App
