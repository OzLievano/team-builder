import React, { Component } from 'react';
import {Col,Card,CardHeader,CardBody} from 'reactstrap';

const Members = (props) =>{
    console.log(props.members)
    return (
        <div>
            {props.members.map(member=>{
                return <Col sm="5">
                    <Card body inverse style={{ backgroundColor: 'green', borderColor: '#333', fontWeight:'bolder' }}>
                    <CardHeader>{member.name}</CardHeader>
                    <CardBody color="primary">
                        {member.email}<br/>{member.role}
                    </CardBody>
                    </Card>
                </Col>
            })}
        </div>
    )
}

export default Members;