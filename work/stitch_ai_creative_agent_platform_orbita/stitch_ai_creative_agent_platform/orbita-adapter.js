(() => {
  const page = location.pathname.includes("/ai_agent_1/")
    ? "tools"
    : location.pathname.includes("/ai_agent_2/")
      ? "tasks"
      : "chat";

  const activeName = page === "tools" ? "工具" : page === "tasks" ? "任务" : "";
  const activeProject = page === "chat" ? "品牌 IP 起号方案" : "";
  const pageTitle = page === "tools" ? "米库 · 设计工具" : page === "tasks" ? "米库 · 任务" : "米库 · 品牌 IP 起号方案";
  const routeHref = {
    首页: "/ai_ai_agent/",
    工具: "/ai_agent_1/",
    任务: "/ai_agent_2/"
  };

  const translations = [
    ["A comprehensive suite of AI-powered and traditional design utilities to streamline your creative workflow.", "一套 AI 与传统设计工具，帮你更快完成从构想到交付的工作。"],
    ["Monitor and manage your active generation queues.", "查看并管理正在生成的任务队列。"],
    ["Can you generate a moodboard for a futuristic RPG game? Focus on deep ocean aesthetics, bioluminescence, and a dark fantasy vibe.", "可以为一个未来主义 RPG 游戏生成一张情绪板吗？重点关注深海美学、生物荧光和暗黑奇幻氛围。"],
    ["Make sure to include character concepts and a color palette.", "请确保包含角色概念和配色方案。"],
    ["Absolutely. I've started generating the initial visual concepts for the \"Dark Ocean RPG\" moodboard.", "可以。我已经开始为「深海 RPG」生成第一批视觉概念。"],
    ["Done! I've updated the canvas with a comprehensive moodboard including character concepts, color palettes, and environmental references. Let me know if you want to tweak the bioluminescent tones.", "已完成。我已把角色概念、配色方案和环境参考更新到画布中。你也可以继续调整生物荧光的色调。"],
    ["Focus on high contrast between the pitch-black environments and the emissive light sources of characters and technology. The aesthetic should feel both ancient and advanced.", "通过近乎漆黑的环境与角色、科技的发光细节形成高对比，让整体同时拥有古老感与未来感。"],
    ["Generate high-fidelity images from natural language descriptions using our latest diffusion model.", "根据文字描述生成高质量图片，快速探索视觉方向。"],
    ["Animate static images into short, compelling video clips with cinematic camera movements.", "把静态图片生成带镜头运动的短视频。"],
    ["Seamlessly add, remove, or replace objects in your images with AI-aware context.", "理解画面内容，添加、移除或替换图像元素。"],
    ["Apply the visual style of one image to another, creating unique artistic composites.", "把一张图的视觉语言迁移到另一张图，生成独特组合。"],
    ["Instantly isolate subjects with pixel-perfect precision, even around hair or complex edges.", "快速分离主体，复杂发丝边缘也能保持干净。"],
    ["Automatically detect the focal point and crop images for multiple social media aspect ratios.", "自动识别视觉焦点，适配不同社交媒体比例。"],
    ["Enhance resolution and restore details in low-quality images up to 4x original size.", "提升低清图片的分辨率并恢复细节，最高支持 4 倍。"],
    ["Apply cinematic LUTs, adjust curves, and match colors across multiple assets.", "应用电影感 LUT、调整曲线，并统一多份素材的色彩。"],
    ["Chain multiple tools together to automate repetitive design tasks and save hours.", "串联多个工具，自动完成重复设计工作，节省时间。"],
    ["Cinematic flythrough of cyberpunk city", "赛博朋克城市的电影感飞行镜头"],
    ["Character concept art variations", "角色概念图变化稿"],
    ["Marketing copy for Q3 Product Launch", "第三季度新品上市营销文案"],
    ["Mountain Valley Sunrise Timelapse", "山谷日出延时摄影"],
    ["Sci-fi mechanic character concepts", "科幻机械师角色概念"],
    ["Prompt: Sci-fi mechanic, highly detailed, greg rutkowski style", "提示词：科幻机械师，高细节，电影概念风格"],
    ["Model: Visionary-XL-v2 • 4K • 60fps", "模型：Visionary-XL-v2 • 4K • 60fps"],
    ["Creative Assistant", "创意助手"],
    ["Design Tools", "设计工具"],
    ["Running Tasks", "进行中的任务"],
    ["AI Generation", "AI 生成"],
    ["Image Processing", "图像处理"],
    ["Layout & Grid", "布局与网格"],
    ["Typography", "文字排版"],
    ["Export & Batch", "导出与批处理"],
    ["Task Type", "任务类型"],
    ["Social Media", "社交媒体"],
    ["Print Media", "印刷物料"],
    ["Web Assets", "网页素材"],
    ["Presentations", "演示文稿"],
    ["E-commerce", "电商"],
    ["Text to Image", "文生图"],
    ["Image to Video", "图生视频"],
    ["Generative Fill", "智能扩图"],
    ["Style Transfer", "风格迁移"],
    ["Remove Background", "智能抠图"],
    ["Smart Crop", "智能裁切"],
    ["Upscaler", "画质增强"],
    ["Color Grading", "色彩校正"],
    ["Build Custom Workflows", "创建自定义工作流"],
    ["Character Concepts", "角色概念"],
    ["Color Scheme", "配色方案"],
    ["Design Notes", "设计备注"],
    ["Abyssal Knight", "深渊骑士"],
    ["Tide Weaver", "潮汐织者"],
    ["Trench Hunter", "深渊猎手"],
    ["Abyssal Black", "深渊黑"],
    ["Deep Navy", "深海蓝"],
    ["Muted Steel", "雾钢灰"],
    ["Bioluminescent Cyan", "生物荧光青"],
    ["Conceptual Moodboard v1.0", "概念情绪板 v1.0"],
    ["DARK OCEAN RPG", "深海 RPG"],
    ["Model: GPT-4 Omni", "模型：GPT-4 Omni"],
    ["Category", "分类"],
    ["All", "全部"],
    ["Recommended", "推荐"],
    ["View All", "查看全部"],
    ["Launch Tool", "启动工具"],
    ["Use Tool", "使用工具"],
    ["Create Workflow", "创建工作流"],
    ["Filter", "筛选"],
    ["New Task", "新建任务"],
    ["Completed", "已完成"],
    ["Clear All", "清空全部"],
    ["High Priority", "高优先级"],
    ["Video Gen", "视频生成"],
    ["Image Gen Batch", "批量生图"],
    ["Image", "图片"],
    ["Video", "视频"],
    ["Text", "文字"],
    ["Generating 4/12", "已生成 4/12"],
    ["~2m remaining", "预计还需 2 分钟"],
    ["2 hours ago", "2 小时前"],
    ["Yesterday", "昨天"],
    ["2 days ago", "2 天前"],
    ["Today, 10:24 AM", "今天 10:24"],
    ["Rendering Visuals", "正在渲染视觉素材"],
    ["ETA: 12 seconds", "预计还需 12 秒"],
    ["Adjust Colors", "调整颜色"],
    ["Expand Lore", "扩展世界观"],
    ["Pan", "平移"],
    ["Select", "选择"],
    ["Skills", "技能"],
    ["Settings", "设置"],
    ["Home", "首页"],
    ["Templates", "模板"],
    ["Tools", "工具"],
    ["Tasks", "任务"],
    ["AI Chat", "AI 对话"],
    ["Pro Plan", "专业版"],
    ["Cognitive AI", "米库 AI"],
    ["Cognitive", "米库"],
    ["Alex Rivera", "苏珊"],
    ["Search templates, tools, agents...", "搜索模板、素材..."],
    ["Describe what you want to create...", "描述你想创作的内容..."]
  ].sort((a, b) => b[0].length - a[0].length);

  const attributeTranslations = new Map([
    ["Search templates, tools, agents...", "搜索模板、素材..."],
    ["Describe what you want to create...", "描述你想创作的内容..."],
    ["Attach file", "添加文件"],
    ["Use Vision", "使用视觉"],
    ["Download", "下载"],
    ["Share", "分享"],
    ["Layers", "图层"],
    ["Pause", "暂停"],
    ["Cancel", "取消"],
    ["View Details", "查看详情"],
    ["Profile", "头像"]
  ]);

  function translateText(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      let value = node.nodeValue;
      for (const [from, to] of translations) {
        if (value.includes(from)) value = value.split(from).join(to);
      }
      node.nodeValue = value;
    }
  }

  function translateAttributes(root) {
    root.querySelectorAll("input, textarea, button, img, [title], [aria-label]").forEach((element) => {
      for (const attribute of ["placeholder", "title", "aria-label", "alt"]) {
        const value = element.getAttribute(attribute);
        if (value && attributeTranslations.has(value)) {
          element.setAttribute(attribute, attributeTranslations.get(value));
        }
      }
    });
  }

  function sidebarMarkup() {
    const item = (name, icon, href, current = false) => (
      '<button class="side-item' + (current ? ' active' : '') + '" data-name="' + name + '" data-route="' + href + '" type="button"' +
      (current ? ' aria-current="page"' : '') + '><span class="icon-slot" aria-hidden="true">' + icon +
      '</span><span>' + name + '</span></button>'
    );
    const projectItem = (name, current = false) => (
      '<button class="side-item project-item' + (current ? ' active' : '') + '" type="button" data-name="' + name + '" data-route="/ai_ai_agent/"' +
      (current ? ' aria-current="page"' : '') + '><span class="project-icon icon-slot">' + sidebarIcons.folder + '</span><span>' + name + '</span></button>'
    );
    return [
      '<aside class="sidebar orbita-sidebar" aria-label="Workspace navigation">',
      '<div class="brand-row"><span class="brand-orb" aria-hidden="true"></span><span>Miku</span></div>',
      '<section class="side-section"><p class="section-label">工作台</p><div class="side-list top-nav-list">',
      item("首页", sidebarIcons.home, routeHref.首页, activeName === "首页"),
      item("模板", sidebarIcons.templates, "#templates"),
      item("工具", sidebarIcons.tools, routeHref.工具, activeName === "工具"),
      item("任务", sidebarIcons.tasks, routeHref.任务, activeName === "任务"),
      item("我的", sidebarIcons.profile, "#profile"),
      '</div></section>',
      '<section class="side-section projects"><p class="section-label">项目</p><div class="side-list">',
      projectItem("本周新品种草计划", activeProject === "本周新品种草计划"),
      projectItem("品牌 IP 起号方案", activeProject === "品牌 IP 起号方案"),
      '</div></section>',
      '<section class="side-section recent-section"><p class="section-label">最近</p><div class="side-list">',
      '<button class="side-item recent-item" type="button" data-name="AI 对话类交互动效设计"><span class="icon-slot">' + sidebarIcons.chat + '</span><span>AI 对话类交互动效设计</span></button>',
      '<button class="side-item recent-item" type="button" data-name="配色方案讨论"><span class="icon-slot">' + sidebarIcons.chat + '</span><span>配色方案讨论</span></button>',
      '</div></section>',
      '<div class="sidebar-bottom"><button class="upgrade" type="button" id="upgradeButton"><span class="icon-slot">' + sidebarIcons.upgrade + '</span><span>升级专业版</span></button>',
      '<div class="profile"><span class="profile-mark">苏</span><span>已登录</span></div></div>',
      '</aside>'
    ].join("");
  }

  function showToast(message) {
    let toast = document.querySelector(".orbita-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "orbita-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.append(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }

  const sidebarIcon = (path, transform, title = "") => (
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ' +
    transform + '; transform-origin: center center;">' +
    (title ? '<title>' + title + '</title>' : '') +
    '<path fill="currentColor" d="' + path + '"></path></svg>'
  );

  const sidebarIcons = {
    home: sidebarIcon("M10.8 2.65a2 2 0 0 1 2.4 0l7 5.25a2 2 0 0 1 .8 1.6V19a2 2 0 0 1-2 2h-4.9a1.1 1.1 0 0 1-1.1-1.1V14a1 1 0 1 0-2 0v5.9A1.1 1.1 0 0 1 9.9 21H5a2 2 0 0 1-2-2V9.5a2 2 0 0 1 .8-1.6zm1.2 1.6L5 9.5V19h4v-5a3 3 0 1 1 6 0v5h4V9.5z", "translateX(0.82px) scale(1.1776)"),
    templates: sidebarIcon("M15.586 2.757a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-2.829 2.829a2 2 0 0 1-2.828 0l-2.829-2.829a2 2 0 0 1 0-2.828zM17 4.172 14.172 7 17 9.828 19.828 7zM9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H5v4h4zm12 10a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-2 0v4h-4v-4zM9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4z", "translateX(0.56px) scale(1.17269)"),
    tools: sidebarIcon("m19.571 3.722.707.707a3 3 0 0 1 0 4.242l-2.975 2.975 3.182 3.182a2 2 0 0 1 0 2.829l-2.828 2.828a2 2 0 0 1-2.829 0l-3.182-3.182-2.363 2.364a1.5 1.5 0 0 1-.86.426l-3.92.53a1.001 1.001 0 0 1-1.126-1.127l.53-3.919a1.5 1.5 0 0 1 .426-.86l2.364-2.363-3.182-3.182a2 2 0 0 1 0-2.829l2.828-2.828a2 2 0 0 1 2.829 0l3.182 3.182 2.974-2.975a3 3 0 0 1 4.243 0m-3.682 9.339-2.828 2.828.353.354.707-.707a1 1 0 0 1 1.498 1.32l-.083.094-.707.707 1.414 1.414 2.828-2.828zm-1.268-5.804-8.755 8.755-.331 2.453 2.453-.332 8.755-8.754zM7.757 4.93 4.93 7.757l1.414 1.415.707-.707a1 1 0 0 1 1.498 1.32l-.084.094-.707.707.354.353 2.828-2.828zm8.986.207-.707.707 2.12 2.121.708-.707a1 1 0 0 0 0-1.414l-.707-.707a1 1 0 0 0-1.414 0", "translateX(0.62px) scale(1.2)", "pencil_ruler_line"),
    tasks: sidebarIcon("M14 3a3 3 0 0 1 3 3h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3zm-3 9H4v7h16v-7h-7v1a1 1 0 0 1-1.993.117L11 13zm9-4H4v2h16zm-6-3h-4a1 1 0 0 0-.993.883L9 6h6a1 1 0 0 0-.883-.993z", "translateX(0.56px) scale(1.104)", "briefcase_line"),
    profile: sidebarIcon("M12 4a7 7 0 0 0-7 7v8.62a.4.4 0 0 0 .594.35l.943-.523a4 4 0 0 1 3.927.023l.544.311a2 2 0 0 0 1.984 0l.544-.31a4 4 0 0 1 3.927-.024l.943.523a.4.4 0 0 0 .594-.35V11a7 7 0 0 0-7-7m-9 7a9 9 0 0 1 18 0v8.62c0 1.83-1.966 2.987-3.565 2.099l-.943-.524a2 2 0 0 0-1.964.012l-.543.31a4 4 0 0 1-3.97 0l-.543-.31a2 2 0 0 0-1.964-.012l-.942.524C4.966 22.607 3 21.45 3 19.62zm7.5-.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3", "translateX(1.22px) scale(1.10173)"),
    folder: sidebarIcon("M9.52 3a2 2 0 0 1 1.442.614l.12.137L12.48 5.5H19a2 2 0 0 1 1.995 1.85L21 7.5v1.53a2.001 2.001 0 0 1 1.61 2.398l-.038.147-2.4 8a2 2 0 0 1-1.752 1.418l-.164.007H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zm11.136 8H6.744l-2.4 8h13.912zM9.519 5H4v8.187l.828-2.762A2 2 0 0 1 6.744 9H19V7.5h-6.52a2 2 0 0 1-1.561-.75z", "translateX(0.56px) scale(1.06893)"),
    chat: sidebarIcon("M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.168-1.438l-3.032.892A1.01 1.01 0 0 1 2.546 20.2l.892-3.032A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-6.759 12.282c.227.357.305.807.177 1.24l-.441 1.501 1.501-.441c.433-.128.883-.05 1.24.177A8 8 0 1 0 12 4m-3.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3", "translateX(0.56px) scale(1.104)"),
    upgrade: sidebarIcon("M12 2c1.091 0 2.117.292 3 .804a1 1 0 1 1-1 1.73A4 4 0 0 0 8 8l11 .001a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1a6 6 0 0 1 6-6m7 8H5v10h14zm-7 2a2 2 0 0 1 1.134 3.647l-.134.085V17a1 1 0 0 1-1.993.117L11 17v-1.268A2 2 0 0 1 12 12m7.918-6.979.966.26a1 1 0 0 1-.518 1.93l-.965-.258a1 1 0 0 1 .517-1.932M18.633 2.09a1 1 0 0 1 .707 1.225l-.129.482a1 1 0 1 1-1.932-.517l.13-.483a1 1 0 0 1 1.224-.707", "translateX(1.02px) scale(1.10394)")
  };

  function renderBrandProjectChat(main) {
    const route = main.firstElementChild;
    if (!route) return;
    route.className = "orbita-chat-route orbita-brand-chat-route";
    route.innerHTML = [
      '<div class="orbita-brand-chat-layout">',
      '<section class="orbita-brand-conversation" aria-label="品牌 IP 起号方案对话">',
      '<header class="orbita-project-chat-header">',
      '<div class="orbita-project-chat-heading"><span class="orbita-project-chat-mark"><span class="material-symbols-outlined">folder_open</span></span><div><h2>品牌 IP 起号方案</h2><p>项目对话 · 已同步到方案画布</p></div></div>',
      '<button class="orbita-icon-button" type="button" aria-label="更多项目操作"><span class="material-symbols-outlined">more_vert</span></button>',
      '</header>',
      '<div class="orbita-message-list" role="log" aria-live="polite">',
      '<div class="orbita-message-date">今天 14:32</div>',
      '<article class="orbita-message orbita-user-message"><p>围绕“品牌 IP 起号方案”，先帮我把账号人设、内容支柱和首周选题整理出来。要有记忆点，但不要像硬广。</p></article>',
      '<article class="orbita-message-group">',
      '<div class="orbita-message-meta"><span class="orbita-agent-mark"><span class="material-symbols-outlined">auto_awesome</span></span><span>米库 AI</span><span class="orbita-message-state">已整理</span></div>',
      '<div class="orbita-message orbita-assistant-message"><p>我先把方案拆成三层：一个可持续的人设、一组稳定的内容支柱，以及首周可以直接拍的 5 个选题。先从“让人记住你是谁”开始。</p>',
      '<div class="orbita-answer-outline">',
      '<div><span>核心定位</span><strong>先建立熟悉感，再建立信任感</strong></div>',
      '<div><span>内容语气</span><strong>松弛、具体，不端着讲道理</strong></div>',
      '</div></div>',
      '</article>',
      '<article class="orbita-message orbita-user-message"><p>人设保持松弛、可信，选题要让用户愿意评论和收藏。</p></article>',
      '<article class="orbita-message-group">',
      '<div class="orbita-message-meta"><span class="orbita-agent-mark"><span class="material-symbols-outlined">auto_awesome</span></span><span>米库 AI</span><span class="orbita-message-state">方案已更新</span></div>',
      '<div class="orbita-message orbita-assistant-message"><p>已按这个方向调整。右侧画布里是当前版本：人设更像一个愿意分享经验的主理人，内容围绕“经验拆解、真实幕后、用户共创”展开。</p>',
      '<div class="orbita-chip-row"><span>经验拆解</span><span>真实幕后</span><span>用户共创</span></div></div>',
      '</article>',
      '</div>',
      '<footer class="orbita-chat-composer">',
      '<div class="orbita-suggestion-row" aria-label="继续完善方案">',
      '<button type="button" data-brand-suggest="给我 5 个首周选题">首周 5 个选题</button>',
      '<button type="button" data-brand-suggest="把人设改得更有记忆点">加强人设记忆点</button>',
      '<button type="button" data-brand-suggest="整理成任务清单">整理成任务清单</button>',
      '</div>',
      '<div class="orbita-chat-input-shell"><textarea data-brand-chat-input rows="2" placeholder="继续完善这个品牌 IP 方案…"></textarea><div class="orbita-chat-input-footer"><span>Enter 发送 · Shift + Enter 换行</span><div class="orbita-chat-input-actions"><button class="orbita-composer-tool" type="button" aria-label="添加文件"><span class="material-symbols-outlined">attach_file</span></button><button class="orbita-composer-tool" type="button" aria-label="选择技能"><span class="material-symbols-outlined">tune</span><span>技能</span></button><button class="orbita-send-button" type="button" data-brand-send aria-label="发送"><span class="material-symbols-outlined">arrow_upward</span></button></div></div></div>',
      '</footer>',
      '</section>',
      '<section class="orbita-brand-plan" aria-label="品牌 IP 起号方案画布">',
      '<div class="orbita-plan-toolbar"><div><span class="orbita-plan-toolbar-title">方案画布</span><span class="orbita-plan-toolbar-state">自动保存中</span></div><div class="orbita-plan-toolbar-actions"><button type="button" data-plan-action="分享"><span class="material-symbols-outlined">share</span>分享</button><button type="button" data-plan-action="导出"><span class="material-symbols-outlined">download</span>导出</button></div></div>',
      '<div class="orbita-plan-stage"><article class="orbita-plan-board">',
      '<header class="orbita-plan-header"><div><div class="orbita-plan-title-row"><h1>品牌 IP 起号方案</h1><span class="orbita-plan-status">编辑中</span></div><p>把一次灵感，拆成可以持续发布的内容节奏。</p></div><span class="orbita-plan-version">v1.1</span></header>',
      '<div class="orbita-plan-rule"></div>',
      '<div class="orbita-plan-intro"><div class="orbita-plan-intro-copy"><span>本轮重点</span><p>让用户先记住“你是谁”，再愿意评论、收藏，并把内容带给下一个人。</p></div><figure class="orbita-plan-visual"><img src="../assets/stitch/remote-1.jpg" alt="品牌视觉方向参考"><figcaption>视觉方向 · 清爽、可信、可识别</figcaption></figure></div>',
      '<div class="orbita-plan-columns">',
      '<section class="orbita-plan-section"><div class="orbita-plan-section-heading"><span>人设</span><h2>账号人设</h2></div><p class="orbita-plan-lead">懂生活的邻家主理人</p><p>把专业经验说得像朋友聊天，保留判断，也保留一点不端着的幽默。</p><div class="orbita-chip-row"><span>松弛</span><span>具体</span><span>可信</span></div></section>',
      '<section class="orbita-plan-section"><div class="orbita-plan-section-heading"><span>内容</span><h2>内容支柱</h2></div><ul class="orbita-pillar-list"><li><strong>经验拆解</strong><span>把一个问题讲清楚</span></li><li><strong>真实幕后</strong><span>让过程比结论更有温度</span></li><li><strong>用户共创</strong><span>用评论区决定下一条</span></li></ul></section>',
      '</div>',
      '<section class="orbita-week-plan"><div class="orbita-week-heading"><div><span>首周节奏</span><h2>首周 5 个选题</h2></div><button type="button" data-plan-action="应用到任务中心">应用到任务中心 <span class="material-symbols-outlined">arrow_forward</span></button></div><ol class="orbita-topic-list"><li><span><b>01</b>为什么我们决定从这件小事开始</span><em>幕后</em></li><li><span><b>02</b>一个常见误区，今天讲明白</span><em>经验</em></li><li><span><b>03</b>主理人今天的选择题</span><em>互动</em></li><li><span><b>04</b>评论区征集：你最想解决的问题</span><em>共创</em></li><li><span><b>05</b>把用户问题变成下一条内容</span><em>复盘</em></li></ol></section>',
      '<footer class="orbita-plan-footer"><span><span class="material-symbols-outlined">auto_awesome</span>由米库 AI 整理 · 待你确认</span><span>最近更新于今天 14:38</span></footer>',
      '</article></div>',
      '</section>',
      '</div>'
    ].join("");
  }

  function markPageRegions(main) {
    const route = main.firstElementChild;
    if (!route) return;
    route.classList.add("orbita-" + page + "-route");

    if (page === "chat") {
      route.firstElementChild?.classList.add("orbita-chat-layout");
      const panels = [...route.querySelectorAll(":scope > div > section")];
      const chatPanel = panels[0];
      const canvasPanel = panels[1];
      chatPanel?.classList.add("orbita-chat-panel");
      canvasPanel?.classList.add("orbita-canvas-panel");
      chatPanel?.querySelectorAll('[class*="rounded-2xl"]').forEach((bubble) => {
        if (bubble.closest('[class*="items-end"]')) bubble.classList.add("orbita-user-message");
        if (bubble.closest('[class*="items-start"]')) bubble.classList.add("orbita-ai-message");
        if (bubble.textContent.includes("Rendering Visuals")) bubble.classList.add("orbita-status-card");
      });
      const input = chatPanel?.querySelector("textarea");
      input?.closest('[class*="rounded-2xl"]')?.classList.add("orbita-chat-input");
      canvasPanel?.querySelector("header")?.classList.add("orbita-canvas-toolbar");
      const stage = [...(canvasPanel?.querySelectorAll("div") || [])].find((element) => (
        element.className.includes("flex-1") && element.className.includes("overflow-auto")
      ));
      stage?.classList.add("orbita-canvas-stage");
      canvasPanel?.querySelector('[class*="max-w-4xl"]')?.classList.add("orbita-canvas-artifact");
    }

    if (page === "tools") {
      const toolsTitleBlock = route.firstElementChild;
      toolsTitleBlock?.classList.add("orbita-route-title");
      toolsTitleBlock?.remove();
      const filter = [...route.querySelectorAll("div")].find((element) => (
        element.className.includes("bg-surface-container-low") && element.textContent.includes("Category")
      ));
      filter?.classList.add("orbita-filter-bar");
      route.querySelectorAll('[class*="h-64"]').forEach((card) => {
        card.classList.add("orbita-tool-card");
        card.querySelector('[class*="w-12"][class*="h-12"]')?.classList.add("orbita-tool-icon");
      });
    }

    if (page === "tasks") {
      route.firstElementChild?.classList.add("orbita-route-title");
      const taskHeader = route.firstElementChild?.querySelector("header");
      const taskTitle = taskHeader?.querySelector("h1");
      if (taskTitle) taskTitle.textContent = "我的任务";
      taskHeader?.querySelector("p")?.remove();
      [...(taskHeader?.querySelectorAll("button") || [])]
        .find((button) => button.textContent.includes("New Task"))
        ?.remove();
      route.firstElementChild?.querySelectorAll("button").forEach((button) => button.classList.add("orbita-page-action"));
      route.querySelectorAll('[class~="space-y-4"] > div').forEach((row) => {
        row.classList.add("orbita-task-row");
        row.querySelector('[class*="h-1"]')?.classList.add("orbita-progress-track");
      });
      route.querySelectorAll('[class~="grid-cols-1"] > div').forEach((card) => card.classList.add("orbita-completed-card"));
    }
  }

  document.documentElement.lang = "zh-CN";
  document.title = pageTitle;
  document.body.classList.add("orbita-page");
  if (page === "tools") document.body.classList.add("orbita-tools-surface");
  if (page === "tasks") document.body.classList.add("orbita-tasks-surface");
  if (page === "chat") document.body.classList.add("orbita-chat-surface");

  const oldSidebar = document.querySelector("body > aside");
  if (oldSidebar) oldSidebar.outerHTML = sidebarMarkup();

  const mainWrap = document.querySelector("body > div.pl-sidebar-width");
  mainWrap?.classList.add("orbita-main");
  mainWrap?.querySelector(":scope > header")?.classList.add("orbita-topbar");

  const main = document.querySelector("main");
  if (main) {
    if (page === "chat") renderBrandProjectChat(main);
    markPageRegions(main);
  }
  document.querySelector(".orbita-topbar")?.remove();

  translateText(document.body);
  translateAttributes(document.body);

  if (page === "chat") {
    const input = document.querySelector("[data-brand-chat-input]");
    const messageList = document.querySelector(".orbita-message-list");
    const appendMessage = (value) => {
      const message = document.createElement("article");
      message.className = "orbita-message orbita-user-message";
      const paragraph = document.createElement("p");
      paragraph.textContent = value;
      message.append(paragraph);
      messageList?.append(message);
      if (messageList) messageList.scrollTop = messageList.scrollHeight;
    };
    document.querySelectorAll("[data-brand-suggest]").forEach((button) => {
      button.addEventListener("click", () => {
        if (input) {
          input.value = button.dataset.brandSuggest || "";
          input.focus();
        }
      });
    });
    const sendMessage = () => {
      const value = input?.value.trim();
      if (!value) {
        showToast("先写下想完善的内容");
        input?.focus();
        return;
      }
      appendMessage(value);
      input.value = "";
      showToast("已加入方案草稿");
    };
    document.querySelector("[data-brand-send]")?.addEventListener("click", sendMessage);
    input?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    });
    document.querySelectorAll("[data-plan-action]").forEach((button) => {
      button.addEventListener("click", () => showToast(button.dataset.planAction + "入口待接入"));
    });
  }

  document.querySelectorAll(".orbita-sidebar [data-route='#templates'], .orbita-sidebar [data-route='#profile']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(link.dataset.name === "模板" ? "模板入口待接入" : "个人中心入口待接入");
    });
  });

  document.querySelectorAll(".orbita-sidebar button[data-route]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const route = button.dataset.route;
      if (route && route.startsWith("/")) {
        event.preventDefault();
        location.href = route;
      }
    });
  });

  document.querySelectorAll(".orbita-sidebar button[data-name]").forEach((button) => {
    button.addEventListener("click", () => showToast("已选择：" + button.dataset.name));
  });

  document.querySelector("#upgradeButton")?.addEventListener("click", () => showToast("专业版入口待接入"));
})();
