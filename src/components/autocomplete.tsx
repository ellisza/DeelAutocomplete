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

    const matchFunction = async (value: any) => {
        let suggestions : ItemData[] = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, "i");
            suggestions = data.sort().filter((v: ItemData) => regex.test(v.name));
        }
        setIsComponentVisible(true);
        setSearch({ text: value, suggestions });
    }

    const onTextChanged = async (e: ChangeEvent<HTMLInputElement>) => {
        try{
            await(matchFunction(e.target.value));
        } catch (error) {
            console.log(error);
        }
    };

    const suggestionSelected = (value: ItemData) => {
        setSearch({
            text: value.name,
            suggestions: []
        });

        setIsComponentVisible(false);
    };

    const { suggestions } = search;

  return (
    <>
        <div className="Box">
            <div className="Title">
                <h2>Autocomplete Task</h2>
            </div>
            <div className="Instructions">
                <span>Autocomplete with country names:</span>
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
                className="InputBox"
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
                        <div onClick={() => suggestionSelected(item)} className="Option">
                            <span>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>
  );
};

export default Autocomplete;