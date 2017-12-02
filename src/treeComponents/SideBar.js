import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const routes = [
	{
        path: '/',
        exact: true,
        sidebar: () => < div className = "sidebar__title" > Home! < /div>,
        main: () => < h2 > Home < /h2>
    },
    {
        path: '/Tracks',
        sidebar: () => < div className = "sidebar__title" > Tracks! < /div > ,
        main:() => < h2 > Tracks < /h2>
    },
    {
        path: '/Playlists',
        sidebar: () => < div className = "sidebar__title" > Playlists! < /div > ,
        main:() => < h2 > Playlists < /h2>
    }
]

const SideBar = ()=>(
	<Router>
		<div className="RoutersBox">
			<div className="SideBarBox">
				<ul className="SideBarList">
					<li><Link to = "/"> Home</Link></li>
					<li><Link to = "/Tracks"> Tracks</Link></li>
					<li><Link to = "/Playlists"> Playlists</Link></li>
				</ul>

				{routes.map((route, index) => (
					<Route
						key={index}
						path = {route.path}
						exact = {route.exact}
						component = {route.sidebar}
					/>
				))}
			</div>
		</div>
	</Router>
)
export default SideBar