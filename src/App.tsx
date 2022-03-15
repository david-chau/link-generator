import React, { useState } from 'react';
import { Link } from "@mui/material";
import FreeSolo from './components/FreeSolo';
import links from './links.json';
import options from './options.json';

import './App.css';

const App = () => {
    const [text, setText] = useState<string>('');

    return (
        <div className="link-generator">
          <FreeSolo
              text={text}
              setText={setText}
              options={options}
          />
            {!!text && Object
                .entries(links)
                .map(([key, value]) =>
                    <Link target="_blank" key={key} href={`${value}${text}`}>{key}</Link>)}
        </div>
    );
}

export default App;
