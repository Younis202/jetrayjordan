export function sendToWhatsApp(formData: any, formType: string = 'Contact') {
  const phone = "+15155065027"; // Jetray Jordan WhatsApp number
  let message = "";

  // Format message based on form type
  switch (formType) {
    case 'Flight Booking':
      message = `*New Flight Booking Inquiry*\n\n` +
        `✈️ Destination: ${formData.destination || 'Not specified'}\n` +
        `👤 Name: ${formData.name}\n` +
        `📱 Phone: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `📅 Travel Date: ${formData.travelDate || 'Flexible'}\n` +
        `👥 Passengers: ${formData.passengers || '1'}\n` +
        `💬 Message: ${formData.message || 'No message provided'}`;
      break;

    case 'Travel Inquiry':
      message = `*Travel Inquiry*\n\n` +
        `🌍 Destination: ${formData.destination}\n` +
        `👤 Name: ${formData.name}\n` +
        `📱 Phone: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `✈️ Trip Type: ${formData.tripType || 'Not specified'}\n` +
        `💬 Message: ${formData.message || 'No message provided'}`;
      break;

    default:
      message = `*New Travel Inquiry*\n\n` +
        `👤 Name: ${formData.name}\n` +
        `📱 Phone: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `💬 Message: ${formData.message || 'No message provided'}`;
  }

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Open WhatsApp in a new window
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}