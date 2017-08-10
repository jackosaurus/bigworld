/* eslint-disable new-cap */
import React from 'react';
import classNames from 'classnames';
import { bindAll } from 'lodash';

const { string, node, func, bool } = React.PropTypes;

class SearchField extends React.Component {
    static propTypes = {
        type: string,
        name: string.isRequired,
        className: string,
        onChange: func,
        onFocus: func,
        onBlur: func,
    };

    static defaultProps = {
        type: 'text',
    };

    constructor(props) {
        super(props);
        bindAll(this, 'handleChange', 'handleBlur', 'handleFocus', 'handleKeyDown');
        this.eventKeyCode = undefined;
    }

    state = {
        hasFocus: false,
        hasHadFocus: false,
        value: '',
    };

    handleChange(event) {
        event.preventDefault();
        // let value = event.currentTarget.value;

        // this.eventKeyCode = undefined;
        // this.props.setValue(value);

        this.setState({
            value: event.target.value,
        });

        if (this.props.onChange) this.props.onChange(event, value);
    }

    handleKeyDown(e) {
        this.eventKeyCode = e.keyCode;
    }

    handleFocus() {
        this.setState({
            hasFocus: true,
        });

        if (this.props.onFocus) this.props.onFocus(this.getValue());
    }

    handleBlur() {
        this.setState({
            hasFocus: false,
            hasHadFocus: true,
        });

        if (this.props.onBlur) this.props.onBlur(this.getValue());
    }

    getValue() {
        return this.state.value;
    }

    render() {
        const {
            type,
            name,
            labelText,
            className,
        } = this.props;

        const id = `${name}-field`;
        const classes = classNames(className, 'form-field', `${type}-input`, {
            'has-focus': this.state.hasFocus,
            'has-value': !!this.getValue(),
        });

        return (
            <div className={classes}>
                <input
                    id={id}
                    name={name}
                    type={type}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    value={this.getValue()}
                />
            </div>
        );
    }
}

export default SearchField;
