import {
    showDetailAction,
    setDetailAction,
    showTranslatesAction,
    setTranslatesAction,
} from 'actions';
import { connect } from 'connect';
import { worksheetUrl } from 'consts';
import * as React from 'react';
import { t } from 'translations';
import { Dictionary, ITranslateResult } from 'utils/dictionary';
import './index.scss';
import { ResultsCard } from 'components/ResultsCard';
import { IAlphabets, IMainState, ILang } from 'reducers';

interface IResultsInternalProps {
    results: ITranslateResult[];
    showDetail: (itemIndex: number) => void;
    showTranslates: (itemIndex: number) => void;
    alphabets: any;
    lang: ILang;
}

const ResultsInternal: React.FC<IResultsInternalProps> =
    ({results, lang, alphabets, showDetail, showTranslates}: IResultsInternalProps) => {
        if (!results || !results.length) {
            return null;
        }

        const translatedPart = Dictionary.getPercentsOfTranslated()[lang.from === 'isv' ? lang.to : lang.from];

        return (
            <div className={'results'}>
                <>{results.map((item: ITranslateResult, index) => (
                    <ResultsCard
                        item={item}
                        alphabets={alphabets}
                        key={index}
                        lang={lang.to}
                        onShowDetail={() => {
                            showDetail(index);
                        }}
                        onShowTranslates={() => {
                            showTranslates(index);
                        }}
                        onFavorite={() => {
                            console.log('!');
                        }}
                    />
                ))}</>
                {results.some((item) => !item.checked) &&
                <div className={'results__message-for-users'}>
                    {t('notVerifiedText').replace('part%', `${translatedPart}%`)}
                    {` `}
                    <a target={'_blank'} href={worksheetUrl}>{t('notVerifiedTableLinkText')}</a>
                </div> }
            </div>
        );
    };

function mapStateToProps({results, lang, alphabets}: IMainState) {
    return {
        results,
        lang,
        alphabets,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showDetail: (i) => {
            dispatch(setDetailAction(i));
            dispatch(showDetailAction());
        },
        showTranslates: (i) => {
            dispatch(setTranslatesAction(i));
            dispatch(showTranslatesAction());
        },
    };
}

export const Results = connect(mapStateToProps, mapDispatchToProps)(ResultsInternal);
