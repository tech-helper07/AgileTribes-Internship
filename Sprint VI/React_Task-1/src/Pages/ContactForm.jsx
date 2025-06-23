import React, {useState} from 'react';

function ContactForm(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    // Proper validation with return to prevent submission
    if(!name || !email || !message){
      alert("Please fill all the fields");
      return; // This prevents the form from submitting
    }

    const formData = {name, email, message};
    setSubmittedData(formData);
    setSubmitted(true);

    // Clear form fields after successful submission
    setName('');
    setEmail('');
    setMessage('');

    // Optional: Hide success message after 30 seconds
    setTimeout(() => setSubmitted(false), 30000);
  }

  return(
    <form onSubmit={(e) => e.preventDefault()}>
      <h1 >Contact Form</h1>
      <div className="space-y-4">
        <div class="form-group">
          <label for="fullName">Full Name *</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class ="form-group">
          <label for="email">Email Address *</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="comments">Additional Information *</label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          onClick={handleSubmit}
          className="button1"
          type='button' // Use type='button' to prevent form submission
        >
          Submit
        </button>
      </div>
      
      {/* //submitted &&  */}
      
      <>
      {submitted && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          <p className="font-semibold">Success! Form submitted with:</p>
          <p><strong>Name:</strong> {submittedData?.name}</p>
          <p><strong>Email:</strong> {submittedData?.email}</p>
          <p><strong>Message:</strong> {submittedData?.message}</p>
        </div>
      )}
      </>
    </form>
  );


}

export default ContactForm;