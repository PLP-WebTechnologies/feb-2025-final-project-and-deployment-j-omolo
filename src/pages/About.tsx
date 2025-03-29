import React from 'react';
import { Award, Heart, Users } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              About Our Mission
            </h1>
            <p className="text-xl text-gray-600">
              We're revolutionizing healthcare delivery by making quality medical care accessible to everyone through innovative telemedicine solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard
              number="50,000+"
              label="Patients Served"
              icon={<Users className="w-8 h-8 text-blue-500" />}
            />
            <StatCard
              number="1,000+"
              label="Qualified Doctors"
              icon={<Award className="w-8 h-8 text-blue-500" />}
            />
            <StatCard
              number="98%"
              label="Patient Satisfaction"
              icon={<Heart className="w-8 h-8 text-blue-500" />}
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <TeamMember
              image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
              name="Dr. Sarah Johnson"
              role="Chief Medical Officer"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80"
              name="Michael Chen"
              role="Chief Technology Officer"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80"
              name="Dr. Emily Martinez"
              role="Head of Telemedicine"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label, icon }) {
  return (
    <div className="p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl font-bold text-gray-800 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function TeamMember({ image, name, role }) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-1 text-gray-800">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

export default About;