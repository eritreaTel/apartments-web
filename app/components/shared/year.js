const React = require('react');
const Actions = require('../../actions/actions');
var Select = require('react-select');

class Year  extends React.Component {

    render() {
        var options = [
            { value: '', label: 'Month' },
            { value: '2017', label: '2017' },
            { value: '2018', label: '2018' },
            { value: '2019', label: '2019' },
            { value: '2020', label: '2020' },
            { value: '2021', label: '2021' },
            { value: '2022', label: '2022' },
            { value: '2023', label: '2023' },
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' }
        ];

        return(
            <Select value = "1" placeholder='Year' clearable={false}  searchable={true}  options={options} />
        );
    }
}

module.exports = Year;