import React from "react";
import ReactWebcam from '../barcode-scanner/react-webcam';
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { Link, Redirect} from "react-router-dom";

const homePageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh",
};

export default class InputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      barCode: "",
    };
  }



  render() {
    const { inputValue, barCode } = this.state;
    if (barCode) {return <Redirect to={`/product/${barCode}`}/>}
    return (
      <div className="d-none d-lg-block" style={{backgroundColor:"rgb(255, 231, 94)", homePageStyle}}>
      
        <SearchInput onChange={inputValue => this.setState({ inputValue })} value={inputValue}/>
        <SearchButton barcode={inputValue} />
        <ReactWebcam onScan={barCode => {this.setState({ barCode });
        
    }
    }
    />
      </div>
    );
    
  }
}

