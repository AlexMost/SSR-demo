import React from 'react';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Detail = ({ title, val }) => (
    <span className="detail">
        <span className="color-gray">{title && `${title}:` || ''} </span>
        <span>{val}</span>
    </span>
)

const Speaker = (props) => (
    <section className="post">
        <span className="talk-title">{capitalize(props.talkTitle)}</span>
        <div className="speaker-info">
            <img src={ props.avatar } />
            <div className="speaker-details">
                <Detail title="" val={props.name}/>
                <span className="detail">{ props.url }</span>
                <Detail title="" val={props.position}/>
                <Detail title="Company" val={props.company}/>
                <span className="detail">{ props.country }</span>
            </div>
        </div>
    </section>
)

export default Speaker;
