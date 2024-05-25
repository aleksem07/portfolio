import { useParams } from "react-router-dom";
import NotFound from "../404";
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
    return <NotFound />;
  }

  const work = works.find(p => p.id === parseInt(workId));

  if (!work) {
    return <NotFound />;
  }

  return (
    <div>
      <h2>{work.name}</h2>
      <p>{work.description}</p>
    </div>
  );
};

export default WorkDetail;
