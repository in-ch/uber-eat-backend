import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

enum UserRole {
  Client,
  Owner,
  Delivery  // 데이터베이스에는 각각 0,1,2로 저장된다. 
}

registerEnumType(UserRole, {name: 'UserRole'});  // 이렇게 해야 GraphQL에서 사용 가능하다.

@InputType({isAbstract:true})
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field(_ => String)
  email: string;

  @Column()
  @Field(_ => String)
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  @Field(_ => UserRole)
  role: UserRole;
}