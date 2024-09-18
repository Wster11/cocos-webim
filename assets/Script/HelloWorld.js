import websdk from "easemob-websdk";

// 初始化环信IM
const conn = new websdk.connection({
  appKey: "Your AppKey"
});

conn.addEventHandler("connection", {
  onConnected: () => {
    console.log("onConnected");
  }
});

cc.Class({
  extends: cc.Component,

  properties: {
    label: {
      default: null,
      type: cc.Label
    },
    // defaults, set visually when attaching this script to the Canvas
    text: "Hello, World!"
  },

  // use this for initialization
  onLoad: function () {
    console.log(websdk, "websdk");
    this.label.string = this.text;

    // 登录环信服务器
    conn.open({
      user: "user",
      pwd: "pwd"
    });
  },

  // called every frame
  update: function (dt) {}
});
