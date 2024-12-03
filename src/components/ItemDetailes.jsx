import { useEffect, useState } from "react";
import styles from "./ItemDetailes.module.css"
export default function ItemDetailes({itemid,setitemid}){

    
    const apiKey="d6a89bdf0d614d17921328c1310096ad"
    const [datas,setdatas]=useState([])
    const [isloading,setload]=useState(true)
    useEffect(()=>{
            async function fetchFood(){
                const url=await `https://api.spoonacular.com/recipes/${itemid}/information`
                const res =await fetch(`${url}?apiKey=${apiKey}`)
                const data=await res.json()
                setdatas(data)
                setload(false)
                console.log(data)
            }fetchFood()
    },[itemid])
    return (
        <div >
            <div className={styles.recipecard}>

                <h1 className={styles.recipename}>{datas.title}</h1>
                <img className={styles.recipeimage} src={datas.image} ></img>

                <div className={styles.recipedetailes} src={datas.image}>
                    <span>
                        <strong>⏱{datas.readyInMinutes}Minutes</strong> 
                    </span>
                    <span>
                        <strong>Serves:{datas.servings}</strong> 
                    </span>
                    <span>
                        <strong>{datas.vegetarian?"vegetarian🥦":"Non-vegetarian🍖"}</strong> 
                    </span>
                    <span>
                        <strong>{datas.vegan?"Vegan🐮":""}</strong> 
                    </span>
           

           
                </div>
                <div>
                    <span>
                        <strong>${datas.pricePerServing/100}</strong> 
                    </span>
                </div>
                <h2>Instructions</h2>
                <div className={styles.recipeinstructions}>
                
                    
                    
                    {isloading?<p>loading....</p>:(
                            <ol>
                                {datas.analyzedInstructions[0].steps.map((point)=><li>{point.step}</li>)}
                            </ol>)}
                </div>
                <h2>Ingredients</h2>
                {isloading?<p>loading....</p>:(
                    datas.extendedIngredients.map((item)=><div>
                        <h3>{item.name}</h3>
                        <p>amount:{item.amount}{item.unit}</p>
                       
                    </div>)

                )}
             </div>
        </div>

    );
}