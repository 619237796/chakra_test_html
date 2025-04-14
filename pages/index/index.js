Page({
  data: {
    questions: [
      // 根轮问题
      { name: "q1", label: "你是否通常觉得活在当下，生活十分踏实?", reverse: false, options: ["毫无感觉", "稍有感觉", "一般", "比较强烈", "非常强烈"] },
      { name: "q2", label: "你总是有掌控局势的强烈欲望?", reverse: true, options: ["毫无感觉", "稍有感觉", "一般", "比较强烈", "非常强烈"] },
      { name: "q3", label: "你担心自己的财务状况和家宅的安全?", reverse: true, options: ["毫无感觉", "稍有感觉", "一般", "比较强烈", "非常强烈"] },
      { name: "q4", label: "无论在哪里你都感觉很自在?", reverse: false, options: ["毫无感觉", "稍有感觉", "一般", "比较强烈", "非常强烈"] },
      { name: "q5", label: "你总是很有安全感?", reverse: false, options: ["毫无感觉", "稍有感觉", "一般", "比较强烈", "非常强烈"] },
      { name: "q6", label: "你依赖身边的人或者事?", reverse: true, options: ["毫无感觉", "稍有感觉", "一般", "比较强烈", "非常强烈"] },
      { name: "q7", label: "你是否孤独寂寞，或者刻意与他人保持距离?", reverse: true, options: ["毫无感觉", "稍有感觉", "一般", "比较强烈", "非常强烈"] },
      // ...其他脉轮问题...
    ],
    formData: {}, // 初始化为空对象
    isFormComplete: true, // 表单完整性标志
    incompleteQuestions: [], // 未选择问题的编号
  },

  onLoad() {
    this.setData({
      formData: {}, // 清空所有选项
      isFormComplete: true,
      incompleteQuestions: [],
    });
  },

  onOptionChange(e) {
    const { name } = e.currentTarget.dataset; // 获取问题的 name
    const value = parseInt(e.detail.value, 10) + 1; // 获取选中的值并转换为分值（从1开始）
    this.setData({
      [`formData.${name}`]: value, // 更新 formData
    });
  },

  calculateScore() {
    const { questions, formData } = this.data;
    const chakraScores = {
      root: 0, // 根轮
      sacral: 0, // 脐轮
      solar: 0, // 太阳神经丛轮
      heart: 0, // 心轮
      throat: 0, // 喉轮
      thirdEye: 0, // 眉心轮
      crown: 0, // 顶轮
    };

    questions.forEach((question, index) => {
      const value = parseInt(formData[question.name], 10); // 获取用户选择的分值
      if (isNaN(value)) return; // 跳过未选择的问题
      const adjustedValue = question.reverse ? 6 - value : value; // 反向问题分值转换
      const chakraIndex = Math.floor(index / 1); // 每8个问题对应一个脉轮
      const chakraKeys = Object.keys(chakraScores);
      chakraScores[chakraKeys[chakraIndex]] += adjustedValue;
    });

    return chakraScores;
  },

  onSubmit(e) {
    const { formData, questions } = this.data;
    const incompleteQuestions = [];

    // 检查每个问题是否已选择
    questions.forEach((question, index) => {
      if (!formData[question.name]) {
        incompleteQuestions.push(index + 1); // 记录未选择的问题编号
      }
    });

    if (incompleteQuestions.length > 0) {
      this.setData({
        isFormComplete: false,
        incompleteQuestions,
      });
      wx.showToast({
        title: `请完成以下问题：${incompleteQuestions.join('、')}`,
        icon: 'none',
        duration: 3000,
      });
      return;
    }

    this.setData({ isFormComplete: true, incompleteQuestions: [] });

    const chakraScores = this.calculateScore();
    const scores = Object.values(chakraScores).join(','); // 将分值拼接为字符串

    wx.navigateTo({
      url: `/pages/result/result?scores=${scores}`,
    });
  },
});
