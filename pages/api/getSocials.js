import { client } from "../../sanity";
import { groq } from "next-sanity";

const query = groq`
*[_type == "social"]
`;
export default async function handler(req, res) {
  const socials = await client.fetch(query);
  res.status(200).json({ socials });
}
