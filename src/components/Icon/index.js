import * as BootstrapIcons from 'react-bootstrap-icons';

function Icon(props) {

    const X = BootstrapIcons[props.name];

    return (
        <X {...props} />
    )
}

export default Icon;