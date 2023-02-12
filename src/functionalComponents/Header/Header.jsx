import React from 'react';
import logo from '../../commonResource/images/icons/logo-sm.png'
import search from '../../commonResource/images/icons/search-icon-sm.png'

import cart from '../../commonResource/images/icons/cart-sm.png'
import HeaderLink from "./HeaderLink"
function Header() {
return (
    <div>
<div> <div className = "nav-wrapper fixed-top">
<div className = "container">
<nav className = "navbar navbar-toggleable-sm navbar-expand-md">
<button className = "navbar-toggler navbar-toggler-right" type = "button" data-toggle = "collapse" data-target = ".navbar-collapse" > ☰ </button> 
<a className = "navbar-brand mx-auto" href = "/" > < img src = { logo }/></a>

<div className = "navbar-collapse collapse" >
<ul className = "navbar-nav nav-justified w-100 nav-fill" >
<HeaderLink linkName ="Mac" linkUrl = "./Mac"/>
<HeaderLink linkName ="iphone" linkUrl = "./iphone"/>
<HeaderLink linkName ="ipad" linkUrl = "/ipad"/> 
<HeaderLink linkName ="watch" linkUrl = "/watch"/> 
<HeaderLink linkName ="tv" linkUrl = "tv"/> 
<HeaderLink linkName ="Music" linkUrl = "/Music"/> 
<HeaderLink linkName ="Support" linkUrl = "/Support"/> 
<HeaderLink linkName ={< img src = { search } />} linkUrl = "/search"/> 
<HeaderLink linkName ={< img src = { cart } />} linkUrl = "/cart"/> 
</ul> 
</div> 
</nav> 
</div> 
</div> 
</div>
</div>
);
}

export default Header

