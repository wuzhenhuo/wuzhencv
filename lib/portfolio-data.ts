export type Lang = "en" | "zh"

export type L = { en: string; zh: string }

export type Work = {
  year: string
  title: L
  subtitle?: L
  role: L
  description: L
  tags: L[]
  image: string
  video?: string
  youtubeUrl?: string
  website?: string
  venue?: L
}

export const selectedWorks: Work[] = [
  {
    year: "2025",
    title: { en: "Yingge Dance", zh: "英歌舞" },
    subtitle: { en: "英歌舞", zh: "Yingge Dance" },
    role: { en: "Chief Creator", zh: "主创" },
    description: {
      en: "A humanoid-robot dance piece reinterpreting the traditional Chinese Yingge folk dance through robotics and motion choreography. Awarded the Silver Medal in the Single Routine Dance Category at the 2025 World Humanoid Robot Games.",
      zh: "以人形机器人重新诠释中国传统英歌舞的舞蹈作品，通过机器人与动作编排重构民俗表演。荣获 2025 世界人形机器人运动会单机舞蹈类银牌。",
    },
    tags: [
      { en: "Robotics", zh: "机器人" },
      { en: "Choreography", zh: "编舞" },
      { en: "Performance", zh: "表演" },
    ],
    image: "/images/yingge.jpg",
    venue: {
      en: "World Humanoid Robot Games 2025",
      zh: "2025 世界人形机器人运动会",
    },
  },
  {
    year: "2025",
    title: { en: "Heart of the Machine", zh: "机器之心" },
    subtitle: { en: "机器之心", zh: "Heart of the Machine" },
    role: { en: "Director · AI Film", zh: "导演 · AI 影像" },
    description: {
      en: "An AI-generated short film exploring the emotional interior of artificial beings. Selected for the 1st Robot and Art Design Biennale (Beijing, 2025); First Prize in the Professional Category, AIGC Innovation Track, 2025 China Innovative Video Competition; Outstanding AI Film Award, Beijing Film Academy Awards 2025.",
      zh: "一部以 AI 生成技术探索人工生命情感内在的短片。入选 2025 首届机器人与艺术设计双年展（北京）；获 2025 中国创新影像大赛 AIGC 影像创新赛道专业组一等奖，以及 2025 北京电影学院学院奖 AI 类优秀影片奖。",
    },
    tags: [
      { en: "AI Film", zh: "AI 影像" },
      { en: "Award", zh: "获奖" },
    ],
    image: "/images/work-ai-film.jpg",
    video: "https://player.bilibili.com/player.html?bvid=BV1eUPuzLEej&autoplay=0",
    youtubeUrl: "https://www.youtube.com/watch?v=JKbDT1QDJ10&t=57s",
    venue: {
      en: "Robot and Art Design Biennale, Beijing",
      zh: "机器人与艺术设计双年展 · 北京",
    },
  },
  {
    year: "2022",
    title: {
      en: "Beijing 2022 Paralympic Games",
      zh: "北京 2022 冬残奥会",
    },
    subtitle: {
      en: "Opening & Closing Ceremonies",
      zh: "开闭幕式",
    },
    role: { en: "Multimedia Designer", zh: "多媒体设计" },
    description: {
      en: "Multimedia designer for the Opening and Closing Ceremonies of the Beijing 2022 Winter Paralympic Games, contributing large-scale projection and visual storytelling to a global audience.",
      zh: "担任北京 2022 冬季残奥会开闭幕式多媒体设计，参与大型投影与视觉叙事的整体创作，呈现于全球观众面前。",
    },
    tags: [
      { en: "Live Event", zh: "大型演出" },
      { en: "Projection", zh: "投影" },
    ],
    image: "/images/winterolympic.JPG",
    venue: { en: "National Stadium, Beijing", zh: "北京国家体育场" },
  },
  {
    year: "2024",
    title: { en: "Endless Life", zh: "生生不息" },
    subtitle: { en: "生生不息", zh: "Endless Life" },
    role: { en: "3D Light-Mapping Artist", zh: "3D 光影映射艺术家" },
    description: {
      en: "A digital projection-mapping work selected for the “Encounter: 90 Seconds of Light and Shadow” programme at the Nanshan Sub-venue of Shenzhen Design Week 2024 — a brief encounter in light reflecting on cycles of growth and renewal.",
      zh: "入选 2024 深圳设计周南山分会场「邂逅」光影 90 秒单元的数字光雕作品 —— 一段短暂的光影相遇，映照生长与更新的循环。",
    },
    tags: [
      { en: "3D Mapping", zh: "光影映射" },
      { en: "Installation", zh: "装置" },
    ],
    image: "/images/work-mapping.jpg",
    video: "https://player.bilibili.com/player.html?bvid=BV1S7PuziE8Y&autoplay=0",
    youtubeUrl: "https://www.youtube.com/watch?v=IaBH6mf-nmY",
    venue: { en: "Shenzhen Design Week 2024", zh: "2024 深圳设计周" },
  },
  {
    year: "2023",
    title: { en: "DanceLab V1.0", zh: "舞美动作数据库 V1.0" },
    subtitle: { en: "舞美动作数据库", zh: "DanceLab" },
    role: { en: "Principal Investigator", zh: "项目负责人" },
    description: {
      en: "A motion-capture based dance action database and analysis system recognized under China's National Science and Technology Innovation framework (Ministry of Science and Technology, 2023). Supported by a Beijing Municipal Education Commission research grant; software copyright registered.",
      zh: "基于动作捕捉的舞蹈动作数据库与分析系统，获科技部备案的国家科技创新奖（2023）。由北京市教委科研立项资助，获软件著作权一项。",
    },
    tags: [
      { en: "Research", zh: "研究" },
      { en: "Motion Capture", zh: "动作捕捉" },
      { en: "Software", zh: "软件" },
    ],
    image: "/images/work-vr.jpg",
    video: "https://player.bilibili.com/player.html?bvid=BV1DTPjz4EmD&autoplay=0",
    youtubeUrl: "https://www.youtube.com/watch?v=Svvai9xhJec&t=3s",
    venue: { en: "Beijing Dance Academy", zh: "北京舞蹈学院" },
  },
  {
    year: "2021",
    title: {
      en: "Theatre of Tomorrow (TOT)",
      zh: "明日剧场智慧展演平台",
    },
    subtitle: {
      en: "明日剧场",
      zh: "Theatre of Tomorrow",
    },
    role: { en: "Platform Lead · Co-developer", zh: "项目主创" },
    description: {
      en: "A virtual exhibition and performing-arts platform built with digital game technology. Recipient of the Excellence Award at the TCDIG Global Digital Creativity Competition and Second Prize (Greater Bay Area) at the 2023 LiChuang Competition. Incubated at the Macao Youth Innovation Centre; selected as a National Exemplary Case of Metaverse Innovation in 2024 and 2025.",
      zh: "基于数字游戏技术构建的虚拟展演平台。荣获 TCDIG 全球数字科技创意大赛优秀奖，2023 理创大赛大湾区二等奖及总决赛优胜奖。孵化于澳门青年创业中心，并入选 2024、2025 全国元宇宙优秀产品示范案例。",
    },
    tags: [
      { en: "Virtual Platform", zh: "虚拟平台" },
      { en: "XR", zh: "XR" },
      { en: "Motion Capture", zh: "运动捕捉" },
      { en: "AI", zh: "AI" },
    ],
    image: "/images/work-dome.jpg",
    video: "https://player.bilibili.com/player.html?bvid=BV1wjEvzNEjP&autoplay=0",
    youtubeUrl: "https://www.youtube.com/watch?v=zUbAK1tyvkc",
    website: "https://www.9theater.com",
    venue: { en: "Asia-Europe Expo · Shanghai", zh: "亚欧博览会 · 上海" },
  },
  {
    year: "2020",
    title: { en: "Microcosm", zh: "微观世界" },
    subtitle: { en: "微观世界", zh: "Microcosm" },
    role: { en: "Director · Fulldome", zh: "导演 · 球幕" },
    description: {
      en: "A fulldome film of the unseen living world at the edge of perception. Selected for the 15th Macon Fulldome Festival and the France 360° Film Festival; incubated by Sandbox Immersive Arts Festival.",
      zh: "一部关于感知边缘那个微观生命世界的球幕影像。入选第 15 届马孔球幕电影节及法国 360° 电影节；由砂之盒沉浸影像艺术节孵化。",
    },
    tags: [
      { en: "Fulldome", zh: "球幕" },
      { en: "Immersive", zh: "沉浸式" },
    ],
    image: "/images/domevideo.png",
    venue: { en: "Macon Festival · France 360°", zh: "马孔电影节 · 法国 360°" },
  },
  {
    year: "2019",
    title: { en: "City of Light", zh: "光明之城" },
    subtitle: { en: "光明之城", zh: "City of Light" },
    role: { en: "Projection Mapping Artist", zh: "建筑投影艺术家" },
    description: {
      en: "An architectural projection-mapping work selected for the lighting performance programme of the 2019 Shenzhen–Hong Kong Bi-City Biennale of Urbanism/Architecture — awarded Third Prize. A successor piece, City of Light II, was later featured at the 2022 Shenzhen Contemporary Art and Urban Planning Hall.",
      zh: "入选 2019 深港城市／建筑双城双年展灯光表演单元的建筑投影作品 —— 荣获三等奖。后续作品《光明之城 II》于 2022 年在深圳当代艺术与城市规划馆展映。",
    },
    tags: [
      { en: "Projection Mapping", zh: "建筑投影" },
      { en: "Award", zh: "获奖" },
    ],
    image: "/images/mapping.jpg",
    venue: { en: "Shenzhen–Hong Kong Biennale", zh: "深港城市／建筑双城双年展" },
  },
]

