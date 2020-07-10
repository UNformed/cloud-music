import React from "react";
import { renderRoutes } from "react-router-config";
import { Top, Tab, TabItem } from "./style";
import { NavLink } from "react-router-dom";

function Home(props) {
    const { route } = props;
    return (
        <div>
            <Top>
                <span className="iconfont icon-menu">&#xe65c;</span>
                <span className="title">WebApp</span>
                <span className="iconfont icon-search">&#xe62b;</span>
            </Top>
            <Tab>
                <NavLink to="/recommand" activeClassName="selected">
                    <TabItem>
                        <span>推荐</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/singers" activeClassName="selected">
                    <TabItem>
                        <span>歌手</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/rank" activeClassName="selected">
                    <TabItem>
                        <span>排行</span>
                    </TabItem>
                </NavLink>
            </Tab>
            {renderRoutes(route.routes)}
        </div>
    );
}
export default React.memo(Home);
