function FooterLink(props) {
return (
    <div>
        <li> <a href = {props.linkUrl} > {props.linkName} </a></li>
    </div>
)
}

export default FooterLink