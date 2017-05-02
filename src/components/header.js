import React from 'react';

import TopNav from './nav';
import InfoModal from './info';

export default class Header extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            showInfoModal: false
        };
    }

    toggleInfoModal() {
        this.setState({
            showInfoModal: !this.state.showInfoModal
        });
    }

    render() {
        let infoModal;
        if (this.state.showInfoModal) {
            infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
        }

        return (
            <header>
                <TopNav onInfo={() => this.toggleInfoModal()}
                    onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};