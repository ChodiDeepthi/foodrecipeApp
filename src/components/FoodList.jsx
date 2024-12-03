
import EachItem from "./EachItem"

export default function FoodList({searchresult,setresult,itemid,setitemid}){


    return (
        <div>
        {searchresult.map((item) => (
            <div key={item.id}>
                <EachItem item={item} itemid={itemid} setitemid={setitemid}/>
            </div>
        ))}
    </div>
    );
}