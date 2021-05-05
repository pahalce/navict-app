/* eslint @typescript-eslint/no-var-requires: 1 */
/**
 * FIXME:
 * なぜかimportできなかったのでrequireしてる。
 * これは多分ES周りの知識不足によるあれなので、いつかimportにしたい。
 */

const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()

const deleteAllData = async () => {
  await prisma.tag.deleteMany({})
  await prisma.library.deleteMany({})
  await prisma.user.deleteMany({})

  console.log('all data has been deleted')
}

const tags = async () => {
  const python = await prisma.tag.create({
    data: {
      id: 1,
      name: 'python'
    }
  })
  const nyumonhen = await prisma.tag.create({
    data: {
      id: 2,
      name: '入門編'
    }
  })
  const shoseki = await prisma.tag.create({
    data: {
      id: 3,
      name: '書籍'
    }
  })
  const saito = await prisma.tag.create({
    data: {
      id: 4,
      name: 'サイト'
    }
  })
  const javascript = await prisma.tag.create({
    data: {
      id: 5,
      name: 'JavaScript'
    }
  })
  const html = await prisma.tag.create({
    data: {
      id: 6,
      name: 'HTML'
    }
  })
  const css = await prisma.tag.create({
    data: {
      id: 7,
      name: 'CSS'
    }
  })
  const kikaigakusyu = await prisma.tag.create({
    data: {
      id: 8,
      name: '機械学習'
    }
  })
  const tokei = await prisma.tag.create({
    data: {
      id: 9,
      name: '統計'
    }
  })
  const apurijisso = await prisma.tag.create({
    data: {
      id: 10,
      name: 'アプリ実装'
    }
  })
  const ouyoukinou = await prisma.tag.create({
    data: {
      id: 11,
      name: '応用機能'
    }
  })
  const netchushin = await prisma.tag.create({
    data: {
      id: 12,
      name: 'ネット中心'
    }
  })
  const apuriseisaku = await prisma.tag.create({
    data: {
      id: 13,
      name: 'アプリ製作'
    }
  })
  const progate = await prisma.tag.create({
    data: {
      id: 14,
      name: 'progate'
    }
  })
  const dezain = await prisma.tag.create({
    data: {
      id: 15,
      name: 'デザイン'
    }
  })

  console.log({
    python,
    nyumonhen,
    shoseki,
    saito,
    javascript,
    html,
    css,
    kikaigakusyu,
    tokei,
    apurijisso,
    ouyoukinou,
    netchushin,
    apuriseisaku,
    progate,
    dezain
  })
}

