'use client';

import React, { useState, useEffect, useMemo } from 'react';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { addLead } from '@/lib/crm';
import { indianStatesAndCities } from '@/data/indianCities';

interface City {
  City: string;
  District: string;
  State: string;
  Population?: number;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Get sorted list of states
  const states = useMemo(() => Object.keys(indianStatesAndCities).sort(), []);

  // Get cities for selected state
  const cities = useMemo(() => {
    if (!formData.state) return [];
    return indianStatesAndCities[formData.state as keyof typeof indianStatesAndCities] || [];
  }, [formData.state]);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city) newErrors.city = 'City is required';
    // Only validate pincode format if it's provided
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Prepare lead data
      const leadData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phone,
        emailId: formData.email,
        address: formData.address,
        address_city: formData.city,
        address_state: formData.state,
        address_pin: formData.pincode,
        userType: 'home' as const,
        leadSource: 'website',
        notifySms: 'yes' as const,
        notifyWhatsapp: 'yes' as const
      };

      // Send to CRM
      await addLead(leadData);

      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SubPageLayout title="Contact Us" description="Get in touch with us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Phone</p>
                    <p className="text-gray-900 mt-1">+91 (800) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Email</p>
                    <p className="text-gray-900 mt-1">contact@airnet360.com</p>
                    <p className="text-sm text-gray-500 mt-1">Online support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Office</p>
                    <p className="text-gray-900 mt-1">123 Business Avenue,</p>
                    <p className="text-gray-900">Mumbai, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Working Hours</p>
                    <p className="text-gray-900 mt-1">Monday - Friday</p>
                    <p className="text-gray-900">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Address *</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.address ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors`}
                    placeholder="Enter your address"
                  />
                  {errors.address && (
                    <p className="text-sm text-red-600 mt-1">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">State *</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value, city: '' })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.state ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors bg-white`}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="text-sm text-red-600 mt-1">{errors.state}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      disabled={!formData.state}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.city ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-500`}
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="text-sm text-red-600 mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Pincode</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.pincode ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors`}
                    placeholder="Enter 6-digit pincode (optional)"
                  />
                  {errors.pincode && (
                    <p className="text-sm text-red-600 mt-1">{errors.pincode}</p>
                  )}
                </div>

                {errors.submit && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{errors.submit}</p>
                  </div>
                )}

                {submitSuccess && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">Thank you for contacting us! We'll get back to you soon.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                    disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200
                    flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default ContactPage;
