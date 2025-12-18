import React from "react";
import KeralaImage from "../../assets/Kerala.jpg";

export default function OnlineQuiz() {
  const CalculateMark = (e) => {
    e.preventDefault();
    let score = 0;

    if (e.target.q1.value === "d") score++;
    if (e.target.q2.value === "b") score++;
    if (e.target.q3.value === "c") score++;
    if (e.target.q4.value === "d") score++;
    if (e.target.q5.value === "b") score++;

    alert("Your Score is " + score);
  };

  return (
    <div
      style={{
        marginLeft: "610px",
        backgroundImage: `url(${KeralaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px ",
      }}
    >
      {/* Child container for text and quiz */}
      <div
        style={{
          maxWidth: "650px",
          width: "90%",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "rgba(173, 188, 167, 0.85)", // makes text readable
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "green" }}>Quizz</h1>

        <form onSubmit={CalculateMark}>
          <label style={{display: "block", marginBottom: "5px", fontSize: "20px", fontFamily: "Arial, sans-serif" }}>Mail ID:</label>
          <input type="email" name="email" required style={{ width: "100%", marginBottom: "10px", height: "30px" }} />

          <label style={{display: "block", marginBottom: "5px", fontSize: "20px", fontFamily: "Arial, sans-serif" }}>Name:</label>
          <input type="text" name="name" required style={{ width: "100%", marginBottom: "10px", height: "30px" }} />

          <label style={{display: "block", marginBottom: "5px", fontSize: "20px", fontFamily: "Arial, sans-serif" }}>Select Course:</label>
          <select name="course" style={{ width: "100%", marginBottom: "20px", height: "30px", fontSize: "16px", fontFamily: "Arial, sans-serif" }} >
            <option>-- Select Course --</option>
            <option>B.Sc. CS</option>
            <option>B.Sc. CS with AI</option>
            <option>B.Sc. IT</option>
            <option>B.Sc. CS with COG SYS</option>
            <option>B.Sc. CS with Cybersecurity</option>
          </select>

          <hr />

          <h3 style={{ fontFamily: "Arial, sans-serif", color: "#186606ff"}}>Let's see what you know about KERALA!</h3>
          
          <div style={{ fontSize: "21px", lineHeight: "1.7", fontFamily: "Arial, sans-serif" }}>

1. Which state is known as "God’s Own Country"?<br />
<input type="radio" name="q1" value="a" /> Tamil Nadu <br />
<input type="radio" name="q1" value="b" /> Karnataka <br />
<input type="radio" name="q1" value="c" /> Andhra Pradesh <br />
<input type="radio" name="q1" value="d" /> Kerala <br /><br />

2. What is the official language of Kerala?<br />
<input type="radio" name="q2" value="a" /> Tamil <br />
<input type="radio" name="q2" value="b" /> Malayalam <br />
<input type="radio" name="q2" value="c" /> Kannada <br />
<input type="radio" name="q2" value="d" /> Hindi <br /><br />

3. Which dance form is famous in Kerala?<br />
<input type="radio" name="q3" value="a" /> Bharatanatyam <br />
<input type="radio" name="q3" value="b" /> Kathak <br />
<input type="radio" name="q3" value="c" /> Kathakali <br />
<input type="radio" name="q3" value="d" /> Odissi <br /><br />

4. What is the capital city of Kerala?<br />
<input type="radio" name="q4" value="a" /> Kochi <br />
<input type="radio" name="q4" value="b" /> Kozhikode <br />
<input type="radio" name="q4" value="c" /> Thrissur <br />
<input type="radio" name="q4" value="d" /> Thiruvananthapuram <br /><br />

5. Which festival is celebrated as the harvest festival of Kerala?<br />
<input type="radio" name="q5" value="a" /> Diwali <br />
<input type="radio" name="q5" value="b" /> Onam <br />
<input type="radio" name="q5" value="c" /> Pongal <br />
<input type="radio" name="q5" value="d" /> Holi <br /><br />

</div>

         <input type="submit" value="Submit" style={{ padding: "10px 20px", marginLeft: "225px", cursor: "pointer", color: "white", backgroundColor: "#186606ff", borderRadius: "5px" }} />
        </form>
      </div>
    </div>
  );
}

