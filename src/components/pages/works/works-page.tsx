import Works from "@/components/works/works";

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
      <Works />
      <h2>My works</h2>
      <p>Showcase About Works 1112</p>
      <p>{works[0].name}</p>
    </div>
  );
};

export default WorksPage;
