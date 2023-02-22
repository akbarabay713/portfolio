import { client } from "../../sanity";
import { groq } from "next-sanity";

const query = groq`
*[_type == "skills"]
`;
export default async function handler(req, res) {
  const skills = await client.fetch(query);
  res.status(200).json({ skills });
}
