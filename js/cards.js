/* ============================================
   Tarot deck data — 22 Major Arcana
   Each card has: id, num, name, nameEn, glyph, image, element,
   keywords, lede, past, present, future, body.
   image is a Rider-Waite-Smith public domain image (Wikipedia).
   past / present / future are ~3 sentences each — substantive,
   reflective paragraphs that build a full narrative arc.
   ============================================ */

const IMG = 'https://upload.wikimedia.org/wikipedia/commons/';

const MAJOR_ARCANA = [
  {
    id: 'fool', num: 0, name: '愚者', nameEn: 'The Fool',
    glyph: '✺', image: IMG + 'd/dc/RWS_Tarot_00_Fool.jpg', element: '风',
    upright: '自由、纯真、新开始',
    reversed: '鲁莽、犹豫不决',
    lede: '一段新旅程的序章，灵魂在悬崖边轻快地迈出第一步。',
    past: '那时你选择了跟随直觉，不带任何预设地踏入未知。那份纯真为你后来种下了不被旧有模式束缚的种子——它让你学会相信第一反应，也让生命为你悄悄准备了许多意料之外的礼物。回头看，那段看似无章可循的日子，其实是为今天留下的呼吸空间。',
    present: '现在正是放下包袱的时刻。无论你曾怎样被经验打磨，牌灵提醒你：真正的开始从承认"我不知道"开始。放下急于规划的安全感，让空白成为邀请——你不必先看清整条路才迈出第一步。',
    future: '前方有一条尚未命名的道路正在等你。信任你的脚步，路上遇到的人与事都会是老师。轻装上路，反而走得最远；当你不再执着于结果，过程会带你抵达一个比自己设计更准确的答案。'
  },
  {
    id: 'magician', num: 1, name: '魔术师', nameEn: 'The Magician',
    glyph: '☉', image: IMG + 'd/de/RWS_Tarot_01_Magician.jpg', element: '风',
    upright: '创造、专注、显化',
    reversed: '操纵、才能未发挥',
    lede: '万物皆为你备齐，只等你伸手将它们编排成你想要的样子。',
    past: '你曾有意识地调动手边的资源——人脉、工具、时间、灵感——完成了某件当时看来不可能的事。那次成功奠定了你今天的底气：它证明了你不是"想得到却做不到"的人，而是能把想法落地的创造者。',
    present: '你手中握着的工具比你以为的更多。现在需要的不是"再加一项能力"，而是"把分散的注意力收束到一处"。聚焦会创造奇迹——当你把散乱的光通过透镜聚到一点，连石头都能燃烧。',
    future: '显化的时刻正在临近。把意图写下来、对一个值得信任的人说出口——你说出的话，会成为它发生的契约。行动会与时机相遇，而你只需要在这一刻先迈出具体的一步。'
  },
  {
    id: 'highpriestess', num: 2, name: '女祭司', nameEn: 'The High Priestess',
    glyph: '☽', image: IMG + '8/88/RWS_Tarot_02_High_Priestess.jpg', element: '水',
    upright: '直觉、潜知、静默',
    reversed: '忽视内在声音、表面化',
    lede: '答案不在外面，在你已经知道的某个安静的角落里。',
    past: '彼时你曾压抑过一些直觉。回头看，那些"说不清的预感"其实是精准的——你只是当时没允许自己相信它们。社会的杂音让你以为，证据不足的判断不值得被采信，于是你开始向外寻找标准答案。',
    present: '现在最该做的不是去问别人，而是把噪音关掉。睡前那二十分钟的安静，比任何咨询都更靠近答案。你的内在早就知道——只是被太多的"应该"盖住了。',
    future: '一个未被言明的真相会浮出水面。届时你会感激自己此刻选择了等待，而不是匆忙下判断。沉默会生出洞察，而急于说出口的"知道"，常常只是猜测的伪装。'
  },
  {
    id: 'empress', num: 3, name: '皇后', nameEn: 'The Empress',
    glyph: '♀', image: IMG + '5/53/RWS_Tarot_03_Empress.jpg', element: '土',
    upright: '丰盛、创造、滋养',
    reversed: '依赖、空洞、过度付出',
    lede: '过度的浪漫让一颗心变得丰盈——你给予他人的，也终将回到你身上。',
    past: '你曾在一段关系或创作中投入了过度的温柔与时间。那份倾注不是浪费，它让你懂得什么是"真心想要"，也让你学会了在给予的时候不掏空自己。回头看，那段"用力爱过"的日子，是后来你学会自我呵护的起点。',
    present: '现状提醒你留意被忽视的需求——无论是身体还是情感。允许自己被照顾，不是一种软弱。丰盛是双向的；你给得出去的，必须先流入你自己。',
    future: '一段孕育的成果即将显现，可能是关系、事业、也可能是某个灵感的成熟。耐心，再耐心一点。种子最需要的是不被催促——你现在做的很多事，会在某个你意料不到的时间开花。'
  },
  {
    id: 'emperor', num: 4, name: '皇帝', nameEn: 'The Emperor',
    glyph: '♂', image: IMG + 'c/c3/RWS_Tarot_04_Emperor.jpg', element: '火',
    upright: '结构、权威、稳重',
    reversed: '僵化、控制、专制',
    lede: '秩序是自由的骨架，没有边界，善意也会散成碎片。',
    past: '你曾在某段时间里以高度自律换来了稳定。代价是有些柔软被搁置了——那是值得被看见的部分。那段"为别人撑起一片天"的日子，让你成为今天能扛事的人，但也在你肩头留下了几道自己没注意的细纹。',
    present: '是时候为自己划下清晰的边界了。不是为了推开谁，是为了让你在意的事有空间被好好照料。稳定从来不是来自更用力，而是来自更精准。',
    future: '你会因为一段稳定的承诺而安心。这份稳定不来自浪漫的想象，而来自具体而微的日常协作——按时吃饭、按时沟通、按时把爱说出来。它会很朴素，但会撑起一段很长很长的路。'
  },
  {
    id: 'hierophant', num: 5, name: '教皇', nameEn: 'The Hierophant',
    glyph: '⚜', image: IMG + '8/8d/RWS_Tarot_05_Hierophant.jpg', element: '土',
    upright: '传统、指引、归属',
    reversed: '教条、空洞、叛逆',
    lede: '有些智慧是借来的，要变成你自己的，需要走过一段孤独的路。',
    past: '你曾身处某种"被教导"的体系之中——家庭、学校、机构，或一段很深的师承。它的好与不好，都塑造了你今天看待权威的方式。那里有值得你感谢的，也有你如今正在努力放下的。',
    present: '是时候分辨"被尊重的规则"和"被灌输的恐惧"了。哪些是你认可的，哪些只是你还没勇气放下的？把它们一一列出来，你会发现需要保留的比想象的多，需要丢掉的也比想象的多。',
    future: '你可能成为一个"领路人"——不是传声筒，而是用自己的经验去照亮别人脚下那一小段路的人。你今天的迷茫，会在明天成为你对他人的温柔。'
  },
  {
    id: 'lovers', num: 6, name: '恋人', nameEn: 'The Lovers',
    glyph: '⚥', image: IMG + 'd/d4/RWS_Tarot_06_Lovers.jpg', element: '风',
    upright: '结合、选择、价值对齐',
    reversed: '失衡、错位、回避',
    lede: '真正的结合不是被选择，而是主动承认"这就是我想要的"。',
    past: '你在某段关系里曾经历过"对齐"或"错位"的考验。那次经验让你更清楚自己愿意为哪种契合而留步，也让你在今天的任何选择面前，都少了几分不切实际的浪漫。',
    present: '眼前的选择本质是"我要不要对自己诚实"。是接受一个看上去不错的安排，还是再等一等真正契合的？请记住：不是所有"应该"的事都值得你投入感情。',
    future: '一段重要的相遇或确认正在靠近。它可能是一个新的人，也可能是和旧人之间的新阶段。无论哪种，它会以一种"原来是你"的明确感出现，而不是暧昧的试探。'
  },
  {
    id: 'chariot', num: 7, name: '战车', nameEn: 'The Chariot',
    glyph: '✦', image: IMG + '9/9b/RWS_Tarot_07_Chariot.jpg', element: '水',
    upright: '意志、突破、前进',
    reversed: '失去方向、内耗',
    lede: '方向比速度重要，一旦路对了，慢也是在抵达。',
    past: '你曾以强大的意志力冲过了一段艰难的时期。那次"硬扛"为你赢得了今天的主动权，但你也比谁都清楚，那不是一种可以无限复制的状态。它是特殊的爆发，不是日常。',
    present: '现在的你并不缺能力，缺的是"把力气用在一处"的决心。试试看，把次要的事先放一放——你不需要把每扇门都打开，只需要在看清的一扇上用力。',
    future: '一个需要你亲自推进的项目或决定会出现。坐进自己的战车，握好缰绳——你不是被拖着走的那一个。风会相助，但方向要由你来定。'
  },
  {
    id: 'strength', num: 8, name: '力量', nameEn: 'Strength',
    glyph: '∞', image: IMG + '4/4d/RWS_Tarot_08_Strength.jpg', element: '火',
    upright: '柔韧、勇气、内在力量',
    reversed: '压抑、自我怀疑',
    lede: '真正的强大不是不害怕，而是带着颤抖依然温柔。',
    past: '你曾在某次脆弱里发现，自己比自己以为的更稳。这份"被验证过的勇敢"是你最可靠的资产——它不是来自训练，而是来自你当时没有逃。',
    present: '你不必再"硬撑"了。现在更适合的方式是以柔克刚——少说多听，少争多稳。柔软不是软弱，它是一份不轻易被激怒的底气。',
    future: '你会以安静的方式赢得某个重要的人的信任。你的从容本身就是一种说服力，而你说出的那句轻话，会比任何大声的宣告更被记得。'
  },
  {
    id: 'hermit', num: 9, name: '隐者', nameEn: 'The Hermit',
    glyph: '⚲', image: IMG + '4/4a/RWS_Tarot_09_Hermit.jpg', element: '土',
    upright: '内省、独行、求道',
    reversed: '孤立、逃避、迷失',
    lede: '灯举得高的人，常常走得慢，也常常最先被看见。',
    past: '你曾选择过一段独处的时光。那段时间看起来"什么都没做"，但其实你完成了最关键的重整——把散落的心收回自己手里，承认哪些是真正属于你的，哪些只是你替别人背着。',
    present: '现在不适合做太多社交与决策。先回到自己的节奏里——读一本书、走一段路、问自己一个真正的问题。慢下来并不是停下来，它是你在为下一步留出空间。',
    future: '你会从一段相对孤立的探索中带出一份礼物。它会以智慧、创作或新的方向呈现——而且会带着一种只有独行过的你才能说出的话的重量。'
  },
  {
    id: 'wheel', num: 10, name: '命运之轮', nameEn: 'Wheel of Fortune',
    glyph: '☸', image: IMG + '3/3a/RWS_Tarot_10_Wheel_of_Fortune.jpg', element: '火',
    upright: '转折、循环、机缘',
    reversed: '抗拒变化、低谷',
    lede: '轮子在转，无论你此刻攀住的是哪一根辐条。',
    past: '那段"被命运推着走"的时期其实教会了你一件事：你不必控制一切，也可以安然抵达。当时你觉得是失序，今天回头看，是一种"被托住"——只是你当时没认出来。',
    present: '一个看似偶然的机缘正在显现——一通电话、一条消息、一次偶遇。留意那些"刚好出现"的信号，它们不是巧合，是轮子转到的位置。',
    future: '局势会发生一次明显的转折。它可能不是你所计划的，但会让你更接近真正属于你的位置。届时你会发现，那份"突如其来"其实你已经等了很久。'
  },
  {
    id: 'justice', num: 11, name: '正义', nameEn: 'Justice',
    glyph: '⚖', image: IMG + 'e/e0/RWS_Tarot_11_Justice.jpg', element: '风',
    upright: '真相、平衡、因果',
    reversed: '不公、回避、偏颇',
    lede: '你说过的每一句话、做过每一次选择，都会被时间认真地回算。',
    past: '你曾因为一次"讲真话"付出了代价。但那次的诚实为你赢得了长远的信用——别人愿意相信你，因为你有不绕弯子的名声。这份信用，比那次失去的要多得多。',
    present: '有一个需要你直面、而非回避的事。把它摊开来看，你会发现它的重量远没有你想象中的大。回避的代价从来不是事件本身，而是它在心里慢慢长成的形状。',
    future: '一份迟到但准确的回报会到来。它不是"运气"，是你过去所有审慎选择的总账。当你回首时会发现，每一步都算数。'
  },
  {
    id: 'hanged', num: 12, name: '倒吊人', nameEn: 'The Hanged Man',
    glyph: '✧', image: IMG + '2/2b/RWS_Tarot_12_Hanged_Man.jpg', element: '水',
    upright: '暂停、换视角、献祭',
    reversed: '无谓牺牲、僵持',
    lede: '换个角度看，世界是另一幅样子——而那幅样子，常常更接近真实。',
    past: '你曾有过一段"什么都做不了"的时期。回头看，那是命运在提醒你：不是你被困住了，是你在用旧视角看新处境。当时你觉得是停滞，今天你知道那是酝酿。',
    present: '现在不是发力的时刻。让悬而未决的事再悬一会儿。当答案从反方向来时，你会突然明白——你以为的"卡住"，其实只是你还没站到对的位置上看。',
    future: '一次视角的转换会像礼物一样到来。可能是旅行、谈话，也可能是某本偶然翻到的书。它不会用力推你，只会轻轻让你换一个角度，而那一换就够了。'
  },
  {
    id: 'death', num: 13, name: '死神', nameEn: 'Death',
    glyph: '☽', image: IMG + '2/2f/RWS_Tarot_13_Death.jpg', element: '水',
    upright: '结束、转化、重生',
    reversed: '抗拒、停滞、拖延',
    lede: '结束从来不是句号，它是冒号——后面会跟一个全新的开始。',
    past: '你曾告别过某个人、某段关系、或某种生活方式。那次告别当时很痛，但今天你能看见它为你腾出了什么——一段你原本看不见的路径，一段你原本进不去的关系。',
    present: '有什么已经在结束的过程里。允许它走完，不要试图拽回来。结束是转化的必经之门；你越早松手，新的形状就越早显形。',
    future: '一个全新的身份或阶段正在成形。你会惊讶地发现，自己比想象中更轻盈地走进了它。失去不是减法，是一种更深层的重新分配。'
  },
  {
    id: 'temperance', num: 14, name: '节制', nameEn: 'Temperance',
    glyph: '☼', image: IMG + '0/0b/RWS_Tarot_14_Temperance.jpg', element: '风',
    upright: '平衡、调和、耐心',
    reversed: '失衡、过度、操劳',
    lede: '把生活调成一杯适口的温度——不太烫，也不太凉。',
    past: '你曾在忙碌与休息之间艰难地找过平衡。那次练习让你今天比多数人更懂得"持续"是什么——它不是一鼓作气，而是把力气分成若干小份，让自己能从这一份走到下一份。',
    present: '此刻最重要的是"调和"——把工作放一放、把情绪放一放，让自己回到中间那一格。你不必同时处理所有事；有些事需要等，有些事需要你慢下来。',
    future: '一段节奏更可持续的生活会到来。它不会有戏剧性的反转，但会让你不知不觉更接近你想成为的人。温和是更高级的力量。'
  },
  {
    id: 'devil', num: 15, name: '恶魔', nameEn: 'The Devil',
    glyph: '♆', image: IMG + '0/0a/RWS_Tarot_15_Devil.jpg', element: '土',
    upright: '束缚、欲望、执着',
    reversed: '觉醒、解脱、破执',
    lede: '牢笼的锁从来都在内侧，只是钥匙也一直在你口袋里。',
    past: '你曾深陷某段关系或习惯，当时以为是爱，其实是怕。回头看，那段时间是必要的——它让你看清自己怕的是什么，依赖的又是什么。你不会怪当时的自己。',
    present: '有些事你明知道该放下，却还攥在手里。先承认"我舍不得"，承认本身就是松开的第一步。伪装已经看开了，只会让绳索勒得更紧。',
    future: '你会经历一次安静的觉醒。不是来自别人的劝告，而是你终于不想再被那根绳子绑着了。那个瞬间不会很戏剧，但你从此会知道，自由是一种需要被日常练习的状态。'
  },
  {
    id: 'tower', num: 16, name: '高塔', nameEn: 'The Tower',
    glyph: '⚡', image: IMG + '5/53/RWS_Tarot_16_Tower.jpg', element: '火',
    upright: '突变、崩塌、真相',
    reversed: '缓慢瓦解、逃避崩毁',
    lede: '塔倒了不是结局，是地基终于被看见的契机。',
    past: '你曾经历过一次剧烈的断裂。当时看起来是灾难，但那次崩塌让你重新站到了更稳固的地面上——只是那时的你来不及看见。',
    present: '请不要过度用力去"维护"一个本就在动摇的结构。让该倒的倒，你才有空间建真正属于你的。维护一个不真实的秩序，比让它倒下来更耗你。',
    future: '一次猝不及防的事件会带来短期的震荡，但中长期它会被证明是一份礼物——你早就该离开了。塔倒下来的时候，瓦砾里会有你想找的钥匙。'
  },
  {
    id: 'star', num: 17, name: '星星', nameEn: 'The Star',
    glyph: '☆', image: IMG + 'd/db/RWS_Tarot_17_Star.jpg', element: '风',
    upright: '希望、疗愈、灵感',
    reversed: '失望、疲惫、怀疑',
    lede: '在你放下一切之后，剩下的那个轻轻的声音，就是它。',
    past: '在最暗的那段时间里，有一个很小的希望曾陪着你。今天的你能走出来，是因为你当时没把那个希望弄丢——它可能只是一句歌词、一盏路灯、一通来自远方的电话。',
    present: '请对自己温柔。疗愈不是努力，是允许——允许自己慢下来、允许自己不优秀、允许自己被看见。柔软是修复的一部分，不是修复的反面。',
    future: '一束安静的指引会到来。它可能不是轰轰烈烈的好消息，而是一个温柔到几乎不像是答案的"刚刚好"。届时你会知道，它之所以来得轻，是因为你已经把重量放下了。'
  },
  {
    id: 'moon', num: 18, name: '月亮', nameEn: 'The Moon',
    glyph: '☾', image: IMG + '0/00/RWS_Tarot_18_Moon.jpg', element: '水',
    upright: '潜意识、迷雾、感应',
    reversed: '释放恐惧、走出迷雾',
    lede: '夜色越深，越要相信你夜视的能力。',
    past: '你曾在不确定中走过一段很长的路。那段路之所以没有让你迷路，是因为你学会了用感受代替证据——这种能力不是天生的，是你被逼出来的，今天它是你最稳的内核。',
    present: '现在信息是模糊的，这是常态，不是你的失败。把注意力从"看清一切"转向"听清自己"，会更有用。看不清不是走不下去的证据。',
    future: '一层遮蔽会被揭开。你会看清一些原本以为看不清的事——而真相比恐惧要温柔得多。当你穿过迷雾，最先遇见的是自己的脸。'
  },
  {
    id: 'sun', num: 19, name: '太阳', nameEn: 'The Sun',
    glyph: '✸', image: IMG + '1/17/RWS_Tarot_19_Sun.jpg', element: '火',
    upright: '喜悦、清晰、成功',
    reversed: '延迟、暂时阴天',
    lede: '一切都好，不是"应该"，是"真的"。',
    past: '你曾有过一段被光照亮的时期。它是真的，那时的你也是真的——别因为现在的云而怀疑那束光。记忆是允许被带回的温度。',
    present: '你比你以为的更接近答案。给自己一个不带条件的肯定：你做得够好了。请把这份肯定当真的——它不是安慰，是事实。',
    future: '一件值得庆祝的事会到来。它可能不大，但它是明亮的、确定的、属于你的。当它来临时，请别习惯性地压低期待，你值得完整的欢欣。'
  },
  {
    id: 'judgement', num: 20, name: '审判', nameEn: 'Judgement',
    glyph: '◈', image: IMG + 'd/dd/RWS_Tarot_20_Judgement.jpg', element: '火',
    upright: '觉醒、召唤、宽恕',
    reversed: '自我否定、错失召唤',
    lede: '你被召唤不是因为你够好，是因为你本来就在那个位置上。',
    past: '你曾有过一次"顿悟"的瞬间——某个清晨、某首歌、某句迟到了很久的话。那次觉醒没有白费，它现在还在你心里，只等一个合适的机会再次点亮。',
    present: '有一个声音在唤你。它不是来自外部的评价，是来自你内心深处那个一直没放弃的自己。请别再用"我不行"回应它——你其实早就知道怎么走了。',
    future: '你会做出一个被反复确认的、属于你的决定。它会带着一种"我早就知道"的熟悉感到来——那种感觉，不是新鲜，是一种回家。'
  },
  {
    id: 'world', num: 21, name: '世界', nameEn: 'The World',
    glyph: '⊛', image: IMG + '0/06/RWS_Tarot_21_World.jpg', element: '土',
    upright: '完成、整合、圆满',
    reversed: '未完成、延迟',
    lede: '你走过的每一步都在画面里，只是当时你离得太近。',
    past: '一段重要的周期已经完整地结束了。你从中学到的不只是"怎么做"，更是"我是谁"。那是无法被任何课程替代的、属于你自己的年轮。',
    present: '请把注意力放在"完成"上。把手上的事好好收尾，因为完成才能腾出空间迎接下一个圆。完结不是结束，是为新的开始留出位置。',
    future: '你会看见自己站在一个完整的位置上——不是终点，是更高一层的起点。届时你会明白，这一切的意义不在于你去了哪里，而在于你变成了谁。'
  }
];

