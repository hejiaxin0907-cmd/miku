# miku

## 首页预览

当前首页实现位于 `work/stitch_ui_20260822/`，设计基准是 `1440×1024` 桌面端网站稿，同时包含窄屏响应式布局。

### 本地运行

```powershell
cd work/stitch_ui_20260822
node miku-preview-server.mjs
```

然后打开 <http://127.0.0.1:4173/>。

首页入口、灵感卡片和任务输入目前是可交互原型，后续可以继续接入真实模板、任务和生成 API。

## 当前 Orbita 版本

当前热更新中的 Orbita 工作台位于 `work/orbita-current/`，可单独运行：

```bash
cd work/orbita-current
node server.mjs
```

打开 <http://127.0.0.1:4178/>。
