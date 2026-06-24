const navigation = [
  {
    label: "解决方案",
    href: "index.html#solutions",
    children: [
      ["钢铁冶金", "solutions-steel.html"],
      ["石油化工", "solutions-petrochemical.html"],
      ["船舶港口", "solutions-port.html"],
      ["煤炭能源", "solutions-coal.html"],
      ["水泥重工", "solutions-cement.html"],
      ["工程机械", "solutions-machinery.html"],
      ["风电能源", "solutions-wind.html"],
      ["电力能源", "solutions-power.html"],
      ["算力液冷", "solutions-liquid-cooling.html"],
    ],
  },
  {
    label: "产品中心",
    href: "index.html#products",
    children: [
      ["油品传感器", "products-sensor.html"],
      ["在线油液监测系统", "products-online.html"],
      ["防爆在线监测系统", "products-explosion-proof.html"],
      ["便携油品检测仪器", "products-portable.html"],
      ["油液云平台", "products-cloud.html"],
    ],
  },
  {
    label: "走进润智",
    href: "index.html#about",
    children: [
      ["公司简介", "about-company.html"],
      ["公司架构", "about-structure.html"],
      ["专家团队", "about-experts.html"],
      ["资质荣誉", "about-honors.html"],
      ["专利证书", "about-patents.html"],
    ],
  },
  {
    label: "资讯中心",
    href: "index.html#news",
    children: [
      ["公司动态", "news-company.html"],
      ["行业新闻", "news-industry.html"],
      ["技术交流", "news-technology.html"],
      ["监测系统百科", "news-encyclopedia.html"],
      ["视频中心", "news-video.html"],
    ],
  },
];