/* ============================================
   56 Minor Arcana — 4 suits × 14 cards
   The fronts of these cards use the RWS public-domain art
   hosted on Wikipedia Commons. The fallback glyph is shown
   if a network image fails to load.
   ============================================ */

const SUITS = {
  wands:      { name: '权杖', element: '火', suffix: 'Wands'      },
  cups:       { name: '圣杯', element: '水', suffix: 'Cups'       },
  swords:     { name: '宝剑', element: '风', suffix: 'Swords'     },
  pentacles:  { name: '星币', element: '土', suffix: 'Pentacles'  }
};

// Known MD5 prefixes for the RWS image filenames on Commons.
// Each prefix was resolved from the actual Wikipedia file URL.
const WIKI_HASH = {
  // Wands
  'Ace_of_Wands':      '1/11',
  'Two_of_Wands':      '0/0f',
  'Three_of_Wands':    'f/f0',
  'Four_of_Wands':     '3/3b',
  'Five_of_Wands':     '1/13',
  'Six_of_Wands':      '2/23',
  'Seven_of_Wands':    '2/2c',
  'Eight_of_Wands':    'c/cd',
  'Nine_of_Wands':     '1/16',
  'Ten_of_Wands':      '0/07',
  'Page_of_Wands':     '1/1f',
  'Knight_of_Wands':   '8/8d',
  'Queen_of_Wands':    '0/0c',
  'King_of_Wands':     '1/14',
  // Cups
  'Ace_of_Cups':       '0/03',
  'Two_of_Cups':       'a/a6',
  'Three_of_Cups':     '8/8b',
  'Four_of_Cups':      '7/7a',
  'Five_of_Cups':      'd/d3',
  'Six_of_Cups':       'a/ae',
  'Seven_of_Cups':     '3/3a',
  'Eight_of_Cups':     '4/4b',
  'Nine_of_Cups':      '2/2f',
  'Ten_of_Cups':       '8/87',
  'Page_of_Cups':      'a/ae',
  'Knight_of_Cups':    'f/f4',
  'Queen_of_Cups':     '0/04',
  'King_of_Cups':      'd/d4',
  // Swords
  'Ace_of_Swords':     '0/04',
  'Two_of_Swords':     '1/1a',
  'Three_of_Swords':   '0/0b',
  'Four_of_Swords':    'b/b0',
  'Five_of_Swords':    '2/28',
  'Six_of_Swords':     '2/21',
  'Seven_of_Swords':   '3/36',
  'Eight_of_Swords':   '5/58',
  'Nine_of_Swords':    '1/1c',
  'Ten_of_Swords':     '1/19',
  'Page_of_Swords':    '0/06',
  'Knight_of_Swords':  '0/0c',
  'Queen_of_Swords':   '1/18',
  'King_of_Swords':    '3/32',
  // Pentacles
  'Ace_of_Pentacles':  '9/9c',
  'Two_of_Pentacles':  'f/f0',
  'Three_of_Pentacles':'1/1c',
  'Four_of_Pentacles': '4/46',
  'Five_of_Pentacles': '3/35',
  'Six_of_Pentacles':  '2/2a',
  'Seven_of_Pentacles':'5/56',
  'Eight_of_Pentacles':'4/42',
  'Nine_of_Pentacles': 'f/f1',
  'Ten_of_Pentacles':  '4/49',
  'Page_of_Pentacles': '0/0d',
  'Knight_of_Pentacles':'0/0f',
  'Queen_of_Pentacles':'8/88',
  'King_of_Pentacles': '3/3c'
};