const libraries = async () => {
  const goal = await prisma.library.create({
    data: {
      id: 1,
      title: 'GOAL'
    }
  })
  const dokugakuprogrammer = await prisma.library.create({
    data: {
      id: 2,
      title: '独学プログラマー',
      link:
        'https://www.amazon.co.jp/%E7%8B%AC%E5%AD%A6%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC-Python%E8%A8%80%E8%AA%9E%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8B%E3%82%89%E4%BB%95%E4%BA%8B%E3%81%AE%E3%82%84%E3%82%8A%E6%96%B9%E3%81%BE%E3%81%A7-%E3%82%B3%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%A2%E3%83%AB%E3%82%BD%E3%83%95/dp/4822292274'
    }
  })
  const progatepythonhen = await prisma.library.create({
    data: {
      id: 3,
      title: 'progate Python編',
      link: 'https://prog-8.com/courses/python'
    }
  })
  const dokusyupython = await prisma.library.create({
    data: {
      id: 4,
      title: '独習 Python',
      link:
        'https://www.amazon.co.jp/%E7%8B%AC%E7%BF%92Python-%E5%B1%B1%E7%94%B0-%E7%A5%A5%E5%AF%9B/dp/4798163643/ref=sr_1_6?adgrpid=70966512196&dchild=1&gclid=Cj0KCQjw4cOEBhDMARIsAA3XDRgbem9wRwg-mxtqD_4Cx_ovv3c7PdOjxuY-N6K9Ky1OczF2W8TSUgMaAvNcEALw_wcB&hvadid=352002171030&hvdev=c&hvlocphy=1009298&hvnetw=g&hvqmt=e&hvrand=1475016604126294196&hvtargid=kwd-762279376286&hydadcr=27269_11561182&jp-ad-ap=0&keywords=amazon+python+%E5%85%A5%E9%96%80&qid=1620146518&sr=8-6'
    }
  })
  const zerokaratsukurudeeplearning = await prisma.library.create({
    data: {
      id: 5,
      title: 'ゼロから作る Deep Learning',
      link:
        'https://www.amazon.co.jp/%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E4%BD%9C%E3%82%8BDeep-Learning-%E2%80%95Python%E3%81%A7%E5%AD%A6%E3%81%B6%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%A9%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E3%81%AE%E7%90%86%E8%AB%96%E3%81%A8%E5%AE%9F%E8%A3%85-%E6%96%8E%E8%97%A4-%E5%BA%B7%E6%AF%85/dp/4873117585/ref=sr_1_1?adgrpid=53066868853&dchild=1&gclid=Cj0KCQjw4cOEBhDMARIsAA3XDRiOFzBSzrp4Kff2FZXXnE5TLYebZDoovqThMTFQIPyxHCtJXlgEqSAaAsFPEALw_wcB&hvadid=338519936610&hvdev=c&hvlocphy=1009298&hvnetw=g&hvqmt=b&hvrand=10352989427815413098&hvtargid=kwd-475213042923&hydadcr=27294_11561544&jp-ad-ap=0&keywords=deep+learning+%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E4%BD%9C%E3%82%8B&qid=1620146584&sr=8-1'
    }
  })

  console.log({
    goal,
    dokugakuprogrammer,
    progatepythonhen,
    dokusyupython,
    zerokaratsukurudeeplearning
  })
}

const users = async () => {
  const watanabe = await prisma.user.create({
    data: {
      id: 1,
      name: 'わたなべつよし',
      email: 'tuyosi.628@gmail.com',
      bio:
        'なまこエンジニアです。ロンドン大学1年<br>仲良くしてください。<br>23ちゃい',
      img:
        'https://pbs.twimg.com/profile_images/1377089205516431361/UgFbDgAH_400x400.jpg',
      twitterLink: 'https://twitter.com/dubianhaozhi',
      githubLink: 'https://github.com/dubianhaozhi',
      firebaseUid: 'ZOglMsN1q7cr6qORUlSvvAPWqbk2'
    }
  })
  const taira = await prisma.user.create({
    data: {
      id: 2,
      name: 'たいら',
      email: 'peaceee.programming@gmail.com',
      img:
        'https://pbs.twimg.com/profile_images/1294959391192432640/RehTKVAR_400x400.jpg',
      twitterLink: 'https://twitter.com/peacepacey',
      githubLink: 'https://github.com/pahalce',
      firebaseUid: 'iiTnRINGWUM5LLJPvYfBuYiZgmo1'
    }
  })
  const muto = await prisma.user.create({
    data: {
      id: 3,
      name: 'むとうほなみ',
      email: 'honakuma1218@gmail.com',
      img:
        'https://pbs.twimg.com/profile_images/1326871780024217600/n9QZJDFh_400x400.jpg',
      twitterLink: 'https://twitter.com/honami_mt',
      firebaseUid: 'TODO: fill me baby'
    }
  })
  const inoue = await prisma.user.create({
    data: {
      id: 4,
      name: 'いのうえともひろ',
      email: 'tomoino925@gmail.com',
      bio: 'エンジニアをやっています。<br>多趣味です。',
      img:
        'https://pbs.twimg.com/profile_images/1295946409175212032/URYBm_Cz_400x400.jpg',
      twitterLink: 'https://twitter.com/tomoino925',
      githubLink: 'https://github.com/tomoino',
      firebaseUid: 'TODO: fill me baby!'
    }
  })

  console.log({
    watanabe,
    taira,
    muto,
    inoue
  })
}

