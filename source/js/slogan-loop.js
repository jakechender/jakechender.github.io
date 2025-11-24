// slogan-loop.js
// 终极版：基于 URL 的严格锁定，彻底解决多页面冲突
$(document).ready(function() {
  
  // --- 【核心锁】只允许在首页运行 ---
  var path = window.location.pathname;
  // 兼容处理：有的浏览器首页是 "/"，有的是 "/index.html"
  var isHome = path === '/' || path === '/index.html';
  
  // 如果不是首页，直接结束脚本，绝不往下执行！
  if (!isHome) {
    return; 
  }
  // -------------------------------

  var mySlogans = [
    "欢迎，这是HY-Chai的主页  ！",
    "Let's go !",
    "勇士脚下没有绝路，懦夫眼中尽是悬崖 ！"
  ];

  setTimeout(function() {
    if (window.Typed) {
      var subtitleElement = document.getElementById('subtitle');
      if (subtitleElement) {
        
        // 再次兜底检查：防止奇怪的缓存导致在非首页运行
        // 如果当前页面标题本来就不为空（且不是我们预设的空格），说明主题已经渲染了文字，停止运行
        // 但由于主题可能会清空文字，主要还是靠上面的 URL 检查
        
        // 1. 清空内容 (移除那个占位空格)
        subtitleElement.innerHTML = ''; 
        
        // 2. 销毁旧实例
        if (subtitleElement._typed) {
          subtitleElement._typed.destroy();
        }

        // 3. 启动
        new Typed('#subtitle', {
          strings: mySlogans, 
          startDelay: 0,
          typeSpeed: 70,      
          loop: true,         
          backSpeed: 50,      
          showCursor: true 
        });
      }
    }
  }, 100);
});
