# Todo List App
## 项目架构
frontend use ReactJS framework
backend use ExpressJS framework, firebase authentication, firebase firestore.
### backend组成
backend主要有authentication, task management, calendar management三个部分组成, 其中authentication部分和firebase的authentication交互, task部分与firebase的firestore交互并将数据存储在firestore中, calendar暂定与apple calendar和google calendar交互
> /backend
├── /routes                  # 路由
│   ├── auth.js              # 登录注册相关路由
│   ├── tasks.js             # 任务管理相关路由
│   └── calendar.js          # 日历同步相关路由
├── /controllers             # 控制器逻辑
│   ├── authController.js    # 登录注册控制器
│   ├── taskController.js    # 任务管理控制器
│   └── calendarController.js # 日历同步控制器
├── /models                  # 数据模型
│   ├── taskModel.js         # 任务数据模型
├── /services                # 外部服务逻辑
│   ├── firebase.js          # Firebase SDK 初始化
│   ├── googleCalendar.js    # Google Calendar API 集成
│   └── appleCalendar.js     # Apple Calendar 集成（可选）
├── .env                     # 环境变量文件
├── package.json             # 项目依赖配置
├── server.js                # 入口文件


## Deploy
### frontend deploy
Github pages / vercel

### backend deploy
多种方案(暂未决定)
- AWS EC2 (Amazon Elastic Compute Cloud)
- <mark>(Prefer)</mark> Docker + AWS ECS/EKS 或 Google Kubernetes Engine (GKE)
- Docker + DigitalOcean Droplet

