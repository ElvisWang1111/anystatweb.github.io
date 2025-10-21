// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前语言
  function getCurrentLanguage() {
    const currentPath = window.location.pathname;
    return currentPath.includes('/en/') ? 'en' : 'zh';
  }
  
  // 构建目标语言路径
  function buildTargetPath(targetLang) {
    const currentPath = window.location.pathname;
    const currentLang = getCurrentLanguage();
    
    // 如果已经是目标语言，返回当前路径
    if (currentLang === targetLang) {
      return currentPath;
    }
    
    // 处理从英文切换到中文
    if (currentLang === 'en' && targetLang === 'zh') {
      // 移除路径中的 /en/
      return currentPath.replace('/en/', '/');
    }
    
    // 处理从中文切换到英文
    if (currentLang === 'zh' && targetLang === 'en') {
      // 处理根路径
      if (currentPath === '/' || currentPath.endsWith('/index.html')) {
        return '/en/';
      }
      
      // 解析当前路径
      const pathParts = currentPath.split('/');
      
      // 移除空字符串部分
      const cleanParts = pathParts.filter(part => part !== '');
      
      // 在路径开头添加 /en/
      return '/en/' + cleanParts.join('/');
    }
    
    return currentPath;
  }
  
  // 定义语言切换函数
  window.toggleLanguage = function() {
    const currentLang = getCurrentLanguage();
    const targetLang = currentLang === 'en' ? 'zh' : 'en';
    const newPath = buildTargetPath(targetLang);
    
    // 保存用户语言偏好
    localStorage.setItem('preferred_language', targetLang);
    
    console.log('切换语言: ' + currentLang + ' -> ' + targetLang);
    console.log('切换路径: ' + window.location.pathname + ' -> ' + newPath);
    
    // 重定向到新路径
    window.location.href = newPath;
  };
  
  // 检查并应用用户语言偏好
  function applyLanguagePreference() {
    const preferredLang = localStorage.getItem('preferred_language');
    if (!preferredLang) return;
    
    const currentLang = getCurrentLanguage();
    if (currentLang !== preferredLang) {
      const targetPath = buildTargetPath(preferredLang);
      console.log('应用语言偏好: ' + currentLang + ' -> ' + preferredLang);
      window.location.replace(targetPath);
    }
  }
  
  // 添加语言切换按钮到面包屑导航区域
  function addLanguageToggle() {
    const breadcrumbsAside = document.querySelector('.wy-breadcrumbs-aside');
    if (breadcrumbsAside && !document.getElementById('lang-toggle')) {
      // 获取现有的"查看页面源码"链接
      const sourceLink = breadcrumbsAside.querySelector('a');
      
      // 创建一个容器
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.gap = '8px';
      
      // 创建语言切换按钮
      const langButton = document.createElement('button');
      langButton.id = 'lang-toggle';
      
      // 根据当前页面语言设置按钮文本
      const currentLang = getCurrentLanguage();
      langButton.textContent = currentLang === 'en' ? 'EN/中' : '中/EN';
      
      langButton.style.backgroundColor = '#2980B9';
      langButton.style.color = 'white';
      langButton.style.border = 'none';
      langButton.style.padding = '3px 10px';
      langButton.style.borderRadius = '3px';
      langButton.style.cursor = 'pointer';
      langButton.style.fontWeight = 'bold';
      langButton.style.fontSize = '0.9em';
      langButton.style.marginRight = '5px';
      langButton.onclick = window.toggleLanguage;
      
      // 创建分隔符
      const separator = document.createElement('span');
      separator.textContent = '|';
      separator.style.marginRight = '5px';
      
      // 清空原有内容
      breadcrumbsAside.innerHTML = '';
      
      // 添加新元素
      container.appendChild(langButton);
      container.appendChild(separator);
      if (sourceLink) {
        container.appendChild(sourceLink);
      }
      breadcrumbsAside.appendChild(container);
    }
  }
  
  // 页面加载时应用语言偏好
  applyLanguagePreference();
  
  // 尝试多次添加按钮，以防页面加载延迟
  addLanguageToggle();
  setTimeout(addLanguageToggle, 500);
  setTimeout(addLanguageToggle, 1000);
});