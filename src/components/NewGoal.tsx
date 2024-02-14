import { type FormEvent } from "react";

export default function NewGoal() {
  function submitHandler(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