const pages = {
  "solutions-steel": {
    category: "解决方案",
    title: "钢铁冶金油液监测方案",
    subtitle: "面向轧机、液压站、减速机、连铸设备和循环润滑系统的在线监测。",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=85",
    points: ["污染度与磨粒趋势在线跟踪", "液压站异常磨损预警", "换油周期和检修计划优化"],
  },
  "solutions-petrochemical": {
    category: "解决方案",
    title: "石油化工油液监测方案",
    subtitle: "适配二类危化和连续生产场景，支持防爆终端、远程巡检和设备健康档案。",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=85",
    points: ["防爆在线采样与监测", "含水率、粘度和清洁度管理", "关键机泵状态诊断"],
  },
  "solutions-port": {
    category: "解决方案",
    title: "船舶港口油液监测方案",
    subtitle: "覆盖船舶动力、岸桥、门机、输送系统和港口大型液压设备。",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
    points: ["多设备集中远程看板", "盐雾高湿环境稳定运行", "维护工单闭环管理"],
  },
  "solutions-coal": {
    category: "解决方案",
    title: "煤炭能源油液监测方案",
    subtitle: "为采煤机、掘进机、输送机、液压支架等设备提供润滑安全监测。",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=85",
    points: ["重载冲击工况磨损识别", "井下设备远程数据接入", "异常告警分级推送"],
  },
  "solutions-cement": {
    category: "解决方案",
    title: "水泥重工油液监测方案",
    subtitle: "聚焦立磨、回转窑、辊压机和大型减速机的润滑状态在线诊断。",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85",
    points: ["粉尘环境下长期运行", "齿轮箱磨损趋势分析", "设备停机风险提前识别"],
  },
  "solutions-machinery": {
    category: "解决方案",
    title: "工程机械油液监测方案",
    subtitle: "为移动设备、施工机械和重载车辆提供便携检测与在线监测组合方案。",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=85",
    points: ["现场快速检测", "发动机与液压系统分级管理", "维保周期数据化决策"],
  },
  "solutions-wind": {
    category: "解决方案",
    title: "风电能源油液监测方案",
    subtitle: "围绕风电齿轮箱主路、旁路油液循环，建立预测性维护模型。",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=85",
    points: ["齿轮箱磨粒在线监测", "远程风场设备健康评分", "少人值守巡检协同"],
  },
  "solutions-power": {
    category: "解决方案",
    title: "电力能源油液监测方案",
    subtitle: "面向汽轮机、变压器辅助系统和发电厂关键旋转设备的润滑管理。",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85",
    points: ["透平油在线趋势监测", "设备等级化告警规则", "检修档案自动沉淀"],
  },
  "solutions-liquid-cooling": {
    category: "解决方案",
    title: "算力液冷流体监测方案",
    subtitle: "对液冷介质的颗粒物、导电率、含水和流体衰变进行连续监测。",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    points: ["液冷介质清洁度管理", "数据中心远程告警", "泄漏与介质异常趋势分析"],
  },
  "products-sensor": {
    category: "产品中心",
    title: "油品传感器",
    subtitle: "面向在线油液监测的底层传感器，覆盖微量水分、含水率、粘度、密度、介电常数与温度等关键指标。",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=85",
    points: ["适配润滑油、液压油、齿轮油等工业油品", "小体积，便于旁路与集成安装", "支持在线连续监测和系统联动预警"],
    sensorProducts: [
      {
        model: "IFW-2A",
        slug: "ifw-2a",
        href: "product-ifw-2a.html",
        title: "油液微量水分传感器",
        image: "img/water.png",
        badge: "微量水分",
        intro: "用于检测油品水活性、温度并换算水分PPM值，适合对溶解水变化敏感的润滑系统在线监测。",
        description: "传感器通过前端水分敏感元件获取水活性与温度，再结合油品水分模型输出PPM数据。内置多种油品饱和度曲线，可根据通讯协议切换，帮助现场及时识别油品受潮和水分异常趋势。",
        features: ["0-10000ppm宽量程", "适合工业集成安装", "设计寿命最高10年", "防腐蚀探头，不易损坏"],
        industries: "钢铁冶金、石油化工、能源电力、水泥建材、大型机械、煤炭采矿、地下挖掘等",
        oils: "齿轮油、液压油、透平油、柴机油、绝缘油等",
        specs: [
          ["产品型号", "IFW-2A"],
          ["检测指标", "温度、水活性（饱和度）、水分PPM值"],
          ["水活性范围", "0.04-1aw"],
          ["水分含量", "1-10000ppm"],
          ["温度范围", "-35-+85℃"],
          ["典型精度", "±0.04aw / 1ppm / ±0.5℃或±3%"],
          ["数据模型", "内置上百种油品水分饱和度曲线，可根据通讯协议切换"],
          ["适用油品", "齿轮油、液压油、透平油、柴机油、绝缘油等"],
          ["应用行业", "钢铁冶金、石油化工、能源电力、水泥建材、大型机械、煤炭采矿、地下挖掘等"],
        ],
      },
      {
        model: "IFW-2B",
        slug: "ifw-2b",
        href: "product-ifw-2b.html",
        title: "油液含水率传感器",
        image: "img/water_aw.png",
        badge: "含水率",
        intro: "面向油品进水与含水率变化的在线测量，可持续监测游离水、乳化水等异常水分风险。",
        description: "产品采用对水分变化敏感的检测结构，并通过电路设计与模型算法补偿温度、流量等现场因素。适用于对设备稳定性要求较高的连续运行场景，帮助提前发现油品进水风险。",
        features: ["毫秒级响应", "游离水与乳化水监测", "软硬件并行补偿", "连续在线预警"],
        industries: "钢铁冶金、石油化工、能源电力、水泥建材、大型机械、煤炭采矿、地下挖掘等",
        oils: "润滑油、齿轮油、液压油、透平油、涡轮机油等",
        specs: [
          ["产品型号", "IFW-2B"],
          ["检测指标", "油品含水率"],
          ["监测水分", "游离水、乳化水"],
          ["测量速率", "毫秒级测量响应"],
          ["测量方式", "实时连续在线监测"],
          ["补偿方式", "采用软硬件并行补偿，降低温度、流量等工况影响"],
          ["输出用途", "油品进水、微量进水与水分异常趋势预警"],
          ["适用油品", "润滑油、齿轮油、液压油、透平油、涡轮机油等"],
          ["应用行业", "钢铁冶金、石油化工、能源电力、水泥建材、大型机械、煤炭采矿、地下挖掘等"],
        ],
      },
      {
        model: "IFV-3/4/5",
        slug: "ifv-3-4-5",
        href: "product-ifv-3-4-5.html",
        title: "多参量油液传感器",
        image: "img/vis.png",
        badge: "粘度多参量",
        intro: "集成粘度、密度、介电常数、含水率与温度检测，适合需要综合判断油品状态的在线监测系统。",
        description: "传感器采用多功能集成检测结构，并配合模型数据与后端处理模块，实现大量程、多指标油液检测。一次安装即可覆盖多项关键指标，减少现场反复开孔和安装空间压力。",
        features: ["动力粘度可达1500cP", "粘度/密度/介电/水分/温度一体检测", "减少现场开孔", "可按需选配更多指标"],
        industries: "钢铁冶金、石油化工、能源电力、水泥建材、大型机械、煤炭采矿、地下挖掘等",
        oils: "齿轮油、液压油、透平油、柴机油、绝缘油等",
        specs: [
          ["产品型号", "IFV-3/4/5"],
          ["核心指标", "动力粘度、密度、介电常数、含水率、温度"],
          ["粘度范围", "动力粘度最高1500cP"],
          ["检测结构", "精密谐振机构与多功能集成检测结构"],
          ["数据处理", "配合FOS模型数据与后端数据处理模块"],
          ["安装价值", "降低在线油液监测现场反复开孔和安装空间需求"],
          ["扩展能力", "可按需选配更多检测指标"],
          ["适用油品", "齿轮油、液压油、透平油、柴机油、绝缘油等"],
          ["应用行业", "钢铁冶金、石油化工、能源电力、水泥建材、大型机械、煤炭采矿、地下挖掘等"],
        ],
      },
    ],
  },
  "products-online": {
    category: "产品中心",
    title: "在线油液监测系统",
    subtitle: "集成采样、传感、清洗、通讯和远程诊断能力，适合长期无人值守监测。",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=85",
    points: ["多路油品参数融合", "现场屏显与云端同步", "支持定制化采样管路"],
  },
  "products-explosion-proof": {
    category: "产品中心",
    title: "防爆在线监测系统",
    subtitle: "为石化、煤化工、危化和高安全等级工况提供防爆型在线油液监测终端。",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
    points: ["防爆壳体与安全布线", "适合连续生产设备", "远程告警降低巡检压力"],
  },
  "products-portable": {
    category: "产品中心",
    title: "便携油品检测仪器",
    subtitle: "用于现场快速抽检、巡检复核和实验室辅助分析，帮助维护人员快速判断油品状态。",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1600&q=85",
    points: ["快速检测污染度与水分", "便携箱体，现场即测", "自动生成检测记录"],
  },
  "products-cloud": {
    category: "产品中心",
    title: "油液云平台",
    subtitle: "集中管理设备、传感器、告警、趋势图和诊断报告，让设备润滑状态可视、可追溯。",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    points: ["设备资产档案", "趋势分析与告警工单", "多角色权限管理"],
  },
  "about-company": {
    category: "走进润智",
    title: "公司简介",
    subtitle: "润智科技专注工业设备润滑健康管理，提供从传感器到云平台的完整产品与服务。",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    points: ["自研底层传感器", "行业化方案交付", "长期技术服务体系"],
  },
  "about-structure": {
    category: "走进润智",
    title: "公司架构",
    subtitle: "研发、制造、交付、运维与行业顾问协同，为项目落地提供清晰责任链。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    points: ["研发中心", "智能制造中心", "客户成功与运维中心"],
  },
  "about-experts": {
    category: "走进润智",
    title: "专家团队",
    subtitle: "团队覆盖机械润滑、传感器研发、工业物联网、数据算法和现场诊断等方向。",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
    points: ["润滑诊断专家", "传感器硬件团队", "工业软件与算法团队"],
  },
  "about-honors": {
    category: "走进润智",
    title: "资质荣誉",
    subtitle: "以质量体系、研发资质和行业认可支撑长期交付能力。",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
    points: ["高新技术企业能力", "质量管理体系", "行业创新应用奖项"],
  },
  "about-patents": {
    category: "走进润智",
    title: "专利证书",
    subtitle: "围绕油液传感、流体采样、数据诊断和设备健康评估持续布局知识产权。",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85",
    points: ["传感器结构专利", "数据诊断软件著作权", "采样和清洁机构专利"],
  },
  "news-company": {
    category: "资讯中心",
    title: "公司动态",
    subtitle: "记录润智科技展会、产品发布、客户活动和企业发展动态。",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85",
    points: ["行业大会分享", "新产品发布", "客户联合项目"],
  },
  "news-industry": {
    category: "资讯中心",
    title: "行业新闻",
    subtitle: "关注设备预测性维护、双碳制造、工业物联网和润滑管理趋势。",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    points: ["风电润滑管理趋势", "智能制造应用", "液冷运维新需求"],
  },
  "news-technology": {
    category: "资讯中心",
    title: "技术交流",
    subtitle: "分享油液指标、传感器原理、采样策略和设备诊断方法。",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1600&q=85",
    points: ["磨粒监测技术", "污染度等级解读", "含水率对设备影响"],
  },
  "news-encyclopedia": {
    category: "资讯中心",
    title: "监测系统百科",
    subtitle: "面向设备工程师的油液监测常见问题、指标解释和选型知识库。",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
    points: ["油液指标基础", "在线监测安装方式", "告警阈值设置建议"],
  },
  "news-video": {
    category: "资讯中心",
    title: "视频中心",
    subtitle: "集中展示企业宣传片、产品演示、测试实验和现场应用视频。",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1600&q=85",
    points: ["企业宣传片", "传感器测试", "项目现场记录"],
  },
  cases: {
    category: "应用案例",
    title: "应用案例",
    subtitle: "展示典型行业项目如何通过油液在线监测降低停机风险、优化换油周期。",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85",
    points: ["风电齿轮箱在线监测", "钢铁液压站污染度管理", "石化机泵润滑状态诊断"],
  },
  contact: {
    category: "联系我们",
    title: "联系我们",
    subtitle: "提交工况、设备类型和监测指标需求，我们会为你提供产品选型和项目方案建议。",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=85",
    points: ["咨询电话：0755-8888 8000", "邮箱：service@example.com", "地址：深圳市南山区科技园"],
  },
};

