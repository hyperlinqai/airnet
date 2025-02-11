'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Receipt, ClipboardList, MessageCircle, ArrowRight } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Check Coverage",
      description: "Find internet plans available in your area",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      glowColor: "shadow-blue-500/20",
      href: "/contact"
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      title: "Pay Bill",
      description: "Quick and secure bill payment options",
      color: "text-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100/50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
      glowColor: "shadow-emerald-500/20",
      href: "/contact"
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Track Service",
      description: "Monitor your service request status",
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100/50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      glowColor: "shadow-purple-500/20",
      href: "/contact"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant support from our team",
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100/50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      glowColor: "shadow-orange-500/20",
      href: "https://wa.me/919109153300"
    }
  ];

  return (
    <section className="relative py-24">      
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access essential services and manage your account with just one click
            </p>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((action, index) => (
              <Link 
                key={index}
                href={action.href}
                className={`group relative p-6 rounded-2xl ${action.bgColor} border ${action.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-xl ${action.glowColor}`}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-full ${action.iconBg} ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg ${action.glowColor}`}>
                    {action.icon}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className={`text-lg font-semibold ${action.color} group-hover:translate-x-1 transition-transform duration-300`}>
                      {action.title}
                    </h3>
                    <p className={`text-sm opacity-80 ${action.color} line-clamp-2`}>
                      {action.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className={`flex items-center ${action.color} text-sm font-medium`}>
                    <span className="mr-1">Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
