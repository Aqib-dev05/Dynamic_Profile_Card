import "../stylings/Add.css";

export default function Add({
  submitHandler,
  inputHandler,
  open,
  close,
  show,
  imageHandler,
}) {
  return (
    <>
      <div className="plus" onClick={open}>
        <i className="ri-add-line"></i>
      </div>
      {show && (
        <div className="modelBack">
          <form onSubmit={submitHandler}>
            <button id="cross" onClick={close}>
              <i class="ri-close-line"></i>
            </button>
            <div className="wrapper">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="Fname"
                id="name"
                placeholder="Enter your name"
                onChange={inputHandler}
              />
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter your age"
                onChange={inputHandler}
              />
              <label htmlFor="skill">Skills:</label>
              <input
                type="text"
                name="Skills"
                id="skill"
                placeholder="Skills"
                onChange={inputHandler}
              />
              <label htmlFor="">Enter your picture here: </label>
              <input
                type="file"
               
                id="image"
                accept="image/*"
                onChange={imageHandler}
              />
              <button id="add">Add Card</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
