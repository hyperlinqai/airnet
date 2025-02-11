interface LeadData {
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  emailId?: string;
  address_city?: string;
  address_state?: string;
  address_pin?: string;
  comments?: string;
  userType?: 'home' | 'business';
  leadSource?: string;
  notifySms?: 'yes' | 'no';
  notifyWhatsapp?: 'yes' | 'no';
}

export const addLead = async (data: LeadData) => {
  const formData = new FormData();

  // Add required fields
  formData.append('firstName', data.firstName);
  
  // Add optional fields if they exist
  if (data.lastName) formData.append('lastName', data.lastName);
  if (data.phoneNumber) formData.append('phoneNumber', data.phoneNumber);
  if (data.emailId) formData.append('emailId', data.emailId);
  if (data.address_city) formData.append('address_city', data.address_city);
  if (data.address_state) formData.append('address_state', data.address_state);
  if (data.address_pin) formData.append('address_pin', data.address_pin);
  if (data.comments) formData.append('comments', data.comments);
  if (data.userType) formData.append('userType', data.userType);
  
  // Set default values
  formData.append('leadSource', data.leadSource || 'website');
  formData.append('notifySms', data.notifySms || 'yes');
  formData.append('notifyWhatsapp', data.notifyWhatsapp || 'yes');

  try {
    const response = await fetch('https://domain.com/api/v1/add_lead', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(process.env.NEXT_PUBLIC_CRM_USERNAME + ':' + process.env.NEXT_PUBLIC_CRM_PASSWORD)}`
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to add lead');
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding lead:', error);
    throw error;
  }
}
