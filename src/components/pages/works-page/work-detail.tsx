import { useParams } from "react-router-dom";
export interface Work {
  id: number;
  name: string;
  description: string;
}
interface WorkDetailProps {
  works: Work[];
}

const WorkDetail: React.FC<WorkDetailProps> = ({ works }) => {
  const { workId } = useParams<{ workId: string }>();

  if (!workId) {
    return <div>Work not found</div>;
  }

  const work = works.find(p => p.id === parseInt(workId));

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div>
      <h2>{work.name}</h2>
      <p>{work.description}</p>
    </div>
  );
};

export default WorkDetail;
