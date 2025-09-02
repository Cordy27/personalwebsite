export interface Translations {
  home: {
    title: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    coreSkills: string;
    skillsDescription: string;
    // 新增技能相关翻译
    technicalDevelopment: string;
    financialAnalysis: string;
    aiResearch: string;
    entrepreneurship: string;
    technicalDesc: string;
    financialDesc: string;
    aiDesc: string;
    entrepreneurshipDesc: string;
    // 新增统计数据翻译
    yearsExperience: string;
    awardProjects: string;
    productDemos: string;
    revenueGenerated: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    education: string;
    experience: string;
    skills: string;
    achievements: string;
    basicInfo: string;
    professionalAreas: string;
    aiMlDev: string;
    quantFinance: string;
    multimodalLLM: string;
    entrepreneurship: string;
    // 新增教育背景翻译
    educationDetails: {
      school1: string;
      degree1: string;
      major1: string;
      period1: string;
      location1: string;
      details1: string[];
      school2: string;
      degree2: string;
      major2: string;
      period2: string;
      location2: string;
      details2: string[];
      school3: string;
      degree3: string;
      major3: string;
      period3: string;
      location3: string;
      details3: string[];
    };
    // 新增技能分类翻译
    skillCategories: {
      technicalTools: string;
      dataScience: string;
      coreCompetencies: string;
    };
    // 新增核心能力技能项目翻译
    coreSkills: {
      financialModeling: string;
      timeSeriesForecasting: string;
      multimodalLLM: string;
      klineRecognition: string;
      quantitativeAnalysis: string;
      econometrics: string;
      dataAnalysis: string;
    };
    // 新增奖项翻译
    awards: {
      award1: { title: string; level: string; year: string };
      award2: { title: string; level: string; year: string };
      award3: { title: string; level: string; year: string };
      award4: { title: string; level: string; year: string };
      award5: { title: string; level: string; year: string };
      award6: { title: string; level: string; year: string };
      award7: { title: string; level: string; year: string };
      award8: { title: string; level: string; year: string };
      award9: { title: string; level: string; year: string };
    };
  };
  experience: {
    title: string;
    subtitle: string;
    current: string;
    present: string;
    workExperience: string;
    timeline: string;
    // 新增工作经历翻译
    workDetails: {
      job1: {
        company: string;
        position: string;
        period: string;
        location: string;
        description: string[];
        skills: string[];
      };
      job2: {
        company: string;
        position: string;
        period: string;
        location: string;
        description: string[];
        skills: string[];
      };
      job3: {
        company: string;
        position: string;
        period: string;
        location: string;
        description: string[];
        skills: string[];
      };
      job4: {
        company: string;
        position: string;
        period: string;
        location: string;
        description: string[];
        skills: string[];
      };
    };
    timelineEvents: {
      event1: { month: string; event: string };
      event2: { month: string; event: string };
      event3: { month: string; event: string };
      event4: { month: string; event: string };
      event5: { month: string; event: string };
      event6: { month: string; event: string };
      event7: { month: string; event: string };
      event8: { month: string; event: string };
      event9: { month: string; event: string };
              event10: { month: string; event: string };
        event11: { month: string; event: string };
        event12: { month: string; event: string };
        event13: { month: string; event: string };
        event14: { month: string; event: string };
        event15: { month: string; event: string };
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
    productDemos: string;
    researchProjects: string;
    watchDemo: string;
    technologies: string;
    achievements: string;
    // 新增项目相关翻译
    projectDetails: {
      zhiyouAI: {
        title: string;
        description: string;
        tags: string[];
        achievements: string[];
      };
      podcastPlatform: {
        title: string;
        description: string;
        tags: string[];
        achievements: string[];
      };
      luojikeAI: {
        title: string;
        description: string;
        tags: string[];
        achievements: string[];
      };
      researchProject: {
        title: string;
        description: string;
        achievements: string[];
      };
    };
    ui: {
      projectPreview: string;
      closeVideo: string;
      videoUnavailable: string;
      videoUnavailableDesc: string;
      browserNotSupported: string;
      escToClose: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      sendMessage: string;
      sending: string;
      success: string;
      error: string;
    };
    contactInfo: {
      title: string;
      email: string;
      phone: string;
      address: string;
    };
    socialMedia: {
      title: string;
      description: string;
    };
    quickResponse: {
      title: string;
      description: string;
    };
    // 新增联系信息翻译
    contactDetails: {
      address: string;
      wechat: string;
    };
  };
  navigation: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
}

export const translations: Record<'zh' | 'en', Translations> = {
  zh: {
    home: {
      title: '司昊阳',
      subtitle: 'AI产品经理 | AI创业者 | 全站架构师',
      description: '专注于多模态AI在教育领域的应用，拥有丰富的创业经验和学术研究背景。致力于将前沿技术与实际商业需求相结合，创造真正的价值。',
      viewProjects: '查看作品',
      contactMe: '联系我',
      coreSkills: '核心能力',
      skillsDescription: '在多个领域都有深入的专业知识和实践经验',
      technicalDevelopment: '技术开发',
      financialAnalysis: '金融分析',
      aiResearch: 'AI研究',
      entrepreneurship: '创业经验',
      technicalDesc: 'Python, React, AI/ML',
      financialDesc: '量化交易, 风险管理',
      aiDesc: '多模态LLM, 深度学习',
      entrepreneurshipDesc: '产品设计, 商业运营',
      yearsExperience: '年经验',
      awardProjects: '获奖项目',
      productDemos: '产品Demo',
      revenueGenerated: '营收创造'
    },
    about: {
      title: '关于我',
      subtitle: '了解我的背景、技能和成就',
      description: 'AI产品经理，专注于AI在教育领域的应用，拥有丰富的学术研究和创业经验',
      education: '教育背景',
      experience: '工作经验',
      skills: '技能专长',
      achievements: '主要成就',
      basicInfo: '基本信息',
      professionalAreas: '专业领域',
      aiMlDev: 'AI/ML 开发',
      quantFinance: '量化金融',
      multimodalLLM: '多模态LLM',
      entrepreneurship: '创业管理',
      educationDetails: {
        school1: '中央民族大学',
        degree1: '经济学学士学位',
        major1: '金融学专业',
        period1: '2022年9月 - 2026年6月',
        location1: '北京',
        details1: [
          '主修金融学，辅修数学课程',
          '核心课程：国际金融、金融营销、证券投资、金融风险管理',
          '高等数学II、统计学、信息素养II(Python)、数学分析、高等代数'
        ],
        school2: '中央民族大学 & CCIPE',
        degree2: '微专业：国际组织后备人才',
        major2: '数据科学与大语言模型',
        period2: '2024年9月 - 2025年9月',
        location2: '北京',
        details2: [
          '数据科学与大数据分析',
          '大语言模型：基础、实践与挑战',
          '国际组织理论与实践'
        ],
        school3: '剑桥大学 Lucy Cavendish College',
        degree3: '冬季学术研究研讨会',
        major3: '商业与金融',
        period3: '2023年12月 - 2024年1月',
        location3: '英国剑桥',
        details3: [
          '获得项目学术主任 Prof. Nicola Clayton 推荐信'
        ]
      },
      skillCategories: {
        technicalTools: '技术工具',
        dataScience: '数据科学与分析',
        coreCompetencies: '核心能力'
      },
      // 新增核心能力技能项目翻译
      coreSkills: {
        financialModeling: '金融建模',
        timeSeriesForecasting: '时间序列预测',
        multimodalLLM: '多模态LLM',
        klineRecognition: 'K线识别',
        quantitativeAnalysis: '量化分析',
        econometrics: '计量经济学',
        dataAnalysis: '数据分析',
      },
      // 新增奖项翻译
      awards: {
        award1: { title: '"正大杯"全国大学生市场调研与分析大赛', level: '全国一等奖', year: '2025年6月' },
        award2: { title: '内地与港澳台创新创业大赛', level: '入围奖', year: '2024年11月' },
        award3: { title: '中国数据新闻大赛', level: '全国二等奖', year: '2024年11月' },
        award4: { title: '全国大学生商业精英挑战赛创新创业竞赛', level: '全国总决赛亚军', year: '2024年11月' },
        award5: { title: '全国大学生商业精英挑战赛创新创业竞赛', level: '全国一等奖', year: '2024年11月' },
        award6: { title: '中国大学生计算机设计大赛(4C)', level: 'Web产品赛道全国二等奖', year: '2024年7月' },
        award7: { title: '全国大学生电子商务"创新、创意及创业"挑战赛', level: '全国二等奖', year: '2024年7月' },
        award8: { title: '全国大学生统计建模竞赛', level: '北京赛区一等奖', year: '2023年8月' },
        award9: { title: '国家级大学生创新创业实践项目', level: '结项项目', year: '2024年6月' }
      }
    },
    experience: {
      title: '工作经历',
      subtitle: '从创业到投资，从量化研究到AI应用，积累了丰富的跨领域经验',
      current: '至今',
      present: '现在',
      workExperience: '工作经历',
      timeline: '时间线',
      workDetails: {
        job1: {
          company: '量科智视信息科技有限公司',
          position: '联合创始人，产品负责人',
          period: '2024年8月 - 2025年8月',
          location: '北京',
          description: [
            '主导开发多模态AI驱动的戏剧教育平台，从0到1完成产品设计到商业化落地，首年B2G收入突破10万元人民币',
            '成功获得Wteam非稀释性资金投资，获得投资方对技术实力和商业模式的认可',
            '独立设计并开发集成大语言模型的模块化Web应用架构，在中国大学生计算机设计大赛中荣获全国二等奖'
          ],
          skills: ['AI/ML', '产品管理', '创业融资', 'Web开发']
        },
        job2: {
          company: 'MiraclePlus (原Y Combinator中国)',
          position: '创始人关系与精准研究实习生',
          period: '2024年8月 - 2025年1月',
          location: '北京',
          description: [
            '深度研究前沿AI技术（AI for Science、大语言模型、多模态），识别新兴趋势并为投资决策提供数据支撑',
            '系统梳理200+所高校和企业的人才网络资源，建立创业项目储备库，促进产学研商业化合作',
            '独立完成项目初步筛选（市场规模分析、单位经济测算）和Pre-DD，撰写数据驱动的投资分析报告，为投资决策提供专业建议',
            '深度参与Sealos共同领投的A轮前融资和实时AI仿真平台种子轮融资，负责商业尽职调查和条款清单设计，两轮融资规模均达数千万人民币'
          ],
          skills: ['投资分析', '市场研究', '尽职调查', 'AI趋势分析']
        },
        job3: {
          company: '光大证券',
          position: '量化研究实习生',
          period: '2024年6月 - 2024年8月',
          location: '远程',
          description: [
            '熟练运用Python和量化分析工具进行策略回测，系统评估交易算法的有效性和稳定性',
            '独立开发多维度量化策略体系，涵盖选股框架、择时模型和风险收益评估标准',
            '通过精细化参数调优和动态风险管理机制，持续优化现有策略，显著提升风险调整后收益水平'
          ],
          skills: ['量化分析', 'Python', '策略回测', '风险管理']
        },
        job4: {
          company: '卓晔私募基金',
          position: '行业研究实习生',
          period: '2024年6月 - 2024年8月',
          location: '远程',
          description: [
            '深度参与PE投资AI基础设施领域研究，负责数据清洗/挖掘、行业洞察分析和投资价值评估框架构建',
            '全面支持AI行业交易尽职调查：深入分析行业发展趋势、竞争格局和目标公司基本面，为投资可行性评估和投资备忘录撰写提供专业支持'
          ],
          skills: ['行业研究', '尽职调查', '投资分析', 'AI基础设施']
        }
      },
      timelineEvents: {
        event1: { month: '6月', event: '获得"正大杯"全国大学生市场调研与分析大赛全国一等奖' },
        event2: { month: '5月', event: '量科智视获得Wteam非稀释性资金投资' },
        event3: { month: '4月', event: '量科智视首年B2G收入突破10万元人民币' },
        event4: { month: '3月', event: '量科智视产品正式上线' },
        event5: { month: '2月', event: '完成量科智视产品设计和开发' },
        event6: { month: '1月', event: '在MiraclePlus完成实习，获得投资分析经验' },
        event7: { month: '12月', event: '参与Sealos A轮前融资尽职调查' },
        event8: { month: '11月', event: '参与实时AI仿真平台种子轮融资' },
        event9: { month: '10月', event: '系统梳理200+所高校和企业人才网络' },
        event10: { month: '9月', event: '开始研究前沿AI技术趋势' },
        event11: { month: '8月', event: '在光大证券完成量化研究实习' },
        event12: { month: '7月', event: '在卓晔私募基金完成行业研究实习' },
        event13: { month: '12月', event: '参加剑桥大学冬季学术研究研讨会，获得Prof. Nicola Clayton教授推荐信' },
        event14: { month: '8月', event: '获得全国大学生统计建模竞赛北京赛区一等奖' },
        event15: { month: '9月', event: '进入中央民族大学金融学专业学习，主修金融学，辅修数学' }
      }
    },
    projects: {
      title: '项目作品',
      subtitle: '展示我在AI、教育科技和创业领域的核心项目，每个作品都体现了技术创新与商业价值的结合',
      viewProject: '查看项目',
      viewCode: '查看代码',
      productDemos: '产品演示',
      researchProjects: '研究项目',
      watchDemo: '观看演示',
      technologies: '技术栈',
      achievements: '成果',
      projectDetails: {
        zhiyouAI: {
          title: '知游AI',
          description: '多模态AI驱动的戏剧教育平台，集成大语言模型',
          tags: ['AI', '教育', '多模态', 'React'],
          achievements: ['全国二等奖', '逻辑与数据流分析']
        },
        podcastPlatform: {
          title: '播客平台',
          description: '创新的播客内容创作和分享平台，提供丰富的音频内容管理功能',
          tags: ['音频', '内容管理', 'Web应用'],
          achievements: ['用户友好', '功能完整', '音视频分析']
        },
        luojikeAI: {
          title: '洛极克人工智能+',
          description: '人工智能综合教育应用平台，展示AI技术在实际场景中的应用，"人工智能+"高等教育典型案例',
          tags: ['AI', '深度学习', '创新应用'],
          achievements: ['教育部', '全国一等奖', '100K+营收', '非稀释性融资']
        },
        researchProject: {
          title: '多模态LLM在金融K线分析中的结构创新',
          description: '在LLaVA投影层开发分割模块，提升K线形态识别准确率15%，获得国家级大学生创新创业训练计划项目批准',
          achievements: ['准确率提升15%', '国家级项目', 'GCCX202510052028']
        }
      },
      ui: {
        projectPreview: '项目预览',
        closeVideo: '关闭视频',
        videoUnavailable: '视频暂不可用',
        videoUnavailableDesc: '该项目的演示视频正在准备中，敬请期待！',
        browserNotSupported: '您的浏览器不支持视频播放。',
        escToClose: 'ESC键关闭视频'
      }
    },
    contact: {
      title: '联系我',
      subtitle: '如果您对我的工作感兴趣，欢迎随时联系我',
      description: '我期待与您交流合作机会，无论是项目合作、技术讨论还是其他相关事宜',
      form: {
        name: '姓名',
        email: '邮箱',
        subject: '主题',
        message: '消息',
        sendMessage: '发送消息',
        sending: '发送中...',
        success: '消息发送成功！',
        error: '发送失败，请重试'
      },
      contactInfo: {
        title: '联系信息',
        email: '邮箱',
        phone: '电话',
        address: '地址'
      },
      socialMedia: {
        title: '社交媒体',
        description: '关注我的最新动态'
      },
      quickResponse: {
        title: '快速响应',
        description: '我通常在24小时内回复'
      },
      contactDetails: {
        address: '北京',
        wechat: '微信'
      }
    },
    navigation: {
      home: '首页',
      about: '关于',
      experience: '经历',
      projects: '项目',
      contact: '联系'
    }
  },
  en: {
    home: {
      title: 'Haoyang Si',
      subtitle: 'AI Product Manager | AI Entrepreneur | Full-Stack Architect',
      description: 'Focused on multimodal AI applications in education, with extensive entrepreneurial experience and academic research background. Committed to combining cutting-edge technology with real business needs to create genuine value.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      coreSkills: 'Core Skills',
      skillsDescription: 'Deep expertise and practical experience across multiple domains',
      technicalDevelopment: 'Technical Development',
      financialAnalysis: 'Financial Analysis',
      aiResearch: 'AI Research',
      entrepreneurship: 'Entrepreneurship',
      technicalDesc: 'Python, React, AI/ML',
      financialDesc: 'Quantitative Trading, Risk Management',
      aiDesc: 'Multimodal LLM, Deep Learning',
      entrepreneurshipDesc: 'Product Design, Business Operations',
      yearsExperience: 'Years Experience',
      awardProjects: 'Award Projects',
      productDemos: 'Product Demos',
      revenueGenerated: 'Revenue Generated'
    },
    about: {
      title: 'About Me',
      subtitle: 'Learn about my background, skills, and achievements',
      description: 'AI product manager focused on AI applications in education, with extensive academic research and entrepreneurial experience',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      achievements: 'Key Achievements',
      basicInfo: 'Basic Information',
      professionalAreas: 'Professional Areas',
      aiMlDev: 'AI/ML Development',
      quantFinance: 'Quantitative Finance',
      multimodalLLM: 'Multimodal LLM',
      entrepreneurship: 'Entrepreneurship',
      educationDetails: {
        school1: 'Minzu University of China',
        degree1: 'Bachelor of Economics',
        major1: 'Finance',
        period1: 'September 2022 - June 2026',
        location1: 'Beijing',
        details1: [
          'Major in Finance, Minor in Mathematics',
          'Core courses: International Finance, Financial Marketing, Securities Investment, Financial Risk Management',
          'Advanced Mathematics II, Statistics, Information Literacy II (Python), Mathematical Analysis, Advanced Algebra'
        ],
        school2: 'Minzu University of China & CCIPE',
        degree2: 'Micro-major: International Organization Reserve Talent',
        major2: 'Data Science and Large Language Models',
        period2: 'September 2024 - September 2025',
        location2: 'Beijing',
        details2: [
          'Data Science and Big Data Analysis',
          'Large Language Models: Foundation, Practice and Challenges',
          'International Organization Theory and Practice'
        ],
        school3: 'University of Cambridge Lucy Cavendish College',
        degree3: 'Winter Academic Research Seminar',
        major3: 'Business and Finance',
        period3: 'December 2023 - January 2024',
        location3: 'Cambridge, UK',
        details3: [
          'Received recommendation letter from Academic Director Prof. Nicola Clayton'
        ]
      },
      skillCategories: {
        technicalTools: 'Technical Tools',
        dataScience: 'Data Science & Analysis',
        coreCompetencies: 'Core Competencies'
      },
      // 新增核心能力技能项目翻译
      coreSkills: {
        financialModeling: 'Financial Modeling',
        timeSeriesForecasting: 'Time Series Forecasting',
        multimodalLLM: 'Multimodal LLM',
        klineRecognition: 'K-line Recognition',
        quantitativeAnalysis: 'Quantitative Analysis',
        econometrics: 'Econometrics',
        dataAnalysis: 'Data Analysis',
      },
      // 新增奖项翻译
      awards: {
        award1: { title: '"Zhengda Cup" National College Student Market Research and Analysis Competition', level: 'National First Prize', year: 'June 2025' },
        award2: { title: 'Mainland and Hong Kong-Macao-Taiwan Innovation and Entrepreneurship Competition', level: 'Finalist Award', year: 'November 2024' },
        award3: { title: 'China Data Journalism Competition', level: 'National Second Prize', year: 'November 2024' },
        award4: { title: 'National College Student Business Elite Challenge Innovation and Entrepreneurship Competition', level: 'National Finals Runner-up', year: 'November 2024' },
        award5: { title: 'National College Student Business Elite Challenge Innovation and Entrepreneurship Competition', level: 'National First Prize', year: 'November 2024' },
        award6: { title: 'China College Student Computer Design Competition (4C)', level: 'Web Product Track National Second Prize', year: 'July 2024' },
        award7: { title: 'National College Student E-commerce "Innovation, Creativity and Entrepreneurship" Challenge', level: 'National Second Prize', year: 'July 2024' },
        award8: { title: 'National College Student Statistical Modeling Competition', level: 'Beijing Regional First Prize', year: 'August 2023' },
        award9: { title: 'National College Student Innovation and Entrepreneurship Practice Project', level: 'Completion Project', year: 'June 2024' }
      }
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'From entrepreneurship to investment, from quantitative research to AI applications, accumulating rich cross-domain experience',
      current: 'Present',
      present: 'Present',
      workExperience: 'Work Experience',
      timeline: 'Timeline',
      workDetails: {
        job1: {
          company: 'Quavic Tech Co., Ltd.',
          position: 'Co-founder, Product Lead',
          period: 'August 2024 - August 2025',
          location: 'Beijing',
          description: [
            'Led the development of a multimodal AI-driven drama education platform, completing product design to commercialization from 0 to 1, achieving first-year B2G revenue exceeding 100,000 RMB',
            'Successfully secured non-dilutive funding investment from Wteam, gaining recognition for technical capabilities and business model',
            'Independently designed and developed a modular web application architecture integrating large language models, winning the National Second Prize in China College Student Computer Design Competition'
          ],
          skills: ['AI/ML', 'Product Management', 'Startup Funding', 'Web Development']
        },
        job2: {
          company: 'MiraclePlus (Formerly Y Combinator China)',
          position: 'Founder Relations & Precision Research Intern',
          period: 'August 2024 - January 2025',
          location: 'Beijing',
          description: [
            'Deeply researched cutting-edge AI technologies (AI for Science, Large Language Models, Multimodal), identifying emerging trends and providing data support for investment decisions',
            'Systematically organized talent network resources from 200+ universities and enterprises, building a startup project reserve pool and promoting industry-university-research commercialization cooperation',
            'Independently completed preliminary project screening (market size analysis, unit economics calculation) and Pre-DD, writing data-driven investment analysis reports to provide professional advice for investment decisions',
            'Deeply participated in Sealos co-led Series A pre-funding and real-time AI simulation platform seed round funding, responsible for commercial due diligence and term sheet design, with both rounds reaching tens of millions RMB'
          ],
          skills: ['Investment Analysis', 'Market Research', 'Due Diligence', 'AI Trend Analysis']
        },
        job3: {
          company: 'Everbright Securities',
          position: 'Quantitative Research Intern',
          period: 'June 2024 - August 2024',
          location: 'Remote',
          description: [
            'Proficiently used Python and quantitative analysis tools for strategy backtesting, systematically evaluating the effectiveness and stability of trading algorithms',
            'Independently developed multi-dimensional quantitative strategy system, covering stock selection framework, timing models and risk-return assessment criteria',
            'Continuously optimized existing strategies through fine-tuned parameter optimization and dynamic risk management mechanisms, significantly improving risk-adjusted return levels'
          ],
          skills: ['Quantitative Analysis', 'Python', 'Strategy Backtesting', 'Risk Management']
        },
        job4: {
          company: 'Zhuoye Private Equity Fund',
          position: 'Industry Research Intern',
          period: 'June 2024 - August 2024',
          location: 'Remote',
          description: [
            'Deeply participated in PE investment research in AI infrastructure, responsible for data cleaning/mining, industry insight analysis and investment value assessment framework construction',
            'Comprehensively supported AI industry transaction due diligence: in-depth analysis of industry development trends, competitive landscape and target company fundamentals, providing professional support for investment feasibility assessment and investment memorandum writing'
          ],
          skills: ['Industry Research', 'Due Diligence', 'Investment Analysis', 'AI Infrastructure']
        }
      },
      timelineEvents: {
        event1: { month: 'June', event: 'Won National First Prize in "Zhengda Cup" National College Student Market Research and Analysis Competition' },
        event2: { month: 'May', event: 'Quavic Tech Co., Ltd. secured non-dilutive funding investment from Wteam' },
        event3: { month: 'April', event: 'Quavic Tech Co., Ltd. first-year B2G revenue exceeded 100,000 RMB' },
        event4: { month: 'March', event: 'Quavic Tech Co., Ltd. product officially launched' },
        event5: { month: 'February', event: 'Completed Quavic Tech Co., Ltd. product design and development' },
        event6: { month: 'January', event: 'Completed internship at MiraclePlus, gained investment analysis experience' },
        event7: { month: 'December', event: 'Participated in Sealos Series A pre-funding due diligence' },
        event8: { month: 'November', event: 'Participated in real-time AI simulation platform seed round funding' },
        event9: { month: 'October', event: 'Systematically organized talent network from 200+ universities and enterprises' },
        event10: { month: 'September', event: 'Started researching cutting-edge AI technology trends' },
        event11: { month: 'August', event: 'Completed quantitative research internship at Everbright Securities' },
        event12: { month: 'July', event: 'Completed industry research internship at Zhuoye Private Equity Fund' },
        event13: { month: 'December', event: 'Participated in University of Cambridge Winter Academic Research Seminar, received recommendation letter from Prof. Nicola Clayton' },
        event14: { month: 'August', event: 'Won Beijing Regional First Prize in National College Student Statistical Modeling Competition' },
        event15: { month: 'September', event: 'Started studying Finance at Minzu University of China, majoring in Finance with Mathematics minor' }
      }
    },
    projects: {
      title: 'Projects',
      subtitle: 'Showcase of my core projects in AI, EdTech, and entrepreneurship, each demonstrating the integration of technological innovation and business value',
      viewProject: 'View Project',
      viewCode: 'View Code',
      productDemos: 'Product Demos',
      researchProjects: 'Research Projects',
      watchDemo: 'Watch Demo',
      technologies: 'Technologies',
      achievements: 'Achievements',
      projectDetails: {
        zhiyouAI: {
          title: 'Zhiyou AI',
          description: 'Multimodal AI-driven drama education platform integrating large language models',
          tags: ['AI', 'Education', 'Multimodal', 'React'],
          achievements: ['National Second Prize', 'Logic & Data Flow Analysis']
        },
        podcastPlatform: {
          title: 'Podcast Platform',
          description: 'Innovative podcast content creation and sharing platform with rich audio content management features',
          tags: ['Audio', 'Content Management', 'Web Application'],
          achievements: ['User-Friendly', 'Complete Functionality', 'Audio-Video Analysis']
        },
        luojikeAI: {
          title: 'Luojike AI+',
          description: 'Comprehensive AI education application platform showcasing AI technology in practical scenarios, a typical case of "AI+" higher education',
          tags: ['AI', 'Deep Learning', 'Innovative Application'],
          achievements: ['Ministry of Education', 'National First Prize', '100K+ Revenue', 'Non-Dilutive Funding']
        },
        researchProject: {
          title: 'Structural Innovation of Multimodal LLM in Financial K-line Analysis',
          description: 'Developed segmentation module in LLaVA projection layer, improving K-line pattern recognition accuracy by 15%, approved for National College Student Innovation and Entrepreneurship Training Program',
          achievements: ['15% Accuracy Improvement', 'National Project', 'GCCX202510052028']
        }
      },
      ui: {
        projectPreview: 'Project Preview',
        closeVideo: 'Close Video',
        videoUnavailable: 'Video Unavailable',
        videoUnavailableDesc: 'The demo video for this project is being prepared, stay tuned!',
        browserNotSupported: 'Your browser does not support video playback.',
        escToClose: 'Press ESC to close video'
      }
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'If you are interested in my work, feel free to reach out anytime',
      description: 'I look forward to discussing collaboration opportunities, whether for project partnerships, technical discussions, or other related matters',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        sendMessage: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send, please try again'
      },
      contactInfo: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      },
      socialMedia: {
        title: 'Social Media',
        description: 'Follow my latest updates'
      },
      quickResponse: {
        title: 'Quick Response',
        description: 'I usually respond within 24 hours'
      },
      contactDetails: {
        address: 'Beijing',
        wechat: 'WeChat'
      }
    },
    navigation: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    }
  }
}; 