const RANK_NAMES = {
  Ace:    { zh: '王牌',   num: 1  },
  Two:    { zh: '二',     num: 2  },
  Three:  { zh: '三',     num: 3  },
  Four:   { zh: '四',     num: 4  },
  Five:   { zh: '五',     num: 5  },
  Six:    { zh: '六',     num: 6  },
  Seven:  { zh: '七',     num: 7  },
  Eight:  { zh: '八',     num: 8  },
  Nine:   { zh: '九',     num: 9  },
  Ten:    { zh: '十',     num: 10 },
  Page:   { zh: '侍从',   num: 11 },
  Knight: { zh: '骑士',   num: 12 },
  Queen:  { zh: '王后',   num: 13 },
  King:   { zh: '国王',   num: 14 }
};

// Brief keywords for each rank (used for upright/reversed labels)
const RANK_KEYWORDS = {
  Ace:    { up: '新契机 · 纯粹能量', rev: '错失 · 内在空虚' },
  Two:    { up: '平衡 · 二元选择',   rev: '失衡 · 犹豫不决' },
  Three:  { up: '扩展 · 初见成果',   rev: '延宕 · 合作受挫' },
  Four:   { up: '稳定 · 节庆',       rev: '懈怠 · 闭锁'     },
  Five:   { up: '冲突 · 试炼',       rev: '调和 · 避免争执' },
  Six:    { up: '胜利 · 回归',       rev: '傲慢 · 故步自封' },
  Seven:  { up: '坚守 · 自证',       rev: '压力 · 退缩'     },
  Eight:  { up: '疾行 · 讯息',       rev: '停滞 · 仓促'     },
  Nine:   { up: '警觉 · 几乎达成',   rev: '担忧 · 燃尽'     },
  Ten:    { up: '完成 · 圆满',       rev: '重负 · 难以为继' },
  Page:   { up: '求知 · 灵感',       rev: '怠惰 · 失焦'     },
  Knight: { up: '行动 · 远征',       rev: '躁动 · 鲁莽'     },
  Queen:  { up: '滋养 · 内在成熟',   rev: '依赖 · 失衡'     },
  King:   { up: '掌控 · 成熟权威',   rev: '固执 · 滥用权柄' }
};

