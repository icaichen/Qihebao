export declare class CompaniesService {
    private companies;
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
