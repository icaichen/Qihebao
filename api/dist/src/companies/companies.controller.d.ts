import { CompaniesService } from './companies.service';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    search(query: string): {
        id: string;
        name: string;
        legalName: string;
        industry: string;
        riskScore: number;
        riskLevel: string;
    }[];
    findAll(): {
        id: string;
        name: string;
        legalName: string;
        industry: string;
        riskScore: number;
        riskLevel: string;
    }[];
    findOne(id: string): {
        id: string;
        name: string;
        legalName: string;
        industry: string;
        riskScore: number;
        riskLevel: string;
    } | null;
}
