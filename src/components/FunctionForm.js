import { useState } from "react";

function FunctionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");
  const [students, setStudents] = useState([
    { name: "Ananse", email: "ananse@kweku.com", gen: 1 },
  ]);

  const HandleClick = (e) => {
    e.preventDefault();
    setStudents(
      [...students, { name, email, gen }],
      setName(""),
      setEmail(""),
      setGen("")
    );
  };
  return (
    <div className="create">
      <h3>Student Fellow Registration</h3>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Gen:</label>
        <input
          type="text"
          name="gen"
          value={gen}
          onChange={(e) => {
            setGen(e.target.value);
          }}
        />
        <br />
        <button onClick={HandleClick}>submit</button>
      </form>
      {students.map((user, index) => {
        return (
          <div className="display">
            <p>name:{user.name}</p>
            <p>email:{user.email}</p>
            <p>Gen:{user.gen}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FunctionForm;
