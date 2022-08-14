const CustomerList = (props) => {
    return<>
    <h1>Hello {props.name} you live at {props.address}</h1>
    {props.children}
    </>
  }
  
  export default CustomerList;