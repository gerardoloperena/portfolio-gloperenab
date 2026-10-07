export const zhCN = {
  translation: {
    common: {
      portfolio: '作品集',
      home: '首页',
      close: '关闭',
      previous: '上一张',
      next: '下一张',
      image: '第 {{current}} 张，共 {{total}} 张',
      openProject: '查看 {{project}} 详情',
      goHome: '返回主菜单',
    },
    navigation: { projects: '项目', experience: '经历', about: '关于我', contact: '联系' },
    home: {
      greeting: '我是 Gerardo Loperena Bustillos。\n很高兴认识你！',
      introduction:
        '我是一名热爱技术、拥有四年以上经验的开发者，喜欢为参与的每个项目贡献价值与创意 :D。',
    },
    preferences: {
      hide: '隐藏选项',
      show: '显示选项',
      dark: '深色',
      light: '浅色',
      activateDark: '启用深色主题',
      activateLight: '启用浅色主题',
      effectsOn: '特效：开',
      effectsOff: '特效：关',
      disableEffects: '关闭特效',
      enableEffects: '开启特效',
      language: '语言',
      chooseLanguage: '选择语言',
    },
    projects: {
      title: '项目',
      introduction: '我为网页和移动设备开发的平台与系统，通过运用不同技术解决实际需求。',
      context: '项目背景',
      contributions: '主要贡献',
      technologies: '技术栈',
      links: {
        title: '链接',
        project: '查看项目',
        repository: '查看代码仓库',
        reference: '参考页面',
      },
      colegeeks: {
        name: 'Colegeeks',
        role: '全栈开发工程师',
        description:
          '面向公立和私立学校内部流程管理的网页系统。作为 Edumedia TICS 工作的一部分，我负责领导并开发了该项目。',
        context: 'Edumedia TICS - 网页与移动平台',
        contributions: [
          '使用 Laravel（前端和后端模块）、React（仪表板和分析模块）以及 Angular/Ionic（混合系统）开发全栈项目。将一个使用 PHP 开发的旧系统迁移到 Laravel，使其架构现代化。',
          '领导了一个网页平台的完整开发工作，定义了架构、技术栈和任务管理策略。',
          '使用 Ionic 设计了一款混合移动应用作为主要网页系统的补充，重点改善用户体验。',
        ],
      },
      confer: {
        name: 'Confer Control',
        role: '全栈开发工程师',
        description:
          '用于管理议员投票系统的网页平台。我积极参与了新模块实施、重构、测试、硬件集成（显示屏、指纹读取器、人脸识别和麦克风管理）以及客户演示。',
        context: 'Softbot - 网页投票控制系统',
        contributions: [
          '使用 hooks 和可复用组件开发 React 动态模块。',
          '使用 Flask 和 Socket 开发 Python 微服务。',
          '使用 JSONB 字段和存储函数管理 PostgreSQL。',
          '为开发和测试准备 Docker 环境。',
          '集成采用安全令牌身份验证的 REST API。',
        ],
      },
      valConnect: {
        name: '+Val Connect',
        role: '网页与移动开发工程师',
        description:
          '用于管理和控制私人住宅社区或楼宇出入权限的跨平台移动系统。我积极参与了移动应用不同功能和模块的开发。',
        context: 'Motorrax · 专业实习 · 2021',
        contributions: [
          '开发 +Val Connect 跨平台移动系统。',
          '使用 Ionic 和 Angular 实现功能。',
          '与 Laravel 后端进行集成。',
          '使用 Bootstrap 和 SCSS 构建响应式界面组件。',
        ],
      },
      capasiti: {
        name: 'CAPASITI 平台',
        role: '网页开发工程师',
        description: '在创新与信息技术副秘书处实习期间实施的行政管理系统和数字资料库。',
        context: '创新与信息技术副秘书处 · 2019',
        contributions: [
          '实施 CAPASITI 平台的行政管理、控制和资料库系统。',
          '开发并重构现有功能。',
          '进行测试和调试，以确保最佳性能。',
          '使用 MySQL 管理数据持久化。',
        ],
      },
      galleryUsb: {
        name: '照片传到 USB',
        role: '移动开发工程师',
        description:
          '一款 Android 应用，可通过 OTG 从设备图库中选择、查看图片并将其传输到 USB 存储设备。这款应用由我独立开发，旨在优化并简化我母亲的教学流程。',
        context: '独立移动项目 · Android',
        contributions: [
          '实现带缩放控制的图片选择和预览。',
          '通过 USB OTG 安全复制并验证文件。',
          '使用 Kotlin 和 ContentResolver 集成原生模块。',
          '浏览和删除 USB 存储设备中的图片。',
          '支持八种语言并改进无障碍体验。',
        ],
      },
    },
    experience: {
      title: '专业经历',
      introduction: '回顾那些推动我作为全栈开发者不断成长的团队、产品与技术挑战。',
      concurrent: '同期经历',
      items: {
        subsecretaria: {
          company: '创新与信息技术副秘书处',
          workplace: '塔毛利帕斯州维多利亚城',
          role: '初级网页开发工程师',
          summary:
            '我的职业生涯从这里开始，主要负责改进现有门户、开发新模块和指标功能，并进行代码重构与更新。',
          highlights: [
            '使用 CakePHP 和 MySQL 参与开发行政管理系统和数字资料库。',
            '重构现有功能，以改善其运行效果和可维护性。',
            '通过测试和调试确保系统达到最佳性能。',
          ],
        },
        motorrax: {
          company: 'Motorrax',
          workplace: '远程 · 新莱昂州蒙特雷',
          role: '网页与移动开发工程师',
          summary: '我参与了一款跨平台应用的开发，将实际运营需求转化为清晰且易于使用的功能。',
          highlights: [
            '使用 Ionic 和 Angular 为混合应用实现新功能。',
            '参与开发基于 Laravel 的后端。',
            '使用 Bootstrap 和 SCSS 构建响应式界面组件。',
          ],
        },
        eduMedia: {
          company: 'Edumedia TICS',
          workplace: '远程 · 塔毛利帕斯州维多利亚城',
          role: '全栈网页与移动开发工程师',
          summary:
            '这是我最近且持续时间最长的一段职业经历：我参与了多个系统，也有机会从规划阶段开始领导完整产品的开发。',
          highlights: [
            '使用 Laravel 开发前端和后端模块，使用 React 构建仪表板和分析模块，并使用 Angular 和 Ionic 开发混合系统。',
            '将一个使用 PHP 开发的旧系统迁移到 Laravel，使其架构现代化。',
            '领导一个网页平台的完整开发工作，定义其架构、技术栈和任务管理策略。',
            '使用 Ionic 设计了一款混合移动应用作为主要网页系统的补充，重点改善最终用户体验。',
          ],
        },
        softbot: {
          company: 'Softbot',
          workplace: '混合办公 · 塔毛利帕斯州维多利亚城',
          role: '自由职业全栈网页开发工程师',
          summary: '我同时在另一个技术环境中进行协作，参与网页模块、微服务、数据库以及硬件集成。',
          highlights: [
            '使用 hooks 和可复用组件开发多个 React 模块。',
            '使用 Flask 和 Socket 开发 Python 微服务。',
            '管理包含 JSONB 字段和存储函数的 PostgreSQL 数据库。',
            '部署用于开发和测试的 Docker 环境。',
            '集成使用安全令牌身份验证的 REST API。',
          ],
        },
      },
    },
    certificates: {
      title: '证书',
      backToTop: '返回顶部',
      introduction:
        '作为职业成长的一部分，我完成了这些课程，以巩固专业知识并将其转化为更好的成果。',
      items: {
        aws: {
          name: 'AWS Cloud Practitioner Essentials',
          issuer: 'AWS 培训与认证',
        },
        googleUx: {
          name: '用户体验（UX）设计基础',
          issuer: 'Google 用户体验设计专业证书',
        },
        claudeCode: {
          name: 'Claude Code 101',
          issuer: 'Claude Academy',
        },
      },
    },
    about: {
      title: '关于我',
      heroAlt: '封面图片',
      introduction:
        '我从小就对科技充满热情。小学时，我通过创作最早的数字绘画，并逐帧赋予它们生命，开始进入计算机的世界。我认为自己是一个开朗、有趣的人，总是希望让朋友、家人和认识的人露出笑容。身边的人认为我体贴、聪明、有责任感，并且注重细节。我始终愿意全力以赴，让成果不仅实用，也能为需要它们的人带来具有吸引力的体验。',
      hobbies: {
        title: '我最喜欢的爱好',
        items: {
          videoGames: {
            title: '电子游戏',
            description:
              '我喜欢和朋友以及兄弟一起玩电子游戏。我喜欢战术射击游戏Valorant、Escape Simulator等解谜游戏，以及Sonic和Banjo-Kazooie等冒险与平台游戏。',
            imageAlt: '最喜欢的电子游戏',
          },
          music: {
            title: '音乐',
            description:
              '摇滚是我最喜欢的音乐类型。我喜欢Linkin Park、Bring Me The Horizon、Twenty One Pilots和Woodkid等乐队与音乐人。',
            imageAlt: '最喜欢的音乐和乐队',
          },
          seriesMovies: {
            title: '剧集与电影',
            description:
              '我喜欢观看剧集和电影。我最喜欢的作品包括The Mentalist、Breaking Bad、Dr. House、Sherlock Holmes、Into the Storm、Re:Zero和Attack on Titan。',
            imageAlt: '最喜欢的剧集和电影',
          },
          travel: {
            title: '旅行',
            description:
              '我喜欢探索新的地方并欣赏那里的风景。我去过瓜纳华托、圣胡安德洛斯拉戈斯、莱昂和蒙特雷。我的目标之一是和兄弟一起在蒙特雷生活一段时间，并在未来与他和朋友们一起前往日本旅行。',
            imageAlt: '旅行和去过的地方',
          },
        },
      },
    },
    contact: {
      title: '联系',
      copyValue: '复制{{label}}',
      valueCopied: '{{label}}已复制',
      introduction: '你可以在这里查看我的联系卡片，其中包含与我联系的主要方式。',
      role: '全栈开发工程师',
      cardLabel: 'Gerardo Loperena Bustillos的名片',
      linkedin: 'LinkedIn个人资料',
      whatsapp: '电话',
      email: '电子邮件',
      openLinkedin: '打开LinkedIn个人资料',
      openWhatsapp: '拨打电话',
      phoneInformation: '电话号码',
      openEmail: '撰写电子邮件',
      emailUnavailable: '电子邮件地址。请手动复制该地址。',
      line: 'LINE',
      wechat: '微信',
      openLineContact: '显示LINE联系方式',
      openWechatContact: '显示微信联系方式',
      digitalContact: '数字联系方式',
      qrDescription: '扫描二维码或使用用户ID在{{service}}上添加我。',
      accountId: '用户ID',
      copyId: '复制ID',
      copiedId: 'ID已复制',
      openLineProfile: '打开LINE个人资料',
      lineQrAlt: 'Gerardo Loperena的LINE二维码',
      wechatQrAlt: 'Gerardo Loperena的微信二维码',
    },
    sections: {
      experience: '这里将展示我的职业经历与发展历程。',
      about: '这里将介绍我、我的技能和工作方式。',
      contact: '这里将展示联系我的不同方式。',
      pending: '此部分内容将在下一步添加。',
    },
  },
} as const
