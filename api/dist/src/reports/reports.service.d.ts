export declare class ReportsService {
    private reports;
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
