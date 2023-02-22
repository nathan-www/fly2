import './style.scss';

function FormTextInput(props) {
    return (
        <div className="form-text-input" style={{width: props.width, ...props.styles}}>
            <h3>{ props.label }</h3>
            <input defaultValue={props.value} placeholder={props.placeholder} onChange={props.onChange} {...props.inputProps} />
        </div>
    )
}

export default FormTextInput;
