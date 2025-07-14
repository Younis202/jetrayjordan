import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

// These should match your EmailJS configuration
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  destination?: string;
  travelDate?: string;
  passengers?: string;
}

export async function sendEmail(data: EmailData, formType: string = 'Travel Inquiry') {
  try {
    // Format the template parameters to match exactly with the template variables
    const templateParams = {
      to_name: "Admin", // Add recipient name
      from_name: data.name,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message || '',
      destination: data.destination || '',
      travelDate: data.travelDate || '',
      passengers: data.passengers || '',
      form_type: formType,
      submit_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: "Email sent successfully" };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Failed to send email" };
  }
}