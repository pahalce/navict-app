# エンドポイント一覧

TODO: 自動生成されるようにする

```txt
 *: jwtのチェックをする必要がある
**: 上記 + jwt内のuserIdを使用する必要がある
```

## users

```txt
signin
   POST   /signin

get a user
   GET    /users/_userId@number

update a user
** PUT    /users/_userId@number

delete a user
** DELETE /users/_userId@number
```

## tags

```txt
create a tag
 * POST /tags

search tags by name
   GET  /tags/search/_name@string
```

## roadmaps

```txt
create a roadmap
** POST   /roadmaps

get a roadmap
   GET    /roadmaps/_roadmapId@number

get popular roadmaps
   GET    /roadmaps/popular

search roadmaps by keyword
   GET    /roadmaps/search/_keyword@string

update a roadmap
** PUT    /roadmaps/_roadmapId@number

change firstStepId
** PATCH  /roadmaps/_roadmapId@number/_firstStepId@number

toggle isDone
** PATCH  /roadmaps/_roadmapId@number/isDone

delete a roadmap
** DELETE /roadmaps/_roadmapId@number
```

## likes

```txt
create a like
** POST   /likes

delete a like
** DELETE /likes/_likeId@number
```

## steps

```txt
create a step
** POST   /steps

update a step
** PUT    /steps/_stepId@number

change a step's memo
** PATCH /steps/_stepId@number/memo/_memo@string

change a step's nextStepId
** PATCH  /steps/_stepId@number/nextStepId/_nextStepId@number

toggle isDone
** PATCH  /steps/_stepId@number/isDone

delete a step
** DELETE /steps/_stepId@number
```

## libraries

```txt
create a library
 * POST /libraries

get recommended libraries
   POST /libriries/recommended

search libraries by title
   GET  /libraries/searchByTitle/_title@string

search libraries by link
   GET  /libraries/searchByLink/_link@string
```

## navictRecommender

only for [navict-recommender](https://github.com/Piko-Piko-Pon-Taro/navict-recommender)

```txt
get all roadmaps' libraryIds
   GET /navictRecommender/roadmaps/libraryIds
```
