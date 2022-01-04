import React, { FC, ChangeEvent, useState } from 'react';
import "../App.css";

interface AutocompleteProps {
  data: ItemData[];
}

interface ItemData {
  name: string;
  code: string;
}

const Autocomplete: FC<AutocompleteProps> = ({ data }) => {
    const [search, setSearch] = useState({
        text: "",
        suggestions: [] as ItemData[]
    });

    const [isComponentVisible, setIsComponentVisible] = useState(true);

    const onTextChanged = async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let suggestions : ItemData[] = [];
        try{
            if (value.length > 0) {
                const regex = new RegExp(`^${value}`, "i");
                suggestions = data.sort().filter((v: ItemData) => regex.test(v.name));
            }
            setIsComponentVisible(true);
            setSearch({ text: value, suggestions });
        }
        catch(error) {
            console.error("Couldn't get data");
        }
    };

    const suggestionSelected = (value: ItemData) => {
        setIsComponentVisible(false);

        setSearch({
            text: value.name,
            suggestions: []
        });
    };

    const { suggestions } = search;

  return (
    <>
        <div className="Box">
            <div className="Instructions">
                <h2>Autocomplete Task</h2>
            </div>
            <div className="Instructions">
                <span>This autocompletes country names:</span>
            </div>
            
            <div
                onClick={() => setIsComponentVisible(false)}
                style={{
                display: isComponentVisible ? "block" : "none",
                width: "200vw",
                height: "200vh",
                backgroundColor: "transparent",
                position: "fixed",
                zIndex: 0,
                top: 0,
                left: 0
                }}
            />
            <div>
                <input
                id="input"
                autoComplete="off"
                value={search.text}
                onChange={onTextChanged}
                type={"text"}
                />
            </div>
            {suggestions.length > 0 && isComponentVisible && (
                <div className="AutocompleteList">
                    {suggestions.map((item: ItemData) => (
                        <span>
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </>
  );
};

export default Autocomplete;