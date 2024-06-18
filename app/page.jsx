import Body from "./body"
import Header from "./header"

 
export default async function Home(){

  return(
    <div >
      <div className="w-1/2 rounded-lg space-y-8 bg-white mt-4 p-2 mx-auto shadow-lg">
        <Header/>
        <hr/>
        <Body/>
     
      </div>
    </div>
  )
}