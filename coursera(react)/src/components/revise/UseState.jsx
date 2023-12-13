import { useState } from "react"; 
 

function UseState() { 
    const [formData, setFormData] = useState({ goal:"",by:""}); 
    const [goals,setGoals] = useState([])

    
    function changeHandler(e){
     setFormData({...formData, [e.target.name]: e.target.value})
    }
    function submitHandler(e){
    e.preventDefault()
    function addGoal(goal) {
        setGoals(prevGoals => [...prevGoals, goal]);
      }
    addGoal(formData);
    setFormData({goal:"",by:""})
   }


  return ( 
    <div> 
      <form onSubmit={submitHandler}>
        <input type="text" value={formData.goal} name="goal" placeholder="Goal..." onChange={changeHandler}/>
        <input type="text" value={formData.by} name="by" placeholder="...By" onChange={changeHandler}/>
      <button type="submit">Set Goal</button> 
      </form>
      <ul>
      {goals.map((goal)=>{
        return (
            <li key={goal.goal}>
                <span>My goal is to {goal.goal} by {goal.by}</span>
            </li>
        )
      })}
      </ul>
    </div> 
  ); 
} 
export default UseState