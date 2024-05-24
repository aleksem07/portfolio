interface Works {
  id: number;
  name: string;
  description: string;
}

interface WorksListProps {
  works: Works[];
}

const WorksPage: React.FC<WorksListProps> = ({ works }) => {
  return (
    <div>
      <h2>My works</h2>
      <p>Showcase About Works</p>
      <p>{works[0].name}</p>
    </div>
  );
};

export default WorksPage;