const SUIT_GLYPHS = {
  wands:     '🜁',
  cups:      '🜄',
  swords:    '🜁',
  pentacles: '🜃'
};

function buildMinorArcana() {
  const cards = [];
  for (const [suitKey, suit] of Object.entries(SUITS)) {
    for (const [rankKey, rank] of Object.entries(RANK_NAMES)) {
      const file = `${rankKey}_of_${suit.suffix}`;
      const hash = WIKI_HASH[file];
      const kw = RANK_KEYWORDS[rankKey];
      cards.push({
        id: `${suitKey}_${rankKey.toLowerCase()}`,
        num: 22 + cards.length,           // continue numbering after 22 majors
        name: `${suit.name}·${rank.zh}`,
        nameEn: `${rankKey} of ${suit.suffix}`,
        glyph: SUIT_GLYPHS[suitKey],
        image: hash ? IMG + hash + '/RWS_Tarot_' + file + '.jpg' : '',
        element: suit.element,
        upright: kw.up,
        reversed: kw.rev,
        lede: `${suit.name}${rank.zh} · ${kw.up}`,
        past: `那时你以${suit.element}的节奏走过一段路——${kw.up}的能量正在为你打底，回看时你会感谢自己那时没有退。`,
        present: `此刻的牌灵请你在${kw.up}的领域里多留一步心——这是${suit.element}的位置，是你最适合用力气的方向。`,
        future: `前方会有一段时间让你用${kw.up}的方式向前走。当你带着${suit.element}的稳定出发，会比想象中走得更稳更远。`
      });
    }
  }
  return cards;
}

