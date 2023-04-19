import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {

 const [formData,setFormData] = useState(
  {
    name:"",
    email:"",
    subject:"",
    message:""
  }
 )
 const [rFormData,setRFormData] = useState(
  {
    name:"",
    email:"",
    subject:"",
    message:""
  })

 const handleChange = (event)=>{
    setFormData(prev=>{
      return{
        ...prev,
        [event.target.name] : event.target.value
      }
    })
 }

  const submitForm = async (e) => {
    e.preventDefault();
   try{
    await fetch("/api/contact",{
      method:"POST",
      body:JSON.stringify(formData)
    })
    setFormData(rFormData)
    alert("Success")
   }catch (error) {
     console.log(error)
   }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input 
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required  
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
