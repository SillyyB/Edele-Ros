import React, { useEffect, useState } from "react";

const CreateNewClass = (props) => {
  // localStorage
  const [initialValues, setInitialValues] = useState({
    training: "",
    instructor: "",
    time: "",
    date: "",
    day: "",
  });
  const [openCreateClass, setOpenCreateClass] = useState(false);
  const [formValues, setFormValues] = useState([]);

  // handle dropdown on Calendar (beschikbare lessen > jou lessen)
  const handleOpenCreateClass = () => {
    setOpenCreateClass(!openCreateClass);
  };
  const submitForm = () => {
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <div>
      {/* localstorage */}
      <div className="px-28 font-sourceSansPro font-light">
        <div className="inline-flex flex-col">
          <label htmlFor="">Datum & tijd</label>
          <input
            value={initialValues.date}
            className="py-1 mb-2 bg-inherit border-b-2 border-gray-300"
            placeholder="datum"
            onChange={(e) => {
              setInitialValues({
                ...initialValues,
                date: e.target.value,
              });
            }}
          />
          <input
            value={initialValues.time}
            placeholder="Tijd"
            onChange={(e) => {
              setInitialValues({
                ...initialValues,
                time: e.target.value,
              });
            }}
          />
        </div>
        <div>
            <label htmlFor="">Instructeur</label>
            <input
            value={initialValues.instructor}
            onChange={(e) => {
              setInitialValues({
                ...initialValues,
                instructor: e.target.value,
              });
            }}
          />
        </div>
        <button onClick={submitForm}>add</button>
        <p>{initialValues.instructor}</p>
        <p>{initialValues.date}</p>
      </div>
    </div>
  );
};

export default CreateNewClass;
