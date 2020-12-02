import React from 'react';

export default function File(props) {
    return (
        <React.Fragment>
            <object data="/database/document/2020/Understanding Comics - McCloud.pdf" type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href='/database/document/2020/Understanding Comics - McCloud.pdf'>to the PDF!</a></p>
            </object>
            <p style={{textAlign:'justify'}}>8-year-old, orphaned Utena is rescued from her sadness by a mysterious prince who gives her a Rose Signet ring. He promises that the Ring will lead her to him again someday if she never loses her inherent nobility. Utena is so inspired by the unnamed prince that she decides to become a prince herself. 6 years later, 14-year-old Utena attends Ohtori Academy and is in 8th grade, where her noble aspirations lead her to accidentally enter the Dueling Game and become engaged to the cryptic Rose Bride Anthy.</p>
            <p>As the Rose Bride, Anthy is said to obey whomever she is engaged to without question. It is said that the one who wins the duels and possesses the Rose Bride will gain the "Power to Revolutionize the World". Anthy moves in with Utena, much to the latter's chagrin, because despite the power possessing Anthy might give her, Utena cannot bear the thought of participating in a "game" where students fight for control over a classmate's life. She resolves to lose her next duel on purpose, but an encounter with Anthy's former master causes her to question her decision. </p>
        </React.Fragment>
    );
}