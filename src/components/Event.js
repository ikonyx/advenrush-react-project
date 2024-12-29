import EventData from "./EventData"
import "./EventStyles.css"
import Alpine from "../assets/switzerland.jpg"
import Alpine2 from "../assets/switzerland2.jpg"
import Aurora from "../assets/norway.jpg"
import Aurora2 from "../assets/norway2.jpg"

const event = () => {
    return(
        <div className="event">
            <h1>Upcoming Events</h1>

            <EventData
              className="first-event"
              heading="Alpine Adventure Challenge" 
              text="The Alpine Adventure Challenge is an exciting 
                    race set in stunning alpine terrain, combining trail running, 
                    mountain biking, kayaking, and navigational challenges. Participants
                     will test their endurance, teamwork, and problem-solving skills as they 
                     navigate steep paths, dense forests, and fast-flowing rivers. 
                     With unpredictable weather and rugged obstacles, this event is designed 
                     for both experienced racers and newcomers. Whether aiming for a top spot 
                     or seeking an unforgettable adventure, the Alpine Adventure Challenge offers 
                     a thrilling outdoor experience that connects racers with nature’s raw beauty!"
                     img1={Alpine}
                     img2={Alpine2}
            />

            <EventData
              className="first-event-reverse"
              heading="Arctic Aurora Quest" 
              text="The Arctic Aurora Quest takes place in Tromsø, Norway, offering a unique race set against 
              the mesmerizing backdrop of the Arctic landscape. Participants will embark on a thrilling adventure
               that includes winter trekking, cross-country skiing, and ice-cold water challenges, all while navigating 
               through snow-covered terrain. The quest is designed to test physical endurance, navigation skills, 
               and mental toughness, with the added bonus of the chance to witness the stunning Northern Lights. Open to both 
               seasoned adventurers and beginners, the Arctic Aurora Quest provides an unforgettable experience in one of the 
               most beautiful and extreme environments on Earth."
               img1={Aurora}
               img2={Aurora2}
            />
        </div>
    )
}

export default event