import React from 'react'
import appletv from '../../commonResource/images/icons/apple-tv-logo.png'
import banker from '../../commonResource/images/home/banker.png'
import watchseries5 from '../../commonResource/images/icons/watch-series5-logo.png'
import arcade from '../../commonResource/images/icons/arcade.png'


function Main() {
    return (
        <div>
            <section className="first-hightlight-wrapper">
		<div className="container">
			<mainLink linkUrl ="new-alert" linkName="New"/>
			<mainLink linkUrl ="title-wraper bold black" linkName="iPad Pro "/>
			<div className="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Order</a></li>
				</ul> 
			</div>
			<div className="ipod-caption row">
			<mainLink linkUrl ="col-sm-12 col-md-6 text-md-right" linkName="iPad Pro available starting 3.25"/>
			<mainLink linkUrl ="col-sm-12 col-md-6 text-md-left" linkName="Magic Keyboard coming in May"/>
			</div>
		</div>
	</section>
    <section className="second-hightlight-wrapper">
		<div className="container">
		<mainLink linkUrl ="new-alert" linkName="New"/>
		<mainLink linkUrl ="title-wraper bold black" linkName="MacBook Air"/>
		<mainLink linkUrl ="description-wrapper black" linkName="Twice the speed. Twice the storage."/>
		<mainLink linkUrl ="price-wrapper grey" linkName="From $999."/>

			<div className="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section>
    <section className="third-hightlight-wrapper">
		<div className="container">
		<mainLink linkUrl ="title-wraper bold" linkName="iPhone 11 Pro"/>
		<mainLink linkUrl ="description-wrapper" linkName="Pro cameras. Pro display. Pro performance."/>
		<mainLink linkUrl ="price-wrapper" linkName="From $24.95/mo. or $599 with trade‑in."/>
			<div className="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section>
    <section class="fourth-heghlight-wrapper">
		<div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">
					<div class="left-side-container">
		<mainLink linkUrl ="title-wraper" linkName="iPhone 11"/>
		<mainLink linkUrl ="description-wraper" linkName="Just the right amount of everything."/>
		<mainLink linkUrl ="price-wrapper" linkName="From $18.70/mo. or $499 with trade‑in.<sup>1</sup>"/>

						<div class="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Apply now</a></li>
							</ul> 
						</div>
					</div>
				</div>
				<div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container">
		<mainLink linkUrl ="title-wraper white" linkName="Get the latest CDC response to COVID-19. "/>

						<div class="links-wrapper white">
							<ul>
								<li><a href="">Watch the PSA</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
    <section class="fifth-heghlight-wrapper">
		<div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">
					<div class="left-side-container">
						<div class="top-logo-wrapper">
		<mainLink linkUrl ="logo-wrapper" linkName={<img src={appletv}/>}/>
						</div>
						<mainLink linkUrl ="tvshow-logo-wraper" linkName={<img src={banker}/>}/>
						<mainLink linkUrl ="watch-more-wrapper" linkName="Watch now on the Apple TV App"/>
					</div>
				</div>
				<div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container">
						<div class="top-logo-wrapper">
		<mainLink linkUrl ="logo-wrapper" linkName={<img src={watchseries5}/>}/>
						</div>
						<mainLink linkUrl ="description-wraper" linkName="With the Always-On Retina display." linkName2="You’ve never seen a watch like this."/>
						<div class="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
    <section class="sixth-heghlight-wrapper">
		<div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">
					<div class="left-side-container">
						<div class="top-logo-wrapper">
		<mainLink linkUrl ="logo-wrapper" linkName={<img src={arcade}/>}/>
						</div>
		<mainLink linkUrl ="description-wraper white" linkName="Agent 8 is a small hero on a big mission."/>
						<div class="links-wrapper">
							<ul>
								<li><a href="">Play now<sup>2</sup></a></li>
								<li><a href="">Learn about Apple Arcade</a></li>
							</ul> 
						</div>						
					</div>
				</div>
				<div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container">
		<mainLink linkUrl ="title-wraper" linkName="Apple Card Monthly Installments"/>
		<mainLink linkUrl ="description-wraper" linkName="Pay for your next iPhone over time, interest-free with Apple Card."/>
						<div class="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Apply now</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
        </div>
    )
}

export default Main