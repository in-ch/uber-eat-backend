# uber eats backend clone coding

1. graphQL의 typeDefsms document 혹은 서버의 schema를 표현하는 것인데. typescript와 decorator로 대체가 가능하다.
   resolvers는 function인데 query와 mutate 시키는 부분이다.
   ㄴcodefirst 방식을 활용함으로써 가능하다.
2. @Field에서 nullable:true 인자값을 주면 ?를 붙일 수 있어서 필수값이 아니게 할 수 있다.
3. Query에 Argument를 보내고 싶으면 @Args라고 한 다음에 보내면 된다.
4. Args Type와 inputType의 차이점은 ArgsType는 인자를 따로따로 지정해줄 수 있는데 inputType는 크게 하나의 객체로써 동시에 전달해 줘야 한다.
5. ORM은 "Object Relational Mapping" (객체 관계 매핑)
6. joi는 자바스크립트용의 가장 강력한 스키마 설명 언어이자 데이터 유효성 검사툴이다. 
   ㄴ자바스크립트 용이기 때문에 typescript에서 쓸 때는 import * as Joi from "xxxx" 등으로 써야한다.
7. 데이터 통신 방법에는 Data Mapper과 Active Record 두가지 패턴(방법)이 있다.
   Active Record는 BaseEntity롤 extends하면 사용 가능한데 작은 프로젝트에 적합하다.
   Data Mapper는 repository(Entity랑 상호작용 담당)를 사용하면 활용 가능하다.
8. DB에 저장하고 싶으면 save()를 써야함. 근데 save() 안에 create() 함수까지 들어가야 인스텐스를 만들어서 @BeforeInsert같은 걸 쓸 수 있음.
9. Mapped types를 사용하면 entity 파일에 db테이블(object type)과 type, dto를 모두 정의할 수 있다. 
   ㄴ @ArgsType()를 @InputType으로 만들고 extends 시켜서 entities 파일을 받아오면 된다.
10. @IsOptional() = 이 필드가 없다면 무시하고 진행
11. @Field(_, => Boolean, {defaultValue:true}) -> 기본값
    @column({default:true}) -> 기본값을 가질 수 있음.
12. listener는 기본적으로 entity에 무슨 일이 생길 때 실행되는 것이다.
    TypeORM doc에 listener and subscription 부분에 데코레이션이 잘 정리되어 있다.
    db에 저장하려면 save(값)을 해야하는데 save(create(~)) 대충 이런 식으로 해줘야 인스텐스가 생성되서 먹힌다. -> 위에 정리한 @BeforeInsert같은 거 ..