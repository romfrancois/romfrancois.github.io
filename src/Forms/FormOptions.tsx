import React from 'react';

import Form from './Form';
import { TextStyle } from '../Helpers/text';

const currentFormName = 'Options';

export enum Options {
    MENAGE = 'menage',
    DRAPS_LINGES_BAIN = 'drapsLingesBain'
}

export type OptionsTabProps = {
    currentUserId,
    saveFormsData,
    loadSavedData
}

export type OptionsTabState = {
    menagePrix: number,
    drapsLingesBainPrix: number
};

const initState: OptionsTabState = {
    menagePrix: 0,
    drapsLingesBainPrix: 0
};

export default class FormOptions extends Form<OptionsTabProps, OptionsTabState> {
    constructor(props: OptionsTabProps) {
        super(props, currentFormName, initState);
    }

    handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('event: ', event);
        console.log('event: ', event.target);
        console.log('event: ', event.target.name);
        console.log('event: ', event.target.checked);

        let inputTextToReveal = document.querySelector(`input[id=${Options.MENAGE}]`);
        if (event.target.name === Options.DRAPS_LINGES_BAIN) {
            inputTextToReveal = document.querySelector(`input[id=${Options.DRAPS_LINGES_BAIN}]`);
        }

        if (event.target.checked) {
            inputTextToReveal.classList.remove('hide');
        } else {
            inputTextToReveal.classList.add('hide');
        }

        // var otherCheckbox = document.querySelector('input[value="other"]');
        // var otherText = document.querySelector('input[id="otherValue"]');
        // otherText.style.visibility = 'hidden';

        // otherCheckbox.onchange = function () {
        //     if (otherCheckbox.checked) {
        //         otherText.style.visibility = 'visible';
        //         otherText.value = '';
        //     } else {
        //         otherText.style.visibility = 'hidden';
        //     }
        // };
    }

    render() {
        const {
            menagePrix,
            drapsLingesBainPrix
        } = this.state as OptionsTabState;

        return (
            <form>
                {/* <fieldset className='fieldset-no-border'>
                    <div className='wrapper_input_fields_options'>
                        <div className='input-address-two checkbox'>
                            <input 
                                type='checkbox' 
                                name={Options.MENAGE}
                                className='input-address-two input-checkbox'
                                onChange={this.handleCheckbox.bind(this)}
                            />
                            <label 
                                className='input-address-two label-checkbox'
                            >Ménage?</label>
                        </div>

                        <input 
                            type='number' 
                            id='menage' 
                            name='menagePrix'
                            placeholder='Montant du ménage'
                            className='input-address-three input-very-short hide'
                            value={menagePrix}
                            onChange={this.handleChange.bind(this, TextStyle.NO_STYLE)}
                            onBlur={this.saveData}
                        />
                    </div>
                </fieldset>
                
                <fieldset className='fieldset-no-border'>
                    <div className='wrapper_input_fields_options'>
                        <div className='input-address-two checkbox'>
                            <input 
                                type='checkbox' 
                                name={Options.DRAPS_LINGES_BAIN}
                                className='input-address-two input-checkbox'
                                onChange={this.handleCheckbox}
                            />
                            <label className='input-address-two label-checkbox'>Draps & Linges de bain ?</label>
                        </div>

                        <input 
                            type='number' 
                            id='drapsLingesBain' 
                            name='drapsLingesBainPrix'
                            placeholder='Montant pour les draps & linges de bain'
                            className='input-address-three input-very-short hide'
                            value={drapsLingesBainPrix}
                            onChange={this.handleChange.bind(this, TextStyle.NO_STYLE)}
                            onBlur={this.saveData}
                        />
                    </div>
                </fieldset> */}


                <fieldset>
                    <div className='items'>
                        <div className='twoColumn'>
                            <input
                                type='checkbox'
                                name={Options.MENAGE}
                                onChange={this.handleCheckbox.bind(this)}
                            />
                            <label>Ménage?</label>
                        </div>
                        <div className='twoColumn'>
                            <input
                                type='number'
                                id='menage'
                                name='menagePrix'
                                placeholder='Montant du ménage'
                                value={menagePrix}
                                className='hide'
                                onChange={this.handleChange.bind(this, TextStyle.NO_STYLE)}
                                onBlur={this.saveData}
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div className='items'>
                        <div className='twoColumn'>
                            <input
                                type='checkbox'
                                name={Options.DRAPS_LINGES_BAIN}
                                onChange={this.handleCheckbox}
                            />
                            <label>Draps & Linges de bain ?</label>
                        </div>
                        <div className='twoColumn'>
                            <input
                                type='number'
                                id='drapsLingesBain'
                                name='drapsLingesBainPrix'
                                placeholder='Montant pour les draps & linges de bain'
                                value={drapsLingesBainPrix}
                                className='hide'
                                onChange={this.handleChange.bind(this, TextStyle.NO_STYLE)}
                                onBlur={this.saveData}
                            />
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}
