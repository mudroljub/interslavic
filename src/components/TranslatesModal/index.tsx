import { hideTranslatesAction } from 'actions';
import Table from 'components/Table';
import * as React from 'react';
import { connect } from 'react-redux';
import { t } from 'translations';
import ModalDialog from '../ModalDialog';
import './index.scss';

interface ITranslatesModalProps {
    close: () => void;
    item: any;
    rawItem: string[];
}

class TranslatesModal extends React.Component<ITranslatesModalProps> {
    private closeButtonRef = React.createRef<HTMLButtonElement>();

    public render() {
        return (
            <ModalDialog
                className={'details-modal'}
                wrapperClassName={'modal-content'}
                open={!!contents}
                onOpen={this.onDialogOpened}
                onClose={this.close}
            >
                {contents}
            </ModalDialog>
        );
    }

    private onDialogOpened = () => {
        const closeButton = this.closeButtonRef.current;
        if (closeButton) {
            closeButton.blur();
        }
    }

    private close = () => {
        this.props.close();
    }
}

function mapDispatchToProps(dispatch) {
    return {
        close: () => dispatch(hideTranslatesAction()),
    };
}

function mapStateToProps({detailModal, results, rawResults}) {
    return {
        item: results[detailModal],
        rawItem: rawResults[detailModal],
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslatesModal);
