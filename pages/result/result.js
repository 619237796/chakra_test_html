Page({
  data: {
    message: ""
  },
  onLoad(options) {
    this.setData({ message: decodeURIComponent(options.message) });
    const scores = options.scores.split(',').map(Number); // 获取分值数组
    this.drawPolygon(scores);
  },
  goBack() {
    wx.reLaunch({ url: '/pages/index/index' }); // 返回并重新加载 index 页
  },
  drawPolygon(scores) {
    const ctx = wx.createCanvasContext('chakraCanvas');
    const centerX = 150; // 中心点X坐标
    const centerY = 150; // 中心点Y坐标
    const radius = 100; // 半径
    const chakras = ['根轮', '脐轮', '太阳神经丛轮', '心轮', '喉轮', '眉心轮', '顶轮'];
    const angleStep = (2 * Math.PI) / chakras.length;

    // 绘制蛛网状背景
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      const currentRadius = (radius / 5) * i;
      chakras.forEach((_, index) => {
        const angle = angleStep * index;
        const x = centerX + currentRadius * Math.cos(angle);
        const y = centerY + currentRadius * Math.sin(angle);
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.setStrokeStyle('#rgb(0, 0, 0)'); // 设置蛛网线颜色
      ctx.stroke();
    }

    // 绘制多边形
    ctx.beginPath();
    scores.forEach((score, index) => {
      const angle = angleStep * index;
      const x = centerX + (radius * score / 5) * Math.cos(angle);
      const y = centerY + (radius * score / 5) * Math.sin(angle);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.setStrokeStyle('#FF0000'); // 设置多边形颜色
    ctx.stroke();

    // 绘制文字
    chakras.forEach((chakra, index) => {
      const angle = angleStep * index;
      const x = centerX + (radius + 20) * Math.cos(angle);
      const y = centerY + (radius + 20) * Math.sin(angle);
      ctx.fillText(chakra, x - 10, y + 5);
    });

    ctx.draw();
  },
});
