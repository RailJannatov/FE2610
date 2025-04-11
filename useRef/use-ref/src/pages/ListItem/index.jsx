import { useParams } from "react-router-dom";

export const ListItem = () => {
  const { id } = useParams();
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};
