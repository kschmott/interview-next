"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import StarWarsPerson from "./StarWarsPerson";
import { getStarWarsPeople } from "./helpers";
/*
TASK 1:
Fetch a list of the first 10 people in the Star Wars API and display their names in a list. docs: https://swapi.dev/documentation#people
TASK 2:
Add a + button next to each name that when clicked will fetch and display the person's homeworld. docs: https://swapi.dev/documentation#people
TASK 3:
Use react query to create a infinite paginated list of people from the Star Wars API. https://tanstack.com/query/latest/docs/framework/react/overview
*/
export default function Home() {
  const starWarsPeople = useInfiniteQuery({
    queryKey: ["star-wars-people"],
    queryFn: (page) => getStarWarsPeople(page.pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });
  console.log(starWarsPeople.data?.pages);
  return (
    <div>
      {starWarsPeople.data?.pages?.map((page, i) => {
        return page?.map((person: any) => {
          return (
            <StarWarsPerson
              key={person.name}
              name={person.name}
              homeworldUrl={person.homeworld}
            />
          );
        });
      })}
      <button onClick={() => starWarsPeople.fetchNextPage()}>Show More</button>
    </div>
  );
}
