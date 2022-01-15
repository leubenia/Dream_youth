import app from "./app"
import http from "http";
import sequelzie from "./models";

const httpServer = http.createServer(app.app);

const Mytest = httpServer.listen(process.env.EXPRESS_PORT, async()=>{
    console.log(`3000 or ${process.env.EXPRESS_PORT}`);

    // //sequelize-db 연결 테스트
     await sequelzie.authenticate()
     .then(async () => {
         console.log("연결 되었습니다.");
     })
     .catch((e:Error) => {
         console.log('TT : ', e);
     })
})