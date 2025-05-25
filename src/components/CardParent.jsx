import Card from "./Card.jsx";
import "../stylings/parent.css";
import Add from "./AddCard.jsx";
import { useState, useEffect } from "react";

export default function CardParent() {
  const [show, setShow] = useState(false);
  const [dataToShow, setDataToShow] = useState([]);
  const [formData, setformData] = useState({
    Fname: "John Doe",
    age: "24",
    Skills: "Programmer",
    image: "",
  });

  function openForm() {
    setShow(true);
  }
  function closeForm() {
    setShow(false);
  }
  // Load data from localStorage when component mounts
  useState(() => {
    const savedData = localStorage.getItem("cardData");
    if (savedData) {
      setDataToShow(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage whenever dataToShow changes
  useEffect(() => {
    localStorage.setItem("cardData", JSON.stringify(dataToShow));
  }, [dataToShow]);
  function setform(e) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function setFormImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setformData({ ...formData, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  function handleForm(e) {
    e.preventDefault();
    const defaultImage =
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3";

    setformData({
      Fname: "John Doe",
      age: "24",
      Skills: "Programmer",
      image: formData.image || defaultImage,
    });

    const isDuplicate = dataToShow.some(
      (item) =>
        item.Fname === formData.Fname &&
        item.age === formData.age &&
        item.Skills === formData.Skills
    );

    if (!isDuplicate) {
      setShow(false);
      setDataToShow((prevData) => [...prevData, formData]);
    }
  }

  return (
    <div className="container">
      <Add
        submitHandler={handleForm}
        inputHandler={setform}
        imageHandler={setFormImage}
        open={openForm}
        close={closeForm}
        show={show}
      />

      {dataToShow.map((currData, idx) => {
        return <Card key={idx} data={currData} />;
      })}
    </div>
  );
}
