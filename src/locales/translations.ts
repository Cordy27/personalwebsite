export interface Translations {
  home: {
    title: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    coreSkills: string;
    skillsDescription: string;
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
  };
  experience: {
    title: string;
    subtitle: string;
    current: string;
    present: string;
    workExperience: string;
    timeline: string;
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
      skillsDescription: '在多个领域都有深入的专业知识和实践经验'
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
      entrepreneurship: '创业管理'
    },
    experience: {
      title: '工作经历',
      subtitle: '从创业到投资，从量化研究到AI应用，积累了丰富的跨领域经验',
      current: '至今',
      present: '现在',
      workExperience: '工作经历',
      timeline: '时间线'
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
      achievements: '成果'
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
      skillsDescription: 'Deep expertise and practical experience across multiple domains'
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
      entrepreneurship: 'Entrepreneurship'
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'From entrepreneurship to investment, from quantitative research to AI applications, accumulating rich cross-domain experience',
      current: 'Present',
      present: 'Present',
      workExperience: 'Work Experience',
      timeline: 'Timeline'
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
      achievements: 'Achievements'
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