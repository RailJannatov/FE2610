import { useParams } from "next/navigation";

export default function Home() {
  const id = useParams();
  return (
    <div>
      this is Dynamic page <span className="mr-4 bg-red-700">{id?.id}</span>
    </div>
  );
}
