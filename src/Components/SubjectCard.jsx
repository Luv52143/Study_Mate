export default function SubjectCard({
    id,
    Subject,
    Hours,
    Completed,
    updateSubject,
    updateHours,
    handlepercent,
    handlecomplete,
    handledelete,
    dark
}){let per;
    if(Number(Hours)>0){
    per=Completed/Number(Hours)*100;
    per=Math.round(per);
    }
else 
    per=0;
    
    
    return(
        <>
    <div className={`flex flex-col h-[30vh] w-[25vw] border-4 rounded-xl shadow-2xl bg-blue-50 mx-3 my-4 ${dark===true?"border-white shadow-white":"border shadow-black"} `}>
        <div className="flex justify-around items-center ">
            <div className="font-bold font-serif">Subject:{Subject}</div>
            <div className="font-bold font-serif">Goal:{Hours} Hours</div>

        </div>
        <div className="flex  justify-center items-center mt-8"><p>Progress:</p> <div className="ml-2 h-3 w-[10vw] border rounded-2xl"> <div className= {`h-[10.8px]  bg-pink-300 rounded-2xl` }  style={{ width: `${per}%` }}></div></div><p className="italic">{per}%</p></div>
        <div className="flex justify-around mt-8 ">
            <button className="border rounded-2xl p-1 shadow-lg bg-amber-100 cursor-pointer" onClick={()=>handlepercent(id)}>+1 hr</button>
            <button className="border rounded-2xl p-1 shadow-lg bg-amber-50 cursor-pointer" onClick={()=>handlecomplete(id)}>Mark Complete</button>
            <button className="border rounded-2xl p-1 shadow-lg bg-amber-200 cursor-pointer" onClick={()=>handledelete(id)}>🗑 Delete</button>
        </div>
    </div>
    </>
    )
}
//<input type="number" min="0" className="w-10 pl-1" value={Hours}  onChange={(e)=> updateHours(id,e.target.value)}/>Hours