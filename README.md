# スクロール制限 デモアプリ

```md
# バージョン情報

- node: 16.14.2
- npm: 8.5.0
- yarn: 1.22.18
- react: 18.0.0
```

## 始め方

```bash
git clone git@github.com:yosse95ai/react-scroll-demo.git # ssh
# or
git clone https://github.com/yosse95ai/react-scroll-demo.git # http
```

node のバージョンは v16 以降にする。

```bash
cd react-scroll-demo
yarn
yarn start
```

スマホから PC のネットワークにアクセスしてデザインを見る。

## スクリーンショット

入力欄タップ直後の様子(全部 IOS)。

| Chrome | FireFox | Safari |
| ------ | ------- | ------ |
|![iOS の画像 (1)](https://user-images.githubusercontent.com/51770462/164969862-b6c4f828-e4cf-4ee3-a9ea-07cbf50f7fe5.png)|![iOS の画像 (2)](https://user-images.githubusercontent.com/51770462/164969880-19ea4b7f-e112-4f5e-acfe-920da49adce3.png)|![iOS の画像](https://user-images.githubusercontent.com/51770462/164969834-931e0705-ab4c-4c12-a34a-94a296b3fbb0.png)|
| Opera  | Edge    | Brave  |
|![iOS の画像 (3)](https://user-images.githubusercontent.com/51770462/164969904-ebb5ea91-9d64-4477-b8ea-d417ffc357af.png)|![iOS の画像 (4)](https://user-images.githubusercontent.com/51770462/164969925-f8e379c1-bb70-4b44-8236-ffddb0007e09.png)|    ![iOS の画像 (5)](https://user-images.githubusercontent.com/51770462/164969962-62a0a23b-4196-4f4e-a54a-acb116beb1f6.png)    |

braveだけうまく行かない。理由は明らかだけど、これ使うユーザーはほとんどいなそうなので対応しない。

スクロールすると入力欄が固定されているのがわかると思う。（iPhone12 proではできた。）
