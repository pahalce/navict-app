FROM node:12.18.0

RUN mkdir /src
RUN mkdir /src/server

WORKDIR /src

COPY /server/package.json /server/yarn.lock ./server/
RUN yarn install --cwd ./server

COPY . .

EXPOSE 8080
CMD yarn migrate:reset && yarn build:server && yarn start:server
# CMD cd ./server/prisma/ && npx prisma migrate deploy && cd ../../ && yarn build:server && yarn start:server