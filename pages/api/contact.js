import Mail from "../../Mail";

export default (req, res) => {
  if (req.method == 'POST') {
    const { firstName, lastName, email, subject, message } = req.body.body;
    Mail(firstName, lastName, email, subject, message);
    return res.status(200).json({ message: 'success' });
  }
  res.status(400).json({ message: 'method is not allowed' })
}
