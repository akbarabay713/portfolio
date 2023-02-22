import emailjs from "@emailjs/browser";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { form } = req.body;

    try {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      );
    } catch (errors) {
      console.log(errors);
      res.status(500).json({ message: "messages is failed" });
      return;
    }
  }

  res.status(200).json({ message: "messages is succesfully sent" });
}
