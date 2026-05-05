import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: {
      zh: "Amadeus",
      en: "Amadeus",
    },
    description: {
      zh: "桌面 AI 伙伴应用，使用 Live2D + 3D 角色实现二次元角色展示与自然交互。",
      en: "Desktop AI companion app featuring Live2D + 3D avatar with natural interaction.",
    },
    detail: {
      zh: "基于 Electron 构建的桌面 AI 伙伴应用。使用 pixi-live2d-display 渲染 Live2D 角色模型，结合 three-vrm 实现 3D 虚拟角色展示。后端集成 LLM 大语言模型与 TTS 语音合成，实现自然的语音对话交互。数据库支持长短期记忆，让 AI 伙伴能够记住用户偏好和历史对话，提供个性化的陪伴体验。",
      en: "A desktop AI companion built with Electron. Uses pixi-live2d-display for rendering Live2D character models and three-vrm for 3D avatar display. Backend integrates LLM and TTS for natural voice conversation. The database supports both short-term and long-term memory, enabling the AI companion to remember user preferences and conversation history for a personalized experience.",
    },
    features: [
      {
        zh: "Live2D 角色渲染 — pixi-live2d-display 实现流畅的二次元角色动画",
        en: "Live2D rendering — smooth anime-style character animation via pixi-live2d-display",
      },
      {
        zh: "3D 虚拟角色 — three-vrm 支持 VRM 模型展示与交互",
        en: "3D avatar — VRM model display and interaction via three-vrm",
      },
      {
        zh: "LLM 对话 — 大语言模型驱动的自然语言对话",
        en: "LLM conversation — natural language dialogue powered by large language models",
      },
      {
        zh: "TTS 语音合成 — 文字转语音，让角色开口说话",
        en: "TTS voice synthesis — text-to-speech brings the character to life",
      },
      {
        zh: "长短期记忆 — 数据库存储用户偏好与对话历史",
        en: "Memory system — database-backed short and long-term memory of user preferences",
      },
      {
        zh: "Electron 桌面应用 — 跨平台桌面端体验",
        en: "Electron app — cross-platform desktop experience",
      },
    ],
    videoUrl: "/videos/amadeus-demo.mp4",
    techs: ["Electron", "TypeScript", "React", "Three.js", "Node.js", "Python", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: {
      zh: "弹球机",
      en: "Pinball Machine",
    },
    description: {
      zh: "自制弹球机，SolidWorks 机械设计 + 3D 打印 + 激光切割 + Arduino 嵌入式控制。",
      en: "DIY pinball machine with SolidWorks mechanical design, 3D printing, laser cutting, and Arduino embedded control.",
    },
    detail: {
      zh: "从零设计并制作的一台完整弹球机。使用 SolidWorks 完成全部机械结构设计，通过 3D 打印制作弹射器、挡板等关键部件，激光切割亚克力面板作为球场底板。控制部分基于 Arduino 编写嵌入式程序，实现分数计数、音效反馈、LED 灯光控制等功能，完整展现了软硬件结合的系统工程能力。",
      en: "A complete pinball machine designed and built from scratch. All mechanical structures designed in SolidWorks, key components (launcher, flippers) 3D-printed, and playfield panels laser-cut from acrylic. The control system runs on Arduino with custom embedded firmware handling score tracking, sound effects, and LED lighting — demonstrating full-spectrum software-hardware integration skills.",
    },
    features: [
      {
        zh: "SolidWorks 机械设计 — 完整的 3D 模型与工程图纸",
        en: "SolidWorks design — complete 3D model and engineering drawings",
      },
      {
        zh: "3D 打印 — 弹射器、挡板等关键部件 FDM 打印",
        en: "3D printing — FDM-printed launcher, flippers, and key components",
      },
      {
        zh: "激光切割 — 亚克力面板精密加工",
        en: "Laser cutting — precision acrylic playfield fabrication",
      },
      {
        zh: "Arduino 控制 — 嵌入式程序实现分数、音效、灯光",
        en: "Arduino control — embedded firmware for scoring, sound, and LED lighting",
      },
      {
        zh: "电路设计 — 传感器、舵机、LED 矩阵布线",
        en: "Circuit design — sensor, servo, and LED matrix wiring",
      },
    ],
    videoUrl: "/videos/pinball-demo.mp4",
    images: [
      "/images/pinball-01.jpg",
      "/images/pinball-02.jpg"
    ],
    techs: ["Arduino", "SolidWorks", "C++", "Python"],
    github: "https://github.com",
  },
  {
    title: {
      zh: "证券交易系统",
      en: "Securities Trading System",
    },
    description: {
      zh: "证券交易平台，Java 后端 + Vue 前端，支持策略下单、自动清结算、持仓管理。",
      en: "Securities trading platform with Java backend and Vue frontend, supporting strategy trading, auto settlement, and position management.",
    },
    detail: {
      zh: "多功能的证券交易系统。后端基于 Java 构建，使用 MySQL 进行交易数据持久化，Kafka 实现异步消息队列与事件驱动架构，Redis 缓存热点数据如实时行情与用户会话。前端采用 Vue 搭建交易界面。核心功能覆盖完整交易生命周期：用户认证与权限管理、手动/策略下单、自动清结算引擎、实时持仓展示、股票信息查询等，具备高并发处理能力和数据一致性保障。",
      en: "A securities trading system with multiple functionalities. The backend is built with Java, using MySQL for transaction persistence, Kafka for async messaging and event-driven architecture, and Redis for caching hot data like real-time quotes and user sessions. The frontend is built with Vue. Core features span the full trading lifecycle: user authentication & authorization, manual/strategy order placement, automated clearing & settlement engine, real-time position display, stock information query, and more — designed for high concurrency with strong data consistency guarantees.",
    },
    features: [
      {
        zh: "用户认证 — 安全登录与权限管理体系",
        en: "User auth — secure login and role-based access control",
      },
      {
        zh: "手动下单 — 支持市价单、限价单等多种订单类型",
        en: "Manual trading — market orders, limit orders, and more",
      },
      {
        zh: "策略下单 — 自动化交易策略执行引擎",
        en: "Strategy trading — automated trading strategy execution engine",
      },
      {
        zh: "自动清结算 — 日终自动完成资金与持仓清算",
        en: "Auto settlement — automated daily fund and position clearing",
      },
      {
        zh: "持仓展示 — 实时持仓盈亏与历史记录",
        en: "Position display — real-time P&L and historical position records",
      },
      {
        zh: "股票信息 — 实时行情、K 线数据与基本面展示",
        en: "Stock info — real-time quotes, candlestick charts, and fundamentals",
      },
    ],
    techs: ["Java", "Spring Boot", "MySQL", "Kafka", "Redis", "Vue", "Docker"],
    github: "https://github.com",
  }
];
