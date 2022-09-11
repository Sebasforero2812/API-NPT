import { Task } from "../interfaces/Task";

interface Props {
  tasks: Task[];
}

export default function index({ tasks }: Props) {
  return <>{tasks.length === 0 ? <h1>No tasks</h1> : <h1>Tasks</h1>}</>;
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  return {
    props: {
      tasks: tasks,
    },
  };
};
