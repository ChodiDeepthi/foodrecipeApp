import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css"
export default function SearchBar({searchresult,setresult}){

    const [item,setitem]=useState("pizza")
    const url="https://api.spoonacular.com/recipes/complexSearch"
    const apiKey="d6a89bdf0d614d17921328c1310096ad"
    useEffect(
        ()=>{
            async function fetchFood(){
                const result=await fetch(`${url}?query=${item}&apiKey=${apiKey}`);
                const  data=await result.json();
                setresult(data.results);
                console.log(searchresult);

            }
            fetchFood()
        },
        [item]
)
    return (
        <div className={styles.container }>

            <form>
                <input type="text" className={styles.inputfield} value={item} onChange={(e)=>setitem(e.target.value)}></input>
            </form>
        </div>

    );
}