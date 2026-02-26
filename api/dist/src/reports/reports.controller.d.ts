import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    findAll(): {
        id: string;
        title: string;
        type: string;
        status: string;
        company: string;
        date: string;
        author: string;
    }[];
}
