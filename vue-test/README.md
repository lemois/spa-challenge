# vue-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

## Notes
### Pros
- 検討事項に含まれた項目はすべてリファレンス読みつつ難なく実装できた
- body に雑にコンポーネントをマウントできる
  - ただし router を利用する場合は独自タグではなく置き換え用の要素が必須
- computed property が便利
  - stream っぽく使える
- Laravel と仲がいいっぽい
  - Laravel で使うためのチュートリアルが提供されているので、インテグレートするのに迷わなさそう
- スクラッチ用の環境構築がすぐできた

### Cons
- サーバサイドレンダリング出来ない
- コンポーネントの定義は Class ではなく単なる Object で、ただしく Init や　Destroy するには Vue のライフサイクルとデータの持ち方を把握する必要がある