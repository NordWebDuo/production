import axios from 'axios'; // Asigură-te că ai instalat axios în proiectul tău

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body; // Obține datele trimise din corpul cererii POST

    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN; // Token-ul de autorizare - asigură-te că obții un token valid de autorizare

      // Trimite datele către backend - adaugă header-ul de autorizare în cerere
      const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/messages`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('response', token);

      // Verifică răspunsul de la server
      if (response.status === 200) {
        console.log('Form submitted successfully!', response.data);
        res.status(200).json({ message: 'Form submitted successfully!' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Failed to submit form' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}