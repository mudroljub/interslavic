import { IMainState } from 'reducers';

export enum ActionTypes {
    LANG = 'LANG',
    FROM_TEXT = 'FROM_TEXT',
    SEARCH_TYPE = 'SEARCH_TYPE',
    FLAVORISATION_TYPE = 'FLAVORISATION_TYPE',
    SET_PAGE = 'SET_PAGE',
    SET_INTERFACE_LANG = 'SET_INTERFACE_LANG',
    IS_LOADING = 'IS_LOADING',
    SET_SEARCH_EXPAND = 'SET_SEARCH_EXPAND',
    ALPHABET_TYPE = 'ALPHABET_TYPE',
    RUN_SEARCH = 'RUN_SEARCH',
    CHANGE_ISV_SEARCH_LETTERS = 'CHANGE_ISV_SEARCH_LETTERS',
    POS_FILTER = 'POS_FILTER',
    SET_ALPHABETS = 'SET_ALPHABETS',
    SET_TRANSLATES_MODAL = 'SET_TRANSLATES_MODAL',
    TRANSLATES_IS_VISIBLE_MODAL = 'TRANSLATES_IS_VISIBLE_MODAL',
    SET_DETAIL_MODAL = 'SET_DETAIL_MODAL',
    DETAIL_IS_VISIBLE_MODAL = 'DETAIL_IS_VISIBLE_MODAL',
}

export function langAction(data: {from: string, to: string}) {
    return {
        type: ActionTypes.LANG,
        data,
    };
}

export function setDetailAction(data: number) {
    return {
        type: ActionTypes.SET_DETAIL_MODAL,
        data,
    };
}

export function showDetailAction() {
    return {
        type: ActionTypes.DETAIL_IS_VISIBLE_MODAL,
        data: true,
    };
}

export function setTranslatesAction(data: number) {
    return {
        type: ActionTypes.SET_TRANSLATES_MODAL,
        data,
    };
}

export function showTranslatesAction() {
    return {
        type: ActionTypes.TRANSLATES_IS_VISIBLE_MODAL,
        data: true,
    };
}

export function setAlphabetTypeAction(data: number) {
    return {
        type: ActionTypes.ALPHABET_TYPE,
        data,
    };
}

export function hideDetailAction() {
    return {
        type: ActionTypes.DETAIL_IS_VISIBLE_MODAL,
        data: false,
    };
}

export function hideTranslatesAction() {
    return {
        type: ActionTypes.TRANSLATES_IS_VISIBLE_MODAL,
        data: false,
    };
}

export function setSearchExpand(data) {
    return {
        type: ActionTypes.SET_SEARCH_EXPAND,
        data,
    };
}

export function fromTextAction(data: string) {
    return {
        type: ActionTypes.FROM_TEXT,
        data,
    };
}

export function searchTypeAction(data: string) {
    return {
        type: ActionTypes.SEARCH_TYPE,
        data,
    };
}

export function flavorisationTypeAction(data: string) {
    return {
        type: ActionTypes.FLAVORISATION_TYPE,
        data,
    };
}

export function setPageAction(data: string) {
    return {
        type: ActionTypes.SET_PAGE,
        data,
    };
}

export function isLoadingAction(data: boolean) {
    return {
        type: ActionTypes.IS_LOADING,
        data,
    };
}

export function setInterfaceLang(data: string) {
    return {
        type: ActionTypes.SET_INTERFACE_LANG,
        data,
    };
}

export function changeIsvSearchLetters(data: string) {
    return {
        type: ActionTypes.CHANGE_ISV_SEARCH_LETTERS,
        data,
    };
}

export function posFilterAction(data: string) {
    return {
        type: ActionTypes.POS_FILTER,
        data,
    };
}

export function runSearch() {
    return {
        type: ActionTypes.RUN_SEARCH,
    };
}

export function setAlphabets(data) {
    return {
        type: ActionTypes.SET_ALPHABETS,
        data,
    };
}
