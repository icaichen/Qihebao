import { RisksService } from './risks.service';
export declare class RisksController {
    private readonly risksService;
    constructor(risksService: RisksService);
    findAll(): {
        id: string;
        company: string;
        type: string;
        severity: string;
        description: string;
        time: string;
    }[];
}
