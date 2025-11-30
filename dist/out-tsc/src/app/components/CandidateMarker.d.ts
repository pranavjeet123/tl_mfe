import { GeoFeature } from '../services/mockDataService';
interface CandidateMarkerProps {
    feature: GeoFeature;
    isFavorite?: boolean;
    onToggleFavorite?: (candidateId: string) => void;
}
export declare function CandidateMarker({ feature, isFavorite, onToggleFavorite }: CandidateMarkerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CandidateMarker.d.ts.map