Page({
  data: {
    message: "",
    resultList: [
      {
        icon: '🌍',
        name: '海底轮',
        subName: '根轮（海底轮）',
        value: '阻塞',
        tag: '🌍 生存根基｜🌍 对应水晶：红色/黑色系',
        content: {
          position: '尾椎骨底部',
          theme: '​安全感、物质基础、身体本能',
          balance: '​你活在当下，信任世界，对生存需求（衣食住行）感到满足，能坦然接受变化，有“扎根大地”的稳定感。',
          noenergy: '​焦虑财务、缺乏安全感，总感觉“漂泊无依',
          active: '控制欲强，囤积物质，抗拒改变。',
        }
      },
      {
        icon: '🔥',
        name: '生殖轮',
        value: '活跃',
        subName: '脐轮（生殖轮）',
        tag: '🔥 情感与创造力 ｜🔥 对应水晶：橙色系',
        content: {
          position: '下腹部（丹田区域）',
          theme: '欲望流动、情绪表达、性能量、创造力',
          balance: '​情感充沛但不泛滥，享受亲密关系，对艺术和愉悦保持开放态度，创造力自然流淌。',
          noenergy: '压抑性欲或情感，羞于表达，缺乏灵感；',
          active: '沉迷情欲，情绪失控，过度付出消耗自己。',
        }
      },
      {
        icon: '☀️',
        name: '太阳神经丛轮',
        value: '正常开启',
        subName: '太阳神经丛轮',
        tag: '☀️ 个人力量中心｜☀️ 对应水晶：黄色/金色系',
        content: {
          position: '胃部到胸骨下方',
          theme: '自信、行动力、边界感、自律',
          balance: '清晰自己想要什么，果断行动，能捍卫自己的立场，同时尊重他人界限。',
          noenergy: '优柔寡断，回避冲突，习惯自我否定',
          active: '强势霸道，控制欲强，急于证明自己。',
        }
      },
      {
        icon: '💚️',
        name: '心轮',
        value: '阻塞',
        subName: '心轮',
        tag: '💚 爱与慈悲之源 ｜💚 对应水晶：绿色/粉色系',
        content: {
          position: '胸部中央',
          theme: '无条件的爱、同理心、人际关系',
          balance: '能真诚爱自己与他人，包容差异，在冲突中保持慈悲，人际关系和谐。',
          noenergy: '冷漠疏离，害怕受伤而封闭内心；',
          active: '过度牺牲讨好，依赖他人认可才能感受爱。',
        }
      },
      {
        icon: '🌀️',
        name: '喉轮',
        value: '阻塞',
        subName: '喉轮',
        tag: '🌀 真实表达之门｜🌀 对应水晶：蓝色系',
        content: {
          position: '喉咙区域',
          theme: '沟通、自我表达、真实性',
          balance: '敢于说出真实想法，倾听他人，能用文字或艺术传递心声，语言充满力量。',
          noenergy: '沉默寡言，压抑感受，害怕被评判；',
          active: '说话强势，打断他人，用语言操控他人。',
        }
      },
      {
        icon: '🔮️',
        name: '眉心轮',
        value: '阻塞',
        subName: '眉心轮（第三眼）',
        tag: '🔮 直觉与洞察｜🔮 对应水晶：靛蓝色系',
        content: {
          position: '两眉之间',
          theme: '直觉力、想象力、洞察真相',
          balance: '信任直觉，能看透表象直达本质，梦境清晰，对未来有预感却不执迷。',
          noenergy: '依赖逻辑否定直觉，思维混乱，缺乏方向感；',
          active: '沉迷玄学幻想，脱离现实，疑神疑鬼。',
        }
      },
      {
        icon: '🌌️',
        name: '顶轮',
        value: '阻塞',
        subName: '顶轮',
        tag: '🌌 灵性连接之桥 ｜🌌 对应水晶：紫色/白色系',
        content: {
          position: '头顶百会穴',
          theme: '宇宙意识、超脱感、生命意义',
          balance: '感受到万物一体，对生命有深层信任，能超越小我看待问题，内心宁静。',
          noenergy: '困于世俗琐事，感觉人生无意义；',
          active: '逃避现实责任，沉迷灵性理论。',
        }
      }
    ]
  },
  onLoad(options) {
    this.setData({
      message: decodeURIComponent(options.message)
    });
    const scores = options.scores.split(',').map(Number); // 获取分值数组
    this.setResult(scores);
  },
  setResult(arr) {
    let resultText = ['不活跃', '正常', '过度活跃'];
    arr.forEach((item, index) => {
      let resultList = this.data.resultList;
      let idx = -1;
      if (item >= 8 && item <= 20) {
        idx = 0; // 阻塞
      } else if (item >= 21 && item <= 34) {
        idx = 1; // 正常开启
      } else if (item >= 35 && item <= 40) {
        idx = 2; // 活跃
      }
      resultList[index].value = resultText[idx];
      this.setData({
        resultList: resultList
      });
    });
  },
  goBack() {
    wx.reLaunch({
      url: '/pages/index/index'
    }); // 返回并重新加载 index 页
  },
  copyText(e) {
    var textToCopy = e.target.dataset.text;
    wx.setClipboardData({
      data: textToCopy,
      success: function () {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function () {
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  }
});