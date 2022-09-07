import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    setHeadComponents([
        <meta key={0} name="viewport" content="width=device-width, initial-scale=1.0"/>,
        <meta key={1} name="google-site-verification" content="eFxAGv7YuZjQyUijHIYvtmMEvL14Mprtp9BEsdVhrPo" />,
        <script key={3} data-ad-client="ca-pub-5841067487438177" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>,
        <script key={4} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5841067487438177" crossOrigin="anonymous"></script>
    ]),
    setPostBodyComponents([

    ]);
};
