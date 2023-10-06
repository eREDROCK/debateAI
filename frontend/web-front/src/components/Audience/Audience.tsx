import React from "react";
import Image from "next/image";

const  Audience=({role, isInputting,isLoading}: {role: number; isInputting: boolean; isLoading: boolean})=>{

  if (role === 0) {//ユーザー賛成派観客
    return(
      <div>
         { isInputting && !isLoading ? (<Image src="/image/HumanAudiencelike.png" sizes="5%" layout="responsive"  alt="none" width={10} height={10}/>) 
         : (<Image src="/image/HumanAudiencequestion.png" layout="responsive" sizes="5%" alt="none" width={10} height={10}/>)}
      </div>
    );
  } else if (role === 1) {//AI賛成派観客
    return(
      <div>
        { isInputting || isLoading ? (<Image src="/image/AIAudiencequestion.png" layout="responsive" sizes="5%" alt="none" width={10} height={10}/>) 
         : (<Image src="/image/AIAudiencelike.png" layout="responsive" sizes="5%" alt="none" width={10} height={10}/>)}
      </div>
    );
  } else {//中立観客
    return(
      <div>
      { isInputting && !isLoading ? (<Image src="/image/Audienceright.png" layout="responsive" sizes="5%" alt="none" width={10} height={10}/>) 
         : (<Image src="/image/Audienceleft.png" layout="responsive" sizes="5%" alt="none" width={10} height={10}/>)}
         </div>
    );
  }
};


export default Audience