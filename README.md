# URL shortener ( AC 2-3 A11 )

![image](https://raw.githubusercontent.com/muco0521/AC-url-shortener/main/public/image/url_shortener_image.png)

## About - 介紹
這是可以將網址縮短的網站，使用 Node.js + Express + MongoDB + Mongoose 。

## Features - 功能

1. 可以將原本較長的網址縮短
2. 可以驗證原網址是否無效
3. 可以一鍵複製短網址
4. 可以在伺服器運行時用短網址連到原網站

## Prerequisites - 環境建置與需求

* Node.js
* Express @4.18.2
* Express-handlebars @4.0.2
* MongoDB
* mongoose @7.1.0

## Installation and Execution - 安裝與執行步驟

1.開啟Terminal, Clone此專案至本機:
```
git clone https://github.com/muco0521/AC-url-shortener.git
```

2.進入專案資料夾，安裝 npm 套件
```
npm install
```

3.安裝nodemon 
```
npm install nodemon
```

4.在專案資料夾內新增一個.env檔案，並輸入 MongoDB 你的連線字串
```
MONGODB_URI = "<你的連線字串>"
```

5.啟動伺服器
```
npm run dev 
```

6.出現以下字樣表示伺服器連線成功
```
Express is listening on localhost:3000
MongoDB is connect!
```

7.開啟瀏覽器，輸入以下網址，使用本專案
```
http://localhost:3000 
```