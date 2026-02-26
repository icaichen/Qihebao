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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RisksController = void 0;
const common_1 = require("@nestjs/common");
const risks_service_1 = require("./risks.service");
let RisksController = class RisksController {
    risksService;
    constructor(risksService) {
        this.risksService = risksService;
    }
    findAll() {
        return this.risksService.findAll();
    }
};
exports.RisksController = RisksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RisksController.prototype, "findAll", null);
exports.RisksController = RisksController = __decorate([
    (0, common_1.Controller)('risks'),
    __metadata("design:paramtypes", [risks_service_1.RisksService])
], RisksController);
//# sourceMappingURL=risks.controller.js.map