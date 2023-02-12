function HeaderLink(props) {
return (
    <div>
        <li className = "nav-item" >  < a className = "nav-link js-scroll-trigger" href = {props.linkUrl} >{props.linkName} </a></li>
</div>
)
}

export default HeaderLink






