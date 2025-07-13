export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, companyName, phone, inquiryType } = req.body;

  // You can forward this data to an email service or CRM here

  console.log('Received contact form submission:', {
    name,
    email,
    message,
    companyName,
    phone,
    inquiryType
  });

  res.status(200).json({ message: 'Success' });
}