export type Exhibition = {
  year: string
  title: L
  venue: L
}

export const exhibitions: Exhibition[] = [
  {
    year: "2025",
    title: { en: "Heart of the Machine · AI Film", zh: "机器之心 · AI 影像" },
    venue: {
      en: "Beijing Film Academy Awards · BFA",
      zh: "北京电影学院学院奖",
    },
  },
  {
    year: "2025",
    title: {
      en: "1st Robot and Art Design Biennale",
      zh: "首届机器人与艺术设计双年展",
    },
    venue: { en: "Beijing", zh: "北京" },
  },
  {
    year: "2024",
    title: { en: "Endless Life · Light Mapping", zh: "生生不息 · 光影映射" },
    venue: {
      en: "Shenzhen Design Week · Nanshan Venue",
      zh: "深圳设计周 · 南山分会场",
    },
  },
  {
    year: "2024",
    title: {
      en: "National Exemplary Case of Metaverse Innovation",
      zh: "全国元宇宙优秀产品示范案例",
    },
    venue: {
      en: "China Cultural Industries Association",
      zh: "中国文化产业协会",
    },
  },
  {
    year: "2024",
    title: {
      en: "7th China International Import Expo",
      zh: "第七届中国国际进口博览会",
    },
    venue: { en: "Shanghai", zh: "上海" },
  },
  {
    year: "2024",
    title: { en: "Macao Science and Technology Week", zh: "澳门科技周" },
    venue: { en: "Macao", zh: "澳门" },
  },
  {
    year: "2022",
    title: {
      en: "City of Light II · Eyes on Shenzhen",
      zh: "光明之城 II · 目光深圳",
    },
    venue: {
      en: "Shenzhen Contemporary Art & Urban Planning Hall",
      zh: "深圳当代艺术与城市规划馆",
    },
  },
  {
    year: "2022",
    title: { en: "Machine Fairy Tale", zh: "机器童话" },
    venue: { en: "Xie Zilong Art Museum, Changsha", zh: "长沙谢子龙影像艺术馆" },
  },
  {
    year: "2022",
    title: { en: "Theatre of Tomorrow", zh: "明日剧场" },
    venue: {
      en: "MOCA Xinjiang · Asia-Europe Expo",
      zh: "新疆当代美术馆 · 亚欧博览会",
    },
  },
  {
    year: "2020",
    title: { en: "Microcosm · Fulldome", zh: "微观世界 · 球幕影像" },
    venue: {
      en: "15th Macon Festival · France 360°",
      zh: "第 15 届马孔电影节 · 法国 360°",
    },
  },
  {
    year: "2020",
    title: {
      en: "2 Square Meters Theater Dance",
      zh: "两平米舞蹈剧场",
    },
    venue: { en: "Notchmeister, United Kingdom", zh: "英国 Notchmeister" },
  },
  {
    year: "2020",
    title: { en: "Renascence", zh: "涅槃" },
    venue: {
      en: "Shanxi Datong International Light Festival",
      zh: "山西大同国际灯光节",
    },
  },
  {
    year: "2019",
    title: {
      en: "11th National Minority Traditional Sports Games · Closing Ceremony",
      zh: "第十一届少数民族传统体育运动会闭幕式",
    },
    venue: { en: "Hainan · National Broadcast", zh: "海南 · 全国直播" },
  },
  {
    year: "2018",
    title: { en: "Valley of Light", zh: "光之谷" },
    venue: {
      en: "Qintai Grand Theatre, Wuhan · 16th China Drama Festival",
      zh: "武汉琴台大剧院 · 第十六届中国戏剧节",
    },
  },
  {
    year: "2017",
    title: { en: "Jinggang, Jinggang", zh: "井冈 井冈" },
    venue: {
      en: "National Center for the Performing Arts · 2018 Lotus Prize",
      zh: "国家大剧院 · 2018 中国舞蹈荷花奖",
    },
  },
  {
    year: "2016",
    title: { en: "Dawn Home", zh: "黎族家园" },
    venue: {
      en: "5th National Minority Festival · Gold Award",
      zh: "第五届全国少数民族文艺会演 · 金奖",
    },
  },
  {
    year: "2017",
    title: {
      en: "The Song of GuQin · Rain & Summer",
      zh: "古琴之歌 · 雨与夏",
    },
    venue: {
      en: "Walter Reade Theater, Lincoln Center · NYC",
      zh: "纽约林肯中心 Walter Reade 剧场",
    },
  },
  {
    year: "2016",
    title: { en: "The Song of GuQin · Hand Dance", zh: "古琴之歌 · 手舞" },
    venue: {
      en: "Dance on Camera Festival · Lincoln Center",
      zh: "林肯中心 Dance on Camera 电影节",
    },
  },
  {
    year: "2016",
    title: { en: "Reveries about Dunhuang", zh: "敦煌遐想" },
    venue: {
      en: "London Dance Film Festival · The Rose Theatre",
      zh: "伦敦舞蹈电影节 · Rose 剧场",
    },
  },
  {
    year: "2015",
    title: { en: "The Song of GuQin · Chinese Ink", zh: "古琴 · 水墨" },
    venue: {
      en: "Dance on Camera Festival · Lincoln Center",
      zh: "林肯中心 Dance on Camera 电影节",
    },
  },
  {
    year: "2015",
    title: { en: "The Song of GuQin · Hand Dance", zh: "古琴 · 手舞" },
    venue: {
      en: "21st Cucalorus Film Festival, USA · ScreenDance Nordic Tour",
      zh: "美国第 21 届 Cucalorus 电影节 · 北欧舞蹈影像节联映",
    },
  },
  {
    year: "2018",
    title: { en: "Leisure", zh: "逸" },
    venue: {
      en: "Tasmanian International Video Art Festival, Australia",
      zh: "澳大利亚塔斯马尼亚国际影像艺术节",
    },
  },
]

