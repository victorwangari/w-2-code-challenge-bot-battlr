import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Favourites from "../components/Favourites";


function Description(){
    const [description, setDescription] = useState([])
    const params = useParams();
    const id = params.id
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://bots-battlr-db.onrender.com/bots/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setDescription(data)
        })
    
    },[])
    console.log(description);
    function back(){
        navigate("/w-2-code-challenge-bot-battlr")
    }
    function favourites(){
        fetch ("https://army-bots-battlr-db.onrender.com/bots",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id: description.id,
                name: description.name,
                health: description.health,
                damage: description.damage,
                armor: description.armor,
                bot_class: description.bot_class,
                catchphrase: description.catchphrase,
                avatar_url: description.avatar_url,
                created_at: description.created_at,
                updated_at: description.updated_at
                })
        })
    }
    return(
        <div>
            <Favourites/>
        
            <div className="">
               <div className="row   mt-5 ">
                   <img className="img col-lg-6 col-sm-12 border rounded-3" src={description.avatar_url} alt="" />
                    <div className="card col-lg-6 col-sm-6 des-card" >
                     <div className="card-body ">
                        <h5 className="card-title">{description.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{description.bot_class}</h6>
                        <div className="status">
                             <p className="card-text"><span className="text-success health ">Health</span> {description.health}</p>
                             <p className="card-text"><span className="text-danger damage">Damage</span> {description.damage}</p>
                             <p className="card-text"><span className="text-success armor">Armor</span> {description.armor}</p>
                        </div>
                         <p className="card-text">{description.catchphrase}</p>
                         <div>
                             <button onClick={favourites} type="button" class="btn btn-success ms-2">Enlist</button>
                             <button onClick={back} type="button" class="btn view btn-warning ms-2">Back</button>
                             <button type="button" class="btn delete btn-danger ms-2">Delete</button> 
                         </div>
                      <div>
                      </div>

                     </div>
                </div>

               </div>
            </div>

        </div>
        )
}
export default Description;