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
        onKeyDown: func,
        onFocus: func,
        onBlur: func,
    };

    static defaultProps = {
        type: 'text',
        onChange: () => null,
        onKeyDown: () => null,
        onFocus: () => null,
        onBlur: () => null,
    };

    constructor(props) {
        super(props);
        bindAll(this, [
            'handleChange',
            'handleBlur',
            'handleFocus',
            'handleKeyDown',
        ]);
    }

    state = {
        hasFocus: false,
        hasHadFocus: false,
        value: '',
    };

    handleChange(event) {
        event.preventDefault();

        this.setState(
            { value: event.target.value },
            () => this.props.onChange(event, this.getValue())
        );
    }

    handleKeyDown(e) {
        this.props.onKeyDown(e);
    }

    handleFocus() {
        this.setState({
            hasFocus: true,
        });

        this.props.onFocus(this.getValue());
    }

    handleBlur() {
        this.setState({
            hasFocus: false,
            hasHadFocus: true,
        });

        this.props.onBlur(this.getValue());
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
        const classes = classNames(className, 'searchField', `${type}-input`, {
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
                    placeholder="e.g. australia"
                />
            </div>
        );
    }
}

export default SearchField;
