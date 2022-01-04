import React, { FC } from 'react';
import "../App.css";

interface AutocompleteProps {
  word: string;
}

const Autocomplete: FC<AutocompleteProps> = ({ word }) => {
  return (
    <>
        <div className="Box">
            <div className="Instructions">
                <h2>Autocomplete Task</h2>
            </div>
            <div className="Instructions">
                <span>Start typing to see it work:</span>
            </div>
        </div>
    </>
  );
};

export default Autocomplete;