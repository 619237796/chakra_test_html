Page({
  data: {
    questions: [
      // 根轮问题
      { name: "q1", label: "你是否通常觉得活在当下，生活十分踏实?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q2", label: "你总是有掌控局势的强烈欲望?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q3", label: "你担心自己的财务状况和家宅的安全?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q4", label: "无论在哪里你都感觉很自在?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q5", label: "你总是很有安全感?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q6", label: "你依赖身边的人或者事?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q7", label: "你是否孤独寂寞，或者刻意与他人保持距离?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q8", label: "你对发生在自己身上的事情坦然接受?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q9", label: "你是否能在亲密关系和肉体欲望中感觉到舒适？", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q10", label: "你是一个天生就很友善的人?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q11", label: "你通过某种艺术形式或创作表达你自己?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q12", label: "你常常有好的、创新的点子?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q13", label: "你是个非常情绪化和热情的人?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q14", label: "你容易毫无保留地表达自己的情感?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q15", label: "你对他人付出很多，甚至忘记自己的需求?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q16", label: "你倾向于隐藏情绪，不显露表情?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q17", label: "你经常培养自律习惯?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q18", label: "你会对你想要的事物采取行动?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q19", label: "你很有自信?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q20", label: "你能在必要时坚定自信吗?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q21", label: "你觉得自己身心合一?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q22", label: "你倾向于事前规划，而不是随遇而安?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q23", label: "你是否容易感到紧张，或者倾向于避免紧张的情况?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q24", label: "你总是会有回避行为?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q25", label: "你能轻易地给予他人和自我同情吗?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q26", label: "你努力追求人与人关系的和谐?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q27", label: "你喜爱绝大多数的人?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q28", label: "你对团队合作感到很轻松?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q29", label: "如果和他人有冲突，你会考虑到他人的感受?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q30", label: "你是否有强烈的与他人建立情感联系的需求?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q31", label: "你对于表达示好的对象很小心，以免受到伤害?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q32", label: "你很难表达自己的感觉，並且很少说话?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q33", label: "你说话时的声音响亮清楚?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q34", label: "你善于沟通，能倾听他人也能表达自我?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q35", label: "你善于写作以进行沟通?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q36", label: "你能表达你在性方面的感受吗?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q37", label: "你信赖大多数的人?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q38", label: "你擅长用文字、符号和概念进行思考?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q39", label: "你很难表达自己的感觉，並且很少说话?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q40", label: "你倾向于隐藏情绪，不显露表情?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q41", label: "你擅长培养对事物的觉知力、洞察力?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q42", label: "你对未来发生的事情有预感吗?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q43", label: "你很依赖直觉?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q44", label: "你能直观感受到万事万物的内在联系吗?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q45", label: "你经常幻想吗?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q46", label: "你容易回想你的梦境?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q47", label: "你觉得将头脑中的事物视觉化很困难吗?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q48", label: "你担心自己的财务状況和家宅的安全?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q49", label: "大至宇宙，小至身边事物，你能感觉到某种链接?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q50", label: "你把发生的事当作学习的过程?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q51", label: "你觉得所谓巧合通常有意义，而非随机发生?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q52", label: "你有良好的自我意识吗?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q53", label: "你擅长用文字、符号和概念进行思考?", reverse: false, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q54", label: "你依赖他人的洞察力?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q55", label: "你担心自己的财务状況和家宅的安全?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
      { name: "q56", label: "你倾向于避免让你感到紧张的情况?", reverse: true, options: ["没有", "很少", "偶尔", "经常", "总是"] },
    ],
    formData: {}, // 初始化为空对象
    isFormComplete: true, // 表单完整性标志
    incompleteQuestions: [] // 未选择问题的编号
  },
  onLoad() {
    this.setData({
      formData: {}, // 清空所有选项
      isFormComplete: true,
      incompleteQuestions: []
    });
  },
  onOptionChange(e) {
    const { name } = e.currentTarget.dataset; // 获取问题的 name
    const value = parseInt(e.detail.value, 10) + 1; // 获取选中的值并转换为分值（从1开始）
    this.setData({
      [`formData.${name}`]: value // 更新 formData
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
      crown: 0 // 顶轮
    };

    questions.forEach((question, index) => {
      const value = parseInt(formData[question.name], 10); // 获取用户选择的分值
      if (isNaN(value)) return; // 跳过未选择的问题
      const adjustedValue = question.reverse ? 6 - value : value; // 反向问题分值转换
      const chakraIndex = Math.floor(index / 8); // 每8个问题对应一个脉轮
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
        incompleteQuestions
      });
      wx.showToast({
        title: `请完成以下问题：${incompleteQuestions.join('、')}`,
        icon: 'none',
        duration: 3000
      });
      return;
    }

    this.setData({ isFormComplete: true, incompleteQuestions: [] });

    const chakraScores = this.calculateScore();
    const scores = Object.values(chakraScores).join(','); // 将分值拼接为字符串

    wx.navigateTo({
      url: `/pages/result/result?scores=${scores}`
    });
  }
});
