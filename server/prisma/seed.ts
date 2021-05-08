/**
 * FIXME:
 * なぜかimportできなかったのでrequireしてる。
 * これは多分ES周りの知識不足によるあれなので、いつかimportにしたい。
 */

const PrismaClient = require('@prisma/client').PrismaClient // eslint-disable-line @typescript-eslint/no-var-requires
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
      email: 'tuyosi.628@dummy.com',
      bio:
        'なまこエンジニアです。ロンドン大学1年<br>仲良くしてください。<br>23ちゃい',
      img:
        'https://pbs.twimg.com/profile_images/1377089205516431361/UgFbDgAH_400x400.jpg',
      twitterLink: 'https://twitter.com/dubianhaozhi',
      githubLink: 'https://github.com/dubianhaozhi',
      firebaseUid: 'sfQBWXtuLmUZbfiiVk1RhFE6u5x1'
    }
  })
  const taira = await prisma.user.create({
    data: {
      id: 2,
      name: 'たいら',
      email: 'peaceee.programming@dummy.com',
      img:
        'https://pbs.twimg.com/profile_images/1294959391192432640/RehTKVAR_400x400.jpg',
      twitterLink: 'https://twitter.com/peacepacey',
      githubLink: 'https://github.com/pahalce',
      firebaseUid: 'DSeGUUBb1HTUpgCNelnhwgHDCzW2'
    }
  })
  const muto = await prisma.user.create({
    data: {
      id: 3,
      name: 'むとうほなみ',
      email: 'honakuma1218@dummy.com',
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
      email: 'tomoino925@dummy.com',
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
    {
      id: 5,
      name: 'dummy5',
      firebaseUid: 'dummy5'
    }
  ]

  const users = await prisma.user.createMany({ data })

  console.log({ users })
}

const librariesForTrain = async () => {
  const data = [
    {
      id: 6,
      title: 'とほほのJavaScriptリファレンス',
      link: 'https://www.tohoho-web.com/js/',
      img: null
    },
    {
      id: 7,
      title: 'JavaScript逆引きリファレンス',
      link: 'https://shanabrian.com/web/javascript/',
      img: null
    },
    {
      id: 8,
      title: 'ノンプログラマのためのJavaScriptはじめの一歩',
      link:
        'https://www.amazon.co.jp/dp/4774153761?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 9,
      title: 'スラスラ読める JavaScriptふりがなプログラミング',
      link:
        'https://www.amazon.co.jp/-/en/%E5%8F%8A%E5%B7%9D%E5%8D%93%E4%B9%9F-ebook/dp/B07DR76HSG/ref=sr_1_15?dchild=1&keywords=JavaScript&qid=1620484108&sr=8-15',
      img: null
    },
    {
      id: 10,
      title: '確かな力が身につくJavaScript「超」入門',
      link:
        'https://www.amazon.co.jp/dp/4797383585?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 11,
      title: 'スラスラわかるJavaScript',
      link:
        'https://www.amazon.co.jp/dp/4798125830?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 12,
      title: 'Webサイト制作者のための JavaScript入門講座',
      link:
        'https://www.amazon.co.jp/dp/4774145246?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 13,
      title: '初めてのJavaScript 第3版 ',
      link:
        'https://www.amazon.co.jp/-/en/Ethan-Brown/dp/4873117836/ref=sr_1_8?dchild=1&keywords=JavaScript&qid=1620484108&sr=8-8',
      img: null
    },
    {
      id: 14,
      title:
        '改訂新版JavaScript本格入門 ~モダンスタイルによる基礎から現場での応用まで',
      link:
        'https://www.amazon.co.jp/dp/477418411X?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 15,
      title: 'パーフェクトJavaScript (PERFECT SERIES 4)',
      link:
        'https://www.amazon.co.jp/dp/477414813X?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 16,
      title: 'JavaScriptエンジニア養成読本',
      link:
        'https://www.amazon.co.jp/dp/4774167975?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 17,
      title: 'JavaScriptパターン ―優れたアプリケーションのための作法',
      link:
        'https://www.amazon.co.jp/dp/4873114888?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 18,
      title: 'Effective JavaScript',
      link:
        'https://www.amazon.co.jp/dp/4798131113?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 19,
      title:
        'JavaScriptモダンプログラミング完全ガイド　堅牢なコードを効率的に開発できる！',
      link:
        'https://www.amazon.co.jp/-/en/Cay-S-Horstmann-ebook/dp/B08QVCSY1D/ref=sr_1_10?dchild=1&keywords=JavaScript&qid=1620484108&sr=8-10',
      img: null
    },
    {
      id: 20,
      title: '開眼! JavaScript ―言語仕様から学ぶJavaScriptの本質',
      link:
        'https://www.amazon.co.jp/-/en/Cody-Lindley/dp/487311621X/ref=sr_1_18?dchild=1&keywords=JavaScript&qid=1620484108&sr=8-18',
      img: null
    },
    {
      id: 21,
      title: 'Webフロントエンド ハイパフォーマンス チューニング',
      link:
        'https://www.amazon.co.jp/-/en/%E4%B9%85%E4%BF%9D%E7%94%B0-%E5%85%89%E5%89%87-ebook/dp/B0728K5JZV/ref=sr_1_12?dchild=1&keywords=JavaScript&qid=1620484862&sr=8-12',
      img: null
    },
    {
      id: 22,
      title: 'これからはじめるVue.js実践入門',
      link:
        'https://www.amazon.co.jp/-/en/%E5%B1%B1%E7%94%B0-%E7%A5%A5%E5%AF%9B-ebook/dp/B07WVXRNH3/ref=sr_1_26?dchild=1&keywords=JavaScript&qid=1620485102&sr=8-26',
      img: null
    },
    {
      id: 23,
      title: '速習 React 速習シリーズ',
      link:
        'https://www.amazon.co.jp/-/en/%E5%B1%B1%E7%94%B0%E7%A5%A5%E5%AF%9B-ebook/dp/B07GWFRCR1/ref=sr_1_70?dchild=1&keywords=JavaScript&qid=1620485012&sr=8-70',
      img: null
    },
    {
      id: 24,
      title: 'React.js & Next.js超入門',
      link:
        'https://www.amazon.co.jp/-/en/%E6%8E%8C%E7%94%B0%E6%B4%A5%E8%80%B6%E4%B9%83-ebook/dp/B07X7DHZ9F/ref=sr_1_58?dchild=1&keywords=JavaScript&qid=1620485012&sr=8-58',
      img: null
    },
    {
      id: 25,
      title: 'レベルアップNode.js ',
      link:
        'https://www.amazon.co.jp/-/en/%E4%BD%90%E3%80%85%E6%9C%A8-%E5%8B%9D%E5%BA%83-ebook/dp/B08B183M5V/ref=sr_1_29?dchild=1&keywords=JavaScript&qid=1620485102&sr=8-29',
      img: null
    },
    {
      id: 26,
      title: 'Pythonの絵本 Pythonを楽しく学ぶ9つの扉',
      link:
        'https://www.amazon.co.jp/Python%E3%81%AE%E7%B5%B5%E6%9C%AC-Python%E3%82%92%E6%A5%BD%E3%81%97%E3%81%8F%E5%AD%A6%E3%81%B69%E3%81%A4%E3%81%AE%E6%89%89-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%A2%E3%83%B3%E3%82%AF/dp/4798155136',
      img: null
    },
    {
      id: 27,
      title: 'いちばんやさしい Python 入門教室',
      link:
        'https://www.amazon.co.jp/-/en/%E5%A4%A7%E6%BE%A4-%E6%96%87%E5%AD%9D-ebook/dp/B06Y3ZVS9Y/ref=sr_1_50?dchild=1&keywords=Python&qid=1620485975&sr=8-50',
      img: null
    },
    {
      id: 28,
      title:
        'Python 1年生 体験してわかる！会話でまなべる！プログラミングのしくみ',
      link:
        'https://www.amazon.co.jp/Python-1%E5%B9%B4%E7%94%9F-%E4%BD%93%E9%A8%93%E3%81%97%E3%81%A6%E3%82%8F%E3%81%8B%E3%82%8B%EF%BC%81%E4%BC%9A%E8%A9%B1%E3%81%A7%E3%81%BE%E3%81%AA%E3%81%B9%E3%82%8B%EF%BC%81%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%97%E3%81%8F%E3%81%BF-%E6%A3%AE-%E5%B7%A7%E5%B0%9A-ebook/dp/B076DDBBK9',
      img: null
    },
    {
      id: 29,
      title: '図解！ Pythonのツボとコツがゼッタイにわかる本 “超”入門編',
      link:
        'https://www.amazon.co.jp/%E7%AB%8B%E5%B1%B1%E7%A7%80%E5%88%A9-ebook/dp/B089K5PFFF/ref=sr_1_51_sspa?dchild=1&keywords=Python&qid=1620485663&sr=8-51-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFQRUtLNlVHS0FCMk4mZW5jcnlwdGVkSWQ9QTAyMTg0NjQyUjg3U1VITDNJTVA1JmVuY3J5cHRlZEFkSWQ9QTE0UUdJQVNOU005SjImd2lkZ2V0TmFtZT1zcF9idGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
      img: null
    },
    {
      id: 30,
      title: 'スッキリわかるPython入門 スッキリわかるシリーズ',
      link:
        'https://www.amazon.co.jp/-/en/%E5%9B%BD%E6%9C%AC%E5%A4%A7%E6%82%9F-ebook/dp/B07T63W9KC/ref=rtpb_5?pd_rd_w=UhMAw&pf_rd_p=c221ae92-96f8-424c-884c-196b2fc439b0&pf_rd_r=D44A6VX9S20G3CX8AYD5&pd_rd_r=816315d0-5878-487d-9700-4acaee6979e5&pd_rd_wg=h0TEk&pd_rd_i=B07T63W9KC&psc=1',
      img: null
    },
    {
      id: 31,
      title: 'Python［完全］入門',
      link:
        'https://www.amazon.co.jp/-/en/%E6%9D%BE%E6%B5%A6-%E5%81%A5%E4%B8%80%E9%83%8E-ebook/dp/B08KT6XZMQ/ref=sr_1_50?dchild=1&keywords=Python&qid=1620485975&sr=8-50',
      img: null
    },
    {
      id: 32,
      title: '独習Python',
      link:
        'https://www.amazon.co.jp/%E7%8B%AC%E7%BF%92Python-%E5%B1%B1%E7%94%B0-%E7%A5%A5%E5%AF%9B/dp/4798163643',
      img: null
    },
    {
      id: 33,
      title:
        '最短距離でゼロからしっかり学ぶ Python入門　必修編　〜プログラミングの基礎からエラー処理、テストコードの書き方まで',
      link:
        'https://www.amazon.co.jp/-/en/Eric-Matthes-ebook/dp/B08GP27B1P/ref=sr_1_36?dchild=1&keywords=Python&qid=1620485663&sr=8-36',
      img: null
    },
    {
      id: 34,
      title: 'スラスラわかるPython',
      link:
        'https://www.amazon.co.jp/%E3%82%B9%E3%83%A9%E3%82%B9%E3%83%A9%E3%82%8F%E3%81%8B%E3%82%8BPython-%E5%B2%A9%E5%B4%8E-%E5%9C%AD/dp/4798151092',
      img: null
    },
    {
      id: 35,
      title: '入門 Python 3',
      link:
        'https://www.amazon.co.jp/-/en/Bill-Lubanovic/dp/4873117380/ref=sr_1_118?dchild=1&keywords=Python&qid=1620486162&sr=8-118',
      img: null
    },
    {
      id: 36,
      title: 'なっとく! アルゴリズム ',
      link:
        'https://www.amazon.co.jp/%E3%81%AA%E3%81%A3%E3%81%A8%E3%81%8F-%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0-%E3%82%A2%E3%83%87%E3%82%A3%E3%83%86%E3%82%A3%E3%82%A2%E3%83%BBY%E3%83%BB%E3%83%90%E3%83%BC%E3%82%AC%E3%83%90/dp/4798143359',
      img: null
    },
    {
      id: 37,
      title:
        'Pythonによるクローラー＆スクレイピング入門 設計・開発から収集データの解析・運用まで',
      link:
        'https://www.amazon.co.jp/Python%E3%81%AB%E3%82%88%E3%82%8B%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC%EF%BC%86%E3%82%B9%E3%82%AF%E3%83%AC%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0%E5%85%A5%E9%96%80-%E8%A8%AD%E8%A8%88%E3%83%BB%E9%96%8B%E7%99%BA%E3%81%8B%E3%82%89%E5%8F%8E%E9%9B%86%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E8%A7%A3%E6%9E%90%E3%81%BE%E3%81%A7-%E5%8A%A0%E8%97%A4-%E5%8B%9D%E4%B9%9F-ebook/dp/B075D51624',
      img: null
    },
    {
      id: 38,
      title: 'Pythonスクレイピングの基本と実践',
      link:
        'https://www.amazon.co.jp/Seppe-vanden-Broucke-ebook/dp/B07LGT94YH/ref=sr_1_136_sspa?dchild=1&keywords=Python&qid=1620486162&sr=8-136-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWTdRTkM4WEZTVkQyJmVuY3J5cHRlZElkPUEwNDgxMzc2VkxDS0lDUktCSFM1JmVuY3J5cHRlZEFkSWQ9QTFWWUw0WUgwMEZTRzkmd2lkZ2V0TmFtZT1zcF9idGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
      img: null
    },
    {
      id: 39,
      title: '実践 Python 3 ',
      link:
        'https://www.amazon.co.jp/-/en/Mark-Summerfield/dp/4873117399/ref=sr_1_167?dchild=1&keywords=Python&qid=1620486243&sr=8-167',
      img: null
    },
    {
      id: 40,
      title: '動かして学ぶ！Python Django開発入門',
      link:
        'https://www.amazon.co.jp/%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E5%AD%A6%E3%81%B6%EF%BC%81Python-Django%E9%96%8B%E7%99%BA%E5%85%A5%E9%96%80-%E5%A4%A7%E9%AB%98-%E9%9A%86-ebook/dp/B07YY5RDPC',
      img: null
    },
    {
      id: 41,
      title: '現場で使える Django の教科書《基礎編》',
      link:
        'https://www.amazon.co.jp/-/en/%E6%A8%AA%E7%80%AC-%E6%98%8E%E4%BB%81-ebook/dp/B07GK7BWB7/ref=sr_1_27?dchild=1&keywords=Python&qid=1620485663&sr=8-27',
      img: null
    },
    {
      id: 42,
      title: 'テスト駆動Python',
      link:
        'https://www.amazon.co.jp/%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95Python-BrianOkken-ebook/dp/B07F65PFZN',
      img: null
    },
    {
      id: 43,
      title: 'Pythonトリック',
      link:
        'https://www.amazon.co.jp/Python%E3%83%88%E3%83%AA%E3%83%83%E3%82%AF-Dan-Bader-ebook/dp/B085455WKV',
      img: null
    },
    {
      id: 44,
      title: 'ハイパフォーマンスPython',
      link:
        'https://www.amazon.co.jp/-/en/Micha-Gorelick/dp/4873117402/ref=bmx_3?pd_rd_w=yh8zk&pf_rd_p=c7562b60-0bda-4f3e-bc1b-ac174bc78d04&pf_rd_r=DFHSN2EZMD60K3QGAVAP&pd_rd_r=0ecfaf5c-1f3d-460d-80dd-147e2d0b678e&pd_rd_wg=2cNps&pd_rd_i=4873117402&psc=1',
      img: null
    },
    {
      id: 45,
      title: 'Fluent Python ―Pythonicな思考とコーディング手法',
      link:
        'https://www.amazon.co.jp/-/en/Luciano-Ramalho/dp/4873118174/ref=sr_1_57?dchild=1&keywords=Python&qid=1620485975&sr=8-57',
      img: null
    },
    {
      id: 46,
      title: 'なるほどデザイン',
      link: 'https://www.amazon.co.jp/dp/B012VJNW6Q',
      img: null
    },
    {
      id: 47,
      title: 'けっきょく、よはく。余白を活かしたデザインレイアウトの本',
      link:
        'https://www.amazon.co.jp/%E3%81%91%E3%81%A3%E3%81%8D%E3%82%87%E3%81%8F%E3%80%81%E3%82%88%E3%81%AF%E3%81%8F%E3%80%82%E4%BD%99%E7%99%BD%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%81%9F%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88%E3%81%AE%E6%9C%AC-%EF%BD%89%EF%BD%8E%EF%BD%87%EF%BD%85%EF%BD%83%EF%BD%94%EF%BD%81%EF%BD%92%EF%BC%8D%EF%BD%85-ebook/dp/B07FW35F5R/ref=bmx_5/356-7695742-9162748?_encoding=UTF8&pd_rd_i=B07FW35F5R&pd_rd_r=9362903c-9e7e-4cf6-abde-e937d833802c&pd_rd_w=lm5Hz&pd_rd_wg=YzvaU&pf_rd_p=6ad035f2-0f1c-4b9e-a763-5321d5c2cd6e&pf_rd_r=N7RT1AT83HSGKVK8VN8H&psc=1&refRID=N7RT1AT83HSGKVK8VN8H',
      img: null
    },
    {
      id: 48,
      title: 'ノンデザイナーズ・デザインブック',
      link:
        'https://www.amazon.co.jp/%E3%83%8E%E3%83%B3%E3%83%87%E3%82%B6%E3%82%A4%E3%83%8A%E3%83%BC%E3%82%BA%E3%83%BB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%96%E3%83%83%E3%82%AF-%EF%BC%BB%E7%AC%AC4%E7%89%88%EF%BC%BD-Robin-Williams-ebook/dp/B01LW1BC2L/ref=bmx_2/356-7695742-9162748?_encoding=UTF8&pd_rd_i=B01LW1BC2L&pd_rd_r=9362903c-9e7e-4cf6-abde-e937d833802c&pd_rd_w=lm5Hz&pd_rd_wg=YzvaU&pf_rd_p=6ad035f2-0f1c-4b9e-a763-5321d5c2cd6e&pf_rd_r=N7RT1AT83HSGKVK8VN8H&psc=1&refRID=N7RT1AT83HSGKVK8VN8H',
      img: null
    },
    {
      id: 49,
      title: 'いちばんよくわかるWebデザインの基本きちんと入門',
      link:
        'https://www.amazon.co.jp/%E3%81%84%E3%81%A1%E3%81%B0%E3%82%93%E3%82%88%E3%81%8F%E3%82%8F%E3%81%8B%E3%82%8BWeb%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8D%E3%81%A1%E3%82%93%E3%81%A8%E5%85%A5%E9%96%80-%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88%EF%BC%8F%E9%85%8D%E8%89%B2%EF%BC%8F%E5%86%99%E7%9C%9F%EF%BC%8F%E3%82%BF%E3%82%A4%E3%83%9D%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%EF%BC%8F%E6%9C%80%E6%96%B0%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-%E4%BC%8A%E8%97%A4-%E5%BA%84%E5%B9%B3-ebook/dp/B06WVVQ8MP/ref=sr_1_11?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=Web%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&qid=1606641413&s=digital-text&sr=1-11',
      img: null
    },
    {
      id: 50,
      title: 'Webデザイン良質見本帳',
      link:
        'https://www.amazon.co.jp/Web%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E8%89%AF%E8%B3%AA%E8%A6%8B%E6%9C%AC%E5%B8%B3-%E7%9B%AE%E7%9A%84%E5%88%A5%E3%81%AB%E6%8E%A2%E3%81%9B%E3%81%A6%E3%80%81%E3%81%99%E3%81%90%E3%81%AB%E4%BD%BF%E3%81%88%E3%82%8B%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E9%9B%86-%E4%B9%85%E4%BF%9D%E7%94%B0-%E6%B6%BC%E5%AD%90-ebook/dp/B071KDLRGV/ref=bmx_1/356-7695742-9162748?_encoding=UTF8&pd_rd_i=B071KDLRGV&pd_rd_r=42655430-2631-494b-9f21-32cfe9c6aca7&pd_rd_w=gOKb4&pd_rd_wg=wjHzC&pf_rd_p=6ad035f2-0f1c-4b9e-a763-5321d5c2cd6e&pf_rd_r=V47SETK8N6ZWE5QTSQE9&psc=1&refRID=V47SETK8N6ZWE5QTSQE9',
      img: null
    },
    {
      id: 51,
      title: 'コンバージョンを上げるWebデザイン改善集 ',
      link:
        'https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%92%E4%B8%8A%E3%81%92%E3%82%8BWeb%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E6%94%B9%E5%96%84%E9%9B%86-%E4%BA%95%E6%B0%B4%E5%A4%A7%E8%BC%94-ebook/dp/B08BHQXBKV/ref=sr_1_22?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=Web%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&qid=1606641413&s=digital-text&sr=1-22',
      img: null
    },
    {
      id: 52,
      title: 'デザインの学校 これからはじめる Illustrator & Photoshopの本',
      link:
        'https://www.amazon.co.jp/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E5%AD%A6%E6%A0%A1-%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B-Illustrator-Photoshop%E3%81%AE%E6%9C%AC-2019%E5%B9%B4%E6%9C%80%E6%96%B0%E7%89%88/dp/4297105535/',
      img: null
    },
    {
      id: 53,
      title:
        'Adobe XDではじめるWebデザイン＆プロトタイピング 一歩先行く現場のスキル',
      link:
        'https://www.amazon.co.jp/-/en/%E6%9D%BE%E4%B8%8B-%E7%B5%B5%E6%A2%A8-ebook/dp/B086MHH7NB/ref=sr_1_36?dchild=1&keywords=WEB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&qid=1620486581&sr=8-36',
      img: null
    },
    {
      id: 54,
      title: 'Illustrator しっかり入門 増補改訂 第２版 ',
      link:
        'https://www.amazon.co.jp/-/en/%E9%AB%98%E9%87%8E-%E9%9B%85%E5%BC%98/dp/479739725X/ref=sr_1_57?dchild=1&keywords=WEB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&qid=1620486701&sr=8-57',
      img: null
    },
    {
      id: 55,
      title: 'いちばんよくわかるHTML5&CSS3デザインきちんと入門',
      link:
        'https://www.amazon.co.jp/dp/4797388544?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 56,
      title: '1冊ですべて身につくHTML ＆ CSSとWebデザイン入門講座',
      link:
        'https://www.amazon.co.jp/-/en/Mana-ebook/dp/B07PS1ZJN6/ref=sr_1_4?dchild=1&keywords=JavaScript&qid=1620484862&sr=8-4',
      img: null
    },
    {
      id: 57,
      title: 'スラスラわかるHTML&CSSのきほん',
      link: 'https://www.amazon.co.jp/dp/4797393157',
      img: null
    },
    {
      id: 58,
      title: 'HTML5&CSS3デザインブック',
      link:
        'https://www.amazon.co.jp/dp/4883379647?tag=technote012-22&linkCode=ogi&th=1&psc=1',
      img: null
    },
    {
      id: 59,
      title: 'HTML5&CSS3レッスンブック',
      link:
        'https://www.amazon.co.jp/-/en/%E3%82%A8%E3%83%93%E3%82%B9%E3%82%B3%E3%83%A0/dp/4883378721/ref=pd_bxgy_img_3/355-3902492-5842662?_encoding=UTF8&pd_rd_i=4883378721&pd_rd_r=95af91bb-9556-4027-9349-6bf6ed412baf&pd_rd_w=z7Ww2&pd_rd_wg=HWyQD&pf_rd_p=105d6769-bacf-43d4-85ea-a25cec858a3c&pf_rd_r=AYHHQ3GHJ059HQJG9KW8&psc=1&refRID=AYHHQ3GHJ059HQJG9KW8',
      img: null
    },
    {
      id: 60,
      title:
        'HTML5/CSS3モダンコーディング フロントエンドエンジニアが教える3つの本格レイアウト',
      link:
        'https://www.amazon.co.jp/-/en/%E5%90%89%E7%94%B0-%E7%9C%9F%E9%BA%BB/dp/4798141577/ref=pd_bxgy_img_2/355-3902492-5842662?_encoding=UTF8&pd_rd_i=4798141577&pd_rd_r=95af91bb-9556-4027-9349-6bf6ed412baf&pd_rd_w=z7Ww2&pd_rd_wg=HWyQD&pf_rd_p=105d6769-bacf-43d4-85ea-a25cec858a3c&pf_rd_r=AYHHQ3GHJ059HQJG9KW8&psc=1&refRID=AYHHQ3GHJ059HQJG9KW8',
      img: null
    },
    {
      id: 61,
      title: 'Webデザインとコーディングのきほんのきほん',
      link:
        'https://www.amazon.co.jp/-/en/%E7%80%A7%E4%B8%8A-%E5%9C%92%E6%9E%9D-ebook/dp/B01LQ5H2F8/ref=sr_1_57?dchild=1&keywords=JavaScript&qid=1620485012&sr=8-57',
      img: null
    },
    {
      id: 62,
      title: 'Webデザイン必携。　プロにまなぶ現場の制作ルール84',
      link:
        'https://www.amazon.co.jp/-/en/%E5%8C%97%E6%9D%91-%E5%B4%87-ebook/dp/B01D1QX4N4/ref=sr_1_28?dchild=1&keywords=WEB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&qid=1620486581&sr=8-28',
      img: null
    },
    {
      id: 63,
      title: 'UXと理論で作る Webデザイン: デザイナーでなくてもわかる',
      link:
        'https://www.amazon.co.jp/-/en/%E5%B7%9D%E5%90%88-%E4%BF%8A%E8%BC%94-ebook/dp/B077D8NN3L/ref=sr_1_37?dchild=1&keywords=WEB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&qid=1620486581&sr=8-37',
      img: null
    },
    {
      id: 64,
      title:
        'Webデザイン・スタンダード 伝わるビジュアルづくりとクリエイティブの最新技法',
      link:
        'https://www.amazon.co.jp/-/en/%E5%A2%83-%E7%A5%90%E5%8F%B8/dp/4844367773/ref=sr_1_48?dchild=1&keywords=WEB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&qid=1620486581&sr=8-48',
      img: null
    },
    {
      id: 65,
      title: 'Photoshop ＆ Illustratorデザインテクニック大全',
      link:
        'https://www.amazon.co.jp/-/en/%E6%A5%A0%E7%94%B0-%E8%AB%AD%E5%8F%B2-ebook/dp/B07C88ZNBV/ref=sr_1_49?dchild=1&keywords=WEB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&qid=1620486701&sr=8-49',
      img: null
    },
    {
      id: 66,
      title: 'Pythonで学ぶあたらしい統計学の教科書',
      link:
        'https://www.amazon.co.jp/Python%E3%81%A7%E5%AD%A6%E3%81%B6%E3%81%82%E3%81%9F%E3%82%89%E3%81%97%E3%81%84%E7%B5%B1%E8%A8%88%E5%AD%A6%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E9%A6%AC%E5%A0%B4-%E7%9C%9F%E5%93%89-ebook/dp/B07BHJGDHK',
      img: null
    },
    {
      id: 67,
      title:
        'ゼロから作るDeep Learning ―Pythonで学ぶディープラーニングの理論と実装',
      link:
        'https://www.amazon.co.jp/-/en/%E6%96%8E%E8%97%A4-%E5%BA%B7%E6%AF%85/dp/4873117585/ref=sr_1_12?dchild=1&keywords=Python&qid=1620485663&sr=8-12',
      img: null
    },
    {
      id: 68,
      title: 'AIセキュリティから学ぶ ディープラーニング［技術］入門 ',
      link:
        'https://www.amazon.co.jp/-/en/%E7%94%B0%E7%AF%AD-%E7%85%A7%E5%8D%9A-ebook/dp/B08QTTNFXV/ref=sr_1_5?dchild=1&keywords=Python&qid=1620485663&sr=8-5',
      img: null
    },
    {
      id: 69,
      title: 'つくりながら学ぶ！PyTorchによる発展ディープラーニング',
      link:
        'https://www.amazon.co.jp/-/en/%E5%B0%8F%E5%B7%9D-%E9%9B%84%E5%A4%AA%E9%83%8E-ebook/dp/B07VPDVNKW/ref=sr_1_11?dchild=1&keywords=Python&qid=1620485663&sr=8-11',
      img: null
    },
    {
      id: 70,
      title: 'Kaggleで勝つデータ分析の技術',
      link:
        'https://www.amazon.co.jp/-/en/%E9%96%80%E8%84%87-%E5%A4%A7%E8%BC%94-ebook/dp/B07YTDBC3Z/ref=sr_1_4?dchild=1&keywords=Python&qid=1620485663&sr=8-4',
      img: null
    },
    {
      id: 71,
      title: 'Pythonデータサイエンスハンドブック',
      link:
        'https://www.amazon.co.jp/-/en/Jake-VanderPlas/dp/4873118417/ref=sr_1_18?dchild=1&keywords=Python&qid=1620485663&sr=8-18',
      img: null
    },
    {
      id: 72,
      title:
        '現場で使える! Python機械学習入門 機械学習アルゴリズムの理論と実践',
      link:
        'https://www.amazon.co.jp/%E7%8F%BE%E5%A0%B4%E3%81%A7%E4%BD%BF%E3%81%88%E3%82%8B-Python%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E5%85%A5%E9%96%80-%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0%E3%81%AE%E7%90%86%E8%AB%96%E3%81%A8%E5%AE%9F%E8%B7%B5-AI-TECHNOLOGY/dp/4798150967',
      img: null
    },
    {
      id: 73,
      title:
        '現場で使える！PyTorch開発入門 深層学習モデルの作成とアプリケーションへの実装',
      link:
        'https://www.amazon.co.jp/%E7%8F%BE%E5%A0%B4%E3%81%A7%E4%BD%BF%E3%81%88%E3%82%8B%EF%BC%81PyTorch%E9%96%8B%E7%99%BA%E5%85%A5%E9%96%80-%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7%BF%92%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%A8%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%B8%E3%81%AE%E5%AE%9F%E8%A3%85-%E6%9D%9C-%E4%B8%96%E6%A9%8B-ebook/dp/B07FTJPL31',
      img: null
    },
    {
      id: 74,
      title: 'Pythonによるデータ分析入門 第2版',
      link:
        'https://www.amazon.co.jp/-/en/Wes-McKinney/dp/487311845X/ref=sr_1_58?dchild=1&keywords=Python&qid=1620485975&sr=8-58',
      img: null
    },
    {
      id: 75,
      title: 'Pythonによるあたらしいデータ分析の教科書',
      link:
        'https://www.amazon.co.jp/Python%E3%81%AB%E3%82%88%E3%82%8B%E3%81%82%E3%81%9F%E3%82%89%E3%81%97%E3%81%84%E3%83%87%E3%83%BC%E3%82%BF%E5%88%86%E6%9E%90%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E5%AF%BA%E7%94%B0-%E5%AD%A6-ebook/dp/B07G39T2B7',
      img: null
    },
    {
      id: 76,
      title: 'Python実践データ分析100本ノック',
      link:
        'https://www.amazon.co.jp/%E4%B8%8B%E5%B1%B1%E8%BC%9D%E6%98%8C-ebook/dp/B07ZSGSN9S/ref=sr_1_49_sspa?dchild=1&keywords=Python&qid=1620485663&sr=8-49-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFQRUtLNlVHS0FCMk4mZW5jcnlwdGVkSWQ9QTAyMTg0NjQyUjg3U1VITDNJTVA1JmVuY3J5cHRlZEFkSWQ9QTJXRFc2SFgyR0tLME0md2lkZ2V0TmFtZT1zcF9idGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
      img: null
    },
    {
      id: 77,
      title:
        'Pythonではじめる機械学習 ―scikit-learnで学ぶ特徴量エンジニアリングと機械学習の基礎',
      link:
        'https://www.amazon.co.jp/-/en/Andreas-C-Muller/dp/4873117984/ref=sr_1_21?dchild=1&keywords=Python&qid=1620485663&sr=8-21',
      img: null
    },
    {
      id: 78,
      title:
        'Pythonで動かして学ぶ！あたらしい数学の教科書 機械学習・深層学習に必要な基礎知識',
      link:
        'https://www.amazon.co.jp/Python%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E5%AD%A6%E3%81%B6%EF%BC%81%E3%81%82%E3%81%9F%E3%82%89%E3%81%97%E3%81%84%E6%95%B0%E5%AD%A6%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%83%BB%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7%BF%92%E3%81%AB%E5%BF%85%E8%A6%81%E3%81%AA%E5%9F%BA%E7%A4%8E%E7%9F%A5%E8%AD%98-%E6%88%91%E5%A6%BB-%E5%B9%B8%E9%95%B7-ebook/dp/B07TZ57B5X',
      img: null
    },
    {
      id: 79,
      title:
        'Pythonで動かして学ぶ！あたらしい深層学習の教科書 機械学習の基本から深層学習まで',
      link:
        'https://www.amazon.co.jp/Python%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E5%AD%A6%E3%81%B6%EF%BC%81%E3%81%82%E3%81%9F%E3%82%89%E3%81%97%E3%81%84%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7%BF%92%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8B%E3%82%89%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7%BF%92%E3%81%BE%E3%81%A7-%E7%9F%B3%E5%B7%9D-%E8%81%A1%E5%BD%A6-ebook/dp/B07GW9RMLL',
      img: null
    },
    {
      id: 80,
      title:
        'Python機械学習プログラミング 達人データサイエンティストによる理論と実践',
      link:
        'https://www.amazon.co.jp/-/en/Sebastian-Raschka-ebook/dp/B07BF5QZ41/ref=sr_1_34?dchild=1&keywords=Python&qid=1620485663&sr=8-34',
      img: null
    },
    {
      id: 81,
      title:
        '現場で使える！Python深層学習入門 Pythonの基本から深層学習の実践手法まで',
      link:
        'https://www.amazon.co.jp/%E7%8F%BE%E5%A0%B4%E3%81%A7%E4%BD%BF%E3%81%88%E3%82%8B-Python%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7%BF%92%E5%85%A5%E9%96%80-Python%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8B%E3%82%89%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7%BF%92%E3%81%AE%E5%AE%9F%E8%B7%B5%E6%89%8B%E6%B3%95%E3%81%BE%E3%81%A7-AI-TECHNOLOGY/dp/4798150975',
      img: null
    },
    {
      id: 82,
      title:
        '現場で使える！Python深層強化学習入門 強化学習と深層学習による探索と制御',
      link:
        'https://www.amazon.co.jp/%E7%8F%BE%E5%A0%B4%E3%81%A7%E4%BD%BF%E3%81%88%E3%82%8B%EF%BC%81Python%E6%B7%B1%E5%B1%A4%E5%BC%B7%E5%8C%96%E5%AD%A6%E7%BF%92%E5%85%A5%E9%96%80-%E5%BC%B7%E5%8C%96%E5%AD%A6%E7%BF%92%E3%81%A8%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7%BF%92%E3%81%AB%E3%82%88%E3%82%8B%E6%8E%A2%E7%B4%A2%E3%81%A8%E5%88%B6%E5%BE%A1-AI-TECHNOLOGY-%E4%BC%8A%E8%97%A4/dp/4798159921',
      img: null
    },
    {
      id: 83,
      title:
        '現場で使える! NumPyデータ処理入門 機械学習・データサイエンスで役立つ高速処理手法',
      link:
        'https://www.amazon.co.jp/%E7%8F%BE%E5%A0%B4%E3%81%A7%E4%BD%BF%E3%81%88%E3%82%8B-NumPy%E3%83%87%E3%83%BC%E3%82%BF%E5%87%A6%E7%90%86%E5%85%A5%E9%96%80-%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%83%BB%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%E3%81%A7%E5%BD%B9%E7%AB%8B%E3%81%A4%E9%AB%98%E9%80%9F%E5%87%A6%E7%90%86%E6%89%8B%E6%B3%95-AI-TECHNOLOGY/dp/4798155918',
      img: null
    },
    {
      id: 84,
      title:
        '現場で使える！TensorFlow開発入門 Kerasによる深層学習モデル構築手法',
      link:
        'https://www.amazon.co.jp/%E7%8F%BE%E5%A0%B4%E3%81%A7%E4%BD%BF%E3%81%88%E3%82%8B%EF%BC%81TensorFlow%E9%96%8B%E7%99%BA%E5%85%A5%E9%96%80-Keras%E3%81%AB%E3%82%88%E3%82%8B%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7%BF%92%E3%83%A2%E3%83%87%E3%83%AB%E6%A7%8B%E7%AF%89%E6%89%8B%E6%B3%95-%E5%A4%AA%E7%94%B0-%E6%BA%80%E4%B9%85-ebook/dp/B07BHJZ19L',
      img: null
    },
    {
      id: 85,
      title: 'ビジネスデータサイエンスの教科書',
      link:
        'https://www.amazon.co.jp/-/en/%E3%83%9E%E3%83%83%E3%83%88%E3%83%BB%E3%82%BF%E3%83%87%E3%82%A3-ebook/dp/B0894GP1RP/ref=sr_1_42?dchild=1&keywords=Python&qid=1620485663&sr=8-42',
      img: null
    },
    {
      id: 86,
      title: 'SQLの絵本 第2版 データベースが好きになる新しい9つの扉',
      link:
        'https://www.amazon.co.jp/SQL%E3%81%AE%E7%B5%B5%E6%9C%AC-%E7%AC%AC2%E7%89%88-%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%8C%E5%A5%BD%E3%81%8D%E3%81%AB%E3%81%AA%E3%82%8B%E6%96%B0%E3%81%97%E3%81%849%E3%81%A4%E3%81%AE%E6%89%89-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%A2%E3%83%B3%E3%82%AF-ebook/dp/B07G787SCK',
      img: null
    },
    {
      id: 87,
      title: 'マンガでわかるデータベース',
      link:
        'https://www.amazon.co.jp/-/en/%E9%AB%98%E6%A9%8B-%E9%BA%BB%E5%A5%88/dp/4274066312/ref=sr_1_8?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-8',
      img: null
    },
    {
      id: 88,
      title:
        'イラストでそこそこわかるSQL SELECT文と並び替え・集約のきほんのきまで',
      link:
        'https://www.amazon.co.jp/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%81%A7%E3%81%9D%E3%81%93%E3%81%9D%E3%81%93%E3%82%8F%E3%81%8B%E3%82%8BSQL-SELECT%E6%96%87%E3%81%A8%E4%B8%A6%E3%81%B3%E6%9B%BF%E3%81%88%E3%83%BB%E9%9B%86%E7%B4%84%E3%81%AE%E3%81%8D%E3%81%BB%E3%82%93%E3%81%AE%E3%81%8D%E3%81%BE%E3%81%A7-%E5%9D%82%E4%B8%8B-%E5%A4%95%E9%87%8C-ebook/dp/B089SHQ4J2',
      img: null
    },
    {
      id: 89,
      title: '図解まるわかり データベースのしくみ',
      link:
        'https://www.amazon.co.jp/%E5%9B%B3%E8%A7%A3%E3%81%BE%E3%82%8B%E3%82%8F%E3%81%8B%E3%82%8A-%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AE%E3%81%97%E3%81%8F%E3%81%BF-%E5%9D%82%E4%B8%8A-%E5%B9%B8%E5%A4%A7-ebook/dp/B08PCGVG88',
      img: null
    },
    {
      id: 90,
      title: 'なぜ？がわかるデータベース',
      link:
        'https://www.amazon.co.jp/%E3%81%AA%E3%81%9C%EF%BC%9F%E3%81%8C%E3%82%8F%E3%81%8B%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9-%E5%B0%8F%E7%AC%A0%E5%8E%9F-%E7%A8%AE%E9%AB%98-ebook/dp/B07JHNDKJ2',
      img: null
    },
    {
      id: 91,
      title: 'おうちで学べるデータベースのきほん',
      link:
        'https://www.amazon.co.jp/%E3%81%8A%E3%81%86%E3%81%A1%E3%81%A7%E5%AD%A6%E3%81%B9%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AE%E3%81%8D%E3%81%BB%E3%82%93-%E3%83%9F%E3%83%83%E3%82%AF-ebook/dp/B00TTRZFDC',
      img: null
    },
    {
      id: 92,
      title:
        '[データベースの気持ちがわかる]SQLはじめの一歩 (WEB+DB PRESS plus)',
      link:
        'https://www.amazon.co.jp/-/en/%E6%9C%9D%E4%BA%95-%E6%B7%B3/dp/4774171824/ref=sr_1_29?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-29',
      img: null
    },
    {
      id: 93,
      title: 'はじめてでもわかるSQLとデータ設計',
      link:
        'https://www.amazon.co.jp/-/en/%E8%A5%BF%E6%9D%91-%E3%82%81%E3%81%90%E3%81%BF/dp/4886486479/ref=sr_1_25?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-25',
      img: null
    },
    {
      id: 94,
      title:
        '[改訂新版] これだけはおさえたい データベース基礎の基礎 (エンジニア“確実”養成講座)',
      link:
        'https://www.amazon.co.jp/-/en/%E8%B0%B7%E5%B0%BB-%E3%81%8B%E3%81%8A%E3%82%8A/dp/4774139939/ref=sr_1_4?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-4',
      img: null
    },
    {
      id: 95,
      title:
        'グラス片手にデータベース設計~販売管理システム編 (DBMagazine SELECTION)',
      link:
        'https://www.amazon.co.jp/-/en/%E6%A2%85%E7%94%B0-%E5%BC%98%E4%B9%8B/dp/479810566X/ref=sr_1_6?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-6',
      img: null
    },
    {
      id: 96,
      title: 'SQL 第2版 ゼロからはじめるデータベース操作',
      link:
        'https://www.amazon.co.jp/SQL-%E7%AC%AC2%E7%89%88-%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E6%93%8D%E4%BD%9C-%E3%83%9F%E3%83%83%E3%82%AF-ebook/dp/B01HD5VWWO',
      img: null
    },
    {
      id: 97,
      title: '達人に学ぶSQL徹底指南書 第2版 初級者で終わりたくないあなたへ',
      link:
        'https://www.amazon.co.jp/%E9%81%94%E4%BA%BA%E3%81%AB%E5%AD%A6%E3%81%B6SQL%E5%BE%B9%E5%BA%95%E6%8C%87%E5%8D%97%E6%9B%B8-%E7%AC%AC2%E7%89%88-%E5%88%9D%E7%B4%9A%E8%80%85%E3%81%A7%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%9F%E3%81%8F%E3%81%AA%E3%81%84%E3%81%82%E3%81%AA%E3%81%9F%E3%81%B8-CodeZine-BOOKS/dp/4798157821',
      img: null
    },
    {
      id: 98,
      title: 'プログラマのためのSQL 第4版 すべてを知り尽くしたいあなたに',
      link:
        'https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AESQL-%E7%AC%AC4%E7%89%88-%E3%82%B8%E3%83%A7%E3%83%BC%E3%83%BB%E3%82%BB%E3%83%AB%E3%82%B3/dp/4798128023',
      img: null
    },
    {
      id: 99,
      title: 'RDBMS解剖学 よくわかるリレーショナルデータベースの仕組み',
      link:
        'https://www.amazon.co.jp/-/en/%E9%88%B4%E6%9C%A8-%E5%B9%B8%E5%B8%82/dp/4798108642/ref=sr_1_16?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-16',
      img: null
    },
    {
      id: 100,
      title: 'NOSQLの基礎知識 (ビッグデータを活かすデータベース技術)',
      link:
        'https://www.amazon.co.jp/-/en/%E6%9C%AC%E6%A9%8B%E4%BF%A1%E4%B9%9F/dp/4897978874/ref=sr_1_9?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-9',
      img: null
    },
    {
      id: 101,
      title: 'データベースパフォーマンスアップの教科書 基本原理編',
      link:
        'https://www.amazon.co.jp/-/en/%E3%82%A8%E3%83%B3%E3%82%B3%E3%82%A2%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%AB%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0/dp/4798111694/ref=sr_1_24?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-24',
      img: null
    },
    {
      id: 102,
      title: 'FileMaker データベース問題解決ガイド',
      link:
        'https://www.amazon.co.jp/-/en/%E6%9C%A8%E4%B8%8B-%E9%9B%84%E4%B8%80%E6%9C%97-ebook/dp/B00O4QJXOU/ref=sr_1_12?dchild=1&keywords=%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9&qid=1620487098&sr=8-12',
      img: null
    },
    {
      id: 103,
      title: 'Effective SQL',
      link:
        'https://www.amazon.co.jp/Effective-SQL-JohnL-Viescas-ebook/dp/B076Z8BC4Y',
      img: null
    },
    {
      id: 104,
      title:
        'プログラマのためのSQLグラフ原論 リレーショナルデータベースで木と階層構造を扱うために',
      link:
        'https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AESQL%E3%82%B0%E3%83%A9%E3%83%95%E5%8E%9F%E8%AB%96-%E3%83%AA%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%A7%E6%9C%A8%E3%81%A8%E9%9A%8E%E5%B1%A4%E6%A7%8B%E9%80%A0%E3%82%92%E6%89%B1%E3%81%86%E3%81%9F%E3%82%81%E3%81%AB-%E3%82%B8%E3%83%A7%E3%83%BC%E3%83%BB%E3%82%BB%E3%83%AB%E3%82%B3/dp/4798144576',
      img: null
    },
    {
      id: 105,
      title: 'BIシステム構築実践入門',
      link:
        'https://www.amazon.co.jp/BI%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%A7%8B%E7%AF%89%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-DB-Magazine-Selection-%E5%B9%B3%E4%BA%95/dp/4798109312',
      img: null
    }
  ]

  const libraries = await prisma.library.createMany({ data })

  console.log({ libraries })
}

const roadmapsForTrain = async () => {
  const data = [
    { id: 8, title: 'dummy8', firstStepId: 10, userId: 5 },
    { id: 9, title: 'dummy9', firstStepId: 20, userId: 5 },
    { id: 10, title: 'dummy10', firstStepId: 30, userId: 5 },
    { id: 11, title: 'dummy11', firstStepId: 40, userId: 5 },
    { id: 12, title: 'dummy12', firstStepId: 50, userId: 5 },
    { id: 13, title: 'dummy13', firstStepId: 60, userId: 5 },
    { id: 14, title: 'dummy14', firstStepId: 70, userId: 5 },
    { id: 15, title: 'dummy15', firstStepId: 80, userId: 5 },
    { id: 16, title: 'dummy16', firstStepId: 90, userId: 5 },
    { id: 17, title: 'dummy17', firstStepId: 100, userId: 5 },
    { id: 18, title: 'dummy18', firstStepId: 110, userId: 5 },
    { id: 19, title: 'dummy19', firstStepId: 120, userId: 5 },
    { id: 20, title: 'dummy20', firstStepId: 130, userId: 5 },
    { id: 21, title: 'dummy21', firstStepId: 140, userId: 5 },
    { id: 22, title: 'dummy22', firstStepId: 150, userId: 5 },
    { id: 23, title: 'dummy23', firstStepId: 160, userId: 5 },
    { id: 24, title: 'dummy24', firstStepId: 170, userId: 5 },
    { id: 25, title: 'dummy25', firstStepId: 180, userId: 5 },
    { id: 26, title: 'dummy26', firstStepId: 190, userId: 5 },
    { id: 27, title: 'dummy27', firstStepId: 200, userId: 5 },
    { id: 28, title: 'dummy28', firstStepId: 210, userId: 5 },
    { id: 29, title: 'dummy29', firstStepId: 220, userId: 5 },
    { id: 30, title: 'dummy30', firstStepId: 230, userId: 5 },
    { id: 31, title: 'dummy31', firstStepId: 240, userId: 5 },
    { id: 32, title: 'dummy32', firstStepId: 250, userId: 5 },
    { id: 33, title: 'dummy33', firstStepId: 260, userId: 5 },
    { id: 34, title: 'dummy34', firstStepId: 270, userId: 5 },
    { id: 35, title: 'dummy35', firstStepId: 280, userId: 5 },
    { id: 36, title: 'dummy36', firstStepId: 290, userId: 5 },
    { id: 37, title: 'dummy37', firstStepId: 300, userId: 5 },
    { id: 38, title: 'dummy38', firstStepId: 310, userId: 5 },
    { id: 39, title: 'dummy39', firstStepId: 320, userId: 5 },
    { id: 40, title: 'dummy40', firstStepId: 330, userId: 5 },
    { id: 41, title: 'dummy41', firstStepId: 340, userId: 5 },
    { id: 42, title: 'dummy42', firstStepId: 350, userId: 5 },
    { id: 43, title: 'dummy43', firstStepId: 360, userId: 5 },
    { id: 44, title: 'dummy44', firstStepId: 370, userId: 5 },
    { id: 45, title: 'dummy45', firstStepId: 380, userId: 5 },
    { id: 46, title: 'dummy46', firstStepId: 390, userId: 5 },
    { id: 47, title: 'dummy47', firstStepId: 400, userId: 5 },
    { id: 48, title: 'dummy48', firstStepId: 410, userId: 5 },
    { id: 49, title: 'dummy49', firstStepId: 420, userId: 5 },
    { id: 50, title: 'dummy50', firstStepId: 430, userId: 5 },
    { id: 51, title: 'dummy51', firstStepId: 440, userId: 5 },
    { id: 52, title: 'dummy52', firstStepId: 450, userId: 5 },
    { id: 53, title: 'dummy53', firstStepId: 460, userId: 5 },
    { id: 54, title: 'dummy54', firstStepId: 470, userId: 5 },
    { id: 55, title: 'dummy55', firstStepId: 480, userId: 5 },
    { id: 56, title: 'dummy56', firstStepId: 490, userId: 5 },
    { id: 57, title: 'dummy57', firstStepId: 500, userId: 5 },
    { id: 58, title: 'dummy58', firstStepId: 510, userId: 5 },
    { id: 59, title: 'dummy59', firstStepId: 520, userId: 5 },
    { id: 60, title: 'dummy60', firstStepId: 530, userId: 5 },
    { id: 61, title: 'dummy61', firstStepId: 540, userId: 5 },
    { id: 62, title: 'dummy62', firstStepId: 550, userId: 5 },
    { id: 63, title: 'dummy63', firstStepId: 560, userId: 5 },
    { id: 64, title: 'dummy64', firstStepId: 570, userId: 5 },
    { id: 65, title: 'dummy65', firstStepId: 580, userId: 5 },
    { id: 66, title: 'dummy66', firstStepId: 590, userId: 5 },
    { id: 67, title: 'dummy67', firstStepId: 600, userId: 5 },
    { id: 68, title: 'dummy68', firstStepId: 610, userId: 5 },
    { id: 69, title: 'dummy69', firstStepId: 620, userId: 5 },
    { id: 70, title: 'dummy70', firstStepId: 630, userId: 5 },
    { id: 71, title: 'dummy71', firstStepId: 640, userId: 5 },
    { id: 72, title: 'dummy72', firstStepId: 650, userId: 5 },
    { id: 73, title: 'dummy73', firstStepId: 660, userId: 5 },
    { id: 74, title: 'dummy74', firstStepId: 670, userId: 5 },
    { id: 75, title: 'dummy75', firstStepId: 680, userId: 5 },
    { id: 76, title: 'dummy76', firstStepId: 690, userId: 5 },
    { id: 77, title: 'dummy77', firstStepId: 700, userId: 5 },
    { id: 78, title: 'dummy78', firstStepId: 710, userId: 5 },
    { id: 79, title: 'dummy79', firstStepId: 720, userId: 5 },
    { id: 80, title: 'dummy80', firstStepId: 730, userId: 5 },
    { id: 81, title: 'dummy81', firstStepId: 740, userId: 5 },
    { id: 82, title: 'dummy82', firstStepId: 750, userId: 5 },
    { id: 83, title: 'dummy83', firstStepId: 760, userId: 5 },
    { id: 84, title: 'dummy84', firstStepId: 770, userId: 5 },
    { id: 85, title: 'dummy85', firstStepId: 780, userId: 5 },
    { id: 86, title: 'dummy86', firstStepId: 790, userId: 5 },
    { id: 87, title: 'dummy87', firstStepId: 800, userId: 5 },
    { id: 88, title: 'dummy88', firstStepId: 810, userId: 5 },
    { id: 89, title: 'dummy89', firstStepId: 820, userId: 5 },
    { id: 90, title: 'dummy90', firstStepId: 830, userId: 5 },
    { id: 91, title: 'dummy91', firstStepId: 840, userId: 5 },
    { id: 92, title: 'dummy92', firstStepId: 850, userId: 5 },
    { id: 93, title: 'dummy93', firstStepId: 860, userId: 5 },
    { id: 94, title: 'dummy94', firstStepId: 870, userId: 5 },
    { id: 95, title: 'dummy95', firstStepId: 880, userId: 5 },
    { id: 96, title: 'dummy96', firstStepId: 890, userId: 5 },
    { id: 97, title: 'dummy97', firstStepId: 900, userId: 5 },
    { id: 98, title: 'dummy98', firstStepId: 910, userId: 5 },
    { id: 99, title: 'dummy99', firstStepId: 920, userId: 5 },
    { id: 100, title: 'dummy100', firstStepId: 930, userId: 5 },
    { id: 101, title: 'dummy101', firstStepId: 940, userId: 5 },
    { id: 102, title: 'dummy102', firstStepId: 950, userId: 5 },
    { id: 103, title: 'dummy103', firstStepId: 960, userId: 5 },
    { id: 104, title: 'dummy104', firstStepId: 970, userId: 5 },
    { id: 105, title: 'dummy105', firstStepId: 980, userId: 5 },
    { id: 106, title: 'dummy106', firstStepId: 990, userId: 5 },
    { id: 107, title: 'dummy107', firstStepId: 1000, userId: 5 }
  ]

  const roadmaps = await prisma.roadmap.createMany({ data })

  console.log({ roadmaps })
}

const stepsForTrain = async () => {
  const data = [
    { id: 10, nextStepId: 11, roadmapId: 8, libraryId: 67 },
    { id: 11, nextStepId: 12, roadmapId: 8, libraryId: 70 },
    { id: 12, nextStepId: 13, roadmapId: 8, libraryId: 72 },
    { id: 13, nextStepId: 14, roadmapId: 8, libraryId: 74 },
    { id: 14, nextStepId: 15, roadmapId: 8, libraryId: 76 },
    { id: 15, nextStepId: 16, roadmapId: 8, libraryId: 78 },
    { id: 16, nextStepId: 17, roadmapId: 8, libraryId: 79 },
    { id: 17, nextStepId: 18, roadmapId: 8, libraryId: 80 },
    { id: 18, nextStepId: 19, roadmapId: 8, libraryId: 81 },
    { id: 19, nextStepId: null, roadmapId: 8, libraryId: 84 },
    { id: 20, nextStepId: 21, roadmapId: 9, libraryId: 90 },
    { id: 21, nextStepId: 22, roadmapId: 9, libraryId: 92 },
    { id: 22, nextStepId: 23, roadmapId: 9, libraryId: 93 },
    { id: 23, nextStepId: 24, roadmapId: 9, libraryId: 94 },
    { id: 24, nextStepId: 25, roadmapId: 9, libraryId: 96 },
    { id: 25, nextStepId: 26, roadmapId: 9, libraryId: 98 },
    { id: 26, nextStepId: 27, roadmapId: 9, libraryId: 99 },
    { id: 27, nextStepId: 28, roadmapId: 9, libraryId: 100 },
    { id: 28, nextStepId: 29, roadmapId: 9, libraryId: 104 },
    { id: 29, nextStepId: null, roadmapId: 9, libraryId: 105 },
    { id: 30, nextStepId: 31, roadmapId: 10, libraryId: 6 },
    { id: 31, nextStepId: 32, roadmapId: 10, libraryId: 9 },
    { id: 32, nextStepId: 33, roadmapId: 10, libraryId: 12 },
    { id: 33, nextStepId: 34, roadmapId: 10, libraryId: 13 },
    { id: 34, nextStepId: 35, roadmapId: 10, libraryId: 14 },
    { id: 35, nextStepId: 36, roadmapId: 10, libraryId: 17 },
    { id: 36, nextStepId: 37, roadmapId: 10, libraryId: 21 },
    { id: 37, nextStepId: 38, roadmapId: 10, libraryId: 22 },
    { id: 38, nextStepId: 39, roadmapId: 10, libraryId: 24 },
    { id: 39, nextStepId: null, roadmapId: 10, libraryId: 25 },
    { id: 40, nextStepId: 41, roadmapId: 11, libraryId: 29 },
    { id: 41, nextStepId: 42, roadmapId: 11, libraryId: 30 },
    { id: 42, nextStepId: 43, roadmapId: 11, libraryId: 31 },
    { id: 43, nextStepId: 44, roadmapId: 11, libraryId: 32 },
    { id: 44, nextStepId: 45, roadmapId: 11, libraryId: 33 },
    { id: 45, nextStepId: 46, roadmapId: 11, libraryId: 34 },
    { id: 46, nextStepId: 47, roadmapId: 11, libraryId: 36 },
    { id: 47, nextStepId: 48, roadmapId: 11, libraryId: 43 },
    { id: 48, nextStepId: 49, roadmapId: 11, libraryId: 44 },
    { id: 49, nextStepId: null, roadmapId: 11, libraryId: 45 },
    { id: 50, nextStepId: 51, roadmapId: 12, libraryId: 46 },
    { id: 51, nextStepId: 52, roadmapId: 12, libraryId: 47 },
    { id: 52, nextStepId: 53, roadmapId: 12, libraryId: 54 },
    { id: 53, nextStepId: 54, roadmapId: 12, libraryId: 58 },
    { id: 54, nextStepId: 55, roadmapId: 12, libraryId: 59 },
    { id: 55, nextStepId: 56, roadmapId: 12, libraryId: 60 },
    { id: 56, nextStepId: 57, roadmapId: 12, libraryId: 62 },
    { id: 57, nextStepId: 58, roadmapId: 12, libraryId: 63 },
    { id: 58, nextStepId: 59, roadmapId: 12, libraryId: 64 },
    { id: 59, nextStepId: null, roadmapId: 12, libraryId: 65 },
    { id: 60, nextStepId: 61, roadmapId: 13, libraryId: 67 },
    { id: 61, nextStepId: 62, roadmapId: 13, libraryId: 70 },
    { id: 62, nextStepId: 63, roadmapId: 13, libraryId: 73 },
    { id: 63, nextStepId: 64, roadmapId: 13, libraryId: 74 },
    { id: 64, nextStepId: 65, roadmapId: 13, libraryId: 75 },
    { id: 65, nextStepId: 66, roadmapId: 13, libraryId: 76 },
    { id: 66, nextStepId: 67, roadmapId: 13, libraryId: 77 },
    { id: 67, nextStepId: 68, roadmapId: 13, libraryId: 80 },
    { id: 68, nextStepId: 69, roadmapId: 13, libraryId: 81 },
    { id: 69, nextStepId: null, roadmapId: 13, libraryId: 84 },
    { id: 70, nextStepId: 71, roadmapId: 14, libraryId: 87 },
    { id: 71, nextStepId: 72, roadmapId: 14, libraryId: 89 },
    { id: 72, nextStepId: 73, roadmapId: 14, libraryId: 90 },
    { id: 73, nextStepId: 74, roadmapId: 14, libraryId: 92 },
    { id: 74, nextStepId: 75, roadmapId: 14, libraryId: 93 },
    { id: 75, nextStepId: 76, roadmapId: 14, libraryId: 94 },
    { id: 76, nextStepId: 77, roadmapId: 14, libraryId: 95 },
    { id: 77, nextStepId: 78, roadmapId: 14, libraryId: 98 },
    { id: 78, nextStepId: 79, roadmapId: 14, libraryId: 99 },
    { id: 79, nextStepId: null, roadmapId: 14, libraryId: 105 },
    { id: 80, nextStepId: 81, roadmapId: 15, libraryId: 6 },
    { id: 81, nextStepId: 82, roadmapId: 15, libraryId: 12 },
    { id: 82, nextStepId: 83, roadmapId: 15, libraryId: 13 },
    { id: 83, nextStepId: 84, roadmapId: 15, libraryId: 14 },
    { id: 84, nextStepId: 85, roadmapId: 15, libraryId: 15 },
    { id: 85, nextStepId: 86, roadmapId: 15, libraryId: 17 },
    { id: 86, nextStepId: 87, roadmapId: 15, libraryId: 18 },
    { id: 87, nextStepId: 88, roadmapId: 15, libraryId: 20 },
    { id: 88, nextStepId: 89, roadmapId: 15, libraryId: 24 },
    { id: 89, nextStepId: null, roadmapId: 15, libraryId: 25 },
    { id: 90, nextStepId: 91, roadmapId: 16, libraryId: 27 },
    { id: 91, nextStepId: 92, roadmapId: 16, libraryId: 31 },
    { id: 92, nextStepId: 93, roadmapId: 16, libraryId: 32 },
    { id: 93, nextStepId: 94, roadmapId: 16, libraryId: 33 },
    { id: 94, nextStepId: 95, roadmapId: 16, libraryId: 36 },
    { id: 95, nextStepId: 96, roadmapId: 16, libraryId: 38 },
    { id: 96, nextStepId: 97, roadmapId: 16, libraryId: 39 },
    { id: 97, nextStepId: 98, roadmapId: 16, libraryId: 40 },
    { id: 98, nextStepId: 99, roadmapId: 16, libraryId: 41 },
    { id: 99, nextStepId: null, roadmapId: 16, libraryId: 44 },
    { id: 100, nextStepId: 101, roadmapId: 17, libraryId: 47 },
    { id: 101, nextStepId: 102, roadmapId: 17, libraryId: 49 },
    { id: 102, nextStepId: 103, roadmapId: 17, libraryId: 50 },
    { id: 103, nextStepId: 104, roadmapId: 17, libraryId: 51 },
    { id: 104, nextStepId: 105, roadmapId: 17, libraryId: 53 },
    { id: 105, nextStepId: 106, roadmapId: 17, libraryId: 54 },
    { id: 106, nextStepId: 107, roadmapId: 17, libraryId: 56 },
    { id: 107, nextStepId: 108, roadmapId: 17, libraryId: 58 },
    { id: 108, nextStepId: 109, roadmapId: 17, libraryId: 59 },
    { id: 109, nextStepId: null, roadmapId: 17, libraryId: 64 },
    { id: 110, nextStepId: 111, roadmapId: 18, libraryId: 66 },
    { id: 111, nextStepId: 112, roadmapId: 18, libraryId: 68 },
    { id: 112, nextStepId: 113, roadmapId: 18, libraryId: 70 },
    { id: 113, nextStepId: 114, roadmapId: 18, libraryId: 72 },
    { id: 114, nextStepId: 115, roadmapId: 18, libraryId: 74 },
    { id: 115, nextStepId: 116, roadmapId: 18, libraryId: 75 },
    { id: 116, nextStepId: 117, roadmapId: 18, libraryId: 78 },
    { id: 117, nextStepId: 118, roadmapId: 18, libraryId: 79 },
    { id: 118, nextStepId: 119, roadmapId: 18, libraryId: 80 },
    { id: 119, nextStepId: null, roadmapId: 18, libraryId: 82 },
    { id: 120, nextStepId: 121, roadmapId: 19, libraryId: 87 },
    { id: 121, nextStepId: 122, roadmapId: 19, libraryId: 89 },
    { id: 122, nextStepId: 123, roadmapId: 19, libraryId: 95 },
    { id: 123, nextStepId: 124, roadmapId: 19, libraryId: 99 },
    { id: 124, nextStepId: 125, roadmapId: 19, libraryId: 100 },
    { id: 125, nextStepId: 126, roadmapId: 19, libraryId: 101 },
    { id: 126, nextStepId: 127, roadmapId: 19, libraryId: 102 },
    { id: 127, nextStepId: 128, roadmapId: 19, libraryId: 103 },
    { id: 128, nextStepId: 129, roadmapId: 19, libraryId: 104 },
    { id: 129, nextStepId: null, roadmapId: 19, libraryId: 105 },
    { id: 130, nextStepId: 131, roadmapId: 20, libraryId: 9 },
    { id: 131, nextStepId: 132, roadmapId: 20, libraryId: 10 },
    { id: 132, nextStepId: 133, roadmapId: 20, libraryId: 12 },
    { id: 133, nextStepId: 134, roadmapId: 20, libraryId: 13 },
    { id: 134, nextStepId: 135, roadmapId: 20, libraryId: 15 },
    { id: 135, nextStepId: 136, roadmapId: 20, libraryId: 17 },
    { id: 136, nextStepId: 137, roadmapId: 20, libraryId: 18 },
    { id: 137, nextStepId: 138, roadmapId: 20, libraryId: 20 },
    { id: 138, nextStepId: 139, roadmapId: 20, libraryId: 23 },
    { id: 139, nextStepId: null, roadmapId: 20, libraryId: 25 },
    { id: 140, nextStepId: 141, roadmapId: 21, libraryId: 27 },
    { id: 141, nextStepId: 142, roadmapId: 21, libraryId: 31 },
    { id: 142, nextStepId: 143, roadmapId: 21, libraryId: 33 },
    { id: 143, nextStepId: 144, roadmapId: 21, libraryId: 34 },
    { id: 144, nextStepId: 145, roadmapId: 21, libraryId: 38 },
    { id: 145, nextStepId: 146, roadmapId: 21, libraryId: 39 },
    { id: 146, nextStepId: 147, roadmapId: 21, libraryId: 40 },
    { id: 147, nextStepId: 148, roadmapId: 21, libraryId: 43 },
    { id: 148, nextStepId: 149, roadmapId: 21, libraryId: 44 },
    { id: 149, nextStepId: null, roadmapId: 21, libraryId: 45 },
    { id: 150, nextStepId: 151, roadmapId: 22, libraryId: 48 },
    { id: 151, nextStepId: 152, roadmapId: 22, libraryId: 52 },
    { id: 152, nextStepId: 153, roadmapId: 22, libraryId: 54 },
    { id: 153, nextStepId: 154, roadmapId: 22, libraryId: 57 },
    { id: 154, nextStepId: 155, roadmapId: 22, libraryId: 60 },
    { id: 155, nextStepId: 156, roadmapId: 22, libraryId: 61 },
    { id: 156, nextStepId: 157, roadmapId: 22, libraryId: 62 },
    { id: 157, nextStepId: 158, roadmapId: 22, libraryId: 63 },
    { id: 158, nextStepId: 159, roadmapId: 22, libraryId: 64 },
    { id: 159, nextStepId: null, roadmapId: 22, libraryId: 65 },
    { id: 160, nextStepId: 161, roadmapId: 23, libraryId: 66 },
    { id: 161, nextStepId: 162, roadmapId: 23, libraryId: 68 },
    { id: 162, nextStepId: 163, roadmapId: 23, libraryId: 69 },
    { id: 163, nextStepId: 164, roadmapId: 23, libraryId: 70 },
    { id: 164, nextStepId: 165, roadmapId: 23, libraryId: 73 },
    { id: 165, nextStepId: 166, roadmapId: 23, libraryId: 74 },
    { id: 166, nextStepId: 167, roadmapId: 23, libraryId: 80 },
    { id: 167, nextStepId: 168, roadmapId: 23, libraryId: 82 },
    { id: 168, nextStepId: 169, roadmapId: 23, libraryId: 84 },
    { id: 169, nextStepId: null, roadmapId: 23, libraryId: 85 },
    { id: 170, nextStepId: 171, roadmapId: 24, libraryId: 86 },
    { id: 171, nextStepId: 172, roadmapId: 24, libraryId: 88 },
    { id: 172, nextStepId: 173, roadmapId: 24, libraryId: 93 },
    { id: 173, nextStepId: 174, roadmapId: 24, libraryId: 94 },
    { id: 174, nextStepId: 175, roadmapId: 24, libraryId: 96 },
    { id: 175, nextStepId: 176, roadmapId: 24, libraryId: 98 },
    { id: 176, nextStepId: 177, roadmapId: 24, libraryId: 100 },
    { id: 177, nextStepId: 178, roadmapId: 24, libraryId: 101 },
    { id: 178, nextStepId: 179, roadmapId: 24, libraryId: 103 },
    { id: 179, nextStepId: null, roadmapId: 24, libraryId: 104 },
    { id: 180, nextStepId: 181, roadmapId: 25, libraryId: 8 },
    { id: 181, nextStepId: 182, roadmapId: 25, libraryId: 9 },
    { id: 182, nextStepId: 183, roadmapId: 25, libraryId: 11 },
    { id: 183, nextStepId: 184, roadmapId: 25, libraryId: 13 },
    { id: 184, nextStepId: 185, roadmapId: 25, libraryId: 14 },
    { id: 185, nextStepId: 186, roadmapId: 25, libraryId: 15 },
    { id: 186, nextStepId: 187, roadmapId: 25, libraryId: 19 },
    { id: 187, nextStepId: 188, roadmapId: 25, libraryId: 21 },
    { id: 188, nextStepId: 189, roadmapId: 25, libraryId: 24 },
    { id: 189, nextStepId: null, roadmapId: 25, libraryId: 25 },
    { id: 190, nextStepId: 191, roadmapId: 26, libraryId: 26 },
    { id: 191, nextStepId: 192, roadmapId: 26, libraryId: 27 },
    { id: 192, nextStepId: 193, roadmapId: 26, libraryId: 28 },
    { id: 193, nextStepId: 194, roadmapId: 26, libraryId: 34 },
    { id: 194, nextStepId: 195, roadmapId: 26, libraryId: 35 },
    { id: 195, nextStepId: 196, roadmapId: 26, libraryId: 37 },
    { id: 196, nextStepId: 197, roadmapId: 26, libraryId: 39 },
    { id: 197, nextStepId: 198, roadmapId: 26, libraryId: 40 },
    { id: 198, nextStepId: 199, roadmapId: 26, libraryId: 44 },
    { id: 199, nextStepId: null, roadmapId: 26, libraryId: 45 },
    { id: 200, nextStepId: 201, roadmapId: 27, libraryId: 46 },
    { id: 201, nextStepId: 202, roadmapId: 27, libraryId: 47 },
    { id: 202, nextStepId: 203, roadmapId: 27, libraryId: 49 },
    { id: 203, nextStepId: 204, roadmapId: 27, libraryId: 53 },
    { id: 204, nextStepId: 205, roadmapId: 27, libraryId: 54 },
    { id: 205, nextStepId: 206, roadmapId: 27, libraryId: 55 },
    { id: 206, nextStepId: 207, roadmapId: 27, libraryId: 56 },
    { id: 207, nextStepId: 208, roadmapId: 27, libraryId: 60 },
    { id: 208, nextStepId: 209, roadmapId: 27, libraryId: 62 },
    { id: 209, nextStepId: null, roadmapId: 27, libraryId: 65 },
    { id: 210, nextStepId: 211, roadmapId: 28, libraryId: 66 },
    { id: 211, nextStepId: 212, roadmapId: 28, libraryId: 69 },
    { id: 212, nextStepId: 213, roadmapId: 28, libraryId: 72 },
    { id: 213, nextStepId: 214, roadmapId: 28, libraryId: 73 },
    { id: 214, nextStepId: 215, roadmapId: 28, libraryId: 77 },
    { id: 215, nextStepId: 216, roadmapId: 28, libraryId: 79 },
    { id: 216, nextStepId: 217, roadmapId: 28, libraryId: 80 },
    { id: 217, nextStepId: 218, roadmapId: 28, libraryId: 81 },
    { id: 218, nextStepId: 219, roadmapId: 28, libraryId: 83 },
    { id: 219, nextStepId: null, roadmapId: 28, libraryId: 85 },
    { id: 220, nextStepId: 221, roadmapId: 29, libraryId: 86 },
    { id: 221, nextStepId: 222, roadmapId: 29, libraryId: 88 },
    { id: 222, nextStepId: 223, roadmapId: 29, libraryId: 89 },
    { id: 223, nextStepId: 224, roadmapId: 29, libraryId: 90 },
    { id: 224, nextStepId: 225, roadmapId: 29, libraryId: 94 },
    { id: 225, nextStepId: 226, roadmapId: 29, libraryId: 96 },
    { id: 226, nextStepId: 227, roadmapId: 29, libraryId: 101 },
    { id: 227, nextStepId: 228, roadmapId: 29, libraryId: 103 },
    { id: 228, nextStepId: 229, roadmapId: 29, libraryId: 104 },
    { id: 229, nextStepId: null, roadmapId: 29, libraryId: 105 },
    { id: 230, nextStepId: 231, roadmapId: 30, libraryId: 6 },
    { id: 231, nextStepId: 232, roadmapId: 30, libraryId: 8 },
    { id: 232, nextStepId: 233, roadmapId: 30, libraryId: 9 },
    { id: 233, nextStepId: 234, roadmapId: 30, libraryId: 10 },
    { id: 234, nextStepId: 235, roadmapId: 30, libraryId: 11 },
    { id: 235, nextStepId: 236, roadmapId: 30, libraryId: 12 },
    { id: 236, nextStepId: 237, roadmapId: 30, libraryId: 15 },
    { id: 237, nextStepId: 238, roadmapId: 30, libraryId: 16 },
    { id: 238, nextStepId: 239, roadmapId: 30, libraryId: 18 },
    { id: 239, nextStepId: null, roadmapId: 30, libraryId: 21 },
    { id: 240, nextStepId: 241, roadmapId: 31, libraryId: 26 },
    { id: 241, nextStepId: 242, roadmapId: 31, libraryId: 27 },
    { id: 242, nextStepId: 243, roadmapId: 31, libraryId: 29 },
    { id: 243, nextStepId: 244, roadmapId: 31, libraryId: 31 },
    { id: 244, nextStepId: 245, roadmapId: 31, libraryId: 32 },
    { id: 245, nextStepId: 246, roadmapId: 31, libraryId: 36 },
    { id: 246, nextStepId: 247, roadmapId: 31, libraryId: 40 },
    { id: 247, nextStepId: 248, roadmapId: 31, libraryId: 42 },
    { id: 248, nextStepId: 249, roadmapId: 31, libraryId: 44 },
    { id: 249, nextStepId: null, roadmapId: 31, libraryId: 45 },
    { id: 250, nextStepId: 251, roadmapId: 32, libraryId: 46 },
    { id: 251, nextStepId: 252, roadmapId: 32, libraryId: 48 },
    { id: 252, nextStepId: 253, roadmapId: 32, libraryId: 49 },
    { id: 253, nextStepId: 254, roadmapId: 32, libraryId: 53 },
    { id: 254, nextStepId: 255, roadmapId: 32, libraryId: 56 },
    { id: 255, nextStepId: 256, roadmapId: 32, libraryId: 58 },
    { id: 256, nextStepId: 257, roadmapId: 32, libraryId: 59 },
    { id: 257, nextStepId: 258, roadmapId: 32, libraryId: 60 },
    { id: 258, nextStepId: 259, roadmapId: 32, libraryId: 61 },
    { id: 259, nextStepId: null, roadmapId: 32, libraryId: 64 },
    { id: 260, nextStepId: 261, roadmapId: 33, libraryId: 66 },
    { id: 261, nextStepId: 262, roadmapId: 33, libraryId: 67 },
    { id: 262, nextStepId: 263, roadmapId: 33, libraryId: 70 },
    { id: 263, nextStepId: 264, roadmapId: 33, libraryId: 71 },
    { id: 264, nextStepId: 265, roadmapId: 33, libraryId: 72 },
    { id: 265, nextStepId: 266, roadmapId: 33, libraryId: 76 },
    { id: 266, nextStepId: 267, roadmapId: 33, libraryId: 77 },
    { id: 267, nextStepId: 268, roadmapId: 33, libraryId: 78 },
    { id: 268, nextStepId: 269, roadmapId: 33, libraryId: 83 },
    { id: 269, nextStepId: null, roadmapId: 33, libraryId: 85 },
    { id: 270, nextStepId: 271, roadmapId: 34, libraryId: 87 },
    { id: 271, nextStepId: 272, roadmapId: 34, libraryId: 90 },
    { id: 272, nextStepId: 273, roadmapId: 34, libraryId: 91 },
    { id: 273, nextStepId: 274, roadmapId: 34, libraryId: 93 },
    { id: 274, nextStepId: 275, roadmapId: 34, libraryId: 94 },
    { id: 275, nextStepId: 276, roadmapId: 34, libraryId: 96 },
    { id: 276, nextStepId: 277, roadmapId: 34, libraryId: 98 },
    { id: 277, nextStepId: 278, roadmapId: 34, libraryId: 102 },
    { id: 278, nextStepId: 279, roadmapId: 34, libraryId: 104 },
    { id: 279, nextStepId: null, roadmapId: 34, libraryId: 105 },
    { id: 280, nextStepId: 281, roadmapId: 35, libraryId: 6 },
    { id: 281, nextStepId: 282, roadmapId: 35, libraryId: 8 },
    { id: 282, nextStepId: 283, roadmapId: 35, libraryId: 13 },
    { id: 283, nextStepId: 284, roadmapId: 35, libraryId: 14 },
    { id: 284, nextStepId: 285, roadmapId: 35, libraryId: 18 },
    { id: 285, nextStepId: 286, roadmapId: 35, libraryId: 19 },
    { id: 286, nextStepId: 287, roadmapId: 35, libraryId: 20 },
    { id: 287, nextStepId: 288, roadmapId: 35, libraryId: 21 },
    { id: 288, nextStepId: 289, roadmapId: 35, libraryId: 24 },
    { id: 289, nextStepId: null, roadmapId: 35, libraryId: 25 },
    { id: 290, nextStepId: 291, roadmapId: 36, libraryId: 26 },
    { id: 291, nextStepId: 292, roadmapId: 36, libraryId: 28 },
    { id: 292, nextStepId: 293, roadmapId: 36, libraryId: 29 },
    { id: 293, nextStepId: 294, roadmapId: 36, libraryId: 32 },
    { id: 294, nextStepId: 295, roadmapId: 36, libraryId: 34 },
    { id: 295, nextStepId: 296, roadmapId: 36, libraryId: 35 },
    { id: 296, nextStepId: 297, roadmapId: 36, libraryId: 38 },
    { id: 297, nextStepId: 298, roadmapId: 36, libraryId: 42 },
    { id: 298, nextStepId: 299, roadmapId: 36, libraryId: 44 },
    { id: 299, nextStepId: null, roadmapId: 36, libraryId: 45 },
    { id: 300, nextStepId: 301, roadmapId: 37, libraryId: 47 },
    { id: 301, nextStepId: 302, roadmapId: 37, libraryId: 49 },
    { id: 302, nextStepId: 303, roadmapId: 37, libraryId: 50 },
    { id: 303, nextStepId: 304, roadmapId: 37, libraryId: 51 },
    { id: 304, nextStepId: 305, roadmapId: 37, libraryId: 52 },
    { id: 305, nextStepId: 306, roadmapId: 37, libraryId: 57 },
    { id: 306, nextStepId: 307, roadmapId: 37, libraryId: 58 },
    { id: 307, nextStepId: 308, roadmapId: 37, libraryId: 60 },
    { id: 308, nextStepId: 309, roadmapId: 37, libraryId: 61 },
    { id: 309, nextStepId: null, roadmapId: 37, libraryId: 63 },
    { id: 310, nextStepId: 311, roadmapId: 38, libraryId: 66 },
    { id: 311, nextStepId: 312, roadmapId: 38, libraryId: 68 },
    { id: 312, nextStepId: 313, roadmapId: 38, libraryId: 69 },
    { id: 313, nextStepId: 314, roadmapId: 38, libraryId: 72 },
    { id: 314, nextStepId: 315, roadmapId: 38, libraryId: 77 },
    { id: 315, nextStepId: 316, roadmapId: 38, libraryId: 80 },
    { id: 316, nextStepId: 317, roadmapId: 38, libraryId: 82 },
    { id: 317, nextStepId: 318, roadmapId: 38, libraryId: 83 },
    { id: 318, nextStepId: 319, roadmapId: 38, libraryId: 84 },
    { id: 319, nextStepId: null, roadmapId: 38, libraryId: 85 },
    { id: 320, nextStepId: 321, roadmapId: 39, libraryId: 88 },
    { id: 321, nextStepId: 322, roadmapId: 39, libraryId: 89 },
    { id: 322, nextStepId: 323, roadmapId: 39, libraryId: 90 },
    { id: 323, nextStepId: 324, roadmapId: 39, libraryId: 91 },
    { id: 324, nextStepId: 325, roadmapId: 39, libraryId: 92 },
    { id: 325, nextStepId: 326, roadmapId: 39, libraryId: 94 },
    { id: 326, nextStepId: 327, roadmapId: 39, libraryId: 97 },
    { id: 327, nextStepId: 328, roadmapId: 39, libraryId: 101 },
    { id: 328, nextStepId: 329, roadmapId: 39, libraryId: 102 },
    { id: 329, nextStepId: null, roadmapId: 39, libraryId: 103 },
    { id: 330, nextStepId: 331, roadmapId: 40, libraryId: 8 },
    { id: 331, nextStepId: 332, roadmapId: 40, libraryId: 9 },
    { id: 332, nextStepId: 333, roadmapId: 40, libraryId: 13 },
    { id: 333, nextStepId: 334, roadmapId: 40, libraryId: 15 },
    { id: 334, nextStepId: 335, roadmapId: 40, libraryId: 16 },
    { id: 335, nextStepId: 336, roadmapId: 40, libraryId: 18 },
    { id: 336, nextStepId: 337, roadmapId: 40, libraryId: 19 },
    { id: 337, nextStepId: 338, roadmapId: 40, libraryId: 20 },
    { id: 338, nextStepId: 339, roadmapId: 40, libraryId: 23 },
    { id: 339, nextStepId: null, roadmapId: 40, libraryId: 24 },
    { id: 340, nextStepId: 341, roadmapId: 41, libraryId: 26 },
    { id: 341, nextStepId: 342, roadmapId: 41, libraryId: 27 },
    { id: 342, nextStepId: 343, roadmapId: 41, libraryId: 28 },
    { id: 343, nextStepId: 344, roadmapId: 41, libraryId: 31 },
    { id: 344, nextStepId: 345, roadmapId: 41, libraryId: 33 },
    { id: 345, nextStepId: 346, roadmapId: 41, libraryId: 34 },
    { id: 346, nextStepId: 347, roadmapId: 41, libraryId: 36 },
    { id: 347, nextStepId: 348, roadmapId: 41, libraryId: 38 },
    { id: 348, nextStepId: 349, roadmapId: 41, libraryId: 43 },
    { id: 349, nextStepId: null, roadmapId: 41, libraryId: 44 },
    { id: 350, nextStepId: 351, roadmapId: 42, libraryId: 47 },
    { id: 351, nextStepId: 352, roadmapId: 42, libraryId: 49 },
    { id: 352, nextStepId: 353, roadmapId: 42, libraryId: 50 },
    { id: 353, nextStepId: 354, roadmapId: 42, libraryId: 53 },
    { id: 354, nextStepId: 355, roadmapId: 42, libraryId: 54 },
    { id: 355, nextStepId: 356, roadmapId: 42, libraryId: 55 },
    { id: 356, nextStepId: 357, roadmapId: 42, libraryId: 57 },
    { id: 357, nextStepId: 358, roadmapId: 42, libraryId: 59 },
    { id: 358, nextStepId: 359, roadmapId: 42, libraryId: 62 },
    { id: 359, nextStepId: null, roadmapId: 42, libraryId: 65 },
    { id: 360, nextStepId: 361, roadmapId: 43, libraryId: 68 },
    { id: 361, nextStepId: 362, roadmapId: 43, libraryId: 69 },
    { id: 362, nextStepId: 363, roadmapId: 43, libraryId: 72 },
    { id: 363, nextStepId: 364, roadmapId: 43, libraryId: 74 },
    { id: 364, nextStepId: 365, roadmapId: 43, libraryId: 75 },
    { id: 365, nextStepId: 366, roadmapId: 43, libraryId: 77 },
    { id: 366, nextStepId: 367, roadmapId: 43, libraryId: 79 },
    { id: 367, nextStepId: 368, roadmapId: 43, libraryId: 81 },
    { id: 368, nextStepId: 369, roadmapId: 43, libraryId: 83 },
    { id: 369, nextStepId: null, roadmapId: 43, libraryId: 84 },
    { id: 370, nextStepId: 371, roadmapId: 44, libraryId: 91 },
    { id: 371, nextStepId: 372, roadmapId: 44, libraryId: 92 },
    { id: 372, nextStepId: 373, roadmapId: 44, libraryId: 94 },
    { id: 373, nextStepId: 374, roadmapId: 44, libraryId: 96 },
    { id: 374, nextStepId: 375, roadmapId: 44, libraryId: 97 },
    { id: 375, nextStepId: 376, roadmapId: 44, libraryId: 98 },
    { id: 376, nextStepId: 377, roadmapId: 44, libraryId: 99 },
    { id: 377, nextStepId: 378, roadmapId: 44, libraryId: 100 },
    { id: 378, nextStepId: 379, roadmapId: 44, libraryId: 101 },
    { id: 379, nextStepId: null, roadmapId: 44, libraryId: 103 },
    { id: 380, nextStepId: 381, roadmapId: 45, libraryId: 7 },
    { id: 381, nextStepId: 382, roadmapId: 45, libraryId: 9 },
    { id: 382, nextStepId: 383, roadmapId: 45, libraryId: 11 },
    { id: 383, nextStepId: 384, roadmapId: 45, libraryId: 13 },
    { id: 384, nextStepId: 385, roadmapId: 45, libraryId: 15 },
    { id: 385, nextStepId: 386, roadmapId: 45, libraryId: 18 },
    { id: 386, nextStepId: 387, roadmapId: 45, libraryId: 20 },
    { id: 387, nextStepId: 388, roadmapId: 45, libraryId: 21 },
    { id: 388, nextStepId: 389, roadmapId: 45, libraryId: 23 },
    { id: 389, nextStepId: null, roadmapId: 45, libraryId: 25 },
    { id: 390, nextStepId: 391, roadmapId: 46, libraryId: 26 },
    { id: 391, nextStepId: 392, roadmapId: 46, libraryId: 27 },
    { id: 392, nextStepId: 393, roadmapId: 46, libraryId: 28 },
    { id: 393, nextStepId: 394, roadmapId: 46, libraryId: 29 },
    { id: 394, nextStepId: 395, roadmapId: 46, libraryId: 36 },
    { id: 395, nextStepId: 396, roadmapId: 46, libraryId: 37 },
    { id: 396, nextStepId: 397, roadmapId: 46, libraryId: 38 },
    { id: 397, nextStepId: 398, roadmapId: 46, libraryId: 39 },
    { id: 398, nextStepId: 399, roadmapId: 46, libraryId: 40 },
    { id: 399, nextStepId: null, roadmapId: 46, libraryId: 41 },
    { id: 400, nextStepId: 401, roadmapId: 47, libraryId: 48 },
    { id: 401, nextStepId: 402, roadmapId: 47, libraryId: 49 },
    { id: 402, nextStepId: 403, roadmapId: 47, libraryId: 53 },
    { id: 403, nextStepId: 404, roadmapId: 47, libraryId: 54 },
    { id: 404, nextStepId: 405, roadmapId: 47, libraryId: 55 },
    { id: 405, nextStepId: 406, roadmapId: 47, libraryId: 56 },
    { id: 406, nextStepId: 407, roadmapId: 47, libraryId: 57 },
    { id: 407, nextStepId: 408, roadmapId: 47, libraryId: 59 },
    { id: 408, nextStepId: 409, roadmapId: 47, libraryId: 61 },
    { id: 409, nextStepId: null, roadmapId: 47, libraryId: 65 },
    { id: 410, nextStepId: 411, roadmapId: 48, libraryId: 68 },
    { id: 411, nextStepId: 412, roadmapId: 48, libraryId: 69 },
    { id: 412, nextStepId: 413, roadmapId: 48, libraryId: 70 },
    { id: 413, nextStepId: 414, roadmapId: 48, libraryId: 71 },
    { id: 414, nextStepId: 415, roadmapId: 48, libraryId: 72 },
    { id: 415, nextStepId: 416, roadmapId: 48, libraryId: 74 },
    { id: 416, nextStepId: 417, roadmapId: 48, libraryId: 75 },
    { id: 417, nextStepId: 418, roadmapId: 48, libraryId: 79 },
    { id: 418, nextStepId: 419, roadmapId: 48, libraryId: 83 },
    { id: 419, nextStepId: null, roadmapId: 48, libraryId: 84 },
    { id: 420, nextStepId: 421, roadmapId: 49, libraryId: 88 },
    { id: 421, nextStepId: 422, roadmapId: 49, libraryId: 89 },
    { id: 422, nextStepId: 423, roadmapId: 49, libraryId: 90 },
    { id: 423, nextStepId: 424, roadmapId: 49, libraryId: 91 },
    { id: 424, nextStepId: 425, roadmapId: 49, libraryId: 92 },
    { id: 425, nextStepId: 426, roadmapId: 49, libraryId: 93 },
    { id: 426, nextStepId: 427, roadmapId: 49, libraryId: 98 },
    { id: 427, nextStepId: 428, roadmapId: 49, libraryId: 103 },
    { id: 428, nextStepId: 429, roadmapId: 49, libraryId: 104 },
    { id: 429, nextStepId: null, roadmapId: 49, libraryId: 105 },
    { id: 430, nextStepId: 431, roadmapId: 50, libraryId: 6 },
    { id: 431, nextStepId: 432, roadmapId: 50, libraryId: 7 },
    { id: 432, nextStepId: 433, roadmapId: 50, libraryId: 8 },
    { id: 433, nextStepId: 434, roadmapId: 50, libraryId: 12 },
    { id: 434, nextStepId: 435, roadmapId: 50, libraryId: 14 },
    { id: 435, nextStepId: 436, roadmapId: 50, libraryId: 15 },
    { id: 436, nextStepId: 437, roadmapId: 50, libraryId: 17 },
    { id: 437, nextStepId: 438, roadmapId: 50, libraryId: 18 },
    { id: 438, nextStepId: 439, roadmapId: 50, libraryId: 19 },
    { id: 439, nextStepId: null, roadmapId: 50, libraryId: 21 },
    { id: 440, nextStepId: 441, roadmapId: 51, libraryId: 26 },
    { id: 441, nextStepId: 442, roadmapId: 51, libraryId: 27 },
    { id: 442, nextStepId: 443, roadmapId: 51, libraryId: 28 },
    { id: 443, nextStepId: 444, roadmapId: 51, libraryId: 29 },
    { id: 444, nextStepId: 445, roadmapId: 51, libraryId: 31 },
    { id: 445, nextStepId: 446, roadmapId: 51, libraryId: 34 },
    { id: 446, nextStepId: 447, roadmapId: 51, libraryId: 35 },
    { id: 447, nextStepId: 448, roadmapId: 51, libraryId: 37 },
    { id: 448, nextStepId: 449, roadmapId: 51, libraryId: 38 },
    { id: 449, nextStepId: null, roadmapId: 51, libraryId: 42 },
    { id: 450, nextStepId: 451, roadmapId: 52, libraryId: 46 },
    { id: 451, nextStepId: 452, roadmapId: 52, libraryId: 47 },
    { id: 452, nextStepId: 453, roadmapId: 52, libraryId: 49 },
    { id: 453, nextStepId: 454, roadmapId: 52, libraryId: 50 },
    { id: 454, nextStepId: 455, roadmapId: 52, libraryId: 51 },
    { id: 455, nextStepId: 456, roadmapId: 52, libraryId: 55 },
    { id: 456, nextStepId: 457, roadmapId: 52, libraryId: 57 },
    { id: 457, nextStepId: 458, roadmapId: 52, libraryId: 59 },
    { id: 458, nextStepId: 459, roadmapId: 52, libraryId: 62 },
    { id: 459, nextStepId: null, roadmapId: 52, libraryId: 65 },
    { id: 460, nextStepId: 461, roadmapId: 53, libraryId: 68 },
    { id: 461, nextStepId: 462, roadmapId: 53, libraryId: 70 },
    { id: 462, nextStepId: 463, roadmapId: 53, libraryId: 71 },
    { id: 463, nextStepId: 464, roadmapId: 53, libraryId: 72 },
    { id: 464, nextStepId: 465, roadmapId: 53, libraryId: 78 },
    { id: 465, nextStepId: 466, roadmapId: 53, libraryId: 79 },
    { id: 466, nextStepId: 467, roadmapId: 53, libraryId: 80 },
    { id: 467, nextStepId: 468, roadmapId: 53, libraryId: 81 },
    { id: 468, nextStepId: 469, roadmapId: 53, libraryId: 84 },
    { id: 469, nextStepId: null, roadmapId: 53, libraryId: 85 },
    { id: 470, nextStepId: 471, roadmapId: 54, libraryId: 86 },
    { id: 471, nextStepId: 472, roadmapId: 54, libraryId: 91 },
    { id: 472, nextStepId: 473, roadmapId: 54, libraryId: 94 },
    { id: 473, nextStepId: 474, roadmapId: 54, libraryId: 95 },
    { id: 474, nextStepId: 475, roadmapId: 54, libraryId: 96 },
    { id: 475, nextStepId: 476, roadmapId: 54, libraryId: 97 },
    { id: 476, nextStepId: 477, roadmapId: 54, libraryId: 102 },
    { id: 477, nextStepId: 478, roadmapId: 54, libraryId: 103 },
    { id: 478, nextStepId: 479, roadmapId: 54, libraryId: 104 },
    { id: 479, nextStepId: null, roadmapId: 54, libraryId: 105 },
    { id: 480, nextStepId: 481, roadmapId: 55, libraryId: 7 },
    { id: 481, nextStepId: 482, roadmapId: 55, libraryId: 10 },
    { id: 482, nextStepId: 483, roadmapId: 55, libraryId: 11 },
    { id: 483, nextStepId: 484, roadmapId: 55, libraryId: 14 },
    { id: 484, nextStepId: 485, roadmapId: 55, libraryId: 15 },
    { id: 485, nextStepId: 486, roadmapId: 55, libraryId: 16 },
    { id: 486, nextStepId: 487, roadmapId: 55, libraryId: 17 },
    { id: 487, nextStepId: 488, roadmapId: 55, libraryId: 20 },
    { id: 488, nextStepId: 489, roadmapId: 55, libraryId: 23 },
    { id: 489, nextStepId: null, roadmapId: 55, libraryId: 24 },
    { id: 490, nextStepId: 491, roadmapId: 56, libraryId: 26 },
    { id: 491, nextStepId: 492, roadmapId: 56, libraryId: 28 },
    { id: 492, nextStepId: 493, roadmapId: 56, libraryId: 30 },
    { id: 493, nextStepId: 494, roadmapId: 56, libraryId: 31 },
    { id: 494, nextStepId: 495, roadmapId: 56, libraryId: 35 },
    { id: 495, nextStepId: 496, roadmapId: 56, libraryId: 37 },
    { id: 496, nextStepId: 497, roadmapId: 56, libraryId: 41 },
    { id: 497, nextStepId: 498, roadmapId: 56, libraryId: 42 },
    { id: 498, nextStepId: 499, roadmapId: 56, libraryId: 43 },
    { id: 499, nextStepId: null, roadmapId: 56, libraryId: 45 },
    { id: 500, nextStepId: 501, roadmapId: 57, libraryId: 49 },
    { id: 501, nextStepId: 502, roadmapId: 57, libraryId: 50 },
    { id: 502, nextStepId: 503, roadmapId: 57, libraryId: 51 },
    { id: 503, nextStepId: 504, roadmapId: 57, libraryId: 52 },
    { id: 504, nextStepId: 505, roadmapId: 57, libraryId: 53 },
    { id: 505, nextStepId: 506, roadmapId: 57, libraryId: 57 },
    { id: 506, nextStepId: 507, roadmapId: 57, libraryId: 61 },
    { id: 507, nextStepId: 508, roadmapId: 57, libraryId: 63 },
    { id: 508, nextStepId: 509, roadmapId: 57, libraryId: 64 },
    { id: 509, nextStepId: null, roadmapId: 57, libraryId: 65 },
    { id: 510, nextStepId: 511, roadmapId: 58, libraryId: 68 },
    { id: 511, nextStepId: 512, roadmapId: 58, libraryId: 73 },
    { id: 512, nextStepId: 513, roadmapId: 58, libraryId: 75 },
    { id: 513, nextStepId: 514, roadmapId: 58, libraryId: 76 },
    { id: 514, nextStepId: 515, roadmapId: 58, libraryId: 77 },
    { id: 515, nextStepId: 516, roadmapId: 58, libraryId: 79 },
    { id: 516, nextStepId: 517, roadmapId: 58, libraryId: 80 },
    { id: 517, nextStepId: 518, roadmapId: 58, libraryId: 82 },
    { id: 518, nextStepId: 519, roadmapId: 58, libraryId: 83 },
    { id: 519, nextStepId: null, roadmapId: 58, libraryId: 84 },
    { id: 520, nextStepId: 521, roadmapId: 59, libraryId: 86 },
    { id: 521, nextStepId: 522, roadmapId: 59, libraryId: 88 },
    { id: 522, nextStepId: 523, roadmapId: 59, libraryId: 95 },
    { id: 523, nextStepId: 524, roadmapId: 59, libraryId: 96 },
    { id: 524, nextStepId: 525, roadmapId: 59, libraryId: 98 },
    { id: 525, nextStepId: 526, roadmapId: 59, libraryId: 99 },
    { id: 526, nextStepId: 527, roadmapId: 59, libraryId: 100 },
    { id: 527, nextStepId: 528, roadmapId: 59, libraryId: 103 },
    { id: 528, nextStepId: 529, roadmapId: 59, libraryId: 104 },
    { id: 529, nextStepId: null, roadmapId: 59, libraryId: 105 },
    { id: 530, nextStepId: 531, roadmapId: 60, libraryId: 6 },
    { id: 531, nextStepId: 532, roadmapId: 60, libraryId: 8 },
    { id: 532, nextStepId: 533, roadmapId: 60, libraryId: 11 },
    { id: 533, nextStepId: 534, roadmapId: 60, libraryId: 12 },
    { id: 534, nextStepId: 535, roadmapId: 60, libraryId: 13 },
    { id: 535, nextStepId: 536, roadmapId: 60, libraryId: 14 },
    { id: 536, nextStepId: 537, roadmapId: 60, libraryId: 15 },
    { id: 537, nextStepId: 538, roadmapId: 60, libraryId: 19 },
    { id: 538, nextStepId: 539, roadmapId: 60, libraryId: 21 },
    { id: 539, nextStepId: null, roadmapId: 60, libraryId: 24 },
    { id: 540, nextStepId: 541, roadmapId: 61, libraryId: 29 },
    { id: 541, nextStepId: 542, roadmapId: 61, libraryId: 30 },
    { id: 542, nextStepId: 543, roadmapId: 61, libraryId: 33 },
    { id: 543, nextStepId: 544, roadmapId: 61, libraryId: 34 },
    { id: 544, nextStepId: 545, roadmapId: 61, libraryId: 36 },
    { id: 545, nextStepId: 546, roadmapId: 61, libraryId: 40 },
    { id: 546, nextStepId: 547, roadmapId: 61, libraryId: 41 },
    { id: 547, nextStepId: 548, roadmapId: 61, libraryId: 42 },
    { id: 548, nextStepId: 549, roadmapId: 61, libraryId: 43 },
    { id: 549, nextStepId: null, roadmapId: 61, libraryId: 44 },
    { id: 550, nextStepId: 551, roadmapId: 62, libraryId: 46 },
    { id: 551, nextStepId: 552, roadmapId: 62, libraryId: 47 },
    { id: 552, nextStepId: 553, roadmapId: 62, libraryId: 49 },
    { id: 553, nextStepId: 554, roadmapId: 62, libraryId: 50 },
    { id: 554, nextStepId: 555, roadmapId: 62, libraryId: 52 },
    { id: 555, nextStepId: 556, roadmapId: 62, libraryId: 53 },
    { id: 556, nextStepId: 557, roadmapId: 62, libraryId: 58 },
    { id: 557, nextStepId: 558, roadmapId: 62, libraryId: 61 },
    { id: 558, nextStepId: 559, roadmapId: 62, libraryId: 64 },
    { id: 559, nextStepId: null, roadmapId: 62, libraryId: 65 },
    { id: 560, nextStepId: 561, roadmapId: 63, libraryId: 66 },
    { id: 561, nextStepId: 562, roadmapId: 63, libraryId: 69 },
    { id: 562, nextStepId: 563, roadmapId: 63, libraryId: 71 },
    { id: 563, nextStepId: 564, roadmapId: 63, libraryId: 72 },
    { id: 564, nextStepId: 565, roadmapId: 63, libraryId: 74 },
    { id: 565, nextStepId: 566, roadmapId: 63, libraryId: 75 },
    { id: 566, nextStepId: 567, roadmapId: 63, libraryId: 76 },
    { id: 567, nextStepId: 568, roadmapId: 63, libraryId: 79 },
    { id: 568, nextStepId: 569, roadmapId: 63, libraryId: 83 },
    { id: 569, nextStepId: null, roadmapId: 63, libraryId: 84 },
    { id: 570, nextStepId: 571, roadmapId: 64, libraryId: 87 },
    { id: 571, nextStepId: 572, roadmapId: 64, libraryId: 89 },
    { id: 572, nextStepId: 573, roadmapId: 64, libraryId: 91 },
    { id: 573, nextStepId: 574, roadmapId: 64, libraryId: 92 },
    { id: 574, nextStepId: 575, roadmapId: 64, libraryId: 96 },
    { id: 575, nextStepId: 576, roadmapId: 64, libraryId: 97 },
    { id: 576, nextStepId: 577, roadmapId: 64, libraryId: 99 },
    { id: 577, nextStepId: 578, roadmapId: 64, libraryId: 100 },
    { id: 578, nextStepId: 579, roadmapId: 64, libraryId: 104 },
    { id: 579, nextStepId: null, roadmapId: 64, libraryId: 105 },
    { id: 580, nextStepId: 581, roadmapId: 65, libraryId: 6 },
    { id: 581, nextStepId: 582, roadmapId: 65, libraryId: 7 },
    { id: 582, nextStepId: 583, roadmapId: 65, libraryId: 8 },
    { id: 583, nextStepId: 584, roadmapId: 65, libraryId: 13 },
    { id: 584, nextStepId: 585, roadmapId: 65, libraryId: 14 },
    { id: 585, nextStepId: 586, roadmapId: 65, libraryId: 16 },
    { id: 586, nextStepId: 587, roadmapId: 65, libraryId: 18 },
    { id: 587, nextStepId: 588, roadmapId: 65, libraryId: 20 },
    { id: 588, nextStepId: 589, roadmapId: 65, libraryId: 23 },
    { id: 589, nextStepId: null, roadmapId: 65, libraryId: 24 },
    { id: 590, nextStepId: 591, roadmapId: 66, libraryId: 26 },
    { id: 591, nextStepId: 592, roadmapId: 66, libraryId: 27 },
    { id: 592, nextStepId: 593, roadmapId: 66, libraryId: 29 },
    { id: 593, nextStepId: 594, roadmapId: 66, libraryId: 31 },
    { id: 594, nextStepId: 595, roadmapId: 66, libraryId: 35 },
    { id: 595, nextStepId: 596, roadmapId: 66, libraryId: 36 },
    { id: 596, nextStepId: 597, roadmapId: 66, libraryId: 40 },
    { id: 597, nextStepId: 598, roadmapId: 66, libraryId: 42 },
    { id: 598, nextStepId: 599, roadmapId: 66, libraryId: 43 },
    { id: 599, nextStepId: null, roadmapId: 66, libraryId: 45 },
    { id: 600, nextStepId: 601, roadmapId: 67, libraryId: 47 },
    { id: 601, nextStepId: 602, roadmapId: 67, libraryId: 49 },
    { id: 602, nextStepId: 603, roadmapId: 67, libraryId: 51 },
    { id: 603, nextStepId: 604, roadmapId: 67, libraryId: 52 },
    { id: 604, nextStepId: 605, roadmapId: 67, libraryId: 54 },
    { id: 605, nextStepId: 606, roadmapId: 67, libraryId: 55 },
    { id: 606, nextStepId: 607, roadmapId: 67, libraryId: 57 },
    { id: 607, nextStepId: 608, roadmapId: 67, libraryId: 58 },
    { id: 608, nextStepId: 609, roadmapId: 67, libraryId: 62 },
    { id: 609, nextStepId: null, roadmapId: 67, libraryId: 65 },
    { id: 610, nextStepId: 611, roadmapId: 68, libraryId: 67 },
    { id: 611, nextStepId: 612, roadmapId: 68, libraryId: 70 },
    { id: 612, nextStepId: 613, roadmapId: 68, libraryId: 73 },
    { id: 613, nextStepId: 614, roadmapId: 68, libraryId: 74 },
    { id: 614, nextStepId: 615, roadmapId: 68, libraryId: 76 },
    { id: 615, nextStepId: 616, roadmapId: 68, libraryId: 77 },
    { id: 616, nextStepId: 617, roadmapId: 68, libraryId: 78 },
    { id: 617, nextStepId: 618, roadmapId: 68, libraryId: 80 },
    { id: 618, nextStepId: 619, roadmapId: 68, libraryId: 84 },
    { id: 619, nextStepId: null, roadmapId: 68, libraryId: 85 },
    { id: 620, nextStepId: 621, roadmapId: 69, libraryId: 86 },
    { id: 621, nextStepId: 622, roadmapId: 69, libraryId: 87 },
    { id: 622, nextStepId: 623, roadmapId: 69, libraryId: 88 },
    { id: 623, nextStepId: 624, roadmapId: 69, libraryId: 91 },
    { id: 624, nextStepId: 625, roadmapId: 69, libraryId: 95 },
    { id: 625, nextStepId: 626, roadmapId: 69, libraryId: 97 },
    { id: 626, nextStepId: 627, roadmapId: 69, libraryId: 98 },
    { id: 627, nextStepId: 628, roadmapId: 69, libraryId: 99 },
    { id: 628, nextStepId: 629, roadmapId: 69, libraryId: 101 },
    { id: 629, nextStepId: null, roadmapId: 69, libraryId: 104 },
    { id: 630, nextStepId: 631, roadmapId: 70, libraryId: 6 },
    { id: 631, nextStepId: 632, roadmapId: 70, libraryId: 8 },
    { id: 632, nextStepId: 633, roadmapId: 70, libraryId: 10 },
    { id: 633, nextStepId: 634, roadmapId: 70, libraryId: 13 },
    { id: 634, nextStepId: 635, roadmapId: 70, libraryId: 14 },
    { id: 635, nextStepId: 636, roadmapId: 70, libraryId: 17 },
    { id: 636, nextStepId: 637, roadmapId: 70, libraryId: 18 },
    { id: 637, nextStepId: 638, roadmapId: 70, libraryId: 19 },
    { id: 638, nextStepId: 639, roadmapId: 70, libraryId: 22 },
    { id: 639, nextStepId: null, roadmapId: 70, libraryId: 23 },
    { id: 640, nextStepId: 641, roadmapId: 71, libraryId: 26 },
    { id: 641, nextStepId: 642, roadmapId: 71, libraryId: 31 },
    { id: 642, nextStepId: 643, roadmapId: 71, libraryId: 32 },
    { id: 643, nextStepId: 644, roadmapId: 71, libraryId: 33 },
    { id: 644, nextStepId: 645, roadmapId: 71, libraryId: 34 },
    { id: 645, nextStepId: 646, roadmapId: 71, libraryId: 37 },
    { id: 646, nextStepId: 647, roadmapId: 71, libraryId: 38 },
    { id: 647, nextStepId: 648, roadmapId: 71, libraryId: 40 },
    { id: 648, nextStepId: 649, roadmapId: 71, libraryId: 41 },
    { id: 649, nextStepId: null, roadmapId: 71, libraryId: 43 },
    { id: 650, nextStepId: 651, roadmapId: 72, libraryId: 46 },
    { id: 651, nextStepId: 652, roadmapId: 72, libraryId: 49 },
    { id: 652, nextStepId: 653, roadmapId: 72, libraryId: 50 },
    { id: 653, nextStepId: 654, roadmapId: 72, libraryId: 51 },
    { id: 654, nextStepId: 655, roadmapId: 72, libraryId: 54 },
    { id: 655, nextStepId: 656, roadmapId: 72, libraryId: 57 },
    { id: 656, nextStepId: 657, roadmapId: 72, libraryId: 60 },
    { id: 657, nextStepId: 658, roadmapId: 72, libraryId: 61 },
    { id: 658, nextStepId: 659, roadmapId: 72, libraryId: 62 },
    { id: 659, nextStepId: null, roadmapId: 72, libraryId: 64 },
    { id: 660, nextStepId: 661, roadmapId: 73, libraryId: 67 },
    { id: 661, nextStepId: 662, roadmapId: 73, libraryId: 69 },
    { id: 662, nextStepId: 663, roadmapId: 73, libraryId: 70 },
    { id: 663, nextStepId: 664, roadmapId: 73, libraryId: 73 },
    { id: 664, nextStepId: 665, roadmapId: 73, libraryId: 74 },
    { id: 665, nextStepId: 666, roadmapId: 73, libraryId: 76 },
    { id: 666, nextStepId: 667, roadmapId: 73, libraryId: 77 },
    { id: 667, nextStepId: 668, roadmapId: 73, libraryId: 78 },
    { id: 668, nextStepId: 669, roadmapId: 73, libraryId: 79 },
    { id: 669, nextStepId: null, roadmapId: 73, libraryId: 83 },
    { id: 670, nextStepId: 671, roadmapId: 74, libraryId: 86 },
    { id: 671, nextStepId: 672, roadmapId: 74, libraryId: 87 },
    { id: 672, nextStepId: 673, roadmapId: 74, libraryId: 89 },
    { id: 673, nextStepId: 674, roadmapId: 74, libraryId: 91 },
    { id: 674, nextStepId: 675, roadmapId: 74, libraryId: 92 },
    { id: 675, nextStepId: 676, roadmapId: 74, libraryId: 93 },
    { id: 676, nextStepId: 677, roadmapId: 74, libraryId: 95 },
    { id: 677, nextStepId: 678, roadmapId: 74, libraryId: 99 },
    { id: 678, nextStepId: 679, roadmapId: 74, libraryId: 101 },
    { id: 679, nextStepId: null, roadmapId: 74, libraryId: 102 },
    { id: 680, nextStepId: 681, roadmapId: 75, libraryId: 6 },
    { id: 681, nextStepId: 682, roadmapId: 75, libraryId: 11 },
    { id: 682, nextStepId: 683, roadmapId: 75, libraryId: 12 },
    { id: 683, nextStepId: 684, roadmapId: 75, libraryId: 13 },
    { id: 684, nextStepId: 685, roadmapId: 75, libraryId: 16 },
    { id: 685, nextStepId: 686, roadmapId: 75, libraryId: 17 },
    { id: 686, nextStepId: 687, roadmapId: 75, libraryId: 19 },
    { id: 687, nextStepId: 688, roadmapId: 75, libraryId: 20 },
    { id: 688, nextStepId: 689, roadmapId: 75, libraryId: 23 },
    { id: 689, nextStepId: null, roadmapId: 75, libraryId: 25 },
    { id: 690, nextStepId: 691, roadmapId: 76, libraryId: 26 },
    { id: 691, nextStepId: 692, roadmapId: 76, libraryId: 28 },
    { id: 692, nextStepId: 693, roadmapId: 76, libraryId: 29 },
    { id: 693, nextStepId: 694, roadmapId: 76, libraryId: 32 },
    { id: 694, nextStepId: 695, roadmapId: 76, libraryId: 33 },
    { id: 695, nextStepId: 696, roadmapId: 76, libraryId: 34 },
    { id: 696, nextStepId: 697, roadmapId: 76, libraryId: 38 },
    { id: 697, nextStepId: 698, roadmapId: 76, libraryId: 43 },
    { id: 698, nextStepId: 699, roadmapId: 76, libraryId: 44 },
    { id: 699, nextStepId: null, roadmapId: 76, libraryId: 45 },
    { id: 700, nextStepId: 701, roadmapId: 77, libraryId: 46 },
    { id: 701, nextStepId: 702, roadmapId: 77, libraryId: 47 },
    { id: 702, nextStepId: 703, roadmapId: 77, libraryId: 49 },
    { id: 703, nextStepId: 704, roadmapId: 77, libraryId: 50 },
    { id: 704, nextStepId: 705, roadmapId: 77, libraryId: 52 },
    { id: 705, nextStepId: 706, roadmapId: 77, libraryId: 55 },
    { id: 706, nextStepId: 707, roadmapId: 77, libraryId: 56 },
    { id: 707, nextStepId: 708, roadmapId: 77, libraryId: 57 },
    { id: 708, nextStepId: 709, roadmapId: 77, libraryId: 61 },
    { id: 709, nextStepId: null, roadmapId: 77, libraryId: 64 },
    { id: 710, nextStepId: 711, roadmapId: 78, libraryId: 66 },
    { id: 711, nextStepId: 712, roadmapId: 78, libraryId: 69 },
    { id: 712, nextStepId: 713, roadmapId: 78, libraryId: 70 },
    { id: 713, nextStepId: 714, roadmapId: 78, libraryId: 72 },
    { id: 714, nextStepId: 715, roadmapId: 78, libraryId: 73 },
    { id: 715, nextStepId: 716, roadmapId: 78, libraryId: 75 },
    { id: 716, nextStepId: 717, roadmapId: 78, libraryId: 77 },
    { id: 717, nextStepId: 718, roadmapId: 78, libraryId: 78 },
    { id: 718, nextStepId: 719, roadmapId: 78, libraryId: 82 },
    { id: 719, nextStepId: null, roadmapId: 78, libraryId: 83 },
    { id: 720, nextStepId: 721, roadmapId: 79, libraryId: 87 },
    { id: 721, nextStepId: 722, roadmapId: 79, libraryId: 89 },
    { id: 722, nextStepId: 723, roadmapId: 79, libraryId: 92 },
    { id: 723, nextStepId: 724, roadmapId: 79, libraryId: 94 },
    { id: 724, nextStepId: 725, roadmapId: 79, libraryId: 96 },
    { id: 725, nextStepId: 726, roadmapId: 79, libraryId: 97 },
    { id: 726, nextStepId: 727, roadmapId: 79, libraryId: 98 },
    { id: 727, nextStepId: 728, roadmapId: 79, libraryId: 101 },
    { id: 728, nextStepId: 729, roadmapId: 79, libraryId: 103 },
    { id: 729, nextStepId: null, roadmapId: 79, libraryId: 105 },
    { id: 730, nextStepId: 731, roadmapId: 80, libraryId: 8 },
    { id: 731, nextStepId: 732, roadmapId: 80, libraryId: 10 },
    { id: 732, nextStepId: 733, roadmapId: 80, libraryId: 12 },
    { id: 733, nextStepId: 734, roadmapId: 80, libraryId: 14 },
    { id: 734, nextStepId: 735, roadmapId: 80, libraryId: 15 },
    { id: 735, nextStepId: 736, roadmapId: 80, libraryId: 16 },
    { id: 736, nextStepId: 737, roadmapId: 80, libraryId: 17 },
    { id: 737, nextStepId: 738, roadmapId: 80, libraryId: 18 },
    { id: 738, nextStepId: 739, roadmapId: 80, libraryId: 19 },
    { id: 739, nextStepId: null, roadmapId: 80, libraryId: 22 },
    { id: 740, nextStepId: 741, roadmapId: 81, libraryId: 26 },
    { id: 741, nextStepId: 742, roadmapId: 81, libraryId: 27 },
    { id: 742, nextStepId: 743, roadmapId: 81, libraryId: 30 },
    { id: 743, nextStepId: 744, roadmapId: 81, libraryId: 31 },
    { id: 744, nextStepId: 745, roadmapId: 81, libraryId: 33 },
    { id: 745, nextStepId: 746, roadmapId: 81, libraryId: 35 },
    { id: 746, nextStepId: 747, roadmapId: 81, libraryId: 37 },
    { id: 747, nextStepId: 748, roadmapId: 81, libraryId: 39 },
    { id: 748, nextStepId: 749, roadmapId: 81, libraryId: 42 },
    { id: 749, nextStepId: null, roadmapId: 81, libraryId: 44 },
    { id: 750, nextStepId: 751, roadmapId: 82, libraryId: 49 },
    { id: 751, nextStepId: 752, roadmapId: 82, libraryId: 50 },
    { id: 752, nextStepId: 753, roadmapId: 82, libraryId: 51 },
    { id: 753, nextStepId: 754, roadmapId: 82, libraryId: 52 },
    { id: 754, nextStepId: 755, roadmapId: 82, libraryId: 54 },
    { id: 755, nextStepId: 756, roadmapId: 82, libraryId: 58 },
    { id: 756, nextStepId: 757, roadmapId: 82, libraryId: 60 },
    { id: 757, nextStepId: 758, roadmapId: 82, libraryId: 61 },
    { id: 758, nextStepId: 759, roadmapId: 82, libraryId: 63 },
    { id: 759, nextStepId: null, roadmapId: 82, libraryId: 65 },
    { id: 760, nextStepId: 761, roadmapId: 83, libraryId: 67 },
    { id: 761, nextStepId: 762, roadmapId: 83, libraryId: 68 },
    { id: 762, nextStepId: 763, roadmapId: 83, libraryId: 70 },
    { id: 763, nextStepId: 764, roadmapId: 83, libraryId: 72 },
    { id: 764, nextStepId: 765, roadmapId: 83, libraryId: 78 },
    { id: 765, nextStepId: 766, roadmapId: 83, libraryId: 79 },
    { id: 766, nextStepId: 767, roadmapId: 83, libraryId: 80 },
    { id: 767, nextStepId: 768, roadmapId: 83, libraryId: 81 },
    { id: 768, nextStepId: 769, roadmapId: 83, libraryId: 83 },
    { id: 769, nextStepId: null, roadmapId: 83, libraryId: 84 },
    { id: 770, nextStepId: 771, roadmapId: 84, libraryId: 88 },
    { id: 771, nextStepId: 772, roadmapId: 84, libraryId: 93 },
    { id: 772, nextStepId: 773, roadmapId: 84, libraryId: 94 },
    { id: 773, nextStepId: 774, roadmapId: 84, libraryId: 95 },
    { id: 774, nextStepId: 775, roadmapId: 84, libraryId: 96 },
    { id: 775, nextStepId: 776, roadmapId: 84, libraryId: 97 },
    { id: 776, nextStepId: 777, roadmapId: 84, libraryId: 100 },
    { id: 777, nextStepId: 778, roadmapId: 84, libraryId: 101 },
    { id: 778, nextStepId: 779, roadmapId: 84, libraryId: 102 },
    { id: 779, nextStepId: null, roadmapId: 84, libraryId: 105 },
    { id: 780, nextStepId: 781, roadmapId: 85, libraryId: 6 },
    { id: 781, nextStepId: 782, roadmapId: 85, libraryId: 7 },
    { id: 782, nextStepId: 783, roadmapId: 85, libraryId: 10 },
    { id: 783, nextStepId: 784, roadmapId: 85, libraryId: 11 },
    { id: 784, nextStepId: 785, roadmapId: 85, libraryId: 12 },
    { id: 785, nextStepId: 786, roadmapId: 85, libraryId: 13 },
    { id: 786, nextStepId: 787, roadmapId: 85, libraryId: 17 },
    { id: 787, nextStepId: 788, roadmapId: 85, libraryId: 18 },
    { id: 788, nextStepId: 789, roadmapId: 85, libraryId: 23 },
    { id: 789, nextStepId: null, roadmapId: 85, libraryId: 25 },
    { id: 790, nextStepId: 791, roadmapId: 86, libraryId: 29 },
    { id: 791, nextStepId: 792, roadmapId: 86, libraryId: 30 },
    { id: 792, nextStepId: 793, roadmapId: 86, libraryId: 31 },
    { id: 793, nextStepId: 794, roadmapId: 86, libraryId: 34 },
    { id: 794, nextStepId: 795, roadmapId: 86, libraryId: 35 },
    { id: 795, nextStepId: 796, roadmapId: 86, libraryId: 37 },
    { id: 796, nextStepId: 797, roadmapId: 86, libraryId: 38 },
    { id: 797, nextStepId: 798, roadmapId: 86, libraryId: 40 },
    { id: 798, nextStepId: 799, roadmapId: 86, libraryId: 43 },
    { id: 799, nextStepId: null, roadmapId: 86, libraryId: 44 },
    { id: 800, nextStepId: 801, roadmapId: 87, libraryId: 46 },
    { id: 801, nextStepId: 802, roadmapId: 87, libraryId: 49 },
    { id: 802, nextStepId: 803, roadmapId: 87, libraryId: 50 },
    { id: 803, nextStepId: 804, roadmapId: 87, libraryId: 53 },
    { id: 804, nextStepId: 805, roadmapId: 87, libraryId: 54 },
    { id: 805, nextStepId: 806, roadmapId: 87, libraryId: 55 },
    { id: 806, nextStepId: 807, roadmapId: 87, libraryId: 57 },
    { id: 807, nextStepId: 808, roadmapId: 87, libraryId: 59 },
    { id: 808, nextStepId: 809, roadmapId: 87, libraryId: 60 },
    { id: 809, nextStepId: null, roadmapId: 87, libraryId: 63 },
    { id: 810, nextStepId: 811, roadmapId: 88, libraryId: 66 },
    { id: 811, nextStepId: 812, roadmapId: 88, libraryId: 67 },
    { id: 812, nextStepId: 813, roadmapId: 88, libraryId: 73 },
    { id: 813, nextStepId: 814, roadmapId: 88, libraryId: 77 },
    { id: 814, nextStepId: 815, roadmapId: 88, libraryId: 78 },
    { id: 815, nextStepId: 816, roadmapId: 88, libraryId: 80 },
    { id: 816, nextStepId: 817, roadmapId: 88, libraryId: 81 },
    { id: 817, nextStepId: 818, roadmapId: 88, libraryId: 82 },
    { id: 818, nextStepId: 819, roadmapId: 88, libraryId: 83 },
    { id: 819, nextStepId: null, roadmapId: 88, libraryId: 84 },
    { id: 820, nextStepId: 821, roadmapId: 89, libraryId: 89 },
    { id: 821, nextStepId: 822, roadmapId: 89, libraryId: 91 },
    { id: 822, nextStepId: 823, roadmapId: 89, libraryId: 93 },
    { id: 823, nextStepId: 824, roadmapId: 89, libraryId: 94 },
    { id: 824, nextStepId: 825, roadmapId: 89, libraryId: 96 },
    { id: 825, nextStepId: 826, roadmapId: 89, libraryId: 99 },
    { id: 826, nextStepId: 827, roadmapId: 89, libraryId: 100 },
    { id: 827, nextStepId: 828, roadmapId: 89, libraryId: 102 },
    { id: 828, nextStepId: 829, roadmapId: 89, libraryId: 104 },
    { id: 829, nextStepId: null, roadmapId: 89, libraryId: 105 },
    { id: 830, nextStepId: 831, roadmapId: 90, libraryId: 7 },
    { id: 831, nextStepId: 832, roadmapId: 90, libraryId: 9 },
    { id: 832, nextStepId: 833, roadmapId: 90, libraryId: 13 },
    { id: 833, nextStepId: 834, roadmapId: 90, libraryId: 14 },
    { id: 834, nextStepId: 835, roadmapId: 90, libraryId: 16 },
    { id: 835, nextStepId: 836, roadmapId: 90, libraryId: 17 },
    { id: 836, nextStepId: 837, roadmapId: 90, libraryId: 18 },
    { id: 837, nextStepId: 838, roadmapId: 90, libraryId: 19 },
    { id: 838, nextStepId: 839, roadmapId: 90, libraryId: 20 },
    { id: 839, nextStepId: null, roadmapId: 90, libraryId: 23 },
    { id: 840, nextStepId: 841, roadmapId: 91, libraryId: 28 },
    { id: 841, nextStepId: 842, roadmapId: 91, libraryId: 29 },
    { id: 842, nextStepId: 843, roadmapId: 91, libraryId: 31 },
    { id: 843, nextStepId: 844, roadmapId: 91, libraryId: 32 },
    { id: 844, nextStepId: 845, roadmapId: 91, libraryId: 33 },
    { id: 845, nextStepId: 846, roadmapId: 91, libraryId: 38 },
    { id: 846, nextStepId: 847, roadmapId: 91, libraryId: 39 },
    { id: 847, nextStepId: 848, roadmapId: 91, libraryId: 41 },
    { id: 848, nextStepId: 849, roadmapId: 91, libraryId: 43 },
    { id: 849, nextStepId: null, roadmapId: 91, libraryId: 45 },
    { id: 850, nextStepId: 851, roadmapId: 92, libraryId: 46 },
    { id: 851, nextStepId: 852, roadmapId: 92, libraryId: 50 },
    { id: 852, nextStepId: 853, roadmapId: 92, libraryId: 51 },
    { id: 853, nextStepId: 854, roadmapId: 92, libraryId: 53 },
    { id: 854, nextStepId: 855, roadmapId: 92, libraryId: 56 },
    { id: 855, nextStepId: 856, roadmapId: 92, libraryId: 57 },
    { id: 856, nextStepId: 857, roadmapId: 92, libraryId: 59 },
    { id: 857, nextStepId: 858, roadmapId: 92, libraryId: 60 },
    { id: 858, nextStepId: 859, roadmapId: 92, libraryId: 61 },
    { id: 859, nextStepId: null, roadmapId: 92, libraryId: 62 },
    { id: 860, nextStepId: 861, roadmapId: 93, libraryId: 66 },
    { id: 861, nextStepId: 862, roadmapId: 93, libraryId: 71 },
    { id: 862, nextStepId: 863, roadmapId: 93, libraryId: 72 },
    { id: 863, nextStepId: 864, roadmapId: 93, libraryId: 74 },
    { id: 864, nextStepId: 865, roadmapId: 93, libraryId: 77 },
    { id: 865, nextStepId: 866, roadmapId: 93, libraryId: 78 },
    { id: 866, nextStepId: 867, roadmapId: 93, libraryId: 79 },
    { id: 867, nextStepId: 868, roadmapId: 93, libraryId: 80 },
    { id: 868, nextStepId: 869, roadmapId: 93, libraryId: 81 },
    { id: 869, nextStepId: null, roadmapId: 93, libraryId: 84 },
    { id: 870, nextStepId: 871, roadmapId: 94, libraryId: 88 },
    { id: 871, nextStepId: 872, roadmapId: 94, libraryId: 89 },
    { id: 872, nextStepId: 873, roadmapId: 94, libraryId: 93 },
    { id: 873, nextStepId: 874, roadmapId: 94, libraryId: 96 },
    { id: 874, nextStepId: 875, roadmapId: 94, libraryId: 97 },
    { id: 875, nextStepId: 876, roadmapId: 94, libraryId: 98 },
    { id: 876, nextStepId: 877, roadmapId: 94, libraryId: 100 },
    { id: 877, nextStepId: 878, roadmapId: 94, libraryId: 103 },
    { id: 878, nextStepId: 879, roadmapId: 94, libraryId: 104 },
    { id: 879, nextStepId: null, roadmapId: 94, libraryId: 105 },
    { id: 880, nextStepId: 881, roadmapId: 95, libraryId: 8 },
    { id: 881, nextStepId: 882, roadmapId: 95, libraryId: 9 },
    { id: 882, nextStepId: 883, roadmapId: 95, libraryId: 10 },
    { id: 883, nextStepId: 884, roadmapId: 95, libraryId: 15 },
    { id: 884, nextStepId: 885, roadmapId: 95, libraryId: 16 },
    { id: 885, nextStepId: 886, roadmapId: 95, libraryId: 17 },
    { id: 886, nextStepId: 887, roadmapId: 95, libraryId: 18 },
    { id: 887, nextStepId: 888, roadmapId: 95, libraryId: 21 },
    { id: 888, nextStepId: 889, roadmapId: 95, libraryId: 22 },
    { id: 889, nextStepId: null, roadmapId: 95, libraryId: 24 },
    { id: 890, nextStepId: 891, roadmapId: 96, libraryId: 27 },
    { id: 891, nextStepId: 892, roadmapId: 96, libraryId: 31 },
    { id: 892, nextStepId: 893, roadmapId: 96, libraryId: 32 },
    { id: 893, nextStepId: 894, roadmapId: 96, libraryId: 37 },
    { id: 894, nextStepId: 895, roadmapId: 96, libraryId: 38 },
    { id: 895, nextStepId: 896, roadmapId: 96, libraryId: 39 },
    { id: 896, nextStepId: 897, roadmapId: 96, libraryId: 40 },
    { id: 897, nextStepId: 898, roadmapId: 96, libraryId: 41 },
    { id: 898, nextStepId: 899, roadmapId: 96, libraryId: 42 },
    { id: 899, nextStepId: null, roadmapId: 96, libraryId: 45 },
    { id: 900, nextStepId: 901, roadmapId: 97, libraryId: 46 },
    { id: 901, nextStepId: 902, roadmapId: 97, libraryId: 48 },
    { id: 902, nextStepId: 903, roadmapId: 97, libraryId: 49 },
    { id: 903, nextStepId: 904, roadmapId: 97, libraryId: 51 },
    { id: 904, nextStepId: 905, roadmapId: 97, libraryId: 52 },
    { id: 905, nextStepId: 906, roadmapId: 97, libraryId: 58 },
    { id: 906, nextStepId: 907, roadmapId: 97, libraryId: 60 },
    { id: 907, nextStepId: 908, roadmapId: 97, libraryId: 61 },
    { id: 908, nextStepId: 909, roadmapId: 97, libraryId: 63 },
    { id: 909, nextStepId: null, roadmapId: 97, libraryId: 65 },
    { id: 910, nextStepId: 911, roadmapId: 98, libraryId: 67 },
    { id: 911, nextStepId: 912, roadmapId: 98, libraryId: 68 },
    { id: 912, nextStepId: 913, roadmapId: 98, libraryId: 69 },
    { id: 913, nextStepId: 914, roadmapId: 98, libraryId: 73 },
    { id: 914, nextStepId: 915, roadmapId: 98, libraryId: 74 },
    { id: 915, nextStepId: 916, roadmapId: 98, libraryId: 75 },
    { id: 916, nextStepId: 917, roadmapId: 98, libraryId: 76 },
    { id: 917, nextStepId: 918, roadmapId: 98, libraryId: 80 },
    { id: 918, nextStepId: 919, roadmapId: 98, libraryId: 83 },
    { id: 919, nextStepId: null, roadmapId: 98, libraryId: 84 },
    { id: 920, nextStepId: 921, roadmapId: 99, libraryId: 88 },
    { id: 921, nextStepId: 922, roadmapId: 99, libraryId: 92 },
    { id: 922, nextStepId: 923, roadmapId: 99, libraryId: 93 },
    { id: 923, nextStepId: 924, roadmapId: 99, libraryId: 95 },
    { id: 924, nextStepId: 925, roadmapId: 99, libraryId: 96 },
    { id: 925, nextStepId: 926, roadmapId: 99, libraryId: 98 },
    { id: 926, nextStepId: 927, roadmapId: 99, libraryId: 99 },
    { id: 927, nextStepId: 928, roadmapId: 99, libraryId: 101 },
    { id: 928, nextStepId: 929, roadmapId: 99, libraryId: 103 },
    { id: 929, nextStepId: null, roadmapId: 99, libraryId: 104 },
    { id: 930, nextStepId: 931, roadmapId: 100, libraryId: 6 },
    { id: 931, nextStepId: 932, roadmapId: 100, libraryId: 7 },
    { id: 932, nextStepId: 933, roadmapId: 100, libraryId: 9 },
    { id: 933, nextStepId: 934, roadmapId: 100, libraryId: 10 },
    { id: 934, nextStepId: 935, roadmapId: 100, libraryId: 11 },
    { id: 935, nextStepId: 936, roadmapId: 100, libraryId: 13 },
    { id: 936, nextStepId: 937, roadmapId: 100, libraryId: 16 },
    { id: 937, nextStepId: 938, roadmapId: 100, libraryId: 18 },
    { id: 938, nextStepId: 939, roadmapId: 100, libraryId: 19 },
    { id: 939, nextStepId: null, roadmapId: 100, libraryId: 22 },
    { id: 940, nextStepId: 941, roadmapId: 101, libraryId: 27 },
    { id: 941, nextStepId: 942, roadmapId: 101, libraryId: 28 },
    { id: 942, nextStepId: 943, roadmapId: 101, libraryId: 29 },
    { id: 943, nextStepId: 944, roadmapId: 101, libraryId: 34 },
    { id: 944, nextStepId: 945, roadmapId: 101, libraryId: 35 },
    { id: 945, nextStepId: 946, roadmapId: 101, libraryId: 37 },
    { id: 946, nextStepId: 947, roadmapId: 101, libraryId: 38 },
    { id: 947, nextStepId: 948, roadmapId: 101, libraryId: 39 },
    { id: 948, nextStepId: 949, roadmapId: 101, libraryId: 42 },
    { id: 949, nextStepId: null, roadmapId: 101, libraryId: 43 },
    { id: 950, nextStepId: 951, roadmapId: 102, libraryId: 46 },
    { id: 951, nextStepId: 952, roadmapId: 102, libraryId: 47 },
    { id: 952, nextStepId: 953, roadmapId: 102, libraryId: 48 },
    { id: 953, nextStepId: 954, roadmapId: 102, libraryId: 51 },
    { id: 954, nextStepId: 955, roadmapId: 102, libraryId: 54 },
    { id: 955, nextStepId: 956, roadmapId: 102, libraryId: 55 },
    { id: 956, nextStepId: 957, roadmapId: 102, libraryId: 56 },
    { id: 957, nextStepId: 958, roadmapId: 102, libraryId: 59 },
    { id: 958, nextStepId: 959, roadmapId: 102, libraryId: 61 },
    { id: 959, nextStepId: null, roadmapId: 102, libraryId: 65 },
    { id: 960, nextStepId: 961, roadmapId: 103, libraryId: 67 },
    { id: 961, nextStepId: 962, roadmapId: 103, libraryId: 72 },
    { id: 962, nextStepId: 963, roadmapId: 103, libraryId: 73 },
    { id: 963, nextStepId: 964, roadmapId: 103, libraryId: 76 },
    { id: 964, nextStepId: 965, roadmapId: 103, libraryId: 78 },
    { id: 965, nextStepId: 966, roadmapId: 103, libraryId: 79 },
    { id: 966, nextStepId: 967, roadmapId: 103, libraryId: 80 },
    { id: 967, nextStepId: 968, roadmapId: 103, libraryId: 82 },
    { id: 968, nextStepId: 969, roadmapId: 103, libraryId: 83 },
    { id: 969, nextStepId: null, roadmapId: 103, libraryId: 85 },
    { id: 970, nextStepId: 971, roadmapId: 104, libraryId: 86 },
    { id: 971, nextStepId: 972, roadmapId: 104, libraryId: 88 },
    { id: 972, nextStepId: 973, roadmapId: 104, libraryId: 93 },
    { id: 973, nextStepId: 974, roadmapId: 104, libraryId: 94 },
    { id: 974, nextStepId: 975, roadmapId: 104, libraryId: 95 },
    { id: 975, nextStepId: 976, roadmapId: 104, libraryId: 97 },
    { id: 976, nextStepId: 977, roadmapId: 104, libraryId: 100 },
    { id: 977, nextStepId: 978, roadmapId: 104, libraryId: 101 },
    { id: 978, nextStepId: 979, roadmapId: 104, libraryId: 103 },
    { id: 979, nextStepId: null, roadmapId: 104, libraryId: 104 },
    { id: 980, nextStepId: 981, roadmapId: 105, libraryId: 7 },
    { id: 981, nextStepId: 982, roadmapId: 105, libraryId: 8 },
    { id: 982, nextStepId: 983, roadmapId: 105, libraryId: 9 },
    { id: 983, nextStepId: 984, roadmapId: 105, libraryId: 11 },
    { id: 984, nextStepId: 985, roadmapId: 105, libraryId: 12 },
    { id: 985, nextStepId: 986, roadmapId: 105, libraryId: 14 },
    { id: 986, nextStepId: 987, roadmapId: 105, libraryId: 18 },
    { id: 987, nextStepId: 988, roadmapId: 105, libraryId: 19 },
    { id: 988, nextStepId: 989, roadmapId: 105, libraryId: 21 },
    { id: 989, nextStepId: null, roadmapId: 105, libraryId: 22 },
    { id: 990, nextStepId: 991, roadmapId: 106, libraryId: 27 },
    { id: 991, nextStepId: 992, roadmapId: 106, libraryId: 32 },
    { id: 992, nextStepId: 993, roadmapId: 106, libraryId: 34 },
    { id: 993, nextStepId: 994, roadmapId: 106, libraryId: 35 },
    { id: 994, nextStepId: 995, roadmapId: 106, libraryId: 36 },
    { id: 995, nextStepId: 996, roadmapId: 106, libraryId: 38 },
    { id: 996, nextStepId: 997, roadmapId: 106, libraryId: 39 },
    { id: 997, nextStepId: 998, roadmapId: 106, libraryId: 40 },
    { id: 998, nextStepId: 999, roadmapId: 106, libraryId: 41 },
    { id: 999, nextStepId: null, roadmapId: 106, libraryId: 43 },
    { id: 1000, nextStepId: 1001, roadmapId: 107, libraryId: 49 },
    { id: 1001, nextStepId: 1002, roadmapId: 107, libraryId: 51 },
    { id: 1002, nextStepId: 1003, roadmapId: 107, libraryId: 52 },
    { id: 1003, nextStepId: 1004, roadmapId: 107, libraryId: 53 },
    { id: 1004, nextStepId: 1005, roadmapId: 107, libraryId: 54 },
    { id: 1005, nextStepId: 1006, roadmapId: 107, libraryId: 55 },
    { id: 1006, nextStepId: 1007, roadmapId: 107, libraryId: 58 },
    { id: 1007, nextStepId: 1008, roadmapId: 107, libraryId: 59 },
    { id: 1008, nextStepId: 1009, roadmapId: 107, libraryId: 63 },
    { id: 1009, nextStepId: null, roadmapId: 107, libraryId: 64 }
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
