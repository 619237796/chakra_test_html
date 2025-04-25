Page({
  data: {
    title: '菜单页',
    userId: null, // 保存用户唯一标识
    openid: null // 保存用户 openid
  },
  onLoad() {
    console.log('页面加载完成');
    // 调用 wx.login 获取 openid
    wx.login({
      success: (res) => {
        if (res.code) {
          wx.request({
            url: 'https://your-backend-api.com/getOpenid', // 替换为实际后端接口
            method: 'POST',
            data: { code: res.code },
            success: (response) => {
              console.log('获取 openid 成功:', response);
              this.setData({ openid: response.data.openid }); // 保存 openid
            },
            fail: (error) => {
              console.error('获取 openid 失败:', error);
            }
          });
        } else {
          console.error('登录失败！', res.errMsg);
        }
      },
      fail: (err) => {
        console.error('wx.login 调用失败:', err);
      }
    });
  },
  getUserProfile() {
    // 获取用户信息并请求后端完成注册或登录
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        const userInfo = res.userInfo;
        wx.request({
          url: 'https://your-backend-api.com/registerOrLogin', // 替换为实际后端接口
          method: 'POST',
          data: { ...userInfo, openid: this.data.openid }, // 传递 openid
          success: (response) => {
            console.log('用户注册/登录成功:', response);
            this.setData({ userId: response.data.userId }); // 保存用户唯一标识
          },
          fail: (error) => {
            console.error('用户注册/登录失败:', error);
          }
        });
      },
      fail: (err) => {
        console.error('获取用户信息失败:', err);
      }
    });
  },
  goToChakraTest() {
    if (!this.data.userId) {
      wx.showToast({
        title: '请先获取用户信息',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    wx.navigateTo({
      url: `/pages/index/index?userId=${this.data.userId}`, // 传递用户唯一标识
      events: {
        // 监听测试完成事件
        testCompleted: (data) => {
          this.saveTestRecord(data);
        }
      }
    });
  }
});
