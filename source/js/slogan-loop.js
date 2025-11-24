// slogan-loop.js
$(document).ready(function() {
  var mySlogans = [
    "欢迎，这是HY-Chai的主页  ！",
    "Let's go !",
    "勇士脚下没有绝路，懦夫眼中尽是悬崖 ！"
  ];

  setTimeout(function() {
    if (window.Typed) {
      var subtitleElement = document.getElementById('subtitle');
      if (subtitleElement) {
        // 1. 【核心修复】强行清空内容，防止文字重叠
        subtitleElement.innerHTML = ''; 
        
        // 2. 销毁旧实例（如果有）
        if (subtitleElement._typed) {
          subtitleElement._typed.destroy();
        }

        // 3. 启动新的打字机
        new Typed('#subtitle', {
          strings: mySlogans, 
          startDelay: 0,      // 立刻开始，不需要再等
          typeSpeed: 100,      
          loop: true,         
          backSpeed: 20,      
          showCursor: true    // 由我们的脚本来显示光标，而不是主题
        });
      }
    }
  }, 100); // 稍微等待 100ms 让主题先初始化完，我们再覆盖它
});
