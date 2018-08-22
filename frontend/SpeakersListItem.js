import React from 'react';
import { Link } from 'react-router-dom';
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Detail = ({ title, val }) => (
    <span className="detail">
        <span className="color-gray">{title && `${title}:` || ''} </span>
        <span>{val}</span>
    </span>
)

class Speaker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { visible: true };
        this.hide = this.hide.bind(this);
    }
    hide() {
        this.setState({ visible: false });
    }
    render() {
        if (!this.state.visible) return null;
        const { id, talkTitle, avatar, name, url, 
            position, company, country } = this.props;
        return (
            <section className="post">
                <Link to={`/speaker/${id}`}>
                    <span className="talk-title">{capitalize(talkTitle)}</span>
                </Link>
                <div className="speaker-info">
                    <img src={ avatar } />
                    <div className="speaker-details">
                        <Detail title="" val={name}/>
                        <span className="detail">{url}</span>
                        <Detail title="" val={position}/>
                        <Detail title="Company" val={company}/>
                        <span className="detail">{country}</span>
                    </div>
                </div>
                <span className="hide-speaker" onClick={this.hide}>Hide</span>
            </section>
        );
    }
}

export default Speaker;
