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
