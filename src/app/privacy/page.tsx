'use client';

import React from 'react';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { Mail } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      title: 'Introduction',
      content: `This privacy policy sets out how SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED uses and protects any information that you give SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED when you use this website. We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.`
    },
    {
      title: 'Policy Updates',
      content: `SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.`
    }
  ];

  const collectedInfo = [
    'Name and job title',
    'Contact information including email address',
    'Demographic information such as postcode, preferences and interests',
    'Other information relevant to customer surveys and/or offers'
  ];

  const infoUsage = [
    'Internal record keeping',
    'Improving our products and services',
    'Sending promotional emails about new products, special offers or other information which we think you may find interesting',
    'Contacting you for market research purposes via email, phone, fax or mail',
    'Customizing the website according to your interests'
  ];

  return (
    <SubPageLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your information"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Introduction Sections */}
          {sections.map((section, index) => (
            <div key={index} className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Information Collection */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              {collectedInfo.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>

          {/* Information Usage */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
            <ul className="list-disc pl-5 space-y-2">
              {infoUsage.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>

          {/* Security */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
            <p className="text-gray-600">
              We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
            </p>
          </div>

          {/* Cookies */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                A cookie is a small file which asks permission to be placed on your computer\'s hard drive. Once you agree, the file is added and the cookie helps analyses web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
              </p>
              <p className="text-gray-600">
                We use traffic log cookies to identify which pages are being used. This helps us analyses data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
              </p>
              <p className="text-gray-600">
                Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
              </p>
              <p className="text-gray-600">
                You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
              </p>
            </div>
          </div>

          {/* Personal Information Control */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Controlling Your Personal Information</h2>
            <p className="text-gray-600 mb-4">
              You may choose to restrict the collection or use of your personal information in the following ways:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">
                Look for the checkbox in forms that indicates you do not want the information to be used for direct marketing purposes
              </li>
              <li className="text-gray-600">
                If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl p-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible. We will promptly correct any information found to be incorrect.
            </p>
            <div className="flex items-center text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:tehsin@airnet360.com" className="hover:text-blue-700">
                tehsin@airnet360.com
              </a>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200">
            <p>Last updated: February 2025</p>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default PrivacyPage;
