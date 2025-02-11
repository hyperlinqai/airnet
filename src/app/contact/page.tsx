'use client';

import React, { useState } from 'react';
import SubPageLayout from '@/components/layout/SubPageLayout';
import Input from '@/components/ui/Input';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { addLead } from '@/lib/crm';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  city?: string;
  state?: string;
  pincode?: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ');

      // Prepare lead data
      const leadData = {
        firstName,
        lastName: lastName || undefined,
        phoneNumber: formData.phone,
        emailId: formData.email,
        address_city: formData.city,
        address_state: formData.state,
        address_pin: formData.pincode,
        comments: `Subject: ${formData.subject}\n\nMessage: ${formData.message}`,
        userType: 'home' as const,
        leadSource: 'website',
        notifySms: 'yes' as const,
        notifyWhatsapp: 'yes' as const
      };

      // Send to CRM
      await addLead(leadData);

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <SubPageLayout
      title="Contact Us"
      description="Get in touch with our team for any inquiries or support."
    >
      <div className="w-full">
        {/* Contact Information Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-12 pt-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Have questions about our services? We're here to help and answer any questions you might have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-[#fc3a6f]/20 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#fc3a6f]/10 rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-[#fc3a6f]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Call Us</h3>
                  <p className="text-sm text-gray-600">Mon-Sat 9am to 6pm</p>
                </div>
              </div>
              <a href="tel:+919876543210" className="text-[#fc3a6f] hover:text-[#e62e61] font-medium text-sm">
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-[#fc3a6f]/20 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#fc3a6f]/10 rounded-full flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5 text-[#fc3a6f]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Email Us</h3>
                  <p className="text-sm text-gray-600">24/7 Support</p>
                </div>
              </div>
              <a href="mailto:support@airnet360.com" className="text-[#fc3a6f] hover:text-[#e62e61] font-medium text-sm">
                support@airnet360.com
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-[#fc3a6f]/20 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#fc3a6f]/10 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-[#fc3a6f]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-sm text-gray-600">Working Hours</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Monday - Saturday<br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Your Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="John Doe"
                    icon={<span className="text-gray-400">👤</span>}
                  />
                  
                  <Input
                    label="Your Email*"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="john@example.com"
                    icon={<Mail className="w-4 h-4 text-gray-400" />}
                  />
                  
                  <Input
                    label="Phone Number*"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="+91 98765 43210"
                    icon={<Phone className="w-4 h-4 text-gray-400" />}
                  />
                  
                  <Input
                    label="Subject*"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    placeholder="How can we help you?"
                    icon={<span className="text-gray-400">📝</span>}
                  />
                  
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      icon={<MapPin className="w-4 h-4 text-gray-400" />}
                    />
                    
                    <Input
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Your state"
                      icon={<MapPin className="w-4 h-4 text-gray-400" />}
                    />
                    
                    <Input
                      label="Pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Your pincode"
                      icon={<MapPin className="w-4 h-4 text-gray-400" />}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={3}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#fc3a6f] focus:border-transparent resize-none text-sm`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-50 p-2 rounded-lg text-xs">
                    <AlertCircle className="w-4 h-4" />
                    <p>{errors.submit}</p>
                  </div>
                )}

                {submitSuccess && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-2 rounded-lg text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <p>Thank you for contacting us! We'll get back to you soon.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#fc3a6f] text-white py-2.5 px-4 rounded-lg hover:bg-[#fc3a6f] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[300px] bg-gray-100 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.989557424163!2d75.8872226!3d22.7524903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzA4LjkiTiA3NcKwNTMnMTQuMCJF!5e0!3m2!1sen!2sin!4v1625136體"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SubPageLayout>
  );
};

export default ContactPage;
