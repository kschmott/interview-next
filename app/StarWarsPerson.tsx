import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function StarWarsPerson({
  name,
  homeworldUrl,
}: {
  name: string;
  homeworldUrl: string;
}) {
  const [showHomeworld, setShowHomeworld] = useState(false);
  const homeworldQuery = useQuery({
    queryKey: ["homeworld", name, homeworldUrl],
    queryFn: () => fetch(homeworldUrl).then((res) => res.json()),
    enabled: showHomeworld,
  });
  return (
    <div>
      <h3>Name: {name}</h3>
      {homeworldQuery.data ? (
        <h4>Homeworld: {homeworldQuery.data.name}</h4>
      ) : (
        <button onClick={() => setShowHomeworld(true)}>+</button>
      )}
    </div>
  );
}

export default StarWarsPerson;
