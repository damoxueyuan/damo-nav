var data = [{
  "imgURL": "aliyunbiji.jpg",
  "hasImg": false,
  "href": "http://aliyunbiji.damoxueyuan.top",
  "title": "阿里云服务器搭建笔记",
  "lab1": "笔记",
  "lab2": " · 服务器搭建"
}, {
  "imgURL": "apibiji.jpg",
  "hasImg": false,
  "href": "http://apibiji.damoxueyuan.top",
  "title": "开源项目接口",
  "lab1": "笔记",
  "lab2": " · 开源API"
}, {
  "imgURL": "subjectbiji.jpg",
  "hasImg": false,
  "href": "http://subjectbiji.damoxueyuan.top",
  "title": "前端专题知识体系",
  "lab1": "笔记",
  "lab2": " · 前端专题"
}, {
  "imgURL": "arithmeticbiji.jpg",
  "hasImg": false,
  "href": "http://arithmeticbiji.damoxueyuan.top",
  "title": "算法笔记",
  "lab1": "笔记",
  "lab2": " ·算法 "
}, {
  "imgURL": "es678biji.jpg",
  "hasImg": false,
  "href": "http://es78biji.damoxueyuan.top",
  "title": "Javascript 6 7 8",
  "lab1": "笔记",
  "lab2": " · es678"
}, {
  "imgURL": "versionbiji.jpg",
  "hasImg": false,
  "href": "http://versionbiji.damoxueyuan.top",
  "title": "GIT版本控制器",
  "lab1": "笔记",
  "lab2": " · SVN GIT"
}, {
  "imgURL": "vuebiji.jpg",
  "hasImg": false,
  "href": "http://vuebiji.damoxueyuan.top",
  "title": "VUE",
  "lab1": "笔记",
  "lab2": " · VUE"
}, {
  "imgURL": "webpackbiji.jpg",
  "hasImg": false,
  "href": "http://webpackbiji.damoxueyuan.top",
  "title": "Webpack",
  "lab1": "笔记",
  "lab2": " · Webpack"
}, {
  "imgURL": "weexbiji.jpg",
  "hasImg": false,
  "href": "http://weexbiji.damoxueyuan.top",
  "title": "Weex",
  "lab1": "笔记",
  "lab2": " · Weex"
}, {
  "imgURL": "xiaochengxubiji.jpg",
  "hasImg": false,
  "href": "http://xiaochengxubiji.damoxueyuan.top",
  "title": "小程序",
  "lab1": "笔记",
  "lab2": " · 小程序"
}, {
  "imgURL": "es6biji.jpg",
  "hasImg": false,
  "href": "http://es6biji.damoxueyuan.top",
  "title": "Javascript6",
  "lab1": "笔记",
  "lab2": " · Javascript6"
}, {
  "imgURL": "mdbiji.jpg",
  "hasImg": false,
  "href": "http://mdbiji.damoxueyuan.top",
  "title": "MarkDown",
  "lab1": "笔记",
  "lab2": " · MarkDown"
}, {
  "imgURL": "nodebiji.jpg",
  "hasImg": false,
  "href": "http://nodebiji.damoxueyuan.top",
  "title": "NodeJS",
  "lab1": "笔记",
  "lab2": " · NodeJS"
}, {
  "imgURL": "phpbiji.jpg",
  "hasImg": false,
  "href": "http://phpbiji.damoxueyuan.top",
  "title": "PHP简单入门",
  "lab1": "笔记",
  "lab2": " · php"
}, {
  "imgURL": "reactbiji.jpg",
  "hasImg": false,
  "href": "http://reactbiji.damoxueyuan.top",
  "title": "React 框架",
  "lab1": "笔记",
  "lab2": " · react"
}, {
  "imgURL": "rnbiji.jpg",
  "hasImg": false,
  "href": "http://rnbiji.damoxueyuan.top",
  "title": "React Native",
  "lab1": "笔记",
  "lab2": " · RN"
}, {
  "imgURL": "sqlbiji.jpg",
  "hasImg": false,
  "href": "http://sqlbiji.damoxueyuan.top",
  "title": "MySql增删改查",
  "lab1": "笔记",
  "lab2": " · SQL"
}, {
  "imgURL": "ng1newbiji.jpg",
  "hasImg": false,
  "href": "http://ng1newbiji.damoxueyuan.top",
  "title": "Angular - 1 新",
  "lab1": "笔记",
  "lab2": " · ng1"
}, {
  "imgURL": "ng1oldbiji.jpg",
  "hasImg": false,
  "href": "http://ng1oldbiji.damoxueyuan.top",
  "title": "Angular - 1 旧(废弃)",
  "lab1": "笔记",
  "lab2": " · ng1旧"
}

];


export default  {
  name: 'biji',
  components: {}, 
  props: [],
  data () {
    return {
      ghList:[],
      colorArr: ['#f8bc05',  '#4285f4']
    }
  },
  computed: {
    
  },
  created () {
    this.ghList = data.map((item)=>{ // 如果没有图片，则配置颜色
      if(!item['hasImg']){
        item['bgColor'] = this.getBgColor();
      }
      return item;
    })
  },
  mounted () {
   
  },
  methods: {
    getBgColor() {
      return this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
    }
  }
}
