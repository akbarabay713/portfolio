export default {
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile Img",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "bannerImg",
      title: "Banner Img",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "addres",
      title: "Addres",
      type: "string",
    },
    {
      name: "social",
      title: "Social",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
};
