export interface POI {
    id: string;
    type: string;
    name: string;
    rating?: number;
    visitors_per_day?: number;
    employees?: number;
    students?: number;
    households?: number;
    daily_entries?: number;
    mode?: string;
    tags: string[];
}
export interface Candidate {
    id: string;
    type: 'candidate';
    estimated_rent: number;
    notes: string;
}
export interface GeoFeature {
    type: 'Feature';
    properties: POI | Candidate;
    geometry: {
        type: 'Point';
        coordinates: [number, number];
    };
}
export interface MockDataResponse {
    type: 'FeatureCollection';
    features: GeoFeature[];
}
export declare const fetchMockData: () => Promise<MockDataResponse>;
export declare const getPOIs: (data: MockDataResponse) => GeoFeature[];
export declare const getCandidates: (data: MockDataResponse) => GeoFeature[];
export declare const getPOIIcon: (poiType: string) => string;
//# sourceMappingURL=mockDataService.d.ts.map