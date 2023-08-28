# taro-on-build-command

>

## 使用

### 安装

```
npm i taro-on-build-command -D
```

### 使用插件

`/config/index.js`

```js
// 如下是在构建过程同步文件到其他目录

const config = {
  plugins: [
    [
      'taro-on-build-command',
      {
        onBuildStart: [`mkdir -p ${targetDir}`],
        onBuildFinish: [`rsync -a --delete ${originDir} ${targetDir}`],
      },
    ],
  ],
}
```

