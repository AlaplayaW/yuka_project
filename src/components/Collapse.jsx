import React from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class CollapseFaq extends React.Component{
  constructor(props){
    super(props)

    this.state= {
collapse: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render(){
    const {title, description} = this.props;

    return (
      <div style={{textAlign: 'center'}}>
        <Button color="success" onClick={this.toggle} style={{marginBottom: '0.5rem', width: '60%'}}>{this.props.title}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{width: '80'}}>
            <CardBody>
          {this.props.description}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}