const MINOR_ARCANA = buildMinorArcana();

// Local face images uploaded by the user. Cards are served from
// assets/faces/ at runtime — overriding the remote Wikipedia URLs.
const FACES_DIR = 'assets/faces/';
const MAJOR_FACES = {
  fool:         '0愚人.png',
  magician:     '1魔术师.png',
  highpriestess:'2女祭司.png',
  empress:      '3皇后.png',
  emperor:      '4皇帝.png',
  hierophant:   '5教皇.png',
  lovers:       '6恋人.png',
  chariot:      '7战车.png',
  strength:     '8力量.png',
  hermit:       '9隐士.png',
  wheel:        '10命运之轮.png',
  justice:      '11正义.png',
  hanged:       '12倒吊人.png',
  death:        '13死神.png',
  temperance:   '14节制.png',
  devil:        '15恶魔.png',
  tower:        '16塔.png',
  star:         '17星星.png',
  moon:         '18月亮.png',
  sun:          '19太阳.png',
  judgement:    '20审判.png',
  world:        '21世界.png'
};
const SUIT_FILE = {
  wands:     '权杖',
  cups:      '圣杯',
  swords:    '宝剑',
  pentacles: '星币'
};
const RANK_FILE = {
  Ace:'1', Two:'2', Three:'3', Four:'4', Five:'5',
  Six:'6', Seven:'7', Eight:'8', Nine:'9', Ten:'10',
  Page:'侍从', Knight:'骑士', Queen:'王后', King:'国王'
};
// Build the minor arcana face map from the patterns above
const MINOR_FACES = (() => {
  const out = {};
  for (const [suitKey, suitPrefix] of Object.entries(SUIT_FILE)) {
    for (const [rankKey, rankPart] of Object.entries(RANK_FILE)) {
      out[`${suitKey}_${rankKey.toLowerCase()}`] = suitPrefix + rankPart + '.png';
    }
  }
  return out;
})();
const LOCAL_FACES = Object.assign({}, MAJOR_FACES, MINOR_FACES);

// Override the .image field on every card with its local file
function applyLocalFaces(deck) {
  return deck.map(card => Object.assign({}, card, {
    image: LOCAL_FACES[card.id] ? FACES_DIR + LOCAL_FACES[card.id] : card.image
  }));
}

const FULL_DECK = applyLocalFaces(MAJOR_ARCANA.concat(MINOR_ARCANA));

// Shuffle helper (Fisher–Yates)
function shuffleDeck(deck) {
  const a = deck.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
