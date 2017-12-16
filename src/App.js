import React, { Component } from 'react';
import ReactDom from 'react-dom';
import TrackBox from './treeComponents/TrackBox.js';
import SideBar from'./treeComponents/SideBar';
import axios from 'axios';
import logo from './logo.svg';
import user from './man.svg';



function Header (){
	return(
		<div className="header">
			<div className="logo"><a href="#" className="">
				<img src={logo} alt="logo"/>
			</a></div>
			<input className="searchBox" type="text" name="search" placeholder="&#128269;  Search.."/>
			<div className="user">
				<button className="love-button" ><i className="fa fa-heart" aria-hidden="true"></i></button>
				<button className="inbox-button"><i className="fa fa-envelope" aria-hidden="true"></i></button>
				<div className="user__avatar" ><img src={user} alt="user-avatar"/></div>

				<div className="user__name">Majid Eltayeb</div>
			</div>
        </div>
		);
}


class treeApp extends Component {
  render() {
    return (
      <div className="TreeApp">
        <Header />
        <div className="app-body">
	        <div className="sidebar">
				<div className="list">
					<div className="list__title">Main</div>
					<ul className="list__items actions">
						<li className="list__item action">
							<span className="action__logo"><i className="fa fa-play" aria-hidden="true"></i></span>
							<div className="action__text">Now Playing</div>
						</li>
						<li className="list__item action">
							<span className="action__logo"><i className="fa fa-list" aria-hidden="true"></i></span>
							<div className="action__text">Playlists</div>
						</li>
						<li className="list__item action">
							<span className="action__logo"><i className="fa fa-calendar" aria-hidden="true"></i></span>
							<div className="action__text">Events</div>
						</li>
						<li className="list__item action">
							<span className="action__logo"><i className="fa fa-cubes" aria-hidden="true"></i></span>
							<div className="action__text">Library</div>
						</li>
						<li className="list__item action">
							<span className="action__logo"><i className="fa fa-fire" aria-hidden="true"></i></span>
							<div className="action__text">Popular</div>
						</li>
					</ul>
				</div>
				<div className="list">
					<div className="list__title">Friends</div>
					<ul className="list__items">
						<li className="list__item friend">
							<div className="friend__avatar"><img src="https:image.flaticon.com/icons/svg/206/206853.svg" alt="user-avatar"/></div>
							<div className="friend__name">Wael</div>
							<div className="friend__status"><i className="fa fa-dot-circle-o" aria-hidden="true"></i></div>
						</li>
						<li className="list__item friend">
							<div className="friend__avatar"><img src="https:image.flaticon.com/icons/svg/206/206897.svg" alt="user-avatar"/></div>
							<div className="friend__name">Sarah</div>
							<div className="friend__status"><i className="fa fa-dot-circle-o" aria-hidden="true"></i></div>
						</li>
						<li className="list__item friend">
							<div className="friend__avatar"><img src="https:image.flaticon.com/icons/svg/206/206901.svg" alt="user-avatar"/></div>
							<div className="friend__name">Shady</div>
							<div className="friend__status"><i className="fa fa-dot-circle-o" aria-hidden="true"></i></div>
						</li>
						<li className="list__item friend">
							<div className="friend__avatar"><img src="https:image.flaticon.com/icons/svg/206/206864.svg" alt="user-avatar"/></div>
							<div className="friend__name">Samar</div>
							<div className="friend__status"><i className="fa fa-dot-circle-o" aria-hidden="true"></i></div>
						</li>
						<li className="list__item friend">
							<div className="friend__avatar"><img src="https:image.flaticon.com/icons/svg/206/206860.svg" alt="user-avatar"/></div>
							<div className="friend__name">Ali</div>
							<div className="friend__status"><i className="fa fa-dot-circle-o" aria-hidden="true"></i></div>
						</li>
					</ul>
				</div>
	        </div>
			<div className="contentBox">
				<h1>Tracks</h1>
				<div className="tracks content">
					<div className="track content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://www.nzmusicawards.co.nz/wp-content/uploads/2014/08/ladi6-automatic.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://www.happydesigner.co.uk/wp-content/uploads/2011/01/dj-album-cover-1024x1024.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://cdn.pastemagazine.com/www/blogs/lists/2009/11/15/dangerdoom_mouse_mask.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="http://www.designformusic.com/wp-content/uploads/2015/10/insurgency-digital-album-cover-design.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://www.nzmusicawards.co.nz/wp-content/uploads/2014/09/Grayson-Gilmour-Infinite-Life-Album-Cover.jpg" alt="ablumCover"/></a></div>
				</div>
				<h1>Playlists</h1>
				<div className="playlists content">
					<div className="playlist content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="playlist content__item"> <a href="#"> <img src="https://www.nzmusicawards.co.nz/wp-content/uploads/2014/08/ladi6-automatic.jpg" alt="ablumCover"/></a></div>
					<div className="playlist content__item"> <a href="#"> <img src="https://www.happydesigner.co.uk/wp-content/uploads/2011/01/dj-album-cover-1024x1024.jpg" alt="ablumCover"/></a></div>
					<div className="playlist content__item"> <a href="#"> <img src="https://cdn.pastemagazine.com/www/blogs/lists/2009/11/15/dangerdoom_mouse_mask.jpg" alt="ablumCover"/></a></div>
					<div className="playlist content__item"> <a href="#"> <img src="http://www.designformusic.com/wp-content/uploads/2015/10/insurgency-digital-album-cover-design.jpg" alt="ablumCover"/></a></div>
					<div className="playlist content__item"> <a href="#"> <img src="https://www.nzmusicawards.co.nz/wp-content/uploads/2014/09/Grayson-Gilmour-Infinite-Life-Album-Cover.jpg" alt="ablumCover"/></a></div>
				</div>
				<h1>Events</h1>
				<div className="events content">
					<div className="event content__item"> <a href="#"> <img src="https://i.pinimg.com/736x/8b/27/66/8b276614b356e2d840048de6c39fdc01--good-riddance-music-albums.jpg" alt="ablumCover"/></a></div>
					<div className="event content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="event content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="event content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="event content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="event content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
				</div>
				<h1>Library</h1>
				<div className="library content">
					<div className="album content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="album content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="album content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="album content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="album content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="album content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
				</div>
				<h1>Popular</h1>
				<div className="popular content">
					<div className="track content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
					<div className="track content__item"> <a href="#"> <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/17.jpg" alt="ablumCover"/></a></div>
				</div>
			</div>
		</div>
		<div className="footer">Footer</div>
      </div>
    );
  }
}

export default treeApp;
        // <SideBar  />
