
import "./app.css"
import Header from "./components/Header"
import SearchBar  from "./components/SearchBar"


import FoodList from "./components/FoodList"
import ItemDetailes from "./components/ItemDetailes"
import styles from "./App.module.css"
import { useState } from "react"
function App() {

  const [searchresult,setresult]=useState([])
  const [itemid,setitemid]=useState(658615);
   return(
    <div >
        <Header/>
        <SearchBar searchresult={searchresult} setresult={setresult}/>
        
        <div className={styles.container}>
          <div className={styles.innercontainer1}>
                <FoodList searchresult={searchresult} setresult={setresult} itemid={itemid} setitemid={setitemid}/>
        </div>
        <div className={styles.innercontainer2}>
                        <ItemDetailes itemid={itemid} setitemid={setitemid} />
          </div>
      </div>   

    </div>
   );
}

export default App