const roadmapsWithSteps = async () => {
  const machinelearning = await prisma.roadmap.create({
    data: {
      id: 1,
      title: '機械学習入門',
      description:
        '機械学習は、まず本でさらってその後、サイトで得た情報を元にアプリを作ってみる予定です。',
      firstStepId: 1,
      isGoalSet: true,
      userId: 1,
      steps: {
        createMany: {
          data: [
            {
              id: 1,
              memo: 'まず一周する。',
              nextStepId: 2,
              isDone: true,
              libraryId: 3
            },
            {
              id: 2,
              nextStepId: 3,
              isDone: true,
              libraryId: 2
            },
            {
              id: 3,
              memo:
                'プログラミングの基礎知識がない方でも、解説→例題(サンプル)→理解度チェック<br>という3つのステップで、Pythonでプログラミングを行う際に必要な知識・概念・機能を<br>体系的に習得できます。',
              nextStepId: 4,
              isDone: true,
              libraryId: 4
            },
            {
              id: 4,
              memo:
                '多くの方が絶賛していますがまさに同感です。特に非エンジニアの方におすすめです。非エンジニアがAIや深層学習の勉強をする場合、CNNとかRNNとかの言葉の暗記や抽象的な例え話で理解し、実際の動作原理の話は棚上げにしがちです。でも「実際のところ、中身はどういう仕組みになってるの？」という気持ち悪さは残ってしまいます。この本ではまさにそうした気持ち悪さを解消できます。パーセプトロンの説明から始まり、自分の手で作りながら仕組みを理解できます。',
              libraryId: 5
            }
          ]
        }
      }
    }
  })
  const python = await prisma.roadmap.create({
    data: {
      id: 2,
      title: 'Python入門する',
      description:
        'Pythonはできるようになればめちゃめちゃ便利です！０からの学習を効率よくできるものをやりました！皆さんも参考にしてみてください！',
      firstStepId: 5,
      isGoalSet: true,
      isDone: true,
      userId: 4,
      steps: {
        createMany: {
          data: [
            {
              id: 5,
              memo: 'まず一周する。',
              nextStepId: 6,
              isDone: true,
              libraryId: 3
            },
            {
              id: 6,
              nextStepId: 7,
              isDone: true,
              libraryId: 2
            },
            {
              id: 7,
              memo:
                'プログラミングの基礎知識がない方でも、解説→例題(サンプル)→理解度チェック<br>という3つのステップで、Pythonでプログラミングを行う際に必要な知識・概念・機能を<br>体系的に習得できます。',
              nextStepId: 8,
              isDone: true,
              libraryId: 4
            },
            {
              id: 8,
              memo:
                '多くの方が絶賛していますがまさに同感です。特に非エンジニアの方におすすめです。非エンジニアがAIや深層学習の勉強をする場合、CNNとかRNNとかの言葉の暗記や抽象的な例え話で理解し、実際の動作原理の話は棚上げにしがちです。でも「実際のところ、中身はどういう仕組みになってるの？」という気持ち悪さは残ってしまいます。この本ではまさにそうした気持ち悪さを解消できます。パーセプトロンの説明から始まり、自分の手で作りながら仕組みを理解できます。',
              isDone: true,
              libraryId: 5
            }
          ]
        }
      }
    }
  })
  const ruby = await prisma.roadmap.create({
    data: {
      id: 3,
      title: 'Ruby入門',
      firstStepId: 9,
      userId: 2,
      steps: {
        createMany: {
          data: [
            {
              id: 9,
              memo: 'まず一周する。',
              libraryId: 3
            }
          ]
        }
      }
    }
  })
  const design = await prisma.roadmap.create({
    data: {
      id: 4,
      title: 'デザインの基礎',
      description:
        'めっちゃよかったです。特に、・・・をやるのがおすすめです。<br>けど〇〇で遠回りしちゃったかもしれないので余力のある人だけでいいかもしれま...',
      userId: 3
    }
  })
  const javascript = await prisma.roadmap.create({
    data: {
      id: 5,
      title: 'JavaScript入門する',
      description:
        'めっちゃよかったです。特に、・・・をやるのがおすすめです。<br>けど〇〇で遠回りしちゃったかもしれないので余力のある人だけでいいかもしれま...',
      userId: 2
    }
  })
  const htmlcss = await prisma.roadmap.create({
    data: {
      id: 6,
      title: 'HTML/CSS入門する',
      description:
        'めっちゃよかったです。特に、・・・をやるのがおすすめです。<br>けど〇〇で遠回りしちゃったかもしれないので余力のある人だけでいいかもしれま...',
      userId: 1
    }
  })
  const todolist = await prisma.roadmap.create({
    data: {
      id: 7,
      title: 'TODOリストが作れるようになる',
      description:
        'TODOリストを以前作ってみ他のですが、もう少し昨日が欲しいと思ったのでいろいろなサイトや本を参考にしながら、応用バージョンを作ってみました。',
      userId: 1
    }
  })

  console.log({
    machinelearning,
    python,
    ruby,
    design,
    javascript,
    htmlcss,
    todolist
  })
}

