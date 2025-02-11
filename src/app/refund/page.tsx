'use client';

import React from 'react';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { Clock, AlertCircle, RefreshCcw } from 'lucide-react';

const RefundPage = () => {
  const policies = [
    {
      title: 'Immediate Cancellation',
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      content: 'Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.'
    },
    {
      title: 'Perishable Items',
      icon: <AlertCircle className="w-6 h-6 text-blue-500" />,
      content: 'SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.'
    },
    {
      title: 'Damaged or Defective Items',
      icon: <AlertCircle className="w-6 h-6 text-blue-500" />,
      content: 'In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 2 days of receipt of the products.'
    },
    {
      title: 'Product Not as Expected',
      icon: <AlertCircle className="w-6 h-6 text-blue-500" />,
      content: 'In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 2 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.'
    },
    {
      title: 'Warranty Claims',
      icon: <RefreshCcw className="w-6 h-6 text-blue-500" />,
      content: 'In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.'
    },
    {
      title: 'Refund Processing Time',
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      content: 'In case of any Refunds approved by the SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED, it\'ll take 3-5 days for the refund to be processed to the end customer.'
    }
  ];

  return (
    <SubPageLayout
      title="Cancellation & Refund"
      description="Our policies regarding order cancellations and refunds"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              SYNTEGO TECHNOLOGIES INDIA PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
            </p>
          </div>

          {/* Policy Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {policies.map((policy, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {policy.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {policy.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl p-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600">
              If you have any questions about our cancellation and refund policy, please contact our customer service team. We\'re here to help!
            </p>
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

export default RefundPage;