pages["products-sensor"].sensorProducts.forEach((product) => {
  pages[`product-${product.slug}`] = {
    category: "产品中心",
    title: `${product.model}${product.title}`,
    subtitle: product.intro,
    image: pages["products-sensor"].image,
    points: product.features,
    sensorProduct: product,
  };
});

function getPageKey() {
  const explicit = document.body.dataset.page;
  if (explicit) return explicit;
  return location.pathname.split("/").pop().replace(".html", "") || "contact";
}

function renderNav() {
  const navHtml = navigation.map((item) => `
    <div class="nav-item">
      <a class="nav-link" href="${item.href}">${item.label}</a>
      <div class="nav-sub">${item.children.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div>
    </div>
  `).join("");

  return `
    <header class="site-header" data-header>
      <div class="container nav-shell">
        <a class="brand" href="index.html" aria-label="润智科技首页">
          <span class="brand-mark">RZ</span>
          <span><strong>润智科技</strong><small>Lubrication Intelligence</small></span>
        </a>
        <button class="menu-button" type="button" aria-label="打开导航" data-menu-button><i data-lucide="menu"></i></button>
        <nav class="main-nav" data-nav>
          ${navHtml}
          <a class="nav-link" href="cases.html">应用案例</a>
          <a class="nav-cta" href="contact.html">联系我们</a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer" id="contact">
      <div class="container footer-grid">
        <div class="footer-intro">
          <a class="brand footer-brand" href="index.html">
            <span class="brand-mark">RZ</span>
            <span><strong>润智科技</strong><small>Lubrication Intelligence</small></span>
          </a>
          <p>从油液传感器到在线监测系统，再到物联网云平台，为设备预测性维护提供完整技术底座。</p>
          <a class="cloud-entry" href="products-cloud.html">进入油液云 <i data-lucide="external-link"></i></a>
        </div>
        <div><h3>解决方案</h3><a href="solutions-steel.html">钢铁冶金</a><a href="solutions-petrochemical.html">石油化工</a><a href="solutions-wind.html">风电能源</a><a href="solutions-liquid-cooling.html">算力液冷</a></div>
        <div><h3>产品中心</h3><a href="products-sensor.html">油品传感器</a><a href="products-online.html">在线监测系统</a><a href="products-portable.html">便携检测仪器</a><a href="products-cloud.html">油液云平台</a></div>
        <div><h3>联系我们</h3><p>咨询电话：15986421252</p><p>邮箱：liwenwei2023@163.com</p><p>地址：广州市天河区珠吉路安厦一街21号405</p></div>
      </div>
      <div class="footer-copy"><div class="container"><p>Copyright © 2026 润智科技 版权所有</p></div></div>
    </footer>
  `;
}

