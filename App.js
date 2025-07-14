import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Header from "./src/Components/Header.jsx";
import SubjectCard from "./src/Components/SubjectCard.jsx";
import Modal from "./src/Components/Modal.jsx";

function App()
    {
        const[Study,setStudy]=useState([]);
        const [dark,setdark]=useState(false);
        const [showModal, setShowModal] = useState(false);
        
        useEffect(()=>
        {
            const data=JSON.parse(localStorage.getItem("study"));
            if(data)
                setStudy(data);

        },[])
        useEffect(()=>{
            localStorage.setItem("study",JSON.stringify(Study));
            
        },[Study])

        useEffect(()=>
        {
            const mode=JSON.parse(localStorage.getItem("modes"));
            if(mode)
                setdark(mode);

        },[])
        useEffect(()=>{
            localStorage.setItem("modes",JSON.stringify(dark));
            
        },[dark])

       function handleAdd(subject, hours) {
    setStudy([
      ...Study,
      {
        id: crypto.randomUUID(),
        Subject: subject,
        Hours: hours,
        Completed: 0
      }
    ]);
  }
        function updateSubject(id,newSub){
           
            setStudy((prev)=>
                    prev.map((val)=>
                        val.id===id?{...val, Subject:newSub}:val
        )
            );

        }
        function updateHours(id,newHrs)
        {
            
            setStudy((prev)=>
            
                
                    prev.map((val)=>
                        val.id===id?{...val, Hours:newHrs} :val
                    )
                
            );
        }
        function handlepercent(id)
        {
           setStudy((prev)=>
            prev.map((val)=>
                (val.id===id&&Number(val.Hours)>0&&val.Completed<Number(val.Hours))?
                     {...val,Completed:Number(val.Completed)+1}:
                 val
            

            )
        )
        }
      function handlecomplete(id)
      {
        setStudy((prev)=>
            prev.map((val)=>
                (val.id===id&&Number(val.Hours)>0)?
                     {...val,Completed:Number(val.Hours)}:
                 val
            

            )
        )
      }  
      function handledelete(id)
      {
         setStudy((prev)=>
            prev.filter((val)=>{
               return (val.id!=id)
            }
                
             )
        )
      }
      function handleMode()
      {
        setdark((prev)=>
            !prev
        )
      }
      
     

      










          



        return(
        
            <div className={`min-h-screen  ${dark===true? "bg-black":"bg-white"}`}>
            
            <div className=" flex justify-between p-3 items-center h-[15vh] bg-gray-700">
            <Header ></Header>
            <button className="border border-white text-white rounded-2xl p-2 mr-3 cursor-pointer" onClick={handleMode} >{dark===true? " ☀️Light Mode":" 🌙Dark Mode"}</button>
        </div> 
            
            
            <div className="text-center ">

             <button className=" mt-3 bg-amber-50 p-3 text-xl font-serif font-bold border-2 rounded-3xl shadow-xl cursor-pointer" onClick={() => setShowModal(true)}>Add Subject</button></div>
             <div className="flex  flex-wrap justify-center mt-7 ">
                {Study.map((value)=>
             <SubjectCard key={value.id} id={value.id} Subject={value.Subject} Hours={value.Hours} Completed={value.Completed} updateSubject={updateSubject} updateHours={updateHours} handlepercent={handlepercent} handlecomplete={handlecomplete} handledelete={handledelete} dark={dark}></SubjectCard>)
                }
             </div>
             {/* ✅ SHOW MODAL ONLY WHEN showModal IS TRUE */}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onCreate={(subject, hours) => {
            handleAdd(subject, hours);
            setShowModal(false);
          }}
        />
      )}
             </div>
             
             
            
        )
    }











const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);