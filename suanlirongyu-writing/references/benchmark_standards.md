# 「算力冗余」写作 Benchmark v2.0 (实证驱动版)

## 1. 评测哲学
本标准不再仅由 Agent 内部设定，而是参考了 **G-Eval**、**WritingBench** 及 **自媒体深度内容评估模型**。评测的核心在于：**不仅要写对，还要写得有“穿透力”。**

## 2. 量化评测维度 (Quantitative Metrics)

| 维度 | 互联网参考模型 | 本地 OK 标准 (Rubric) |
| :--- | :--- | :--- |
| **事实忠实度** | Ragas Faithfulness | 关键技术参数（带宽、功耗、Capex）准确率为 100%。 |
| **信息熵增量** | Perplexity Gap | 必须包含至少 2 个跨领域关联视角或非共识推演。 |
| **冷峻度评分** | Semantic Tone Check | 情绪化修饰词频率 < 0.5%，1-3-1 节奏执行率 > 80%。 |
| **SCQA 连贯性** | BERTScore / G-Eval | 段落间逻辑跳跃度低于 10%，叙事弧线完整。 |
| **工程类比质量** | Analogy Precision | 类比必须符合物理/计算机逻辑，严禁生活化比喻。 |

## 3. 评测机制：交叉评审 (Cross-Judge)
- **基准库**：参考 `references/gold_samples.md` 中的顶级科技报道范文。
- **自省机制**：Agent 在交付前必须输出一份 `<self-evaluation>` 报告。
- **外部校验**：建议用户将初稿丢给另一高性能模型（如 Claude 3.5）并附带本 Rubric 进行第三方打分。

## 4. 进化触发
如果连续三篇文章的“信息熵增量”得分低于 80，自动触发 `skill-creator` 重新扫描 GitHub 上的最新前沿 Skill 注入。
