// app/courses/mba/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Mail, Phone, User } from 'lucide-react';

export default function MBAPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isCoursesOpen, setIsCoursesOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Padmashree College</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-blue-600 font-medium">Courses</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 bg-gray-700 cursor-pointer"
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              >
                <span className="font-medium">Courses</span>
                {isCoursesOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
              {isCoursesOpen && (
                <div className="p-0">
                  <Link href="/courses/bba" className="flex items-center p-3 hover:bg-gray-700 transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    BBA
                  </Link>
                  <Link href="/courses/mba" className="flex items-center p-3 bg-blue-600 text-white border-l-4 border-blue-400">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    MBA
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="relative h-48 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative h-full flex items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Master of Business Administration
                </h1>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`px-6 py-3 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`px-6 py-3 font-medium text-sm ${
                  activeTab === 'details'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('details')}
              >
                Course Details
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="text-blue-600 font-semibold">Padmashree College s</span>{' '}
                      <span className="font-semibold">Master of Business Administration (MBA)</span>{' '}
                      <span className="text-blue-600 font-semibold">program is your gateway to</span>{' '}
                      <span className="text-blue-600 font-semibold">advanced business leadership.</span>
                    </p>
                  </div>

                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      Are you ready to advance your career and take on senior leadership roles in the business world? 
                      Padmashree College s Master of Business Administration (MBA) program is designed for ambitious 
                      professionals who want to develop advanced management skills and strategic thinking capabilities. 
                      Affiliated with Tribhuvan University, our MBA program offers a comprehensive curriculum that 
                      prepares you for executive positions in various industries.
                    </p>

                    <p>
                      Our MBA program features a rigorous academic curriculum combined with practical learning experiences. 
                      Students engage in case studies, business simulations, research projects, and internships that bridge 
                      the gap between theory and practice. Our distinguished faculty brings decades of industry experience 
                      and academic excellence, ensuring you receive world-class education that meets international standards.
                    </p>

                    <p>
                      The program emphasizes leadership development, strategic decision-making, and global business perspectives. 
                      With flexible scheduling options including evening and weekend classes, working professionals can pursue 
                      their MBA without compromising their career. Our extensive alumni network and industry partnerships 
                      provide excellent opportunities for career advancement and entrepreneurial ventures.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                        <p className="text-gray-600">2 Years (4 Semesters)</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Affiliation</h4>
                        <p className="text-gray-600">Tribhuvan University</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Eligibility</h4>
                        <p className="text-gray-600">Bachelor degree with minimum 50% marks</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Intake</h4>
                        <p className="text-gray-600">60 Students per year</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Specializations Available</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <ul className="space-y-1 text-gray-600">
                        <li>• Finance</li>
                        <li>• Marketing</li>
                        <li>• Human Resource Management</li>
                        <li>• Operations Management</li>
                      </ul>
                      <ul className="space-y-1 text-gray-600">
                        <li>• International Business</li>
                        <li>• Information Technology</li>
                        <li>• Healthcare Management</li>
                        <li>• Entrepreneurship</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Core Subjects</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <ul className="space-y-1 text-gray-600">
                        <li>• Advanced Financial Management</li>
                        <li>• Strategic Management</li>
                        <li>• Organizational Behavior</li>
                        <li>• Business Research Methods</li>
                        <li>• International Business</li>
                        <li>• Marketing Management</li>
                      </ul>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Operations Research</li>
                        <li>• Business Ethics</li>
                        <li>• Leadership & Change Management</li>
                        <li>• Digital Business Strategy</li>
                        <li>• Supply Chain Management</li>
                        <li>• Business Analytics</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Career Opportunities</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Chief Executive Officer (CEO)</li>
                      <li>• General Manager</li>
                      <li>• Senior Financial Analyst</li>
                      <li>• Director of Marketing</li>
                      <li>• Operations Director</li>
                      <li>• Management Consultant</li>
                      <li>• Investment Banker</li>
                      <li>• Business Development Manager</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">- Apply Now -</h3>
                <p className="text-gray-600">Fill up the form and we will get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 h-5 w-5" />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  Apply Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}