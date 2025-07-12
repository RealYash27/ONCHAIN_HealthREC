import React from 'react';
import { Users, UserCheck, ArrowRight, Shield, Activity } from 'lucide-react';

interface LandingProps {
  onRoleSelect: (role: 'patient' | 'doctor') => void;
}

export default function Landing({ onRoleSelect }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">HealthCare Portal</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Secure access to healthcare management system. Choose your role to continue with personalized features and dashboard.
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Patient Login */}
            <div className="group relative flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full min-h-[580px]">
                <div className="text-center flex-grow flex flex-col justify-start">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Portal</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Access your medical records, appointments, test results, and manage your healthcare journey with ease.
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>View medical history & records</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>Schedule appointments</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>Access test results</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => onRoleSelect('patient')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group-hover:shadow-lg"
                  >
                    Login as Patient
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>

            {/* Doctor Login */}
            <div className="group relative flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full min-h-[580px]">
                <div className="text-center flex-grow flex flex-col justify-start">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Doctor Portal</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Manage patient care, access comprehensive medical data, and streamline your clinical workflow.
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>Patient management dashboard</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>Clinical decision support</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>Analytics & reporting</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => onRoleSelect('doctor')}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group-hover:shadow-lg"
                  >
                    Login as Doctor
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
              <Shield className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-600 font-medium">Secure & HIPAA Compliant Platform</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
