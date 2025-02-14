'use client';

import React, { useState, useEffect, useMemo } from 'react';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
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
  phoneNumber: string;
  altPhoneNumber: string;
  emailId: string;
  altEmailId: string;
  address_line1: string;
  address_line2: string;
  address_city: string;
  address_pin: string;
  address_state: string;
  address_country: string;
  useBillingAddAsLeadInstallationAdd: 'on' | 'off';
  installation_address_line1: string;
  installation_address_line2: string;
  installation_address_city: string;
  installation_address_pin: string;
  installation_address_state: string;
  installation_address_country: string;
  userType: 'home' | 'business';
  comments: string;
  requestedBandwithAmount: string;
  requestedBandwithData: 'mb' | 'gb';
  leadSource: string;
  notifySms: 'yes' | 'no';
  notifyWhatsapp: 'yes' | 'no';
}

interface FormErrors {
  [key: string]: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    altPhoneNumber: '',
    emailId: '',
    altEmailId: '',
    address_line1: '',
    address_line2: '',
    address_city: '',
    address_pin: '',
    address_state: '',
    address_country: 'IN',
    useBillingAddAsLeadInstallationAdd: 'on',
    installation_address_line1: '',
    installation_address_line2: '',
    installation_address_city: '',
    installation_address_pin: '',
    installation_address_state: '',
    installation_address_country: 'IN',
    userType: 'home',
    comments: '',
    requestedBandwithAmount: '',
    requestedBandwithData: 'mb',
    leadSource: 'website',
    notifySms: 'yes',
    notifyWhatsapp: 'yes'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Get sorted list of states
  const states = useMemo(() => Object.keys(indianStatesAndCities).sort(), []);

  // Get cities for selected state
  const cities = useMemo(() => {
    if (!formData.address_state) return [];
    return indianStatesAndCities[formData.address_state as keyof typeof indianStatesAndCities] || [];
  }, [formData.address_state]);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    
    // Either phone or email is required
    if (!formData.phoneNumber && !formData.emailId) {
      newErrors.phoneNumber = 'Either phone number or email is required';
      newErrors.emailId = 'Either phone number or email is required';
    }
    
    if (formData.phoneNumber && !/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit Indian phone number';
    }
    
    if (formData.emailId && !/\S+@\S+\.\S+/.test(formData.emailId)) {
      newErrors.emailId = 'Please enter a valid email';
    }
    
    if (formData.address_pin && !/^\d{6}$/.test(formData.address_pin)) {
      newErrors.address_pin = 'Please enter a valid 6-digit pincode';
    }

