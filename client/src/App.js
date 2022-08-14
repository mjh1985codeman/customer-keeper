import Navbar from './components/navbar';
import CreateCustomer from './components/create-customer';
import EditCustomer from './components/edit-customer';
import CustomerList from './components/customerList';


function App() {
    return(
        <>
        <div>
            <Navbar></Navbar>
            <CreateCustomer></CreateCustomer>
            <EditCustomer></EditCustomer>
            <CustomerList></CustomerList>
        </div>   
        </>
    )
}

export default App;