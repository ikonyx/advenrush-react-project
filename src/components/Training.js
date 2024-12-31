import "./TrainingStyles.css"
import TrainingData from "./TrainingData"
import training1 from "../assets/fitness.jpg"
import training2 from "../assets/nutrition.jpg"
import training3 from "../assets/survival.jpg"

function Training(){
    return(
        <div className="training">
            <h1>Our Trainings</h1>

            <div className="trainingCard">
            <TrainingData
             image={training1}
             heading= "EnduroFit"
             text="EnduroFit Training is a high-intensity program focused on boosting your endurance. 
             It combines cardio, strength exercises, and functional movements to improve stamina and overall 
             fitness. Whether you're training for a race or just seeking a challenge, EnduroFit helps you push 
             your limits and achieve peak performance. Get ready to go the distance!"
            />

            <TrainingData
             image={training2}
             heading= "WildCourse Nutrition"
             text="WildCourse Nutrition is a training program designed for adventure racers, focusing on optimal 
             fueling for endurance, hydration, and recovery. It equips athletes with the right nutrition to tackle 
             any race or outdoor challenge, ensuring peak performance in the wild."
            />

            <TrainingData
             image={training3}
             heading= "Race Survival 101"
             text="Race Survival 101 is a practical course that teaches essential survival skills for adventure racers. 
             Learn first aid, shelter-building, and survival tactics to stay safe and handle emergencies in remote, 
             extreme conditions. Be prepared for whatever challenges come your way."
            />
            </div>
        </div>
    );
}

export default Training;