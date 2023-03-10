/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    ". You need to assign": ". 你需要分配",
    "research upgrade, which increases the cost by": "研究升级，增加成本",
    "Supported files:": "支持的文件：",
    "that decreases production dramatically.": "这会大大降低产量。",
    "to normal production.": "以正常生产。",
    "will spend": "会花费",
    ", but you may sell them, if you cannot afford other upgrade.\n                            Selling upgrade drains box automatically. Each": ", 但如果您负担不起其他升级费用，您可以出售它们。\n 出售升级费用会自动耗尽箱子。 每个",
    ", which requires the formula that defined by": "，这需要由定义的公式",
    "'s type.": "的类型。",
    "(after scaling)": "（缩放后）",
    "(based on": "(基于",
    "and drain all of box.\n                            However, when draining box, you always claim": "并排空所有盒子。\n 然而，当排空盒子时，你可以收集",
    "at first time, you’ll unlock": "第一次，您将解锁",
    "Charge Core": "充电核心",
    "Chargers": "充电器",
    "Congratulations!": "恭喜！",
    "Compacted Boxes": "压缩箱",
    "Double": "双倍",
    "Effect:": "效果：",
    "Game Saved": "游戏已保存",
    "Hard Reset": "硬重置",
    "Export to Clipboard": "导出到剪贴板",
    "Export to File": "导出到文件",
    "Info": "信息",
    "Play Again!": "再次开始！",
    "When unlocking Double Compacted Box, you’ll unlock": "解锁 双倍压缩箱 时，您将解锁",
    "When unlocking Triple Compacted Box, you’ll unlock": "解锁 三倍压缩箱 时，您将解锁",
    "You've been played": "你玩了",
    "You have purchased": "你购买了",
    "You have completed the game! Or you've escaped the": "你已经完成了游戏！ 或者你已经逃离了",
    "When reaching 15": "等你达到 15",
    "Options": "选项",
    "Respec the upgrades": "重洗升级",
    "Triple": "三倍",
    "stronger.": "更强。",
    "stronger;": "更强;",
    "stronger and\n                        reduces the formula by": "更强，\n 将公式减少了",
    "Unassigned Ancient Glyph.": "未分配的远古铭文。",
    "unspent research points.": "未使用的研究点数。",
    "Triple Compacted Boxes": "三倍压缩箱",
    "Triple Compacted Box, which:": "三倍压缩箱，",
    "To unlock informations, you need to get something.": "要解锁信息，你需要得到一些东西。",
    "to any": "到任意",
    "Box": "箱子",
    "Ready": "就绪",
    "has only one level.": "只有 1 级。",
    "But it resets all previous features, makes Double Compacted Box stronger and adds base to its penalty.": "但它重置了所有以前的功能，使 双倍压缩箱 更强大并增加了惩罚的基础。",
    "But it resets all previous features, reduces the formula and makes": "但它重置了所有以前的功能，减少了公式并使",
    "Not": "未",
    "Boost production based on": "促进生产基于",
    "by getting more": "通过获得更多",
    "base to Double Compacted Box's penalty": "双倍压缩箱 惩罚的基数",
    "and gives": "并给予",
    "and\n                        gives": "并\n                        给予",
    "Adds": "添加",
    "Double Compacted Box": "双倍压缩箱",
    "Makes Double Compacted Box's penalty": "使 双倍压缩箱 的惩罚",
    "Points": "点数",
    "Thanks For Playing!": "感谢你玩本游戏！",
    "You can claim unassigned": "您可以收集未分配的 ",
    "Each row of charge core increases its base, and each column – its power. The formula, that defined by bases and powers, shows in tab.": "每行充电核心增加其基数，每列增加其功率。 由基数和幂定义的公式显示在选项卡中。",
    "The game has 2d-designed isometric box like cap at 1.\n                            Starting earn is 0.1 per second, and, if it got capped at 1, then you may claim": "该游戏具有 2d 设计的等距框，如上限为 1。\n 起始收入为每秒 0.1，如果上限为 1，则您可以领取",
    "Compacted Box": "压缩箱",
    "Compacted Box, which slows production by": "压缩箱，这会减慢生产速度",
    "Double Compacted Box, which makes Compacted Box's penalty": "双倍压缩箱，使 压缩箱的惩罚",
    "Double Compacted Boxes": "双倍压缩箱",
    "Decrease": "降低",
    "Exported to clipboard": "已导出到剪切板",
    "Triple Compacted Box": "三倍压缩箱",
    "'s penalty base based on unspent": "的惩罚基数基于未使用的",
    "'s bonus base based on": "的奖励基数基于",
    "(2 columns and 2 rows), you may upgrade them when reaching something else.\n                            You choose any charger, then it’s activated, and others will be inactive.\n                            If you click again, will inactive. Active charger increases its amount each second, capped at 1, and inactive – decreases, but slower than active.": "（2 列 2 行），你可以在到达其他地方时升级它们。\n 你选择任何充电器，然后它被激活，其他的将被禁用。\n 如果你再次点击，将被禁用。 有源充电器每秒增加其数量，上限为 1，无源充电器减少，但比有源充电器慢。",
    "Increase": "提高",
    "are stronger.": "更强。",
    "First 2": "前2个",
    "(capped at 5 minutes)": "（上限为 5 分钟）",
    "(softcapped)": "(已达软上限)",
    "\n                        You have": "\n                        你有",
    "is stronger based on spent time in": "更强大基于花费的时间",
    "Third": "第三",
    "Add": "增加",
    "Automate": "自动化",
    "Core Formula": "核心公式",
    "base by": "基于",
    "decreases": "降低",
    "later.": "之后。",
    "per 2": "每 2",
    ". Add": ". 增加",
    ". Inactive charge will no longer decrease.": ". 非活动充电将不再减少。",
    "'s column by": "的列",
    "'s effect softcap starts": "的效果软上限开始",
    "'s inactive time is another": "的非活跃时间是另一个",
    "'s row and column by": "的行和列",
    "'s row by": "的行",
    "'s time.": "的时间。",
    ", starting at 13.": ", 开始于 13.",
    "s": "",
    "slower.": "放慢。",
    "to": "到",
    "Upgrade Charger": "升级充电器",
    "will no longer reset": "将不再重置",
    "will no longer reset its time.": "将不再重置时间。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Discord": "Discord",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    ".\n                            ": ".\n                            ",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Research Points": "研究点",
    "Research Upgrade": "研究升级",
    "Ancient Glyph": "远古铭文",
    "It contains ": "它包含了 ",
    "When reaching ": "当达到 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^×([\d\.]+) Sp$/,
    /^×([\d\.]+)$/,
    /^= ([\d\.]+)\]$/,
    /^= ([\d\.]+)e\-([\d\.]+)\]$/,
    /^\(\+([\d\.]+)e\-([\d\.]+)\]\/sec\)$/,
    /^\(\+([\d\.]+)e\-([\d\.]+)\/sec\)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^×([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have (.+) Upgrade Charger.$/, '你有 $1 升级充电器。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^×([\d\.]+) stronger$/, '增强 ×$1'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Double Compacted Box$/, '$1 双倍压缩箱'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) Research Points$/, '成本：$1 研究点'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);