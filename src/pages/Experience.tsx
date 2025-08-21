import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, TrendingUp, Award, Globe, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      company: 'Quavic Tech Co., Ltd.',
      position: '联合创始人，产品负责人',
      period: '2024年8月 - 2025年8月',
      location: '北京',
      website: 'https://quavictech.com/',
      achievements: [
        '主导开发多模态AI驱动的戏剧教育平台，从0到1完成产品设计到商业化落地，首年B2G收入突破10万元人民币',
        '成功获得Wteam非稀释性资金投资，获得投资方对技术实力和商业模式的认可',
        '独立设计并开发集成大语言模型的模块化Web应用架构，在中国大学生计算机设计大赛中荣获全国二等奖'
      ],
      skills: ['AI/ML', '产品管理', '创业融资', 'Web开发']
    },
    {
      company: 'MiraclePlus (原Y Combinator中国)',
      position: '创始人关系与精准研究实习生',
      period: '2024年8月 - 2025年1月',
      location: '北京',
      website: 'https://www.miracleplus.com/',
      achievements: [
        '深度研究前沿AI技术（AI for Science、大语言模型、多模态），识别新兴趋势并为投资决策提供数据支撑',
        '系统梳理200+所高校和企业的人才网络资源，建立创业项目储备库，促进产学研商业化合作',
        '独立完成项目初步筛选（市场规模分析、单位经济测算）和Pre-DD，撰写数据驱动的投资分析报告，为投资决策提供专业建议',
        '深度参与Sealos共同领投的A轮前融资和实时AI仿真平台种子轮融资，负责商业尽职调查和条款清单设计，两轮融资规模均达数千万人民币'
      ],
      skills: ['投资分析', '市场研究', '尽职调查', 'AI趋势分析']
    },
    {
      company: '光大证券',
      position: '量化研究实习生',
      period: '2024年6月 - 2024年8月',
      location: '远程',
      website: 'http://www.ebscn.com/',
      achievements: [
        '熟练运用Python和量化分析工具进行策略回测，系统评估交易算法的有效性和稳定性',
        '独立开发多维度量化策略体系，涵盖选股框架、择时模型和风险收益评估标准',
        '通过精细化参数调优和动态风险管理机制，持续优化现有策略，显著提升风险调整后收益水平'
      ],
      skills: ['量化分析', 'Python', '策略回测', '风险管理']
    },
    {
      company: '卓晔私募基金',
      position: '行业研究实习生',
      period: '2024年6月 - 2024年8月',
      location: '远程',
      website: 'http://www.zhuoyetz.com/',
      achievements: [
        '深度参与PE投资AI基础设施领域研究，负责数据清洗/挖掘、行业洞察分析和投资价值评估框架构建',
        '全面支持AI行业交易尽职调查：深入分析行业发展趋势、竞争格局和目标公司基本面，为投资可行性评估和投资备忘录撰写提供专业支持'
      ],
      skills: ['行业研究', '尽职调查', '投资分析', 'AI基础设施']
    }
  ];

  const timeline = [
    {
      year: '2025',
      events: [
        { month: '6月', event: '获得"正大杯"全国大学生市场调研与分析大赛全国一等奖' },
        { month: '1月', event: '完成MiraclePlus实习，获得投资分析经验' }
      ]
    },
    {
      year: '2024',
      events: [
        { month: '12月', event: '参加内地与港澳台创新创业大赛，获得入围奖' },
        { month: '11月', event: '获得中国数据新闻大赛全国二等奖' },
        { month: '11月', event: '获得全国大学生商业精英挑战赛创新创业竞赛全国总决赛亚军、全国一等奖' },
        { month: '9月', event: '开始国际组织后备人才微专业学习' },
        { month: '8月', event: '创立Quavic Tech，担任联合创始人' },
        { month: '8月', event: '加入MiraclePlus实习' },
        { month: '7月', event: '获得中国大学生计算机设计大赛全国二等奖' },
        { month: '7月', event: '获得全国大学生电子商务"创新、创意及创业"挑战赛全国二等奖' },
        { month: '6月', event: '在光大证券和卓晔基金实习' },
        { month: '6月', event: '获批国家级大学生创新创业实践项目' }
      ]
    },
    {
      year: '2023',
      events: [
        { month: '12月', event: '参加剑桥大学冬季学术研究研讨会，获得Prof. Nicola Clayton教授推荐信' },
        { month: '8月', event: '获得全国大学生统计建模竞赛北京赛区一等奖' }
      ]
    },
    {
      year: '2022',
      events: [
        { month: '9月', event: '进入中央民族大学金融学专业学习，主修金融学，辅修数学' }
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
            工作经历
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
                    主要成就
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
                    相关技能
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
            发展历程
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