import { client } from "../../sanity";
import { groq } from "next-sanity";

const query = groq`
*[_type == "projects"]{
  ...,
  tech[]->
}
`;
export default async function handler(req, res) {
  const projects = await client.fetch(query);
  res.status(200).json({ projects });
}
