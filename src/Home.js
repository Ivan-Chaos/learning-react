import { useState } from "react";

const Home = () => {
    
    const handleClick=()=>{
        setName("Jebediah");
        setAge(age+1);
    }
   
    const [name, setName]=useState("Juan");
    const [age, setAge]=useState(14);

    return ( 
        <div className="home">
            <h1>Home page</h1>
            <p>{name} is {age} years yold</p>
            <button onClick={ () => { handleClick(); }}>Backstab me</button>
        </div>
     );
}
 
export default Home;