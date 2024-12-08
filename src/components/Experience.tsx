import React from 'react';
import { Building2, Target, Users, LineChart } from 'lucide-react';

const experiences = [
  {
    company: "HealthTech Solutions",
    role: "Senior Sales Director",
    period: "2020 - Present",
    achievements: [
      "Led team to achieve 145% of annual sales target ($12M)",
      "Implemented new CRM strategy increasing client retention by 35%",
      "Managed portfolio of 50+ enterprise healthcare clients"
    ],
    icon: Building2
  },
  {
    company: "MedTech Innovations",
    role: "Regional Sales Manager",
    period: "2017 - 2020",
    achievements: [
      "Exceeded quarterly targets by average of 28%",
      "Developed new market strategy for EMR solutions",
      "Built and trained team of 12 sales representatives"
    ],
    icon: Target
  },
  {
    company: "Healthcare Systems Inc",
    role: "Operations Specialist",
    period: "2015 - 2017",
    achievements: [
      "Reduced operational costs by 22%",
      "Streamlined client onboarding process",
      "Implemented new workflow automation tools"
    ],
    icon: Users
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">Professional Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <exp.icon className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">{exp.company}</h3>
              <h4 className="text-black font-semibold mb-2">{exp.role}</h4>
              <p className="text-gray-600 mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <LineChart className="w-5 h-5 text-gray-800 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}