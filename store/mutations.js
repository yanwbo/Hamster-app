import localStorage from '../common/localStorage'

export default {
    login (state, param) {
        state.hasLogin = true;
        state.token = param.token;
        state.loginName = param.loginName;
        state.userId = param.userId;
        state.time = new Date().getTime();
    },
    loginOut (state) {
        state.hasLogin = false;
        state.token = null;
    },
    connectWs: function () {
        if (localStorage.getHasLogin()) {
            uni.connectSocket({
                url: 'ws://localhost:10002/notify',
                header: {
                    'token': localStorage.getToken()
                }
            });
            uni.onSocketOpen(function (res) {
                console.log('WebSocket连接已打开！');
            });
            uni.onSocketError(function (res) {
                console.log('WebSocket连接打开失败，请检查！', res);
            });
            uni.onSocketMessage(function (res) {
                console.log('收到服务器内容：' + res.data);
            });
            uni.onSocketClose(function (res) {
                console.log('WebSocket 已关闭！');
            });
        }

    }
};