import type { Project } from "../types";

const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    title: {
      zh: "Amadeus",
      en: "Amadeus",
    },
    thumbnail:  "/images/amadeus-01.jpg",
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
    videoUrl: `${base}videos/amadeus-demo.mp4`,
    techs: ["Electron", "TypeScript", "React", "Three.js", "Node.js", "Python", "PostgreSQL"],
    github: "https://github.com",
  },
  // {
  //   title: {
  //     zh: "证券交易系统",
  //     en: "Securities Trading System",
  //   },
  //   description: {
  //     zh: "证券交易平台，Java 后端 + Vue 前端，支持策略下单、自动清结算、持仓管理。",
  //     en: "Securities trading platform with Java backend and Vue frontend, supporting strategy trading, auto settlement, and position management.",
  //   },
  //   detail: {
  //     zh: "多功能的证券交易系统。后端基于 Java 构建，使用 MySQL 进行交易数据持久化，Kafka 实现异步消息队列与事件驱动架构，Redis 缓存热点数据如实时行情与用户会话。前端采用 Vue 搭建交易界面。核心功能覆盖完整交易生命周期：用户认证与权限管理、手动/策略下单、自动清结算引擎、实时持仓展示、股票信息查询等，具备高并发处理能力和数据一致性保障。",
  //     en: "A securities trading system with multiple functionalities. The backend is built with Java, using MySQL for transaction persistence, Kafka for async messaging and event-driven architecture, and Redis for caching hot data like real-time quotes and user sessions. The frontend is built with Vue. Core features span the full trading lifecycle: user authentication & authorization, manual/strategy order placement, automated clearing & settlement engine, real-time position display, stock information query, and more — designed for high concurrency with strong data consistency guarantees.",
  //   },
  //   features: [
  //     {
  //       zh: "用户认证 — 安全登录与权限管理体系",
  //       en: "User auth — secure login and role-based access control",
  //     },
  //     {
  //       zh: "手动下单 — 支持市价单、限价单等多种订单类型",
  //       en: "Manual trading — market orders, limit orders, and more",
  //     },
  //     {
  //       zh: "策略下单 — 自动化交易策略执行引擎",
  //       en: "Strategy trading — automated trading strategy execution engine",
  //     },
  //     {
  //       zh: "自动清结算 — 日终自动完成资金与持仓清算",
  //       en: "Auto settlement — automated daily fund and position clearing",
  //     },
  //     {
  //       zh: "持仓展示 — 实时持仓盈亏与历史记录",
  //       en: "Position display — real-time P&L and historical position records",
  //     },
  //     {
  //       zh: "股票信息 — 实时行情、K 线数据与基本面展示",
  //       en: "Stock info — real-time quotes, candlestick charts, and fundamentals",
  //     },
  //   ],
  //   techs: ["Java", "Spring Boot", "MySQL", "Kafka", "Redis", "Vue", "Docker"],
  //   github: "https://github.com",
  // },
  {
    title: {
      zh: "Yiy-Note",
      en: "Yiy-Note",
    },
    thumbnail:"/images/yiy-note-02.png",
    description: {
      zh: "本地优先的个人知识管理系统，支持思维导图式知识图谱、Markdown 编辑与全文检索。",
      en: "Local-first personal knowledge management system with mind-map knowledge graph, Markdown editing, and full-text search.",
    },
    detail: {
      zh: "面向自学者的个人 Wiki 知识库。基于 Next.js 构建，零数据库依赖——所有数据以 Markdown + JSON 文件存储在本地。核心能力包括：XMind 风格知识图谱（React Flow + dagre 布局，7 层可视化节点层级）、带 [[wiki-link]] 自动补全的 Markdown 编辑器、KaTeX 数学公式渲染、代码语法高亮、全文搜索与标签云、GitHub 风格年度热力图。支持 Electron 桌面端，提供 frameless 窗口与系统托盘。已实现 10 项 WCAG 无障碍适配。",
      en: "A personal wiki knowledge base for self-directed learners. Built with Next.js, zero database dependency — all data stored locally as Markdown + JSON files. Core capabilities: XMind-style knowledge graph (React Flow + dagre layout, 7-level visual node hierarchy), Markdown editor with [[wiki-link]] autocomplete, KaTeX math rendering, syntax-highlighted code blocks, full-text search with tag cloud, and a GitHub-style annual contribution heatmap. Also available as an Electron desktop app with frameless window and system tray. Includes 10 WCAG accessibility adaptations.",
    },
    features: [
      {
        zh: "知识图谱 — React Flow + dagre 树形布局，7 层节点视觉层级，自由拖拽",
        en: "Knowledge graph — React Flow + dagre tree layout, 7-level node hierarchy, free dragging",
      },
      {
        zh: "Markdown 编辑 — [[wiki-link]] 自动补全、实时预览、图片粘贴上传",
        en: "Markdown editing — [[wiki-link]] autocomplete, live preview, image paste & upload",
      },
      {
        zh: "KaTeX 渲染 — 块级与行内数学公式渲染，支持化学式",
        en: "KaTeX rendering — block and inline math formula rendering, chemistry support",
      },
      {
        zh: "全文检索 — 按标题、标签、域名实时过滤，结果高亮",
        en: "Full-text search — real-time filtering by title, tag, and domain with result highlighting",
      },
      {
        zh: "年度热力图 — GitHub 风格的笔记贡献日历",
        en: "Contribution heatmap — GitHub-style annual note activity calendar",
      },
      {
        zh: "Electron 桌面端 — frameless 窗口、macOS 风格红绿灯按钮",
        en: "Electron desktop — frameless window with macOS-style traffic light controls",
      },
    ],
    images: [
      `${base}images/yiy-note-01.png`,
      `${base}images/yiy-note-02.png`,
      `${base}images/yiy-note-03.png`,
    ],
    techs: ["Next.js", "TypeScript", "React", "Tailwind CSS", "React Flow", "Electron", "KaTeX"],
    github: "https://github.com/fraenze0118/yiy-note",
  },
  {
    title: {
      zh: "Yiy-Workstation",
      en: "Yiy-Workstation",
    },
    thumbnail:"/images/yiy-workstation-01.jpg",
    description: {
      zh: "ESP32-S3 驱动的可编程桌面外设，TFT 屏+机械按键+编码器+麦克风，Python SDK 开发应用。",
      en: "ESP32-S3 powered programmable desktop peripheral with TFT screen, mechanical keys, encoder, and mic — app development via Python SDK.",
    },
    detail: {
      zh: "一款从零设计的多功能桌面外设（品牌名 Yiy-Workstation）。硬件基于 ESP32-S3，集成 2.8 寸 TFT 彩屏（ST7789, 320x240）、5 颗热插拔机械轴按键、旋转编码器、拨动开关和 PDM 数字麦克风。固件实现 USB 复合设备（CDC 虚拟串口 + HID 键盘），采用自定义文本/二进制混传协议。核心架构哲学是「PC 作大脑，设备作感官」——固件只处理 I/O，所有应用逻辑在 PC 端以 Python 编写。配套 Python SDK 提供帧缓冲差分推送、位图逐块流控、事件回调等能力。已开发 7 个预置应用：番茄钟、屏幕镜像（~6 FPS）、语音电平表（64 段 FFT）、外设自检等。硬件方面包含完整 FreeCAD 外壳设计、立创EDA 原理图与 PCB 设计（已出 Gerber），以及 Electron + Vue 3 桌面启动器。",
      en: "A multi-function desktop peripheral designed from scratch (brand name Yiy-Workstation). Hardware is ESP32-S3 based, featuring a 2.8\" TFT color screen (ST7789, 320x240), 5 hot-swappable mechanical key switches, a rotary encoder, a toggle switch, and a PDM digital microphone. Firmware implements a USB composite device (CDC virtual serial + HID keyboard) using a custom text/binary hybrid protocol. The core architecture philosophy is 'PC as the brain, device as the senses' — firmware handles I/O only, while all application logic runs on the PC side in Python. The companion Python SDK provides frame buffer diff pushing, chunked bitmap streaming with flow control, and event callbacks. Seven pre-built applications are included: Pomodoro timer, screen mirroring (~6 FPS), voice level meter (64-band FFT), peripheral self-test, and more. Hardware design includes a complete FreeCAD enclosure, EasyEDA schematic & PCB design (Gerber-ready), and an Electron + Vue 3 desktop launcher.",
    },
    features: [
      {
        zh: "ESP32-S3 固件 — Arduino C++，USB 复合设备（CDC + HID 键盘），约 740 行",
        en: "ESP32-S3 firmware — Arduino C++, USB composite device (CDC + HID keyboard), ~740 lines",
      },
      {
        zh: "Python SDK — 帧缓冲差分推送、位图逐块流控、事件回调 API",
        en: "Python SDK — frame buffer diff pushing, chunked bitmap flow control, event callback API",
      },
      {
        zh: "7 个预置应用 — 番茄钟、屏幕镜像、语音电平表、自检工具等",
        en: "7 pre-built apps — Pomodoro timer, screen mirroring, voice level meter, self-test, etc.",
      },
      {
        zh: "完整硬件设计 — 立创EDA 原理图+PCB、FreeCAD 外壳、3D 打印文件",
        en: "Full hardware design — EasyEDA schematic+PCB, FreeCAD enclosure, 3D printing files",
      },
      {
        zh: "桌面启动器 — Electron + Vue 3，自动发现 USB 设备，子进程生命周期管理",
        en: "Desktop launcher — Electron + Vue 3, auto USB device discovery, subprocess lifecycle management",
      },
      {
        zh: "自研通信协议 — 文本命令+二进制流混传，逐块 ACK 流控防丢帧",
        en: "Custom protocol — hybrid text command + binary streaming with chunk-level ACK flow control",
      },
    ],
    images: [
      `${base}images/yiy-workstation-02.jpg`,
      `${base}images/yiy-workstation-03.jpg`,
      `${base}images/yiy-workstation-04.jpg`,
      `${base}images/yiy-workstation-05.jpg`
    ],
    techs: ["ESP32-S3", "Arduino", "C++", "Python", "FreeCAD", "立创EDA", "Electron", "Vue"],
    github: "https://github.com/fraenze0118/yiy-workstation",
  },
  {
    title: {
      zh: "弹球机",
      en: "Pinball Machine",
    },
    thumbnail:"/images/pinball-01.webp",
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
    videoUrl: `${base}videos/pinball-demo.mp4`,
    images: [
      `${base}images/pinball-01.webp`,
      `${base}images/pinball-02.webp`
    ],
    techs: ["Arduino", "SolidWorks", "C++", "Python"],
    github: "https://github.com",
  },
];
