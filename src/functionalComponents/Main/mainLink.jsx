function mainLink(props) {
return (
    <div>
<div className= {props.linkUrl}> {props.linkName}</div>
<div className= {props.linkUrl}> {props.linkName}<br/>{props.linkName2}</div>
    </div>
)
}

export default mainLink;
