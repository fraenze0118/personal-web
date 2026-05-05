# 媒体资源加载优化方案

## 问题

当前视频（18MB + 5MB）和图片直接从 GitHub Pages 静态加载，访问慢，尤其是国内网络。

## 优化方案

### 方案 A：视频压缩（最直接，无需外部服务）

使用 FFmpeg 压缩视频：

```bash
# Amadeus 视频：18MB → ~5MB（H.265 编码）
ffmpeg -i amadeus-demo.mp4 -c:v libx265 -crf 30 -preset slow -c:a aac -b:a 64k amadeus-demo-compressed.mp4

# 或限制码率（H.264 兼容性更好）
ffmpeg -i amadeus-demo.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 64k -movflags +faststart amadeus-demo-compressed.mp4
```

| 指标 | 压缩前 | 压缩后 |
|------|--------|--------|
| Amadeus | 18 MB | ~5 MB |
| Pinball | 5.1 MB | ~2 MB |
| 总加载量 | 23 MB | ~7 MB |

### 方案 B：前端懒加载（代码层面）

改动小，避免首屏一次性加载所有视频：

**视频 `preload="none"`**
```html
<video src="..." preload="none" controls>
```
浏览器不会预加载视频数据，只在用户点击播放时才下载。

**图片 `loading="lazy"`**
```html
<img src="..." loading="lazy" />
```
滚动到附近才加载图片。

**视频缩略图 poster**
```html
<video src="..." poster="/images/amadeus-poster.webp" preload="none" controls>
```
先显示轻量缩略图，用户更明确内容是什么。

### 方案 C：外链托管（最彻底）

视频不放在仓库里，上传到外部平台：

| 平台 | 国内速度 | 费用 | 适用 |
|------|----------|------|------|
| **Bilibili** | 极快 | 免费 | 演示视频 |
| **Cloudflare R2** | 一般 | 免费 10GB | 静态文件 |
| **阿里云 OSS** | 极快 | 按量付费 | 大文件 |
| **GitHub Releases** | 一般 | 免费 | 二进制附件 |

推荐组合：
- 视频 → Bilibili / Cloudflare R2
- 图片 → 压缩后用 `loading="lazy"` 放仓库

### 方案 D：图片格式优化

```bash
# PNG/JPG → WebP（体积减少 30-50%）
cwebp -q 80 pinball-01.jpg -o pinball-01.webp
```

---

## 实施建议

### 本期实施（低风险，立即可做）

1. **视频 `preload="none"`** — 改 ProjectDetail.tsx，加 `preload="none"` 属性
2. **图片 `loading="lazy"`** — 改 ProjectDetail.tsx 图片轮播
3. **图片转 WebP** — 压缩 `public/images/` 下的图片

### 后续考虑

4. 视频压缩 → 需要安装 FFmpeg，手动操作
5. 视频迁到 Bilibili → 上传后用 `videoUrl` 指向 B 站嵌入链接
6. 大文件 CDN 托管 → 需要额外配置

---

## 文件改动清单

| 文件 | 改动 |
|------|------|
| `ProjectDetail.tsx` | video 加 `preload="none"` `poster`；img 加 `loading="lazy"` |
| `public/images/*.jpg` | 压缩或转 WebP |
| `projects.ts` | 如有外部视频链接，更新 `videoUrl` |

---

## 预期效果

| 指标 | 优化前 | 优化后 |
|------|--------|--------|
| 首屏加载 | ~23 MB 全量 | ~1 MB（懒加载） |
| 详情打开 | 立即下载视频 | 点击播放才加载 |
| 图片加载 | 阻塞渲染 | 异步懒加载 |