const roadmapsTags = async () => {
  const machinelearning = await prisma.roadmap.update({
    where: {
      id: 1
    },
    data: {
      tags: {
        connect: [
          { name: 'python' },
          { name: '入門編' },
          { name: '書籍' },
          { name: 'サイト' }
        ]
      }
    }
  })
  const python = await prisma.roadmap.update({
    where: {
      id: 2
    },
    data: {
      tags: {
        connect: [
          { name: 'python' },
          { name: '入門編' },
          { name: '書籍' },
          { name: 'サイト' }
        ]
      }
    }
  })
  const ruby = await prisma.roadmap.update({
    where: {
      id: 3
    },
    data: {
      tags: {
        connect: []
      }
    }
  })
  const design = await prisma.roadmap.update({
    where: {
      id: 4
    },
    data: {
      tags: {
        connect: [
          { name: 'デザイン' },
          { name: '入門編' },
          { name: '書籍' },
          { name: 'サイト' }
        ]
      }
    }
  })
  const javascript = await prisma.roadmap.update({
    where: {
      id: 5
    },
    data: {
      tags: {
        connect: [
          { name: 'JavaScript' },
          { name: '入門編' },
          { name: '書籍' },
          { name: 'サイト' }
        ]
      }
    }
  })
  const htmlcss = await prisma.roadmap.update({
    where: {
      id: 6
    },
    data: {
      tags: {
        connect: [
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'サイト' },
          { name: 'progate' }
        ]
      }
    }
  })
  const todolist = await prisma.roadmap.update({
    where: {
      id: 7
    },
    data: {
      tags: {
        connect: [
          { name: 'JavaScript' },
          { name: '応用機能' },
          { name: 'ネット中心' }
        ]
      }
    }
  })

  console.log({
    machinelearning,
    python,
    ruby,
    design,
    javascript,
    htmlcss,
    todolist
  })
}

const likes = async () => {
  const watanabe = await prisma.like.createMany({
    data: [
      { userId: 1, roadmapId: 1 },
      { userId: 1, roadmapId: 2 },
      { userId: 1, roadmapId: 3 }
    ]
  })
  const taira = await prisma.like.createMany({
    data: [
      { userId: 2, roadmapId: 4 },
      { userId: 2, roadmapId: 5 },
      { userId: 2, roadmapId: 6 }
    ]
  })
  const muto = await prisma.like.createMany({
    data: [
      { userId: 3, roadmapId: 7 },
      { userId: 3, roadmapId: 1 },
      { userId: 3, roadmapId: 2 }
    ]
  })
  const inoue = await prisma.like.createMany({
    data: [
      { userId: 4, roadmapId: 3 },
      { userId: 4, roadmapId: 4 },
      { userId: 4, roadmapId: 5 }
    ]
  })

  console.log({
    watanabe,
    taira,
    muto,
    inoue
  })
}

const usersForTrain = async () => {
  const data = [
    // TODO: @井上 ここを変えてちょ。id:5から初めてちょ。
    {
      id: 5,
      name: 'dummy5',
      firebaseUid: 'dummy5'
    },
    {
      id: 6,
      name: 'dummy6',
      firebaseUid: 'dummy6'
    },
    {
      id: 7,
      name: 'dummy7',
      firebaseUid: 'dummy7'
    }
  ]

  const users = await prisma.user.createMany({ data })

  console.log({ users })
}

