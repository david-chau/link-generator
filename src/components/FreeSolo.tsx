import { SyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import './FreeSolo.css';

interface FreeSoloProps {
    text: string,
    setText: (value: string) => void;
    options: string[];
}

const FreeSolo = (props: FreeSoloProps) => {
    const { text, setText, options } = props;

    return (
        <div className={'free-solo'}>
            <Autocomplete
                freeSolo
                options={options}
                renderInput={(params) => <TextField {...params} label="Text" />}
                value={text}
                onChange={(e: SyntheticEvent) => {
                    // @ts-ignore
                    if (e.target?.textContent != null) {
                        // @ts-ignore
                        setText(e.target?.textContent)
                    }
                }}

                onInputChange={(e: SyntheticEvent) => {
                    // @ts-ignore
                    if (e.target?.value != null) {
                        // @ts-ignore
                        setText(e.target?.value)
                    }
                }}
            />
        </div>
    );
}

export default FreeSolo;