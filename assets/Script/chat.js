// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start() {},

  initChat: function () {
    // 初始化环信IM
    const websdk = window.websdk.default;
    console.log(websdk, "websdk");
    window.conn = new websdk.connection({
      appKey: "Your AppKey"
    });

    window.conn.addEventHandler("connection", {
      onConnected: () => {
        console.log("IM 服务连接成功");
      }
    });
  },

  login: function () {
    // 登录环信IM
    window.conn
      .open({
        user: "yjj",
        pwd: "yjj"
      })
      .then((res) => {
        // 登录成功
        console.log("open成功", res);
      });
  },

  getHistoryMessages: function () {
    // 获取历史消息
    window.conn
      .getHistoryMessages({
        targetId: "sttest",
        pageSize: 10
      })
      .then((res) => {
        console.log("获取历史消息成功", res);
      })
      .catch((e) => {
        console.log("获取历史消息失败", e);
      });
  },

  sendTextMessage: function () {
    const msg = window.websdk.default.message.create({
      to: "sttest",
      chatType: "singleChat",
      type: "txt",
      msg: "你好"
    });
    // 发送文本消息
    window.conn
      .send(msg)
      .then((res) => {
        console.log("发送文本消息成功", res);
      })
      .catch((err) => {
        console.log("发送文本消息失败", err);
      });
  },
  addContact: function () {
    // 添加好友
    window.conn
      .addContact("sttest")
      .then((res) => {
        console.log("发送好友申请成功", res);
      })
      .catch((err) => {
        console.log("发送好友申请失败", err);
      });
  },
  deleteContact: function () {
    // 删除好友
    window.conn
      .deleteContact("sttest")
      .then((res) => {
        console.log("删除好友成功", res);
      })
      .catch((err) => {
        console.log("删除好友失败", err);
      });
  }
  // update (dt) {},
});
