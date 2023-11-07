export interface CommonState {
    searchTerm: string;
}

export interface LoadingState {
    kind: "LoadingState";
}

export interface LoadedState<T> {
    kind: "LoadedState";
    products: Array<T>;
}

export interface ErrorState {
    kind: "ErrorState";
    error: string;
}

export type EnittyState<T> = (LoadingState | LoadedState<T> | ErrorState) &
    CommonState;