export type Publication = {
  year: string
  title: L
  venue: L
  index?: L
  downloadUrl?: string
}

export const publications: Publication[] = [
  {
    year: "2025",
    title: {
      en: "Research on the System Framework of Humanoid Dance Robots Based on Embodied Intelligence",
      zh: "基于具身智能的舞蹈人形机器人系统框架研究",
    },
    venue: {
      en: "Modern Film Technology, Issue 11",
      zh: "《现代电影技术》2025 年第 11 期",
    },
    index: {
      en: "China S&T Core Journal",
      zh: "中国科技核心期刊",
    },
  },
  {
    year: "2025",
    title: {
      en: "Research on the Creation Practice of Interactive Films Empowered by Artificial Intelligence",
      zh: "人工智能赋能互动电影的创作实践研究",
    },
    venue: { en: "Modern Film Technology", zh: "《现代电影技术》" },
    index: {
      en: "China S&T Journal Citation Report",
      zh: "中国科技核心期刊",
    },
  },
  {
    year: "2025",
    title: {
      en: "Exploring and Practicing Art Design for Theater, Film, and Television in the Age of Intelligent Design",
      zh: "智能设计时代戏剧影视美术设计的探索与实践",
    },
    venue: { en: "EI Compendex", zh: "EI 检索" },
  },
  {
    year: "2025",
    title: {
      en: "A Study of the Role of Immersive Intelligent Virtual Environments and Digital Avatars in Enhancing Students' Sense of Belonging",
      zh: "沉浸式智能虚拟环境与数字分身对学生归属感提升的作用研究",
    },
    venue: { en: "EI Compendex", zh: "EI 检索" },
  },
  {
    year: "2024",
    title: {
      en: "Exploration and Practice of Stage Art Creation in the Era of Intelligent Design",
      zh: "关于智能设计时代舞台美术创作的探索与实践",
    },
    venue: {
      en: "Journal of Lighting Engineering, Vol. 35, No. 6",
      zh: "《照明工程学报》第 35 卷第 6 期",
    },
  },
  {
    year: "2023",
    title: {
      en: "Theatre of Tomorrow — A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology",
      zh: "明日剧场 —— 基于数字游戏技术的虚拟展演平台",
    },
    venue: {
      en: "Entertainment Computing — ICEC 2023, Springer",
      zh: "Entertainment Computing — ICEC 2023, Springer",
    },
    index: {
      en: "DOI: 10.1007/978-981-99-8248-6_41",
      zh: "DOI: 10.1007/978-981-99-8248-6_41",
    },
  },
  {
    year: "2023",
    title: {
      en: "Research on Protection and Development of Non-Material Cultural Heritage Dances Based on Motion Capture and Virtual Reality Technology",
      zh: "基于运动捕捉和虚拟现实技术的非物质文化遗产舞蹈的保护与开发研究",
    },
    venue: { en: "Dance (ISSN 0512-4204)", zh: "《舞蹈》期刊 (ISSN 0512-4204)" },
  },
  {
    year: "2023",
    title: {
      en: "The Application of Metaverse Mechanism in the Performance Field",
      zh: "元宇宙机制在展演领域的应用",
    },
    venue: {
      en: "Performance Technology, Issue 196",
      zh: "《演艺科技》2023 年第 3 期，总 196",
    },
  },
  {
    year: "2023",
    title: {
      en: "On the Application of Generative Art, Interactive Art and AI Art in Performance",
      zh: "浅谈生成艺术、交互艺术和人工智能艺术在展演中的应用",
    },
    venue: {
      en: "Performance Technology, Issue 194",
      zh: "《演艺科技》2023 年第 1 期，总 194",
    },
  },
  {
    year: "2021",
    title: {
      en: "Physical World to Virtual Reality — Motion Capture Technology in Dance Creation",
      zh: "从物理世界到虚拟现实 —— 动作捕捉技术在舞蹈创作中的应用",
    },
    venue: {
      en: "Journal of Physics: Conference Series, Vol. 1828",
      zh: "Journal of Physics: Conference Series, Vol. 1828",
    },
    index: { en: "EI", zh: "EI 检索" },
  },
  {
    year: "2019",
    title: {
      en: "The Application of Visual Image and Interactive Storytelling to Stage Performance",
      zh: "视觉影像与交互叙事在舞台表演中的应用",
    },
    venue: {
      en: "HCI International · Springer Nature",
      zh: "HCI International · Springer Nature",
    },
    index: { en: "EI", zh: "EI 检索" },
  },
  {
    year: "2014",
    title: {
      en: "The Research on Video Processing for Multimedia Dance / Theatre",
      zh: "舞蹈多媒体影像创作研究",
    },
    venue: {
      en: "Book · Hohai University Press (ISBN 978-7-5630-3746-9)",
      zh: "专著 · 河海大学出版社 (ISBN 978-7-5630-3746-9)",
    },
    downloadUrl: "https://drive.google.com/file/d/1vLLBvJp5KVg25q1Waxjw9LwAYg0KygFt/view?usp=sharing",
  },
]

