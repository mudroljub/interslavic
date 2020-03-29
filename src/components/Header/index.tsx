import * as React from 'react';
import { connect } from 'connect';
import classNames from 'classnames';
import './index.scss';
import { setPageAction } from 'actions';
import { pages } from 'routing';
import { t } from 'translations';

interface IHeaderPropsInternal {
    setPage: (page: string) => void;
    page: string;
}

const HeaderInternal: React.FC<IHeaderPropsInternal> =
    ({page, setPage}: IHeaderPropsInternal) => {
        const [menuIsVisible, setMenuIsVisible] = React.useState(false);

        return (
            <header className={classNames('header', {active: menuIsVisible})}>
                <h1 className={'header__logo'}>
                    <img
                        src={`${BASE_URL}/logo.png`.replace(/\/\//, '/')}
                        height={'30'}
                        className={'header__logo-img'}
                        alt={'logo'}
                        onClick={() => {
                            setPage('dictionary');
                            setMenuIsVisible(false);
                        }}
                    />
                    {t('mainTitle')}
                </h1>
                <button
                    type={'button'}
                    className={'header__show-menu-button'}
                    aria-label={'Menu button'}
                    onClick={() => setMenuIsVisible(!menuIsVisible)}
                >
                    <span className={classNames('lines', {active: menuIsVisible})}/>
                </button>
                <nav className={classNames('header__menu', {active: menuIsVisible})}>
                    {pages.map((({name, value}, i) => (
                        <a
                            key={i}
                            className={classNames('header__menu-item', {active: page === value})}
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(value);
                                setMenuIsVisible(false);
                            }}
                        >
                            {t(name)}
                        </a>
                    )))}
                </nav>
            </header>
        );
    };

function mapDispatchToProps(dispatch) {
    return {
        setPage: (page) => dispatch(setPageAction(page)),
    };
}

function mapStateToProps({page}) {
    return {page};
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderInternal);
