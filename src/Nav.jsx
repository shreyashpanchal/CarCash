import React ,{useState,useEffect} from 'react'
import './Nav.css';
import carlogo from './car_logo_only.png'
import AOS from 'aos';
import "aos/dist/aos.css";

function Menu() {
    const[show,set]=useState("container_hide");
    
    
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    const [active, setActive] = useState(false);
    
    const List = () => {
      return(
            <div className="list_components" data-aos="fade-down">
          
                <div className="list_link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">Home</div>
                <div className="list_link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">Services</div>
                <div className="list_link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">About Us</div>
                <div className="list_link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">Contact Us</div>
                <div className="list_link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">Blogs</div>
            </div>
      );
    }  
    
   
    const up=()=>{

 if(show ==="container_show")
 {
  
       set("container_hide");
       
      
 }
       else{
          
        set("container_show");
       
       
      
      }}
    return (
        <>
        <div className="nav_container" >
            <div className="nav_container_left">
              <img src={carlogo} alt="carlogo"/>
               <h3
               style={{
                   fontSize:"30px",
                   color:"white",
                   fontFamily: "'Zen Dots', cursive"
               }}
               >Cash For Cars</h3>
               </div>
               <div className="nav_container_right">
                 
               <button className="btn btn1">Get A Quote</button>
               
               {active && <List />} 

                <div className="Menu-icon"
                onClick={() => {
                setActive(!active);
                }}>
                
                <p className="Menu">Menu</p>
                    <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><g stroke="#D8DBF3" stroke-width="3.2" fill="none" fill-rule="evenodd">
                    <path d="M10.256 1.6c-3.01 0-4.19.228-5.409.88A5.67 5.67 0 0 0 2.48 4.846C1.828 6.065 1.6 7.246 1.6 10.256v5.488c0 3.01.228 4.19.88 5.409a5.67 5.67 0 0 0 2.367 2.368c1.218.651 2.399.879 5.409.879h5.488c3.01 0 4.19-.228 5.409-.88a5.67 5.67 0 0 0 2.368-2.367c.651-1.218.879-2.399.879-5.409v-5.488c0-3.01-.228-4.19-.88-5.409a5.67 5.67 0 0 0-2.367-2.368c-1.218-.651-2.399-.879-5.409-.879h-5.488z"></path>
                    <path d="M6.5 9.75h7.313"></path><path d="M6.5 15.438h13.813"></path></g></svg>
                </div>
            </div>
           
            </div>
           
           
            
            
        
        </>
    )
}

export default Menu