function renderSensorProducts(page) {
  const navItems = page.sensorProducts.map((product) => `
    <a class="sensor-mini-card sensor-list-card" href="${product.href}">
      <img src="${product.image}" alt="${product.title}">
      <span>${product.model}</span>
      <strong>${product.title}</strong>
      <em>${product.intro}</em>
    </a>
  `).join("");

  return `
    <div class="product-category-intro">
      <p class="eyebrow dark">Online Sensor</p>
      <h2>${page.title}</h2>
      <p>${page.subtitle}</p>
      <div class="product-mini-grid">
        ${navItems}
      </div>
    </div>

    <a class="button primary page-cta" href="contact.html">获取传感器选型建议</a>
  `;
}

function renderSensorDetailPage(product) {
  const relatedProducts = pages["products-sensor"].sensorProducts.map((item) => `
    <a class="${item.slug === product.slug ? "is-current" : ""}" href="${item.href}">${item.model}${item.title}</a>
  `).join("");

  return `
    <div class="product-detail-tools">
      <a href="products-sensor.html"><i data-lucide="arrow-left"></i> 返回传感器列表</a>
      <div>${relatedProducts}</div>
    </div>

    <section class="product-detail-block" id="${product.slug}">
      <div class="product-detail-head">
        <div class="product-gallery">
          <div class="product-gallery-main">
            <img src="${product.image}" alt="${product.title}">
          </div>
          <div class="product-gallery-thumbs">
            <img src="${product.image}" alt="${product.title}缩略图">
            <img src="${product.image}" alt="${product.title}结构图">
          </div>
        </div>
        <div class="product-detail-info">
          <p class="eyebrow dark">${product.badge}</p>
          <h3>${product.model}${product.title}</h3>
          <p>${product.intro}</p>
          <dl>
            <div><dt>应用行业</dt><dd>${product.industries}</dd></div>
            <div><dt>适用油品</dt><dd>${product.oils}</dd></div>
          </dl>
          <a class="button primary" href="contact.html">咨询产品报价</a>
        </div>
      </div>

      <div class="product-doc-section">
        <h4>产品介绍</h4>
        <p>${product.description}</p>
      </div>

      <div class="product-doc-section">
        <h4>技术特点</h4>
        <ul class="product-feature-list">
          ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
      </div>

      <div class="product-doc-section">
        <h4>技术参数</h4>
        <table class="product-param-table">
          <tbody>
            ${product.specs.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderPage(page) {
  const currentGroup = navigation.find((item) => item.label === page.category);
  const sideLinks = currentGroup
    ? currentGroup.children
    : [["应用案例", "cases.html"], ["联系我们", "contact.html"]];
  const content = page.sensorProduct ? renderSensorDetailPage(page.sensorProduct) : page.sensorProducts ? renderSensorProducts(page) : `
    <p class="eyebrow dark">Overview</p>
    <h2>${page.title}</h2>
    <p>${page.subtitle} 该页面是独立二级页面，可继续扩展为更详细的产品参数、行业痛点、实施流程、案例图片和表单转化内容。</p>
    <div class="feature-list">
      ${page.points.map((point) => `<div><i data-lucide="circle-check"></i><span>${point}</span></div>`).join("")}
    </div>
    <div class="process-grid">
      <div><strong>01</strong><h3>现场调研</h3><p>确认设备类型、油品介质、采样位置与通讯环境。</p></div>
      <div><strong>02</strong><h3>方案配置</h3><p>匹配传感器、监测终端、采样管路和云平台功能。</p></div>
      <div><strong>03</strong><h3>安装调试</h3><p>完成设备接入、阈值设定、数据校准和告警验证。</p></div>
      <div><strong>04</strong><h3>持续运维</h3><p>输出趋势报告、异常诊断建议和维护闭环记录。</p></div>
    </div>
    <a class="button primary page-cta" href="contact.html">获取方案咨询</a>
  `;

  return `
    ${renderNav()}
    <main class="inner-page">
      <section class="page-hero" style="--page-image: url('${page.image}')">
        <div class="container">
          <p class="eyebrow">${page.category}</p>
          <h1>${page.title}</h1>
          <p>${page.subtitle}</p>
        </div>
      </section>
      <section class="section page-body">
        <div class="container page-layout">
          <aside class="side-nav">
            <h2>${page.category}</h2>
            ${sideLinks.map(([label, href]) => `<a href="${href}" class="${href === `${getPageKey()}.html` ? "is-current" : ""}">${label}</a>`).join("")}
          </aside>
          <article class="content-panel">
            ${content}
          </article>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}

const page = pages[getPageKey()] || pages.contact;
document.title = `${page.title} | 润智科技`;
document.getElementById("page-root").innerHTML = renderPage(page);

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});
setHeaderState();
