import React from "react";
import Recommand from "@/application/Recommand";
import Singers from "@/application/Singers";
import Rank from "@/application/Rank";
import Home from "@/application/Home";
import { Redirect } from "react-router";

export default [
    {
        path: "/",
        component: Home,
        routes:[
            {
                path:'/',
                exact:true,
                render: () => <Redirect to={"/recommand"}></Redirect>,
            },
            {
                path: "/recommand",
                component: Recommand,
            },
            {
                path: "/Singers",
                component: Singers,
            },
            {
                path: "/Rank",
                component: Rank,
            },
        ]
    },
];
