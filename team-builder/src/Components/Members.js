import React, { Component } from 'react';
import {Col,Card} from 'reactstrap';

const Members = (props) =>{
    console.log(props.members)
    return (
        <div>
            {props.members.map(member=>{
                return <Col sm="5">
                    <Card>
                    {member.name}
                    </Card>
                </Col>
            })}
        </div>
    )
}

export default Members;