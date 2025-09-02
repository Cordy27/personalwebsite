import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, TrendingUp, Award, Globe, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      company: t.experience.workDetails.job1.company,
      position: t.experience.workDetails.job1.position,
      period: t.experience.workDetails.job1.period,
      location: t.experience.workDetails.job1.location,
      website: 'https://quavictech.com/',
      achievements: t.experience.workDetails.job1.description,
      skills: t.experience.workDetails.job1.skills
    },
    {
      company: t.experience.workDetails.job2.company,
      position: t.experience.workDetails.job2.position,
      period: t.experience.workDetails.job2.period,
      location: t.experience.workDetails.job2.location,
      website: 'https://www.miracleplus.com/',
      achievements: t.experience.workDetails.job2.description,
      skills: t.experience.workDetails.job2.skills
    },
    {
      company: t.experience.workDetails.job3.company,
      position: t.experience.workDetails.job3.position,
      period: t.experience.workDetails.job3.period,
      location: t.experience.workDetails.job3.location,
      website: 'http://www.ebscn.com/',
      achievements: t.experience.workDetails.job3.description,
      skills: t.experience.workDetails.job3.skills
    },
    {
      company: t.experience.workDetails.job4.company,
      position: t.experience.workDetails.job4.position,
      period: t.experience.workDetails.job4.period,
      location: t.experience.workDetails.job4.location,
      website: 'http://www.zhuoyetz.com/',
      achievements: t.experience.workDetails.job4.description,
      skills: t.experience.workDetails.job4.skills
    }
  ];

  const timeline = [
    {
      year: '2025',
      events: [
        { month: t.experience.timelineEvents.event1.month, event: t.experience.timelineEvents.event1.event },
        { month: t.experience.timelineEvents.event6.month, event: t.experience.timelineEvents.event6.event }
      ]
    },
    {
      year: '2024',
      events: [
        { month: t.experience.timelineEvents.event7.month, event: t.experience.timelineEvents.event7.event },
        { month: t.experience.timelineEvents.event8.month, event: t.experience.timelineEvents.event8.event },
        { month: t.experience.timelineEvents.event9.month, event: t.experience.timelineEvents.event9.event },
        { month: t.experience.timelineEvents.event10.month, event: t.experience.timelineEvents.event10.event },
        { month: t.experience.timelineEvents.event11.month, event: t.experience.timelineEvents.event11.event },
        { month: t.experience.timelineEvents.event12.month, event: t.experience.timelineEvents.event12.event }
      ]
    },
    {
      year: '2023',
      events: [
        { month: t.experience.timelineEvents.event13.month, event: t.experience.timelineEvents.event13.event },
        { month: t.experience.timelineEvents.event14.month, event: t.experience.timelineEvents.event14.event }
      ]
    },
    {
      year: '2022',
      events: [
        { month: t.experience.timelineEvents.event15.month, event: t.experience.timelineEvents.event15.event }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">{t.experience.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Work Experience */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3"
          >
            <Briefcase className="w-8 h-8 text-blue-600" />
            {t.experience.workExperience}
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-xl text-blue-600 font-semibold mb-2">{exp.position}</p>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    {t.about.achievements}
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    {t.about.skills}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3"
          >
            <Calendar className="w-8 h-8 text-purple-600" />
            {t.experience.timeline}
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {timeline.map((yearData, yearIndex) => (
                <motion.div
                  key={yearIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Year Marker */}
                  <div className="absolute left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm transform -translate-x-1/2">
                    {yearData.year}
                  </div>
                  
                  <div className="ml-16">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="space-y-4">
                        {yearData.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="flex items-start gap-4">
                            <div className="w-16 text-sm font-semibold text-blue-600">
                              {event.month}
                            </div>
                            <div className="flex-1 text-gray-700">
                              {event.event}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience; 