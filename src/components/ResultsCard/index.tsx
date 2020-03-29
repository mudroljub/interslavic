import * as React from 'react';
import { t } from 'translations';
import './index.scss';
import { ITranslateResult } from 'utils/dictionary';
import { getPartOfSpeech } from 'utils/wordDetails';
import classNames from 'classnames';
import { IAlphabets } from 'reducers';

interface IResultsCardProps {
    item: ITranslateResult;
    onShowDetail: () => void;
    onShowTranslates: () => void;
    onFavorite: () => void;
    alphabets: IAlphabets;
    lang: string;
}

function showFormsButtonIsVisible(item: ITranslateResult) {
    const pos = getPartOfSpeech(item.details);

    switch (pos) {
        case 'noun':
        case 'numeral':
        case 'pronoun':
            if (item.original.includes(' ') && item.original.match(/[^,] [^\[]/)) {
                return false;
            }
        case 'adjective':
        case 'verb':
            return true;
        default:
            return false;
    }
}

function renderOriginal(item, alphabets) {
    let latin = item.original;
    if (item.add) {
        latin += ` ${item.add}`;
    }

    let cyrillic = item.originalCyr;
    if (item.addCyr) {
        cyrillic += ` ${item.addCyr}`;
    }

    let gla = item.originalGla;
    if (item.addGla) {
        gla += ` ${item.addGla}`;
    }

    const result = [];

    if (alphabets.latin) {
        result.push(latin);
    }

    if (alphabets.cyrillic) {
        result.push(cyrillic);
    }

    if (alphabets.glagolitic) {
        result.push(gla);
    }

    return (
        <>
            {result.join('/')}&nbsp;{item.ipa && <span className={'ipa'}>[{item.ipa}]</span>}
        </>
    );
}

export const ResultsCard: React.FC<IResultsCardProps> =
    ({item, alphabets, lang, onShowDetail, onShowTranslates, onFavorite}: IResultsCardProps) => {
        const pos = getPartOfSpeech(item.details);
        const isFavorite = false;

        return (
            <div className={'results-card'} tabIndex={0}>
                <div className={'results-card__translate'}>
                    {lang !== 'isv' ? item.translate : renderOriginal(item, alphabets)}
                </div>
                <div className={'results-card__details'}>{item.details}</div>
                <div className={'results-card__original'}>
                    {lang === 'isv' ? item.translate : renderOriginal(item, alphabets)}
                </div>
                <button
                    className={'results-card__favorite-button'}
                    type={'button'}
                    aria-label={'Show translates'}
                    onClick={onFavorite}
                >
                    {isFavorite ? '★' : '☆'}
                </button>
                <div className={'results-card__actions'}>
                    <button
                        className={'results-card__show-translates-button'}
                        type={'button'}
                        aria-label={'Show translates'}
                        onClick={onShowTranslates}
                    >
                        {t('translates')}
                    </button>
                    {showFormsButtonIsVisible(item) && (
                        <button
                            className={'results-card__show-forms-button'}
                            type={'button'}
                            aria-label={'Show forms'}
                            onClick={onShowDetail}
                        >
                            {pos === 'verb' ? t('conjugation') : t('declensions')}
                        </button>
                    )}
                </div>
                <div className={classNames('results-card__status-badge', {verified: item.checked})}>
                    {item.checked ? t('verified') : t('autoTranslation')}
                </div>
            </div>
        );
    };
