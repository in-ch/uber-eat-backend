"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const Joi = require("joi");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/entities/user.entity");
const jwt_module_1 = require("./jwt/jwt.module");
const jwt_middleware_1 = require("./jwt/jwt.middleware");
const verification_entity_1 = require("./users/entities/verification.entity");
const mail_module_1 = require("./mail/mail.module");
const restaurant_entity_1 = require("./restaurant/entities/restaurant.entity");
const category_entity_1 = require("./restaurant/entities/category.entity");
const restaurant_module_1 = require("./restaurant/restaurant.module");
let AppModule = AppModule_1 = class AppModule {
    configure(consumer) {
        consumer.apply(jwt_middleware_1.JwtMiddleware)
            .forRoutes({ path: "/graphQL", method: common_1.RequestMethod.ALL });
    }
};
AppModule = AppModule_1 = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV === 'dev' ? '.env.test' : '.env.test',
                ignoreEnvFile: process.env.NODE_ENV === 'prod',
                validationSchema: Joi.object({
                    NODE_ENV: Joi.string()
                        .valid('dev', 'prod')
                        .required(),
                    DB_HOST: Joi.string().required(),
                    DB_PORT: Joi.string().required(),
                    DB_USERNAME: Joi.string().required(),
                    DB_PASSWORD: Joi.string().required(),
                    DB_NAME: Joi.string().required(),
                    PRIVATE_KEY: Joi.string().required(),
                    MAILGUN_API_KEY: Joi.string().required(),
                    MAILGUN_DOMAIN_NAME: Joi.string().required(),
                    MAILGUN_FROM_EMAIL: Joi.string().required(),
                }),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: process.env.NODE_ENV !== 'prod',
                logging: process.env.NODE_ENV !== 'prod',
                entities: [user_entity_1.User, verification_entity_1.Verification, restaurant_entity_1.Restaurant, category_entity_1.Category],
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                context: ({ req }) => ({ user: req['user'] }),
            }),
            jwt_module_1.JwtModule.forRoot({
                privateKey: process.env.PRIVATE_KEY,
            }),
            mail_module_1.MailModule.forRoot({
                apiKey: process.env.MAILGUN_API_KEY,
                domain: process.env.MAILGUN_DOMAIN_NAME,
                fromEmail: process.env.MAILGUN_FROM_EMAIL,
            }),
            users_module_1.UsersModule,
            mail_module_1.MailModule,
            restaurant_module_1.RestaurantModule,
            AppModule_1
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map