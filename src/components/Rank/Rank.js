import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="white f3">
                {`${name}, your current entry count is ...`}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    );
}

export default Rank;

// Ctrl + F2 to change all occurrences in Window 10
// Command + G in Mac OS