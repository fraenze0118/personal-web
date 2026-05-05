# 个人网站设计文档

## 1. 概述

**定位**: 个人简历 + 项目展示的单页网站
**风格**: 简洁、技术风 (terminal / code-inspired)、暗色主题
**技术栈**: React 19 + Vite 8 + TypeScript 6 + Tailwind CSS v4

---

## 2. 设计理念

### 2.1 视觉关键词
- **终端美学**: 命令行提示符 `>`、光标闪烁、等宽字体点缀
- **暗色主题**: 深色背景 + 高对比度文字，减少视觉疲劳
- **几何线条**: 网格背景、细线分隔、代码块装饰
- **留白**: 大量留白营造呼吸感，信息密度低

### 2.2 色彩系统

| 用途 | 颜色 | 色值 |
|------|------|------|
| 背景主色 | 深灰黑 | `#0a0a0f` |
| 背景次色 | 略浅黑 | `#111118` |
| 卡片/面板 | 深灰 | `#1a1a24` |
| 边框 | 暗灰 | `#2a2a38` |
| 主文字 | 浅灰白 | `#e4e4ec` |
| 次文字 | 中灰 | `#8888a0` |
| 强调色-青 | 终端青 | `#00e5ff` (cyan) |
| 强调色-绿 | 终端绿 | `#00ff88` (green) |
| 强调色-紫 | 点缀紫 | `#a78bfa` (violet) |
| 警告/高亮 | 终端黄 | `#ffd700` |

### 2.3 字体层级

| 层级 | 字体 | 用途 |
|------|------|------|
| 标题 | `JetBrains Mono` / `Fira Code` | 所有标题、导航 |
| 正文 | `Inter` / 系统默认 | 正文段落 |
| 代码点缀 | `JetBrains Mono` | 标签、终端文本、技能标签 |

### 2.4 间距系统
- 使用 Tailwind 默认间距 (4px 步进)
- 段落间距: `gap-8` ~ `gap-16`
- 页面左右 padding: `px-6` ~ `px-24` (响应式)

---

## 3. 页面结构 (单页)

```
┌──────────────────────────────────────┐
│  Navigation (fixed top)              │
│  [Logo]  About  Skills  Projects     │
├──────────────────────────────────────┤
│                                      │
│  HERO                                │
│  - 终端风格问候语                      │
│  - 名字 + 角色标签                     │
│  - CTA 按钮                          │
│                                      │
├──────────────────────────────────────┤
│  ABOUT                               │
│  - 简短自我介绍                        │
│  - 技术栈标签云                        │
│                                      │
├──────────────────────────────────────┤
│  PROJECTS                            │
│  - 项目卡片网格 (2-3 列)              │
│  - 每个卡片: 标题/描述/技术标签/链接    │
│                                      │
├──────────────────────────────────────┤
│  EXPERIENCE / TIMELINE               │
│  - 时间线组件                         │
│  - 工作/教育经历                      │
│                                      │
├──────────────────────────────────────┤
│  CONTACT                             │
│  - 社交链接                           │
│  - 邮箱 (终端风格展示)                 │
│                                      │
├──────────────────────────────────────┤
│  Footer                              │
│  - 简洁版权信息                        │
│  - "built with" 技术栈               │
└──────────────────────────────────────┘
```

---

## 4. 组件树

```
App
├── Navigation        (fixed top, 毛玻璃效果)
│   ├── Logo          (带闪烁光标的终端提示符)
│   └── NavLinks      (锚点导航)
├── Hero
│   ├── TerminalGreeting  (打字机效果)
│   ├── NameTitle
│   └── CTAGroup
├── About
│   ├── SectionTitle
│   ├── BioText
│   └── SkillCloud    (多色标签)
├── Projects
│   ├── SectionTitle
│   └── ProjectGrid
│       └── ProjectCard[]  (带 hover 动效)
├── Timeline
│   ├── SectionTitle
│   └── TimelineItem[]
├── Contact
│   ├── SectionTitle
│   └── ContactLinks
└── Footer
    └── FooterText
```

---

## 5. 关键交互与动效

### 5.1 打字机效果 (Hero)
- 终端前缀 `$` 或 `>` 固定显示
- 文字逐字出现，光标闪烁
- 纯 CSS 实现或轻量 JS

### 5.2 滚动渐显
- 使用 Intersection Observer
- 元素从下方淡入 + 上移 (fade-in-up)
- Tailwind `animate` + 自定义 animation

### 5.3 卡片 Hover
- 边框从 `#2a2a38` 渐变到强调色
- 轻微上浮 `translateY(-4px)`
- 阴影扩散

### 5.4 导航高亮
- 滚动时对应的导航项高亮 (Intersection Observer)
- 下划线或侧边指示条

### 5.5 网格背景
- CSS `background-image` 绘制细线网格
- 固定在背景层，不随内容滚动

---

## 6. 响应式策略

| 断点 | 宽度 | 布局变化 |
|------|------|----------|
| Base | < 640px | 单列，导航汉堡菜单 |
| sm | ≥ 640px | 单列，导航展开 |
| md | ≥ 768px | 项目卡片 2 列 |
| lg | ≥ 1024px | 项目卡片 3 列，更大内边距 |

