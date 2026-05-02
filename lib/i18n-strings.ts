import type { Lang } from "@/lib/portfolio-data"

type Dict = {
  [key: string]: { en: string; zh: string }
}

export const dict: Dict = {
  // Nav
  "nav.about": { en: "About", zh: "关于" },
  "nav.works": { en: "Works", zh: "作品" },
  "nav.exhibitions": { en: "Exhibitions", zh: "展览" },
  "nav.writing": { en: "Writing", zh: "著述" },
  "nav.teaching": { en: "Teaching", zh: "教学" },
  "nav.contact": { en: "Contact", zh: "联系" },
  "nav.email": { en: "Email", zh: "邮件" },

  // Language toggle
  "lang.toggle.aria": { en: "Switch language", zh: "切换语言" },
  "lang.en": { en: "EN", zh: "EN" },
  "lang.zh": { en: "中", zh: "中" },

  // Theme toggle
  "theme.toggle.aria": { en: "Toggle theme", zh: "切换主题" },

  // Hero
  "hero.eyebrow": {
    en: "AI Artist · Projection Designer · Filmmaker",
    zh: "AI 艺术家 · 投影设计 · 影像导演",
  },
  "hero.title.name": { en: "Wu Zhen", zh: "吴 振" },
  "hero.title.between": { en: "between", zh: "游走于" },
  "hero.title.light": { en: "light,", zh: "光、" },
  "hero.title.motion": { en: "motion", zh: "身体" },
  "hero.title.amp": { en: "&", zh: "与" },
  "hero.title.machine": { en: "machine.", zh: "机器之间。" },
  "hero.description": {
    en: "Associate Professor at Beijing Dance Academy, National Level 2 Stage Art Designer, Ph.D. in Digital Media (MUST). Stage multimedia, digital light sculpture, XR, AI film — designer for the Beijing 2022 Paralympic Games ceremonies. Silver Medal, 2025 World Humanoid Robot Games.",
    zh: "北京舞蹈学院副教授，国家二级舞台美术设计师，澳门科技大学数字媒体博士。涵盖舞台多媒体、数字光雕、XR 与 AI 影像，曾任北京 2022 冬残奥会开闭幕式多媒体设计。2025 世界人形机器人运动会银牌。",
  },
  "hero.based": { en: "Based in Beijing · Macau", zh: "常驻 北京 · 澳门" },
  "hero.cta": { en: "View selected works", zh: "浏览精选作品" },
  "hero.cv": { en: "Download CV", zh: "下载简历" },
  "nav.cv": { en: "CV", zh: "简历" },

  // About
  "about.index": { en: "01", zh: "01" },
  "about.title": { en: "About", zh: "关于" },
  "about.p1": {
    en: "Born in Zhenjiang, 1982. Trained as an oil painter before turning to animation, Wu Zhen now works at the intersection of",
    zh: "1982 年生于镇江。先后修习油画与动画，现工作于",
  },
  "about.dance": { en: "dance", zh: "舞蹈" },
  "about.projection": { en: "projection", zh: "投影" },
  "about.ai": { en: "artificial intelligence", zh: "人工智能" },
  "about.and": { en: " and ", zh: "与" },
  "about.and2": { en: ", ", zh: "、" },
  "about.p1.end": { en: ".", zh: "的交汇之处。" },
  "about.p2": {
    en: "He served as multimedia designer for the opening and closing ceremonies of the Beijing 2022 Winter Paralympic Games. His work Yingge Dance won the Silver Medal in the Single Routine Dance Category at the 2025 World Humanoid Robot Games. His AI film Heart of the Machine received multiple international awards, including First Prize in the AIGC Innovation Track at the 2025 China Innovative Video Competition. His film works have been screened at Lincoln Center in New York and numerous museums and biennales worldwide.",
    zh: "曾担任 2022 北京冬残奥运动会开闭幕式多媒体设计，作品《英歌舞》获 2025 世界人形机器人运动会单机位舞蹈组银牌。AI 影像《机器之心》获多项国际奖项，包括 2025 中国创新视频大赛 AIGC 创新赛道一等奖。影像作品曾于纽约林肯中心及众多美术馆与双年展中展映。",
  },
  "about.p3": {
    en: "Wu has led the development of the DanceLab motion database and the Theatre of Tomorrow (TOT) smart performance platform, both of which have received national-level science and technology innovation awards. His research and creative practice focus on the integration of embodied intelligence, generative AI, and digital performance systems.",
    zh: "主持开发 DanceLab 舞美动作数据库与明日剧场（TOT）智慧展演平台，均获得国家级科技创新奖项。研究与创作实践聚焦具身智能、生成式 AI 与数字表演系统的融合。",
  },
  "about.education": { en: "Education", zh: "教育经历" },

  // Selected Works
  "works.index": { en: "02", zh: "02" },
  "works.title": { en: "Selected Works", zh: "精选作品" },
  "works.subtitle": {
    en: "A selection of recent projects across projection, film, robotics, and immersive platforms.",
    zh: "近年横跨投影、影像、机器人与沉浸式平台的精选作品。",
  },
  "works.venue": { en: "Venue", zh: "展演地" },

  // Exhibitions
  "exhibitions.index": { en: "03", zh: "03" },
  "exhibitions.title": { en: "Exhibitions & Festivals", zh: "展览与电影节" },
  "exhibitions.subtitle": {
    en: "From Lincoln Center to Shenzhen Design Week — selected public screenings, installations and awards.",
    zh: "从林肯中心到深圳设计周 —— 精选公开展映、装置与获奖记录。",
  },

  // Publications
  "publications.index": { en: "04", zh: "04" },
  "publications.title": { en: "Writing & Research", zh: "著述与研究" },
  "publications.subtitle": {
    en: "Peer-reviewed papers, book publications, and journal articles on new media, motion capture, and the digital stage.",
    zh: "围绕新媒体、动作捕捉与数字舞台的同行评审论文、专著与期刊文章。",
  },

  // Teaching
  "teaching.index": { en: "05", zh: "05" },
  "teaching.title": { en: "Teaching", zh: "教学" },
  "teaching.subtitle": {
    en: "Graduate and undergraduate teaching at the intersection of dance, technology, and artificial intelligence.",
    zh: "面向研究生与本科生的教学实践，游走于舞蹈、科技与人工智能之间。",
  },
  "teaching.appointments": { en: "Academic Appointments", zh: "学术任职" },
  "teaching.courses": { en: "Courses Taught", zh: "主讲课程" },
  "teaching.research": { en: "Research Direction", zh: "研究方向" },
  "teaching.research.text": {
    en: "Current research centers on embodied intelligence and humanoid dance robots, generative AI in stage creation, AI-assisted choreography, immersive intelligent virtual environments, and the protection of intangible cultural heritage dance through motion capture and VR.",
    zh: "当前研究聚焦于具身智能与人形舞蹈机器人、生成式 AI 在舞台创作中的应用、AI 辅助编舞、沉浸式智能虚拟环境，以及通过动作捕捉与 VR 技术保护非物质文化遗产舞蹈。",
  },

  // Contact
  "contact.index": { en: "06", zh: "06" },
  "contact.title": { en: "Contact", zh: "联系" },
  "contact.headline.pre": { en: "Open to ", zh: "欢迎就" },
  "contact.headline.mid": { en: "collaborations", zh: "合作" },
  "contact.headline.end": {
    en: " in performance, installation, and AI-assisted image-making.",
    zh: "进行交流 —— 涵盖演出、装置与 AI 辅助影像创作。",
  },
  "contact.email.academic": { en: "Email · Academic", zh: "邮箱 · 学术" },
  "contact.email.studio": { en: "Email · Studio", zh: "邮箱 · 工作室" },
  "contact.portfolio": { en: "Portfolio", zh: "作品集" },
  "contact.studio": { en: "Studio", zh: "工作室地址" },
  "contact.studio.dept": {
    en: "Beijing Dance Academy · Artificial Intelligence Research Institute",
    zh: "北京舞蹈学院 · 人工智能研究院",
  },
  "contact.studio.addr": {
    en: "No. 1 Wan Shou Temple Road / Zhongguancun AI Latitude Community, Haidian District, Beijing",
    zh: "北京市海淀区万寿寺路 1 号 / 中关村AI北纬社区",
  },
  "contact.phone": { en: "Phone", zh: "电话" },

  // Footer
  "footer.role": { en: "Multimedia Artist", zh: "多媒体艺术家" },
  "footer.backToTop": { en: "Back to top", zh: "返回顶部" },
  "footer.cities": { en: "Beijing · Macau", zh: "北京 · 澳门" },
}

export function t(key: keyof typeof dict, lang: Lang) {
  return dict[key][lang]
}
