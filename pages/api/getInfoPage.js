import { client } from "../../sanity";
import { groq } from "next-sanity";

const query = groq`
*[_type == "pageInfo"][0]
`;
export default async function handler(req, res) {
  const pageInfo = await client.fetch(query);
  res.status(200).json({ pageInfo });
}
