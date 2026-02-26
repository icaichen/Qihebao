export declare class RisksService {
    private risks;
    findAll(): {
        id: string;
        company: string;
        type: string;
        severity: string;
        description: string;
        time: string;
    }[];
}
