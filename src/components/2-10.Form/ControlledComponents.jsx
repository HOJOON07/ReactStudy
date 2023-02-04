import React, { useState } from "react";

export default function ControlledComponents() {
  const [value, setValue] = useState("");
  const [essay, setEssay] = useState(
    "Please write an essay about your favorite DOM element."
  );
  const [name, setName] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleEssayChange(e) {
    setEssay(e.target.value);
  }

  function handleSubmit(e) {
    alert(`name:${name}, essay:${essay}`);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <br />
      <br />
      <br />
      <label>
        Essay:
        <textarea value={essay} onChange={handleEssayChange} />
      </label>
      <input type="submit" value="Submit" />
      <br />
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
    </form>
  );
}