---

## 7. 数据流

所有内容数据集中管理，方便后续维护:

```
src/
├── data/
│   ├── profile.ts    (姓名、角色、简介、头像)
│   ├── skills.ts     (技能列表，含分类)
│   ├── projects.ts   (项目列表)
│   ├── timeline.ts   (经历时间线)
│   └── social.ts     (社交链接)
```

组件通过直接 import 获取数据，无需状态管理库。

---

## 8. 目录结构

```
src/
├── main.tsx
├── App.tsx
├── index.css              (Tailwind + 全局样式)
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Timeline.tsx
│   ├── TimelineItem.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionTitle.tsx   (复用标题组件)
│   └── FadeIn.tsx         (滚动渐显 wrapper)
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── timeline.ts
│   └── social.ts
├── hooks/
│   └── useScrollSpy.ts    (导航高亮)
└── types/
    └── index.ts           (共享类型定义)
```

---

## 9. 实施步骤

### Phase 1: 基础设施
1. 安装 Tailwind CSS v4 + 配置
2. 配置暗色主题、自定义颜色、字体
3. 添加全局样式 (网格背景、滚动行为、字体引入)
4. 配置 `index.html` 引入 Google Fonts (JetBrains Mono + Inter)

### Phase 2: 布局骨架
5. 创建 Section 级组件骨架 (空壳 + 占位)
6. 实现 Navigation (固定顶部、毛玻璃)
7. 实现 Footer
8. App.tsx 组装整体布局

### Phase 3: 核心组件
9. 实现 Hero (终端问候 + 打字效果)
10. 实现 About (介绍 + 技能标签云)
11. 实现 SectionTitle 复用组件

### Phase 4: 项目 & 经历
12. 实现 ProjectCard + Projects 网格
13. 实现 Timeline + TimelineItem

### Phase 5: 收尾
14. 实现 Contact 区域
15. 实现 FadeIn 滚动动画 wrapper
16. 实现 useScrollSpy 导航高亮
17. 响应式适配调整

### Phase 6: 数据填充
18. 在 `data/` 中填入真实/示例数据
19. 整体视觉微调

---

## 10. 依赖清单

```json
{
  "dependencies": {
    "react": "^19.2.5",
    "react-dom": "^19.2.5"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "typescript": "~6.0.2",
    "vite": "^8.0.10",
    "@vitejs/plugin-react": "^6.0.1"
  }
}
```

---

## 11. 设计预览 (ASCII)

```
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   ░░░░░░░░░░░░░░  NAVIGATION  ░░░░░░░░░░░░░░░░░
   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
   
   ┌─────────────────────────────────────────┐
   │  > hello.world()                        │
   │                                         │
   │  Hi, I'm 杨奕晨                         │
   │  Full-Stack Developer                   │
   │                                         │
   │  [View Projects]  [Get in Touch]        │
   └─────────────────────────────────────────┘

   ── ABOUT ──────────────────────────────────
   
   A passionate developer who loves building
   elegant solutions to complex problems...
   
   ┌─ Skills ────────────────────────────────┐
   │ React  TypeScript  Node.js  Python      │
   │ Docker  PostgreSQL  AWS  GraphQL        │
   └──────────────────────────────────────────┘

   ── PROJECTS ───────────────────────────────

   ┌──────────┐  ┌──────────┐  ┌──────────┐
   │ Project  │  │ Project  │  │ Project  │
   │   #1     │  │   #2     │  │   #3     │
   │ React    │  │ Node.js  │  │  Full-   │
   │ TS       │  │ Express  │  │  Stack   │
   └──────────┘  └──────────┘  └──────────┘

   ── EXPERIENCE ─────────────────────────────
   
   ● 2025.09 ~ Now  ─ 开发工程师 @ 华泰证券
   │
   ● 2023.09 ~ 2025.06 ─ EE Master @ UCLA
   │
   ● 2019.09 ~ 2023.06 ─ EE Bachelor @ UCSD

   ── CONTACT ────────────────────────────────
   
   > echo "hello@example.com"
   [GitHub] [LinkedIn] [Twitter]
```

---

## 12. 个人信息数据

### 基本信息
- **姓名**: 杨奕晨
- **英文名**: Yichen Yang
- **年龄**: 25
- **职业**: 开发工程师 (Full-Stack Developer)

### 教育经历
| 时间 | 学校/机构 | 学位/角色 |
|------|-----------|-----------|
| 2025.09 ~ 至今 | 华泰证券 | 开发工程师 |
| 2023.09 ~ 2025.06 | UCLA | 电子工程 硕士 |
| 2019.09 ~ 2023.06 | UCSD | 电子工程 本科 |

### 技能标签 (可调整)
`TypeScript` `React` `Vite` `Node.js` `Python` `PostgreSQL` `Docker` `Tailwind CSS` `Git` `Linux`

---

## 13. 后续可扩展方向 (当前不做) (当前不做)

- 博客板块
- 多语言切换 (中/英)
- 暗色/亮色主题切换
- 项目详情 modal/页面
- 访问统计
