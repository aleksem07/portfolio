interface Works {
  id: number;
  name: string;
  description: string;
}

interface WorksListProps {
  works: Works[];
}

const WorksPage: React.FC<WorksListProps> = ({ works }) => {
  {
    console.log(works);
  }
  return (
    <div>
      <h2>My works</h2>
      <p>Showcase About Works</p>
    </div>
  );
};

export default WorksPage;