export type TeachingItem = {
  role: L
  institution: L
  detail: L
}

export const teaching: TeachingItem[] = [
  {
    role: {
      en: "Associate Professor · Master's Supervisor",
      zh: "副教授 · 硕士生导师",
    },
    institution: { en: "Beijing Dance Academy", zh: "北京舞蹈学院" },
    detail: {
      en: "Department of Art & Design · 2015 – Present",
      zh: "艺术设计系 · 2015 至今",
    },
  },
  {
    role: { en: "Lecturer", zh: "讲师" },
    institution: { en: "Beijing Dance Academy", zh: "北京舞蹈学院" },
    detail: {
      en: "Department of Art Communication · 2007 – 2015",
      zh: "艺术传播系 · 2007 – 2015",
    },
  },
  {
    role: { en: "Doctoral Supervisor", zh: "博士生导师" },
    institution: { en: "Shinawatra University, Thailand", zh: "泰国西那瓦大学" },
    detail: { en: "Digital Media Arts", zh: "数字媒体艺术" },
  },
  {
    role: { en: "Visiting Scholar", zh: "访问学者" },
    institution: {
      en: "University of California, Irvine",
      zh: "美国加州大学欧文分校",
    },
    detail: { en: "Department of Drama", zh: "戏剧系" },
  },
  {
    role: { en: "Council Member & Research Fellow", zh: "理事 · 研究员" },
    institution: {
      en: "Macao International Youth Think Tank",
      zh: "澳门国际青年智库",
    },
    detail: { en: "", zh: "" },
  },
  {
    role: { en: "Committee Member", zh: "委员" },
    institution: {
      en: "CAAI Education Working Committee",
      zh: "人工智能学会 教育工作委员会",
    },
    detail: { en: "", zh: "" },
  },
  {
    role: { en: "Founding Young Editorial Board", zh: "首届青年编委" },
    institution: {
      en: "China Illuminating Engineering Journal",
      zh: "《照明工程学报》",
    },
    detail: { en: "", zh: "" },
  },
]

