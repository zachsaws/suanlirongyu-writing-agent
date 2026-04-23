# 「算力冗余」Writing Agent v2.0 🚀
> **AI 时代的硬核科技创作引擎：机器之心的严谨 + 硅星人的叙事 + 算力冗余的洞察**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Agent: Gemini CLI](https://img.shields.io/badge/Agent-Gemini%20CLI-blue.svg)](https://github.com/google-gemini/gemini-cli)

## 0. 为什么需要这个 Agent？
在 2026 年，互联网充满了平庸的、由公关稿喂出来的 AI 废话。
**「算力冗余」Writing Agent** 的诞生，是为了重新找回文字的**穿透力**。它不只是一个写作助手，而是一个由多智能体驱动的“微型编辑部”，致力于从底层参数（算力、能效、Capex）推演商业终局。

## 1. 核心黑科技 (Core Features)

### 🧠 结构化推理 (Reasoning Loop)
内置 `<think>` 标签强制推理协议。Agent 在输出每一段话前，必须先在内部自问：*“这句话是否服务于核心论点？逻辑是否跳跃？技术类比是否精准？”*

### ⚔️ 多智能体对垒 (Antagonist Mode)
引入 **“反向辩论员” (Antagonist)** 机制。在成稿前，逻辑架构师必须通过辩论员的严苛质疑：
- “这个推论是否太想当然？”
- “这篇文章和外界的平庸报道有什么区别？”
- “如果这个技术趋势失败了，最可能的原因是什么？”

### 🧪 冷峻极客风指纹 (Voice & Tone)
- **1-3-1 节奏**：1句金句开场，3句硬核拆解，1句冷峻反思。
- **工业级类比**：严禁使用自然界/生活类比喻，仅限工程、物理、计算机底层逻辑类比（如：热失控、内存溢出）。
- **零废话原则**：永久剔除“总之”、“我们看到”、“实际上”等无意义连接词。

## 2. 技能包构成 (What's inside?)
- **`suanlirongyu-writing.skill`**: 核心逻辑封装包。
- **`STYLE_GUIDE.md`**: 冷峻极客风的创作宪法。
- **`prompts.md`**: 五大智能体角色（Analyst, Architect, Antagonist, Writer, Editor）的深度指令集。
- **`reasoning_logic.md`**: 从 GitHub 顶级项目吸收的推理写作进阶逻辑。

## 3. 如何启动？

### 环境要求
- 安装 [Gemini CLI](https://github.com/google-gemini/gemini-cli)

### 安装步骤
```bash
# 克隆仓库并安装技能
git clone https://github.com/your-username/suanlirongyu-writing-agent.git
cd suanlirongyu-writing-agent
gemini skills install suanlirongyu-writing.skill --scope user --consent

# 在交互界面激活
/skills reload
```

## 4. 典型工作流
1.  **情报解析**：投喂原始素材（论文、财报、GitHub），生成【洞察卡片】。
2.  **大纲对垒**：生成 SCQA 大纲，并由 Antagonist 进行内部“抬杠”修正。
3.  **深度成稿**：基于博弈结果，生成 1-3-1 节奏的冷峻长文。
4.  **持续进化**：通过 `feedback/` 文件夹沉淀用户偏好，实现风格的自我迭代。

---
*“文字是思想的算力。在冗余的时代，我们只追求最精准的输出。”*
