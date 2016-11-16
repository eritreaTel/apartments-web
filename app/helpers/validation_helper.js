const React = require('react');
module.exports = {
    getRules() {
        return {
            required: {
                rule: value => {
                    return value.toString().trim();
                },
                hint: value => {
                    return <span className='form-error is-visible'>*</span>
                }
            },
            email: {
                rule: value => {
                    //return validator.isEmail(value);
                    return true;
                },
                hint: value => {
                    return <span className='form-error is-visible'>{value} isnt an Email.</span>
                }
            },
            passwordEquality: {
                // rule function can accept argument:
                // components - components registered to Form mapped by name
                rule: (value, components) => {
                    const password = components.password.state;
                    const passwordConfirm = components.passwordConfirm.state;
                    const isBothUsed = password
                        && passwordConfirm
                        && password.isUsed
                        && passwordConfirm.isUsed;
                    const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

                    if (!isBothUsed || !isBothChanged) {
                        return true;
                    }

                    return password.value === passwordConfirm.value;
                },
                hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
            }
        }
    }
}


