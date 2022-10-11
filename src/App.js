 
import './App.css'; 

function App() {
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    const first=e.target.fname.value;
    const last=e.target.lname.value;
    const email=e.target.email.value;
    const tel=e.target.tel.value;
    const exp=e.target.exp.value;
    console.log("First name : " +first,"\n","Last name : " +last);
  }
  
 
  return (
  

    <div>  
 
<form onSubmit={handleSubmit}>
<input type="text" name="fname" placeholder="First name"/><br/><br/>
 <input type="text" name="lname"  placeholder="Last name"/><br/><br/>
 <input type="text" name="eduction"  placeholder="eduction"/><br/><br/>
 <input type="email" name="email"  placeholder="email"/><br/><br/>
 <input type="tel" name="tel"  placeholder="tel"/><br/><br/>
 <input type="text" name="exp"  placeholder="exp"/><br/><br/>
 <button>Submit</button>
</form>
    </div>
  );
}

export default App;
