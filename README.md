# navict-app

This is Navict app.

[ホスト先 URL](https://navict.vercel.app/)

# develpment 環境を立ち上げる

## .env ファイルを作る

```bash
# at project root directory
$ cd server
$ cp .env.example .env
$ cd prisma
$ cp .env.examle .env
$ cd ../../
```

その後、firebase-admin 用の環境変数を `server/.env` に追加。(誰かにもらってください)

```
FIREBASE_PROJECT_ID =
FIREBASE_CLIENT_EMAIL =
FIREBASE_PRIVATE_KEY =
```

## .env.local ファイルを作る

```bash
# at project root directory
$ touch .env.local
```

その後、firebase 用の環境変数を追加。(誰かにもらってください)

```
NEXT_PUBLIC_FB_APIKEY =
NEXT_PUBLIC_FB_AUTHDOMAIN =
NEXT_PUBLIC_FB_PROJECTID =
NEXT_PUBLIC_FB_STORAGEBUCKET =
NEXT_PUBLIC_FB_MESSAGINGSENDERID =
NEXT_PUBLIC_FB_APPID =
```

## PostgreSQL サーバーを立てる

- docker-compose.yaml に環境変数を追加する

  ```yaml
  db:
    image: postgres:12
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: 'P@ssw0rd'
      POSTGRES_DB: navict-app-db
  ```

- 立てる

  ```bash
  # at project root directory
  $ docker-compose up db
  ```

- 環境変数を削除する (production では使用しないので消してちょ。)

  ```yaml
  db:
    image: postgres:12
    ports:
      - '5432:5432'
  ```

## 依存モジュールをインストールする

```bash
# at project root directory
$ yarn install
$ cd server
$ yarn install
$ cd ../
```

## navict-app を起動する

```bash
# at project root directory
$ yarn dev
```

## seed データを初期化する

```bash
# at project root directory
$ yarn migrate:reset
```

# データベースを操作する

## GUI

```bash
# at project root directory
$ cd server/prisma
$ npx prisma studio
```

## CUI

```bash
# at project root directory
$ docker exec -i -t navict-app_db_1 /bin/bash
$ psql -d navict-app-db -U root -h localhost
```

参考: [PostgreSQL コマンドチートシート](https://qiita.com/Shitimi_613/items/bcd6a7f4134e6a8f0621)

- テーブル一覧を見る
  ```postgresql
  =# \z
  ```
- テーブル定義を見る
  ```postgresql
  =# \d public."User"
  ```
- テーブルの中身を見る
  ```postgresql
  =# select * from public."User";
  ```

# Deploy する

## navict-client (@pahalce)

Vercel でデプロイする

Vercel の無料プランでは github organization からのデプロイに対応していないため、レポジトリを個人に fork してデプロイする

```bash
# 1.初期設定(一回やればok)
# forkしたレポジトリのディレクトリに移動
$ cd app-react/
# fork元のリモートレポジトリを追加
$ git remote add upstream https://github.com/Piko-Piko-Pon-Taro/navict-app.git

# 2.デプロイのたびに実行
$ git fetch upstream
$ git merge upstream/main
$ git push origin main
# あとはVercelが自動でやってくれる(push時のみのなのでgithub上のボタンクリックでFetch upstreamした場合はgit push --allow-emptyでからコミットをpush)
```

### デプロイ設定

- [ホスト先 URL](https://navict.vercel.app/)
- PROJECT NAME: navict-client
- BUILD COMMAND: yarn build:client
- INSTALL COMMAND: yarn install --cwd server && yarn install

### 環境変数

```
API_BASE_PATH=/api
API_ORIGIN=https://navict-server.herokuapp.com
```

## navict-server (@dubianhaozhi)

https://dashboard.heroku.com/apps/navict-server \
main ブランチに merge された時に、heroku(上記)に自動デプロイされます。

# navict-recommender 用エンドポイント

## 全 roadmap の libraryId リスト欲しい時

```
GET http://localhost:24373/api/navictRecommender/roadmaps/libraryIds
```

---

# Log by @pahalce for firebase admin sdk

## admin sdk の追加

TODO: 平が書く

# Log by @dubianhaozhi for building the initial environment

- create project\
  [最近話題の「frourio」を無料でサクッとデプロイする方法（Vercel + Heroku）](https://zenn.dev/jun1123/articles/deploy-frourio)
  ```md
  - Server engine: Fastify
  - Client framework: Next.js
  - Building mode: Basic(build)
  - HTTP client of aspida: axios
  - React Hooks for data fetching: SWR
  - Daemon process manager: None
  - O/R mapping tool: Prisma
  - Database type of Prisma: PostgreSQL
  - Skip DB connection checks: Yes
  - dev DB: server/prisma/.env (postgresql://root:P@ssw0rd@localhost:5432/navict-app-db)
  - Testing framework: None
  - Package manager: Yarn
  - CI config: None
  - API server hosting: None
  - Branch name to deploy: main
  - Static hosting service: Vercel
  ```
- install tailwind\
  [Install Tailwind CSS with Next.js - Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
- migrate in production\
  [Production and testing environments - Prisma](https://www.prisma.io/docs/concepts/components/prisma-migrate#production-and-testing-environments)

# Frourio default description

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:8001](http://localhost:8001) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
