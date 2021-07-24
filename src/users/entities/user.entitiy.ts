import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as bcrypt from "bcrypt";
import { CoreEntity } from 'src/common/entities/core.entity';
import { InternalServerErrorException } from "@nestjs/common";

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

  @BeforeInsert()   // entitiy에 몬가가 들어오기 전에 실행되는 것이다.
  async hashPassword(): Promise <void> {
    try{
      this.password = await bcrypt.hash(this.password, 10);
    } catch(e){
      throw new InternalServerErrorException();
    }
  }
}