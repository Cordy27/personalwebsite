import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, TrendingUp, Brain, Globe, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const education = [
    {
      school: t.about.educationDetails.school1,
      degree: t.about.educationDetails.degree1,
      major: t.about.educationDetails.major1,
      period: t.about.educationDetails.period1,
      location: t.about.educationDetails.location1,
      details: t.about.educationDetails.details1
    },
    {
      school: t.about.educationDetails.school2,
      degree: t.about.educationDetails.degree2,
      major: t.about.educationDetails.major2,
      period: t.about.educationDetails.period2,
      location: t.about.educationDetails.location2,
      details: t.about.educationDetails.details2
    },
    {
      school: t.about.educationDetails.school3,
      degree: t.about.educationDetails.degree3,
      major: t.about.educationDetails.major3,
      period: t.about.educationDetails.period3,
      location: t.about.educationDetails.location3,
      details: t.about.educationDetails.details3
    }
  ];

  const skills = [
    {
      category: t.about.skillCategories.technicalTools,
      items: ['Python', 'R', 'MATLAB', 'C++', 'JavaScript', 'HTML/CSS', 'React.js', 'Flask', 'FastAPI', 'MySQL', 'MongoDB', 'SQLite']
    },
    {
      category: t.about.skillCategories.dataScience,
      items: ['PyTorch', 'scikit-learn', 'HuggingFace', 'Pandas', 'NumPy', 'Matplotlib', 'Stata', 'SPSS', 'Excel', 'LaTeX']
    },
    {
      category: t.about.skillCategories.coreCompetencies,
      items: [
        t.about.coreSkills.financialModeling,
        t.about.coreSkills.timeSeriesForecasting,
        t.about.coreSkills.multimodalLLM,
        t.about.coreSkills.klineRecognition,
        t.about.coreSkills.quantitativeAnalysis,
        t.about.coreSkills.econometrics,
        t.about.coreSkills.dataAnalysis
      ]
    }
  ];

  const awards = [
    { title: t.about.awards.award1.title, level: t.about.awards.award1.level, year: t.about.awards.award1.year },
    { title: t.about.awards.award2.title, level: t.about.awards.award2.level, year: t.about.awards.award2.year },
    { title: t.about.awards.award3.title, level: t.about.awards.award3.level, year: t.about.awards.award3.year },
    { title: t.about.awards.award4.title, level: t.about.awards.award4.level, year: t.about.awards.award4.year },
    { title: t.about.awards.award5.title, level: t.about.awards.award5.level, year: t.about.awards.award5.year },
    { title: t.about.awards.award6.title, level: t.about.awards.award6.level, year: t.about.awards.award6.year },
    { title: t.about.awards.award7.title, level: t.about.awards.award7.level, year: t.about.awards.award7.year },
    { title: t.about.awards.award8.title, level: t.about.awards.award8.level, year: t.about.awards.award8.year },
    { title: t.about.awards.award9.title, level: t.about.awards.award9.level, year: t.about.awards.award9.year }
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
          <h1 className="text-5xl font-bold text-gray-800 mb-6">{t.about.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.about.basicInfo}</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">hy-si@foxmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+86-136****1287</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{t.contact.contactDetails.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.about.professionalAreas}</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">{t.about.aiMlDev}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">{t.about.quantFinance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">{t.about.multimodalLLM}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span className="text-gray-700">{t.about.entrepreneurship}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-blue-600" />
            {t.about.education}
          </motion.h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{edu.degree}</p>
                    <p className="text-gray-600">{edu.major}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-500">{edu.period}</p>
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            {t.about.skills}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3"
          >
            <Award className="w-8 h-8 text-yellow-600" />
            {t.about.achievements}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{award.title}</h3>
                  <span className="text-sm text-gray-500">{award.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-blue-600 font-semibold">{award.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 