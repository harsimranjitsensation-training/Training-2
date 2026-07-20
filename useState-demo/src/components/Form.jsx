import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <h1>{name}</h1>
            <br /><br />

            <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)} />
            <h1>{age}</h1>

            <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
            />
            <button onClick={() => setShowPassword(!showPassword)}>Show/Hide</button>
        </>
    )
}

export default Form;