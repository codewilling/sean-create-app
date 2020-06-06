import * as React from "react";

export interface HelloProps { name: string; mission: string; }

export const Hello = (props: HelloProps) => <h1>Hello {props.name}! Am i {props.mission}? I think so</h1>;