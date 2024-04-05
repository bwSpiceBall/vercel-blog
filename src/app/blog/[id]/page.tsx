import "../../globals.css";

export default function ({ params }: { params: { id: string } }) {
  const id = params.id;
  return <h1>{`Blog${id}`}</h1>;
}
