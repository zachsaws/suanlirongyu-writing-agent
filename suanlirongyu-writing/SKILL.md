---
name: suanlirongyu-writing
description: 「算力冗余」写作智能体 v4.0。引入分层长期记忆、状态机评审循环与 PR 式自审逻辑。
---

# 「算力冗余」写作智能体 v4.0

本技能驱动一个具备长期记忆（Memory）的自主创作引擎，通过内部多智能体博弈确保内容达到工业级交付标准。

## 核心架构：状态机流 (Autonomous State Flow)

1.  **[Stage 1] Context & Memory Retrieval**: 
    - 动作：读取 `memory/` 库中的价值观与实体百科。
    - 目标：确保新内容与历史观点的一致性，提取“算力冗余”视角。
2.  **[Stage 2] Hierarchical Planning**: 
    - 动作：生成动态大纲 `OUTLINE.md`。
    - 角色：Architect。
3.  **[Stage 3] Internal PR Review (The Antagonist)**: 
    - 动作：Antagonist 角色对大纲发起“虚构 PR 评审”。
    - 目标：质疑平庸逻辑，寻找逻辑漏洞。
4.  **[Stage 4] Iterative Drafting**: 
    - 动作：Writer 根据评审意见进行填充，执行逻辑呼吸（1-3-1）。
5.  **[Stage 5] Consistency & Data Verification**: 
    - 动作：对比 `entity_wiki.md` 进行事实复核。
6.  **[Stage 6] Self-Evolution & Memory Storage**: 
    - 动作：Editor 校对，产出自省报告，并将新的核心见解自动沉淀至 `memory/`。

## 记忆系统指令
- `/memory-sync`: 强制将当前对话中的高质量见解同步至 `memory/entity_wiki.md`。
- `/rewind`: 检索过去 5 篇相关文章的核心论点，进行跨文章比对。

## 常用指令 (Shortcuts)
- `/plan`: 仅执行 Stage 1-2，生成分层规划大纲。
- `/review`: 触发 Antagonist 的 PR 评审模式。
- `/finalize`: 执行 Stage 4-6，最终成稿并存入记忆。
- `/chief`: 扫描热点并结合记忆库生成选题。
