import { IProject } from "@/common/projects";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const ProjectStack = ({ currentProject }: { currentProject: IProject }) => {
  return (
    currentProject.stack &&
    currentProject.stack.map(stack => {
      return (
        <div key={uuidv4()} className="flex items-center gap-2">
          <Image
            className="rounded-full bg-white"
            src={`/stack/${stack}.svg`}
            alt={`Бэйдж: ${stack}`}
            width={20}
            height={20}
            onError={e => {
              (e.target as HTMLImageElement).src = "/stack/vscode.svg";
            }}
            title={`${stack}`}
          />
          <span className="text-sm text-gray-500">{stack}</span>
        </div>
      );
    })
  );
};

export default ProjectStack;
