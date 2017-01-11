const React = require('react');
const Actions = require('../../actions/actions');
var Select = require('react-select');


class Month  extends React.Component {

    render() {
        var options = [
            { value: '', label: 'Month' },
            { value: '01', label: '1' },
            { value: '02', label: '2' },
            { value: '03', label: '3' },
            { value: '04', label: '4' },
            { value: '05', label: '5' },
            { value: '06', label: '6' },
            { value: '07', label: '7' },
            { value: '08', label: '8' },
            { value: '09', label: '9' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' }
        ];

        return(
            <Select value = "1" placeholder='Month' clearable={false}  searchable={true}  options={options} />
        );
    }
}

module.exports = Month;