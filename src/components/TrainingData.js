import "./TrainingStyles.css";

function trainingData(props){
    return(
        <div className="training-card">
            <div className="t-image">
                <img src={props.image} alt="image"/> 
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default trainingData;