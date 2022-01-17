# Dream_youth

현재 테스트 방법
```
npm i

npm start
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

