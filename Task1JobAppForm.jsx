import bgImg from "../../assets/Image1.jpeg";

export default function JobAppForm() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Application Submitted!"); 
  }  

  return (
    <form className="job-app-form" onSubmit={handleSubmit} style={{
      width: '400px',
      margin: '50px 450px',
      padding: '25px',
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Job Application Form</h2>

      <input type="text" placeholder="First Name" required 
      style={{ width: '95%', 
        padding: '10px', 
        marginBottom: '12px', 
        borderRadius: '5px',
        border: '1px solid #ccc'
        }} />
        
      <input type="email" placeholder="Email Address" required 
      style={{ 
        width: '95%', 
        padding: '10px', 
        marginBottom: '12px', 
        borderRadius: '5px', 
        border: '1px solid #ccc' 
        }} /> 

      <label style={{color:'#eb1e5cff',fontWeight:'Bold', fontSize: '18px'}}>Gender:</label>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ marginRight: '10px' }}>
            <input type="radio" name="gender" value="Male" /> Male</label>
        <label style={{ marginRight: '10px' }}>
            <input type="radio" name="gender" value="Female" /> Female</label>
        <label><input type="radio" name="gender" value="Other" /> Other</label>
      </div>

      <input type="tel" placeholder="Phone Number" required 
      style={{ 
        width: '95%', padding: '10px', 
        marginBottom: '12px', 
        borderRadius: '5px', 
        border: '1px solid #ccc' 
        }} />
      <input type="text" placeholder="Address" required 
      style={{ 
        width: '95%', 
        padding: '10px', 
        marginBottom: '12px', 
        borderRadius: '5px', 
        border: '1px solid #ccc' }} 
        />

      <label style={{color:'#eb1e5cff', fontWeight:'Bold', fontSize: '18px'}}>Skills:</label>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="HTML" /> HTML</label>
        <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="CSS" /> CSS</label>
        <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="JavaScript" /> JavaScript</label>    
        <label style={{ marginRight: '50px' }}>
            <input type="checkbox" value="ReactJS" /> ReactJS</label>
        <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="NodeJS" /> NodeJS</label>
        <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="DBMS" /> DBMS</label>
        <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="Angular" /> Angular</label>
        <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="Other" /> Other</label>    
        
      </div>

      <label style={{color:'#eb1e5cff',fontWeight:'Bold', fontSize: '18px'}}>Applying for Position: </label>
      <select required 
      style={{ 
        width: '100%', 
        padding: '10px', 
        marginBottom: '12px', 
        borderRadius: '5px', 
        border: '1px solid #ccc' 
        }}>

        <option value="">--Select Position--</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
      </select>
      
      <label style={{color:'#eb1e5cff', fontWeight:'Bold', fontSize: '18px'}}>Upload Resume:</label>
      <input type="file" accept=".pdf,.doc,.docx" required 
      style={{ width: '95%', marginBottom: '12px' }} />

      <textarea placeholder="About Yourself" rows="5" 
      style={{ 
        width: '95%', 
        padding: '10px', 
        marginBottom: '12px', 
        borderRadius: '5px', 
        border: '1px solid #ccc' 
        }}>
        </textarea>

      <button type="submit" style={{
        marginLeft: '120px',
        padding: '12px',
        backgroundColor: '#d9567dff',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
      > Submit Application
      </button>

    </form>
  );
}

