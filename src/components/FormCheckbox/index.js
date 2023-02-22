import { useState } from 'react';
import Icon from '../Icon';
import './style.scss';
import classNames from 'classnames';

function FormCheckbox(props) {

    return (
        <div className="form-checkbox flex">
            <div className="v-center">
                <div className={classNames(["checkbox","v-center",{"checked": props.checked}])} onClick={() => props.onSetChecked(!props.checked)}>
                    <Icon className="check-icon" name="Check" color="#fff" size={16} />
                </div>
            </div>
            <div className="v-center">
                <h3>{ props.label }</h3>
            </div>
        </div>
    )
}

export default FormCheckbox;
