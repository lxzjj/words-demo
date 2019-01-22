import wepy from 'wepy'

const words = [
  {
    value: 'know',
    translation: '知道',
    english: {
      pronunciation: '[nəʊ]',
      audioInManVoice: '/static/know.mp3',
      audioInWomanVoice: '/static/know.mp3'
    },
    american: {
      pronunciation: '[noʊ]',
      audioInManVoice: '/static/know.mp3',
      audioInWomanVoice: '/static/know.mp3'
    },
    statements: [
      {
        value: 'You know her?',
        translation: '你认识她？',
        english: {
          audioInManVoice: '/static/know_statement1.mp3',
          audioInWomanVoice: '/static/know_statement1.mp3'
        },
        american: {
          audioInManVoice: '/static/know_statement1.mp3',
          audioInWomanVoice: '/static/know_statement1.mp3'
        }
      },
      {
        value: 'I know whether you like me or not.',
        translation: '我知道你是不是喜欢我。',
        english: {
          audioInManVoice: '/static/know_statement2.mp3',
          audioInWomanVoice: '/static/know_statement2.mp3'
        },
        american: {
          audioInManVoice: '/static/know_statement2.mp3',
          audioInWomanVoice: '/static/know_statement2.mp3'
        }
      },
      {
        value: 'I know that.',
        translation: '我知道。',
        english: {
          audioInManVoice: '/static/know_statement3.mp3',
          audioInWomanVoice: '/static/know_statement3.mp3'
        },
        american: {
          audioInManVoice: '/static/know_statement3.mp3',
          audioInWomanVoice: '/static/know_statement3.mp3'
        }
      }
    ]
  },
  {
    value: 'hello',
    translation: '你好',
    english: {
      pronunciation: '[həˈləʊ]',
      audioInManVoice: '/static/hello.mp3',
      audioInWomanVoice: '/static/hello.mp3'
    },
    american: {
      pronunciation: '[həˈloʊ]',
      audioInManVoice: '/static/hello.mp3',
      audioInWomanVoice: '/static/hello.mp3'
    },
    statements: [
      {
        value: 'Hello, beautiful.',
        translation: '你好，美人儿。',
        english: {
          audioInManVoice: '/static/hello_statement1.mp3',
          audioInWomanVoice: '/static/hello_statement1.mp3'
        },
        american: {
          audioInManVoice: '/static/hello_statement1.mp3',
          audioInWomanVoice: '/static/hello_statement1.mp3'
        }
      },
      {
        value: 'Hello, it\'s me.',
        translation: '喂，是我呀。',
        english: {
          audioInManVoice: '/static/hello_statement2.mp3',
          audioInWomanVoice: '/static/hello_statement2.mp3'
        },
        american: {
          audioInManVoice: '/static/hello_statement2.mp3',
          audioInWomanVoice: '/static/hello_statement2.mp3'
        }
      },
      {
        value: 'He said hello to me with a smile.',
        translation: '他面带微笑地和我打了个招呼。',
        english: {
          audioInManVoice: '/static/hello_statement3.mp3',
          audioInWomanVoice: '/static/hello_statement3.mp3'
        },
        american: {
          audioInManVoice: '/static/hello_statement3.mp3',
          audioInWomanVoice: '/static/hello_statement3.mp3'
        }
      }
    ]
  },
  {
    value: 'world',
    translation: '世界',
    english: {
      pronunciation: '[wɜ:ld]',
      audioInManVoice: '/static/world.mp3',
      audioInWomanVoice: '/static/world.mp3'
    },
    american: {
      pronunciation: '[wɜrld]',
      audioInManVoice: '/static/world.mp3',
      audioInWomanVoice: '/static/world.mp3'
    },
    statements: [
      {
        value: 'Mother love is the greatest in the world.',
        translation: '母爱是世上最伟大的爱。',
        english: {
          audioInManVoice: '/static/world_statement1.mp3',
          audioInWomanVoice: '/static/world_statement1.mp3'
        },
        american: {
          audioInManVoice: '/static/world_statement1.mp3',
          audioInWomanVoice: '/static/world_statement1.mp3'
        }
      },
      {
        value: 'He is the richest man in the world.',
        translation: '他是世界上最富有的人。',
        english: {
          audioInManVoice: '/static/world_statement2.mp3',
          audioInWomanVoice: '/static/world_statement2.mp3'
        },
        american: {
          audioInManVoice: '/static/world_statement2.mp3',
          audioInWomanVoice: '/static/world_statement2.mp3'
        }
      },
      {
        value: 'You can look up any one or anything in the world on a search engine.',
        translation: '你可以在一个搜索引擎上查找任何人或任何事。',
        english: {
          audioInManVoice: '/static/world_statement3.mp3',
          audioInWomanVoice: '/static/world_statement3.mp3'
        },
        american: {
          audioInManVoice: '/static/world_statement3.mp3',
          audioInWomanVoice: '/static/world_statement3.mp3'
        }
      }
    ]
  }
]

export const getWord = (index = 0) => new Promise((resolve) => {
  wepy.showLoading({ title: '加载中', mask: true })
  setTimeout(() => {
    const word = words[index]
    if (word) {
      word.index = index
      resolve(word)
    } else {
      resolve(null)
    }
    wepy.hideLoading()
  }, 1000)
})
