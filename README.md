# Chunk Res

[Github](https://github.com/luoanb/chunk-res)

用于在微信小程序中实现 http 的流式响应, 无关框架, 在`原生小程序`、`UniApp`、`Taro`等都适用

## 安装

1. `pnpm add chunk-res`

2. 直接从[Github](https://github.com/luoanb/chunk-res)下载`chunkRes.(ts/js)`到项目中即可

## 使用

```ts
// Example:
const chunkRes = ChunkRes();
// can`t use ref() to save task; it will lost task info
const task = wx.request({
  //...other params
  enableChunked: true,
  success: (res) => {
    const lastResTexts: string[] | undefined = chunkRes.onComplateReturn();
    // dosomething
  },
});
task.onChunkReceived((res) => {
  const resTexts: string[] | undefined = chunkRes.onChunkReceivedReturn(
    res.data
  );
  // dosomething
});
```
