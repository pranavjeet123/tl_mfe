import { Feature } from '../types';
export interface MicrofrontendMessage {
    type: string;
    payload: unknown;
    source: string;
    timestamp: number;
}
declare class MicrofrontendCommunicationService {
    private static instance;
    private globalMessageSubject;
    private favoriteCandidatesSubject;
    private selectedCandidateSubject;
    private constructor();
    static getInstance(): MicrofrontendCommunicationService;
    sendMessage(type: string, payload: unknown, source: string): void;
    get messages$(): import("rxjs").Observable<MicrofrontendMessage>;
    addFavoriteCandidate(candidate: Feature, source?: string): void;
    removeFavoriteCandidate(candidateId: string, source?: string): void;
    setFavoriteCandidates(candidates: Feature[], source?: string): void;
    get favoriteCandidates$(): import("rxjs").Observable<Feature[]>;
    getFavoriteCandidates(): Feature[];
    selectCandidate(candidate: Feature | null, source?: string): void;
    get selectedCandidate$(): import("rxjs").Observable<Feature | null>;
    getSelectedCandidate(): Feature | null;
}
export declare const communicationService: MicrofrontendCommunicationService;
export declare const useCommunication: () => {
    sendMessage: (type: string, payload: unknown, source: string) => void;
    addFavorite: (candidate: Feature, source?: string) => void;
    removeFavorite: (candidateId: string, source?: string) => void;
    selectCandidate: (candidate: Feature | null, source?: string) => void;
    messages$: import("rxjs").Observable<MicrofrontendMessage>;
    favoriteCandidates$: import("rxjs").Observable<Feature[]>;
    selectedCandidate$: import("rxjs").Observable<Feature | null>;
    getFavorites: () => Feature[];
    getSelected: () => Feature | null;
};
export declare const getCommunicationService: () => MicrofrontendCommunicationService;
export {};
//# sourceMappingURL=communication.d.ts.map