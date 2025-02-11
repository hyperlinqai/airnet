'use client';

import React from 'react';
import SubPageLayout from '@/components/layout/SubPageLayout';

const TermsPage = () => {
  const sections = [
    {
      title: 'Introduction',
      content: `The Website Owner, including subsidiaries and affiliates ("Website" or "Website Owner" or "we" or "us" or "our") provides the information contained on the website or any of the pages comprising the website ("website") to visitors ("visitors") (cumulatively referred to as "you" or "your" hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.`
    },
    {
      title: 'Agreement to Terms',
      content: `Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED's relationship with you in relation to this website.`
    },
    {
      title: 'Company Information',
      content: `The term 'SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED' or 'us' or 'we' refers to the owner of the website whose registered/operational office is OFFICE NO. 404, 1 NEW PALASIA SILVER ARCHED Indore MADHYA PRADESH 452001. The term 'you' refers to the user or viewer of our website.`
    }
  ];

  const terms = [
    'The content of the pages of this website is for your general information and use only. It is subject to change without notice.',
    'Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.',
    'Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.',
    'This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.',
    'All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.',
    'Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.',
    'From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.',
    'You may not create a link to this website from another website or document without SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED\'s prior written consent.',
    'Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.',
    'We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time'
  ];

  return (
    <SubPageLayout
      title="Terms and Conditions"
      description="Please read these terms and conditions carefully before using our website."
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

          {/* Terms List */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Use</h2>
            <ul className="space-y-4 list-disc pl-5">
              {terms.map((term, index) => (
                <li key={index} className="text-gray-600 leading-relaxed">
                  {term}
                </li>
              ))}
            </ul>
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

export default TermsPage;
