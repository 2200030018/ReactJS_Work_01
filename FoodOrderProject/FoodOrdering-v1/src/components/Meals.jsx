import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals(){
    const [loading, setLoading]=useState([]);
    useEffect(()=>{

        async function fetchMeal(){
            const response=await fetch('http://localhost:3000/meals');
            if(!response){
                //..
            }
            const meals=await response.json();
            setLoading(meals);
        }
        fetchMeal();

    },[])
    
    return (
        <ul id="meals">
            {loading.map((meal)=>(
            <MealItem key={meal.id} meal={meal}/>
        ))}</ul>
    );
}