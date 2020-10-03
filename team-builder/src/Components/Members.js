import React, { Component } from 'react';
import {Col,Row,Card,CardHeader,CardBody} from 'reactstrap';

const Members = (props) =>{
    console.log(props.members)
    return (
        <div>
            {props.members.map(member=>{
                return <Row className="ml-5 mt-3"><Col md="10">
                    <Card body inverse style={{ backgroundColor: 'green', borderColor: '#333', fontWeight:'bolder' }}>
                    <CardHeader>{member.name}</CardHeader>
                    <CardBody color="primary">
                        {member.email}<br/>{member.role}
                    </CardBody>
                    </Card>
                </Col>
                </Row>
            })}
        </div>
    )
}

export default Members;