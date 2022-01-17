# Dream_youth

현재 테스트 방법
```
npm i

npm run dev
```
# DB
현재 DB는 AWS RDS를 사용..


## 1.16 노트북 환경 
현재 노트북 가상환경 제공 X
도커 테스트 불가
Jest 추가 예정
Jest 경고때문에 보류

Postman으로 local test완료

docker 설정 해야됨
docker 이용 서버 배포 테스트 예정



## 1.18 도커 확인
```
docker build -t dream:0.1 .
```
빌드

```
docker run --name test -d -p 80:3000 mytest:0.1
```
실행 하시면 됩니다.
현재 DB는 RDS를 사용중

실행환경 
docker ,DB RDS

test
window cUrl


```
curl -i http://localhost/_ah/health
```
X-Powered-By: Express
Access-Control-Allow-Origin: http://127.0.0.1:3000
Access-Control-Allow-Headers: X-Requested-With
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Content-Type: text/plain; charset=utf-8
Content-Length: 2
ETag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
Date: Mon, 17 Jan 2022 22:50:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5

OK
```
curl -H "Content-Type: application/x-www-form-urlencoded" -E GET http://localhost/test1
```
test1 OK

```
curl -H "Content-Type: application/x-www-form-urlencoded" -E GET http://localhost/test2
```
{"test":"OK"}

```
curl -H "Content-Type: application/x-www-form-urlencoded" -E GET http://localhost/user
```
[{"index":"2","userName":"도도","userDesc":"도도입니다","hasCat":false,"createdAt":"2022-01-15T19:51:48.000Z","updatedAt":"2022-01-16T01:51:54.000Z"}]

```
curl -d "{""userName"":""dodo"", ""userDesc"":""mydodocurltest""}" -H "Content-Type: application/json" -E POST http://localhost/user
```
기본적으로 hasCat key가 들어오지 않으면 false 없다로 설정
{"msg":"유저 생성 완료","유저":"dodo"}
TMI
```
curl -d "{""userName"":""dodo1"", ""userDesc"":""mydodocurltest"",""hasCat"":""true""}" -H "Content-Type: application/json" -E POST http://localhost/user
{"msg":"유저 생성 완료","유저":"dodo1"}
curl -H "Content-Type: application/json" -E GET http://localhost/user/6/hasCat
{"유저":"dodo1","index":"6","고양이":"고양이대리고있어!"}
curl -d "{""userName"":""dodo1"", ""userDesc"":""mydodocurltest"",""hasCat"":""false""}" -H "Content-Type: application/json" -E POST http://localhost/user
{"msg":"유저 생성 완료","유저":"dodo1"}
curl -H "Content-Type: application/json" -E GET http://localhost/user/7/hasCat
{"유저":"dodo1","index":"7","고양이":"고양이없어요!"}
```

```
curl -X DELETE http://localhost/user/3
```


{"msg":"유저 삭제완료"}
||
{"유저":"유저가 없거나 이미 삭제된 유저입니다."}

```
curl -H "Content-Type: application/json" -E GET http://localhost/user/4/hasCat
```

{"유저":"dodo","index":"4","고양이":"고양이없어요!"}


```
curl -d "{}" -H "Content-Type: application/json" -E POST http://localhost/user/4/hasCat
```
{"유저":"dodo","index":"4","고양이":"고양이대리고있어!로 수정!"}



cUrl local 윈도우 환경 테스트 완료 

AWS 확인 해야됨.