export type Course = { name: L; level: L }

export const courses: Course[] = [
  {
    name: { en: "Intermedia Performance Art", zh: "跨媒介展演艺术" },
    level: {
      en: "Graduate · Central Academy of Drama · Department of Digital Theatre",
      zh: "研究生 · 中央戏剧学院数字戏剧系",
    },
  },
  {
    name: { en: "Digital Dance Creation", zh: "数字舞蹈创作" },
    level: {
      en: "Graduate · Beijing Dance Academy",
      zh: "研究生 · 北京舞蹈学院",
    },
  },
  {
    name: {
      en: "Introduction to Artificial Intelligence",
      zh: "人工智能通识课",
    },
    level: {
      en: "Undergraduate · Beijing Dance Academy",
      zh: "本科 · 北京舞蹈学院",
    },
  },
  {
    name: { en: "Robot Dance", zh: "机器人舞蹈" },
    level: {
      en: "Micro-program · Beijing Dance Academy",
      zh: "微专业 · 北京舞蹈学院",
    },
  },
]

export type EducationItem = {
  period: string
  degree: L
  school: L
}

export const education: EducationItem[] = [
  {
    period: "2022 – 2025",
    degree: { en: "Ph.D., Digital Media Arts", zh: "博士 · 数字媒体艺术" },
    school: {
      en: "Macau University of Science and Technology",
      zh: "澳门科技大学",
    },
  },
  {
    period: "2010 – 2011",
    degree: { en: "Visiting Scholar", zh: "访问学者" },
    school: {
      en: "University of California, Irvine",
      zh: "美国加州大学欧文分校",
    },
  },
  {
    period: "2004 – 2007",
    degree: { en: "M.A., Animation", zh: "硕士 · 动画与数字艺术" },
    school: {
      en: "Communication University of China",
      zh: "中国传媒大学",
    },
  },
  {
    period: "2000 – 2004",
    degree: { en: "B.A., Oil Painting", zh: "学士 · 油画" },
    school: {
      en: "Nanjing Normal University, School of Fine Arts",
      zh: "南京师范大学美术学院",
    },
  },
]
