# navict-app

This is Navict app.

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

## PostgreSQL サーバーを立てる

```bash
# at project root directory
$ docker-compose up db
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

# データベースを操作する

## GUI

```bash
# at project root directory
$ cd ./sercer/prisma
$ npx prisma studio
```

## CUI

```bash
# at project root directory
$ docker exec -i -t navict-app_db_1 /bin/bash
$ psql -l # データベース一覧を取得
```

# Deploy する

## navict-client (@pahalce)

TODO: 平書いてね。

## navict-server (@dubianhaozhi)

https://dashboard.heroku.com/apps/navict-server \
main ブランチに merge された時に、heroku(上記)に自動デプロイされます。

TODO: USER_ID と USER_PASS は必要ないのであとで削除する

```bash
# at project root directory
$ heroku config:unset USER_ID
$ heroku config:unset USER_PASS
```

---

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
- postgres につながらなかったので、上記記事の `docker-compose.yaml` を修正\
  FIXME: POSTGRES_PASSWORD を env ファイルに移して環境ごとに変えられるようにする？
  ```yaml
  ...
  db:
    ...
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: 'P@ssw0rd'
      POSTGRES_DB: navict-app-db
  ```
- install tailwind\
  [Install Tailwind CSS with Next.js - Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)

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
