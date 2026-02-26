export declare class CasesService {
    private cases;
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
