export default {
  name: "skills",
  type: "document",
  title: "Skills",
  fields: [
    {
      name: "skills",
      type: "string",
      title: "Skills",
    },
    {
      name: "imageUrl",
      type: "image",
      title: "ImgURL",
      options: {
        hotspot: true,
      },
    },
  ],
};
