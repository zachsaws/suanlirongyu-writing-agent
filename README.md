# 「算力冗余」Writing Agent v3.0 🚀
> **AI 时代的硬核科技创作引擎：机器之心的严谨 + 硅星人的叙事 + 自研自动化评估与进化体系**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Agent: Gemini CLI](https://img.shields.io/badge/Agent-Gemini%20CLI-blue.svg)](https://github.com/google-gemini/gemini-cli)

## 0. 为什么需要 v3.0？
如果说 v2.0 解决了“怎么写”的问题，**v3.0 则解决了“写什么”以及“写得好不好”的闭环自动化问题。** 它是目前最接近人类顶级主编逻辑的 AI 创作系统。

## 1. 核心进化能力 (v3.0 New Features)

### 📊 客观评测系统 (Benchmark v2.2)
不再依赖 AI 的“自我感觉”。内置 `evaluate_article.cjs` 评分脚本，基于**硬核度、冷峻度、节奏感、逻辑穿透力、独特性**五个维度进行量化扫描，自动输出质量报告。

### 🔄 自我进化闭环 (Self-Evolution v2.1)
内置 `feedback_processor.cjs`。通过记录用户反馈，Agent 能够自动修正 `STYLE_GUIDE.md` 并执行**热更新部署**，实现真正的“人格化对齐”。

### 📡 自动化选题推荐 (Autonomous Chief v3.0)
通过 `/chief` 指令，Agent 模拟扫描全球科技信源，利用第一性原理过滤噪音，自动提炼具备“算力冗余”反直觉切口的选题。

### 🎨 工业级视觉策划 (Visual Planning)
新增 `Visual Planner` 角色。不仅写文字，还负责规划**信息图表（Infographic）**并生成高精度的 **Midjourney/DALL-E Prompt**，确保视觉审美不掉队。

## 2. 技能包构成
- **`suanlirongyu-writing.skill`**: 核心逻辑封装包。
- **`scripts/`**: 包含评测、反馈处理、选题监控的自动化脚本。
- **`references/`**: 包含风格宪法、标杆基因库 (Gold Samples)、外部裁判指令。
- **`assets/training_samples/`**: 样文基因提取库。

## 3. 核心指令 (Shortcuts)
- `/chief`: 扫描全球热点并生成推荐选题。
- `/analyze`: 情报解析，提取底层参数。
- `/debate`: 开启 Architect vs Antagonist 内部博弈逻辑。
- `/write`: 执行 1-3-1 节奏成稿。
- `/evaluate [path]`: 对成稿进行量化打分。
- `/evolve`: 读取反馈并自动完成技能进化与重部署。
- `/train [url/text]`: 提取样文基因并注入标杆库。

---
*“文字是思想的算力。在冗余的时代，我们只追求最精准的输出。”*
