const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * 算力冗余：反馈处理脚本 v2.1
 * 功能：读取反馈，更新风格指南，并自动触发技能包重新打包。
 */

const projectRoot = path.join(__dirname, '../..');
const feedbackPath = path.join(projectRoot, 'feedback/user_preferences.json');
const skillDir = path.join(projectRoot, 'suanlirongyu-writing');
const styleGuidePath = path.join(skillDir, 'references/style_guide.md');
const packagerPath = '/opt/homebrew/lib/node_modules/@google/gemini-cli/bundle/builtin/skill-creator/scripts/package_skill.cjs';

try {
    const feedbackData = JSON.parse(fs.readFileSync(feedbackPath, 'utf8'));
    let styleGuide = fs.readFileSync(styleGuidePath, 'utf8');

    if (feedbackData.recent_feedbacks && feedbackData.recent_feedbacks.length > 0) {
        console.log('🔍 检测到新反馈，正在注入风格基因...');
        
        const newConstraints = feedbackData.recent_feedbacks.map(f => `- [进化反馈]: ${f}`).join('\n');
        
        if (!styleGuide.includes('## 5. 动态反馈修正 (Self-Evolved)')) {
            styleGuide += '\n\n## 5. 动态反馈修正 (Self-Evolved)\n';
        }
        
        styleGuide += newConstraints + '\n';
        fs.writeFileSync(styleGuidePath, styleGuide);

        // 重置反馈列表，防止重复应用
        feedbackData.processed_feedbacks = (feedbackData.processed_feedbacks || []).concat(feedbackData.recent_feedbacks);
        feedbackData.recent_feedbacks = [];
        fs.writeFileSync(feedbackPath, JSON.stringify(feedbackData, null, 2));

        console.log('✅ Style Guide 已完成自我进化。');

        // 自动触发打包 (由于路径环境复杂，此处仅输出指令，由 Agent 在 shell 中执行下一步)
        console.log('🚀 请执行以下命令以完成热更新：');
        console.log(`node ${packagerPath} ${skillDir} && gemini skills install ${skillDir}.skill --scope user --consent && /skills reload`);

    } else {
        console.log('ℹ️ 暂无新反馈。');
    }
} catch (err) {
    console.error('❌ 脚本运行出错:', err.message);
}
