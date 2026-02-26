import { CasesService } from './cases.service';
export declare class CasesController {
    private readonly casesService;
    constructor(casesService: CasesService);
    findAll(): {
        id: string;
        title: string;
        status: string;
        priority: string;
        company: string;
        assignee: string;
        created: string;
        deadline: string;
    }[];
}
