import { langAction } from 'actions';
import * as React from 'react';
import { connect } from 'react-redux';
import { Selector } from '../Selector';
import './index.scss';

interface ILangSelectorInternalProps {
    from: string;
    to: string;
    onSelect: (from: string, to: string) => void;
}

const languageList = [
    {
        name: 'English',
        value: 'en',
    },
    {
        name: 'Русский',
        value: 'ru',
    },
    {
        name: 'Українська',
        value: 'uk',
    },
    {
        name: 'Беларуская',
        value: 'be',
    },
    {
        name: 'Polski',
        value: 'pl',
    },
    {
        name: 'Česky',
        value: 'cs',
    },
    {
        name: 'Slovenský',
        value: 'sk',
    },
    {
        name: 'Slovenščina',
        value: 'sl',
    },
    {
        name: 'Hrvatski',
        value: 'hr',
    },
    {
        name: 'Српски',
        value: 'sr',
    },
    {
        name: 'Македонски',
        value: 'mk',
    },
    {
        name: 'Български',
        value: 'bg',
    },
    {
        name: 'Deutsch',
        value: 'de',
    },
];

interface ILangPart {
    dir: string;
    lang: string;
    onSelect: (lang: string) => void;
}

const LangPart: React.FC<ILangPart> =
    ({lang, dir, onSelect}: ILangPart) => {
        if (lang === 'isv') {
            return (
                <div className={'lang-selector__isv'}>
                    Interslavic
                </div>
            );
        }
        return (
            <Selector
                className={'lang-selector__another'}
                options={languageList}
                value={lang}
                onSelect={(value: string) => {
                    if (dir === 'from') {
                        onSelect(value);
                    }
                    if (dir === 'to') {
                        onSelect(value);
                    }
                }}
            />
        );
    };

const LangSelectorInternal: React.FC<ILangSelectorInternalProps> =
    ({from, to, onSelect}: ILangSelectorInternalProps) => {
        return (
            <div className={'lang-selector'}>
                <LangPart
                    dir={'from'}
                    lang={from}
                    onSelect={(value) => onSelect(value, to)}
                />
                <button
                    type={'button'}
                    aria-label={'Change translation direction'}
                    className={'lang-selector__change-dir-button'}
                    onClick={() => onSelect(to, from)}
                >
                    ⇄
                </button>
                <LangPart
                    dir={'to'}
                    lang={to}
                    onSelect={(value) => onSelect(to, value)}
                />
            </div>
        );
    };

function mapStateToProps({lang}) {
    return { ...lang };
}

function mapDispatchToProps(dispatch) {
    return {
        onSelect: (from, to) => {
            dispatch(langAction({from, to}));
        },
    };
}

export const LangSelector = connect(mapStateToProps, mapDispatchToProps)(LangSelectorInternal);
