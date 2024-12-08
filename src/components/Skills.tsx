import React from 'react';
import { 
  Stethoscope, 
  LineChart, 
  Users, 
  Building, 
  Network,
  Database
} from 'lucide-react';

const skills = [
  {
    category: "Healthcare Technology",
    items: ["EMR Systems", "Telehealth Platforms", "Medical Device Integration", "HIPAA Compliance"],
    icon: Stethoscope
  },
  {
    category: "Sales Strategy",
    items: ["Enterprise Sales", "Solution Selling", "Sales Pipeline Management", "Contract Negotiation"],
    icon: LineChart
  },
  {
    category: "Operations Management",
    items: ["Process Optimization", "Team Leadership", "Resource Planning", "Quality Assurance"],
    icon: Building
  },
  {
    category: "Client Relations",
    items: ["Stakeholder Management", "Client Success", "Relationship Building", "Conflict Resolution"],
    icon: Users
  },
  {
    category: "Industry Tools",
    items: ["Salesforce", "Epic Systems", "Cerner", "Microsoft Dynamics"],
    icon: Database
  },
  {
    category: "Technical Skills",
    items: ["Data Analysis", "Project Management", "API Integration", "System Implementation"],
    icon: Network
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">Core Competencies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-black" />
                <h3 className="text-xl font-semibold text-black">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                    {item}
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