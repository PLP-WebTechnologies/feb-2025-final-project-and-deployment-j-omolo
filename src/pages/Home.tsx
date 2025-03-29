import React from 'react';
import { Stethoscope, Calendar, Video, Clock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Healthcare at Your Fingertips
              </h1>
              <p className="text-xl mb-8">
                Connect with qualified doctors instantly through secure video consultations. Book appointments, get prescriptions, and manage your health - all from the comfort of your home.
              </p>
              <Link
                to="/book"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Why Choose Our Telemedicine Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Video className="w-8 h-8 text-blue-500" />}
              title="Video Consultations"
              description="Connect with doctors face-to-face through high-quality video calls"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8 text-blue-500" />}
              title="Easy Scheduling"
              description="Book appointments at your convenience, 24/7"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Secure Platform"
              description="Your health data is protected with enterprise-grade security"
            />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="1"
              title="Create Account"
              description="Sign up and complete your health profile"
            />
            <Step
              number="2"
              title="Book Appointment"
              description="Choose your doctor and preferred time slot"
            />
            <Step
              number="3"
              title="Start Consultation"
              description="Connect with your doctor through video call"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;