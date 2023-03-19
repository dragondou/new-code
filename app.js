App({
  onLaunch: function () {
    tt.setNavigationBarTitle({
      title: "蜜雪冰城",
      success() {
        console.log("setNavigationBarTitle 调用成功");
      },
      fail(res) {
        console.log(`setNavigationBarTitle 调用失败:`, res.errMsg);
      },
    });
  }
})