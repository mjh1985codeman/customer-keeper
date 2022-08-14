import Navbar from './components/navbar';
import CreateCustomer from './components/create-customer';
import EditCustomer from './components/edit-customer';
import CustomerList from './components/customerList';
import Comments from './components/comments';


function App() {
    return(
        <>
        <div>
            <Navbar></Navbar>
            <CreateCustomer></CreateCustomer>
            <EditCustomer></EditCustomer>
            <CustomerList name='Fred' address='102 Main St.'>
                <p>This is children props</p>
            </CustomerList>
            <Comments></Comments>
        </div>   
        </>
    )
}

export default App;

/*
Comments / information: 

PROPS: 
What are they? Short for Properties is optional input that any component can accept. 
the value of Props can NOT be changed.  
Function Parameters. 
Props get PASSED to the Component. 

STATE: 
Is MANAGED WITHIN the component. 
Variables declared in the function body. 
State can be changed.
Uses the useState function aka useState hook. 
Simply put State is a variable that is maintained INSIDE a certain COMPONENT. 


*/


