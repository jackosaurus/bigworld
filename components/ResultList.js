import React from 'react';
import ResultItem from './ResultItem';

const { arrayOf, shape, string } = React.PropTypes;

function ResultList({ results }) {
    const resultItems = results.map(el => (
            <ResultItem
                id={el.name}
                logo={el.logo_url}
                title={el.display_name}
                alt={el.display_name}
            />
    ));


    return (
        <ul className="resultList">
            {resultItems}
        </ul>
    );
}

ResultList.propTypes = {
    results: arrayOf(shape({
        logo_url: string,
        display_name: string,
    })),
};

ResultList.defaultProps = {
    results: [],
};

export default ResultList;