const librariesForTrain = async () => {
  const data = [
    // TODO: @井上 ここを変えてちょ。id:6から初めてちょ。
    {
      id: 6,
      title: 'dummy6',
      link: 'https://www.dummy.com/dumm6'
    },
    {
      id: 7,
      title: 'dummy7',
      link: 'https://www.dummy.com/dummy7'
    },
    {
      id: 8,
      title: 'dummy8',
      link: 'https://www.dummy.com/dummy8'
    },
    {
      id: 9,
      title: 'dummy9',
      link: 'https://www.dummy.com/dummy9'
    },
    {
      id: 10,
      title: 'dummy10',
      link: 'https://www.dummy.com/dummy10'
    },
    {
      id: 11,
      title: 'dummy11',
      link: 'https://www.dummy.com/dummy11'
    },
    {
      id: 12,
      title: 'dummy12',
      link: 'https://www.dummy.com/dummy12'
    },
    {
      id: 13,
      title: 'dummy13',
      link: 'https://www.dummy.com/dummy13'
    },
    {
      id: 14,
      title: 'dummy14',
      link: 'https://www.dummy.com/dummy14'
    },
    {
      id: 15,
      title: 'dummy15',
      link: 'https://www.dummy.com/dummy15'
    }
  ]

  const libraries = await prisma.library.createMany({ data })

  console.log({ libraries })
}

const roadmapsForTrain = async () => {
  const data = [
    // TODO: @井上 ここを変えてちょ。id:8から初めてちょ。
    {
      id: 8,
      title: 'dummy1',
      firstStepId: 10,
      userId: 5
    },
    {
      id: 9,
      title: 'dummy2',
      firstStepId: 20,
      userId: 6
    },
    {
      id: 10,
      title: 'dummy3',
      firstStepId: 30,
      userId: 7
    }
  ]

  const roadmaps = await prisma.roadmap.createMany({ data })

  console.log({ roadmaps })
}

const stepsForTrain = async () => {
  const data = [
    // TODO: @井上 ここを変えてちょ。id:10から初めてちょ。
    {
      id: 10,
      nextStepId: 11,
      roadmapId: 8,
      libraryId: 6
    },
    {
      id: 11,
      nextStepId: 12,
      roadmapId: 8,
      libraryId: 7
    },
    {
      id: 12,
      nextStepId: 13,
      roadmapId: 8,
      libraryId: 8
    },
    {
      id: 13,
      nextStepId: 14,
      roadmapId: 8,
      libraryId: 9
    },
    {
      id: 14,
      nextStepId: 15,
      roadmapId: 8,
      libraryId: 10
    },
    {
      id: 15,
      nextStepId: 16,
      roadmapId: 8,
      libraryId: 11
    },
    {
      id: 16,
      nextStepId: 17,
      roadmapId: 8,
      libraryId: 12
    },
    {
      id: 17,
      nextStepId: 18,
      roadmapId: 8,
      libraryId: 13
    },
    {
      id: 18,
      nextStepId: 19,
      roadmapId: 8,
      libraryId: 14
    },
    {
      id: 19,
      nextStepId: 20,
      roadmapId: 8,
      libraryId: 15
    }
  ]

  const steps = await prisma.step.createMany({ data })

  console.log({ steps })
}

async function main() {
  console.log('===== deleteAllData =====')
  await deleteAllData()

  console.log('===== tags =====')
  await tags()

  console.log('===== libraries =====')
  await libraries()

  console.log('===== users =====')
  await users()

  console.log('===== roadmapsWithSteps =====')
  await roadmapsWithSteps()

  console.log('===== roadmapsTags =====')
  await roadmapsTags()

  console.log('===== likes =====')
  await likes()

  console.log('===== usersForTrain =====')
  await usersForTrain()

  console.log('===== librariesForTrain =====')
  await librariesForTrain()

  console.log('===== roadmapsForTrain =====')
  await roadmapsForTrain()

  console.log('===== stepsForTrain =====')
  await stepsForTrain()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
