"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const createRestaurant_dto_1 = require("./dtos/createRestaurant.dto");
const restaurant_entity_1 = require("./entities/restaurant.entity");
const restaurants_service_1 = require("./restaurants.service");
let RestaurantResolver = class RestaurantResolver {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    myRestaurant() {
        return true;
    }
    restaurant() {
        return this.restaurantService.getAll();
    }
    createRestaurant(createRestaurantInput) {
        console.log(createRestaurantInput);
        return true;
    }
};
__decorate([
    graphql_1.Query(_ => restaurant_entity_1.Restaurant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "myRestaurant", null);
__decorate([
    graphql_1.Query(_ => [restaurant_entity_1.Restaurant]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "restaurant", null);
__decorate([
    graphql_1.Mutation(_ => Boolean),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createRestaurant_dto_1.CreateRestaurantDto]),
    __metadata("design:returntype", Boolean)
], RestaurantResolver.prototype, "createRestaurant", null);
RestaurantResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [restaurants_service_1.RestaurantService])
], RestaurantResolver);
exports.RestaurantResolver = RestaurantResolver;
//# sourceMappingURL=restaurant.resolver.js.map