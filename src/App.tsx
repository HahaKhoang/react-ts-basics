import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
      };

      return [...prevGoals, newGoal];
    });
  }

  function deleteGoalHandler(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id != id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  );
}
