import "../stylings/child.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="pic-div-contain">
          <div className="pic">
            <img src={props.data.image} />
          </div>
        </div>
        <div className="content">
          <h2>{props.data.Fname}</h2>
          <p id="age">Age: {props.data.age}</p>
          <p className="sur">{props.data.Skills}</p>
          <div className="btn-container">
            <button>About Me</button>
            <button>Get Survices</button>
          </div>
        </div>
      </div>
    </>
  );
}
