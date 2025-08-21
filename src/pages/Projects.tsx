import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Award, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [videoErrors, setVideoErrors] = useState<Set<string>>(new Set());

  // ESC键关闭视频
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedVideo) {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscKey);
      return () => document.removeEventListener('keydown', handleEscKey);
    }
  }, [selectedVideo]);

  const projects = [
    {
      id: 1,
      title: '知游AI',
      description: '多模态AI驱动的戏剧教育平台，集成大语言模型',
      video: '/product/知游AI_demo.mp4',
      thumbnail: '/product/知游AI.png',
      tags: ['AI', '教育', '多模态', 'React'],
      achievements: ['全国二等奖', '逻辑与数据流分析'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: '播客平台',
      description: '创新的播客内容创作和分享平台，提供丰富的音频内容管理功能',
      video: '/product/播客平台.mp4',
      thumbnail: '/product/播客平台.png',
      tags: ['音频', '内容管理', 'Web应用'],
      achievements: ['用户友好', '功能完整', '音视频分析'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: '洛极克人工智能+',
      description: '人工智能综合教育应用平台，展示AI技术在实际场景中的应用，“人工智能+”高等教育典型案例',
      video: '/product/洛极克_人工智能+.mp4',
      thumbnail: '/product/洛极克_人工智能+.png',
      tags: ['AI', '深度学习', '创新应用'],
      achievements: ['教育部', '全国一等奖',  '100K+营收', '非稀释性融资'],
      github: '#',
      demo: '#'
    }
  ];

  const researchProjects = [
    {
      title: '多模态LLM在金融K线分析中的结构创新',
      description: '在LLaVA投影层开发分割模块，提升K线形态识别准确率15%，获得国家级大学生创新创业训练计划项目批准',
      technologies: ['Python', 'PyTorch', 'HuggingFace', 'NumPy', 'Pandas'],
      achievements: ['准确率提升15%', '国家级项目', 'GCCX202510052028']
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
          <h1 className="text-5xl font-bold text-gray-800 mb-6">{t.projects.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Product Demos */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            {t.projects.productDemos}
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                                  {/* Video Thumbnail */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    {videoErrors.has(project.video) ? (
                      // 显示占位符
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <ImageIcon className="w-8 h-8 text-blue-500" />
                          </div>
                          <p className="text-sm font-medium text-gray-700">{project.title}</p>
                          <p className="text-xs text-gray-500 mt-1">项目预览</p>
                        </div>
                      </div>
                    ) : (
                      <video
                        className="w-full h-full object-cover"
                        poster={project.thumbnail}
                        preload="metadata"
                        onError={() => setVideoErrors(prev => new Set(prev).add(project.video))}
                        onLoadStart={() => {
                          // 预加载视频元数据
                        }}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    )}
                    <button
                      onClick={() => videoErrors.has(project.video) ? null : setSelectedVideo(project.video)}
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        videoErrors.has(project.video) 
                          ? 'bg-gray-200 cursor-default' 
                          : 'bg-black/30 hover:bg-black/50 cursor-pointer'
                      }`}
                      disabled={videoErrors.has(project.video)}
                    >
                      {!videoErrors.has(project.video) && (
                        <Play className="w-16 h-16 text-white" />
                      )}
                    </button>
                  </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">
                      {project.achievements.join(', ')}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => videoErrors.has(project.video) ? null : setSelectedVideo(project.video)}
                      disabled={videoErrors.has(project.video)}
                      className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
                        videoErrors.has(project.video)
                          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <Play className="w-4 h-4" />
                      {t.projects.watchDemo}
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Research Projects */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            {t.projects.researchProjects}
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">{t.projects.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">{t.projects.achievements}</h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedVideo(null);
            }
          }}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white text-3xl font-bold w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 z-10"
              aria-label="关闭视频"
            >
              ✕
            </button>
            {videoErrors.has(selectedVideo) ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">视频暂不可用</h3>
                <p className="text-gray-600">该项目的演示视频正在准备中，敬请期待！</p>
              </div>
            ) : (
              <video
                className="w-full rounded-lg"
                controls
                autoPlay
                onError={(e) => {
                  console.error('Video error:', e);
                  setVideoErrors(prev => new Set(prev).add(selectedVideo));
                }}
                onLoadStart={() => console.log('Video loading started:', selectedVideo)}
                onCanPlay={() => console.log('Video can play:', selectedVideo)}
                onLoadedData={() => console.log('Video data loaded:', selectedVideo)}
              >
                <source src={selectedVideo} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 