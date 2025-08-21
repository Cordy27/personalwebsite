import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, TrendingUp, Brain, Globe, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const education = [
    {
      school: '中央民族大学',
      degree: '经济学学士学位',
      major: '金融学专业',
      period: '2022年9月 - 2026年6月',
      location: '北京',
      details: [
        '主修金融学，辅修数学课程',
        '核心课程：国际金融、金融营销、证券投资、金融风险管理',
        '高等数学II、统计学、信息素养II(Python)、数学分析、高等代数'
      ]
    },
    {
      school: '中央民族大学 & CCIPE',
      degree: '微专业：国际组织后备人才',
      major: '数据科学与大语言模型',
      period: '2024年9月 - 2025年9月',
      location: '北京',
      details: [
        '数据科学与大数据分析',
        '大语言模型：基础、实践与挑战',
        '国际组织理论与实践'
      ]
    },
    {
      school: '剑桥大学 Lucy Cavendish College',
      degree: '冬季学术研究研讨会',
      major: '商业与金融',
      period: '2023年12月 - 2024年1月',
      location: '英国剑桥',
      details: [
        '获得项目学术主任 Prof. Nicola Clayton 推荐信'
      ]
    }
  ];

  const skills = [
    {
      category: '技术工具',
      items: ['Python', 'R', 'MATLAB', 'C++', 'JavaScript', 'HTML/CSS', 'React.js', 'Flask', 'FastAPI', 'MySQL', 'MongoDB', 'SQLite']
    },
    {
      category: '数据科学与分析',
      items: ['PyTorch', 'scikit-learn', 'HuggingFace', 'Pandas', 'NumPy', 'Matplotlib', 'Stata', 'SPSS', 'Excel', 'LaTeX']
    },
    {
      category: '核心能力',
      items: ['金融建模', '时间序列预测', '多模态LLM', 'K线识别', '量化分析', '计量经济学', '数据分析']
    }
  ];

  const awards = [
    { title: '"正大杯"全国大学生市场调研与分析大赛', level: '全国一等奖', year: '2025年6月' },
    { title: '内地与港澳台创新创业大赛', level: '入围奖', year: '2024年11月' },
    { title: '中国数据新闻大赛', level: '全国二等奖', year: '2024年11月' },
    { title: '全国大学生商业精英挑战赛创新创业竞赛', level: '全国总决赛亚军', year: '2024年11月' },
    { title: '全国大学生商业精英挑战赛创新创业竞赛', level: '全国一等奖', year: '2024年11月' },
    { title: '中国大学生计算机设计大赛(4C)', level: 'Web产品赛道全国二等奖', year: '2024年7月' },
    { title: '全国大学生电子商务"创新、创意及创业"挑战赛', level: '全国二等奖', year: '2024年7月' },
    { title: '全国大学生统计建模竞赛', level: '北京赛区一等奖', year: '2023年8月' },
    { title: '国家级大学生创新创业实践项目', level: '结项项目', year: '2024年6月' }
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
                  <span className="text-gray-700">北京</span>
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