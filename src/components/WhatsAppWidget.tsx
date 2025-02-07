'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    CreateWhatsappChatWidget: (options: any) => void;
  }
}

export const WhatsAppWidget = () => {
  useEffect(() => {
    // Create and append the script
    const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?87474';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;

    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: '#25D366',
        ctaText: 'Chat on WhatsApp',
        borderRadius: '25',
        marginLeft: '0',
        marginRight: '20',
        marginBottom: '20',
        ctaIconWATI: false,
        position: 'right'
      },
      brandSetting: {
        brandName: 'Airnet360',
        brandSubTitle: 'We are here to help!',
        brandImg: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
        welcomeText: 'Hi there! How can I help you?',
        messageText: 'Hello, I have a question about {{page_link}}',
        backgroundColor: '#25D366',
        ctaText: 'Chat on WhatsApp',
        borderRadius: '25',
        autoShow: false,
        phoneNumber: '9109153300'
      }
    };

    script.onload = () => {
      window.CreateWhatsappChatWidget(options);
    };

    // Add the script to the document
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Cleanup
    return () => {
      // Remove the script when component unmounts
      const existingScript = document.querySelector(`script[src="${url}"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything visible
};

export default WhatsAppWidget;