    if (formData.requestedBandwithAmount && isNaN(Number(formData.requestedBandwithAmount))) {
      newErrors.requestedBandwithAmount = 'Please enter a valid bandwidth amount';
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
      const response = await fetch('https://live.airnet360.com/api/v1/add_lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        altPhoneNumber: '',
        emailId: '',
        altEmailId: '',
        address_line1: '',
        address_line2: '',
        address_city: '',
        address_pin: '',
        address_state: '',
        address_country: 'IN',
        useBillingAddAsLeadInstallationAdd: 'on',
        installation_address_line1: '',
        installation_address_line2: '',
        installation_address_city: '',
        installation_address_pin: '',
        installation_address_state: '',
        installation_address_country: 'IN',
        userType: 'home',
        comments: '',
        requestedBandwithAmount: '',
        requestedBandwithData: 'mb',
        leadSource: 'website',
        notifySms: 'yes',
        notifyWhatsapp: 'yes'
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
                    <p className="text-gray-900 mt-1">+91 9109153300</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Email</p>
                    <p className="text-gray-900 mt-1">support@airnet360.com</p>
                    <p className="text-sm text-gray-500 mt-1">Online support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Office</p>
                    <p className="text-gray-900 mt-1">404, 1 New Palasia Silver Arched,</p>
                    <p className="text-gray-900">Indore, Madhya Pradesh</p>
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
                    <label className="block text-sm font-medium text-gray-700">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phoneNumber ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors`}
                      placeholder="9876543210"
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm text-red-600 mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      value={formData.emailId}
                      onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.emailId ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.emailId && (
                      <p className="text-sm text-red-600 mt-1">{errors.emailId}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Address Line 1 *</label>
                  <input
                    type="text"
                    value={formData.address_line1}
                    onChange={(e) => setFormData({ ...formData, address_line1: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.address_line1 ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors`}
                    placeholder="Enter your address"
                  />
                  {errors.address_line1 && (
                    <p className="text-sm text-red-600 mt-1">{errors.address_line1}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                  <input
                    type="text"
                    value={formData.address_line2}
                    onChange={(e) => setFormData({ ...formData, address_line2: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.address_line2 ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors`}
                    placeholder="Enter your address"
                  />
                  {errors.address_line2 && (
                    <p className="text-sm text-red-600 mt-1">{errors.address_line2}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">State *</label>
                    <select
                      value={formData.address_state}
                      onChange={(e) => setFormData({ ...formData, address_state: e.target.value, address_city: '' })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.address_state ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors bg-white`}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.address_state && (
                      <p className="text-sm text-red-600 mt-1">{errors.address_state}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">City *</label>
                    <select
                      value={formData.address_city}
                      onChange={(e) => setFormData({ ...formData, address_city: e.target.value })}
                      disabled={!formData.address_state}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.address_city ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      } focus:ring-1 outline-none transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-500`}
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    {errors.address_city && (
                      <p className="text-sm text-red-600 mt-1">{errors.address_city}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Pincode *</label>
                  <input
                    type="text"
                    value={formData.address_pin}
                    onChange={(e) => setFormData({ ...formData, address_pin: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.address_pin ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors`}
                    placeholder="Enter 6-digit pincode"
                  />
                  {errors.address_pin && (
                    <p className="text-sm text-red-600 mt-1">{errors.address_pin}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">User Type *</label>
                  <select
                    value={formData.userType}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value as 'home' | 'business' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.userType ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors bg-white`}
                  >
                    <option value="home">Home</option>
                    <option value="business">Business</option>
                  </select>
                  {errors.userType && (
                    <p className="text-sm text-red-600 mt-1">{errors.userType}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Comments</label>
                  <textarea
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.comments ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors`}
                    placeholder="Enter your comments"
                  />
                  {errors.comments && (
                    <p className="text-sm text-red-600 mt-1">{errors.comments}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Requested Bandwidth Amount *</label>
                  <input
                    type="text"
                    value={formData.requestedBandwithAmount}
                    onChange={(e) => setFormData({ ...formData, requestedBandwithAmount: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.requestedBandwithAmount ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors`}
                    placeholder="Enter bandwidth amount"
                  />
                  {errors.requestedBandwithAmount && (
                    <p className="text-sm text-red-600 mt-1">{errors.requestedBandwithAmount}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Requested Bandwidth Data *</label>
                  <select
                    value={formData.requestedBandwithData}
                    onChange={(e) => setFormData({ ...formData, requestedBandwithData: e.target.value as 'mb' | 'gb' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.requestedBandwithData ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors bg-white`}
                  >
                    <option value="mb">MB</option>
                    <option value="gb">GB</option>
                  </select>
                  {errors.requestedBandwithData && (
                    <p className="text-sm text-red-600 mt-1">{errors.requestedBandwithData}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Lead Source *</label>
                  <input
                    type="text"
                    value={formData.leadSource}
                    onChange={(e) => setFormData({ ...formData, leadSource: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.leadSource ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors`}
                    placeholder="Enter lead source"
                  />
                  {errors.leadSource && (
                    <p className="text-sm text-red-600 mt-1">{errors.leadSource}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Notify SMS *</label>
                  <select
                    value={formData.notifySms}
                    onChange={(e) => setFormData({ ...formData, notifySms: e.target.value as 'yes' | 'no' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.notifySms ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors bg-white`}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {errors.notifySms && (
                    <p className="text-sm text-red-600 mt-1">{errors.notifySms}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Notify WhatsApp *</label>
                  <select
                    value={formData.notifyWhatsapp}
                    onChange={(e) => setFormData({ ...formData, notifyWhatsapp: e.target.value as 'yes' | 'no' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.notifyWhatsapp ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 
                      'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:ring-1 outline-none transition-colors bg-white`}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {errors.notifyWhatsapp && (
                    <p className="text-sm text-red-600 mt-1">{errors.notifyWhatsapp}</p>
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
