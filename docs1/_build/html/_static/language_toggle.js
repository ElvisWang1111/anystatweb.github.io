// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
  // 定义语言切换函数
  window.toggleLanguage = function() {
    // 获取当前路径
    const currentPath = window.location.pathname;
    let newPath;
    
    // 简单地根据当前路径判断语言并切换
    if (currentPath.includes('/en/')) {
      // 当前是英文，切换到中文
      newPath = currentPath.replace('/en/', '/');
      localStorage.setItem('preferred_language', 'zh');
    } else {
      // 当前是中文，切换到英文
      // 找到最后一个'/'的位置，在其前插入'en/'
      const lastSlashIndex = currentPath.lastIndexOf('/');
      if (lastSlashIndex > 0) {
        newPath = currentPath.slice(0, lastSlashIndex) + '/en' + currentPath.slice(lastSlashIndex);
      } else {
        // 处理根路径情况
        newPath = '/en' + currentPath;
      }
      localStorage.setItem('preferred_language', 'en');
    }
    
    console.log('切换路径: ' + currentPath + ' -> ' + newPath);
    // 重定向到新路径
    window.location.href = newPath;
  };
  
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
      langButton.textContent = '中/EN';
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
  
  // 尝试多次添加按钮，以防页面加载延迟
  addLanguageToggle();
  setTimeout(addLanguageToggle, 500);
  setTimeout(addLanguageToggle, 1000);
});