export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "project",
      title: "Project",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "linkGithub",
      title: "Link Github",
      type: "url",
    },
    {
      name: "linkProject",
      title: "Link Project",
      type: "url",
    },
    {
      name: "tech",
      title: "Tech",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },
  ],
};
