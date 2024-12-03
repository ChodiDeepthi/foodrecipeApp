import styles from "./EachItem.module.css"

export default function EachItem({item,itemid,setitemid}){

    return (
        <div className={styles.container}>
            <div className={styles.imagecontainer}>
            <img src={item.image}  className={styles.modrenimage} alt="img"/>
            </div>
            <div className={styles.modrencontent}>
                <p className={styles.itemname}>{item.title}</p>
            </div>
            <div className={styles.buttoncontainer}>
            <button className={styles.button} onClick={()=>{setitemid(item.id)}}>view Recipe</button>
            </div>
            
        </div>
    );
}